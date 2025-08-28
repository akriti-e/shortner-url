const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced decorative elements with yellow and purple theme */}
      <div className="fixed top-10 left-10 w-20 h-20 bg-gradient-to-br from-gradient-yellow to-gradient-purple border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-30 animate-pulse"></div>

      <div className="fixed top-32 right-16 w-16 h-16 bg-gradient-to-tl from-gradient-purple to-gradient-yellow border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-25 animate-pulse delay-1000"></div>

      <div className="fixed bottom-20 left-20 w-12 h-12 bg-gradient-yellow border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-35 animate-pulse delay-2000"></div>

      <div className="fixed bottom-32 right-32 w-24 h-24 bg-gradient-purple border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-20 animate-pulse delay-500"></div>

      {/* Additional floating shapes */}
      <div className="fixed top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-gradient-yellow to-gradient-purple border-3 border-border rounded-full shadow-[2px_2px_0px_0px_var(--border)] opacity-25 animate-bounce"></div>

      <div className="fixed top-1/3 right-1/3 w-6 h-6 bg-gradient-to-l from-gradient-purple to-gradient-yellow border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] opacity-30 animate-bounce delay-700"></div>

      {/* Main content */}
      <div className="relative z-10 py-8">{children}</div>
    </div>
  )
}

export default Layout
