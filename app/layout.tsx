import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-red-400 text-3xl">Header</header>

        {children}

        <footer className="bg-blue-400 text-3xl">Footer</footer>
      </body>
    </html>
  );
}