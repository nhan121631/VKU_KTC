import { Stomp, type CompatClient } from "@stomp/stompjs";
import React, { useState, useEffect, useRef } from "react";
import SockJS from "sockjs-client";

const TestSocket = () => {
  const [messages, setMessages] = useState<
    { sender: string; content: string; receiver?: string; type?: string }[]
  >([]);
  const [messageInput, setMessageInput] = useState("");
  const [username, setUsername] = useState<string>("");
  const [usersList, setUsersList] = useState<string[]>([]);
  const [receiver, setReceiver] = useState<string>("");
  const stompClient = useRef<CompatClient | null>(null);

  // Fetch user list from backend
  useEffect(() => {
    fetch("http://localhost:3333/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsersList(data);
      })
      .catch(() => setUsersList([]));
  }, []);

  // Connect only after username is selected
  useEffect(() => {
    if (!username) return;
    let mounted = true;
    if (mounted) connect();
    return () => {
      mounted = false;
      disconnect();
    };
    // eslint-disable-next-line
  }, [username]);

  const connect = () => {
    if (stompClient.current && stompClient.current.connected) return;
    stompClient.current = Stomp.over(
      () => new SockJS("http://localhost:3333/ws-chat")
    );
    stompClient.current.connect({ username }, () => {
      console.log("Connected");
      // Subscribe to public chat
      stompClient.current?.subscribe("/topic/public", (message) => {
        const received = JSON.parse(message.body);
        setMessages((prev) => {
          if (
            prev.length > 0 &&
            JSON.stringify(prev[prev.length - 1]) === JSON.stringify(received)
          ) {
            return prev;
          }
          return [...prev, received];
        });
      });
      // Subscribe to private chat
      stompClient.current?.subscribe("/user/queue/messages", (message) => {
        const received = JSON.parse(message.body);
        setMessages((prev) => [...prev, received]);
      });
    });
  };

  const disconnect = () => {
    if (stompClient.current && stompClient.current.connected) {
      stompClient.current.disconnect(() => {
        console.log("Disconnected");
        setMessages([]); // Clear messages on disconnect to avoid duplicates
      });
    }
  };

  const sendMessage = () => {
    if (stompClient.current && stompClient.current.connected && messageInput) {
      const chatMessage = {
        sender: username,
        receiver: receiver,
        content: messageInput,
        type: receiver === "ALL" ? "CHAT" : "PRIVATE",
      };
      if (receiver === "ALL") {
        stompClient.current.send(
          "/app/chat.sendMessage",
          {},
          JSON.stringify(chatMessage)
        );
      } else {
        stompClient.current.send(
          "/app/chat.privateMessage",
          {},
          JSON.stringify(chatMessage)
        );
      }
      setMessageInput("");
    }
  };

  if (!username) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-8">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 mt-20">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
            Chọn username để bắt đầu chat
          </h2>
          <select
            className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setMessages([]); // Clear messages when username changes
              setReceiver(
                usersList.filter((u) => u !== e.target.value)[0] || "ALL"
              );
            }}
          >
            <option value="">-- Chọn username --</option>
            {usersList.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
          Chat as <span className="text-purple-600">{username}</span>
        </h2>
        <div className="mb-4 flex items-center gap-2">
          <label className="font-medium text-gray-700">To:</label>
          <select
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          >
            <option value="ALL">All (Public)</option>
            {usersList
              .filter((u) => u !== username)
              .map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
          </select>
        </div>
        <div className="border border-gray-300 rounded h-72 overflow-y-scroll bg-gray-50 p-2 mb-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={msg.sender === username ? "text-right" : "text-left"}
            >
              <span
                className={
                  msg.sender === username
                    ? "inline-block bg-blue-200 text-blue-900 rounded px-2 py-1 my-1"
                    : "inline-block bg-gray-200 text-gray-800 rounded px-2 py-1 my-1"
                }
              >
                <strong>{msg.sender}</strong>: {msg.content}
                {msg.receiver && msg.receiver !== "ALL" && (
                  <span className="ml-2 text-xs text-purple-600">
                    (to {msg.receiver})
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestSocket;
