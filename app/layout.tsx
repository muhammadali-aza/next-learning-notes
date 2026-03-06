import "./globals.css";


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-red-400 text-3xl">Header</header>
        {children}
        
        <footer className="bg-blue-400 text-3xl">Footer</footer>
      </body>
    </html>
  )
}