export const Footer = () => {
  return (
    <footer
      className="flex w-full flex-col gap-y-2 bg-gray-800
            text-white p-4 h-[180px]"
    >
      <div className="flex justify-between items-center">
        <p className="text-sm">© 2024 Pham Phu Nhan</p>
        <nav className="flex gap-4">
          <a href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm hover:underline">
            Terms of Service
          </a>
        </nav>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm">Follow us on social media:</p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};
