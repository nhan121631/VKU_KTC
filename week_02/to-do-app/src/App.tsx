// import { BrowserRouter, Route, Routes } from "react-router";
// import { NavBar } from "./components/Navbar";
// import { LogInPage } from "./pages/LoginPage";
// import { AccessDeniedPage } from "./pages/AccessDeniedPage";
// import { OurTasksPage } from "./pages/OurTasksPage";
// import { MyTaskPage } from "./pages/MyTasksPage";
// import { CreateTaskPage } from "./pages/CreateTaskPage";
// import { UpdateTaskPage } from "./pages/UpdateTaskPage";
// // import LoadingPage from "./pages/LoadingPage";
// import { PrivateRoute } from "./PrivateRoute";
import "./App.css";
import TaskWithZustand from ".";

function App() {
  return <TaskWithZustand />;
}

export default App;

// return (
//   <div className="bg-white min-h-screen flex flex-col">
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route index element={<LogInPage />} />
//         <Route path="/login" element={<LogInPage />} />
//         <Route
//           path="/tasks"
//           element={
//             <PrivateRoute>
//               <OurTasksPage />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/assignee-me"
//           element={
//             <PrivateRoute>
//               <MyTaskPage />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/create-task"
//           element={
//             <PrivateRoute>
//               <CreateTaskPage />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/update-task/:id"
//           element={
//             <PrivateRoute>
//               <UpdateTaskPage />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/*" element={<AccessDeniedPage />} />
//       </Routes>
//     </BrowserRouter>
//   </div>
// );
