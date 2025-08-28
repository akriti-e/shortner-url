

import React, { useState } from "react"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"

const AuthPage = () => {
  const [login, setLogin] = useState(true)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gradient-yellow-light via-gradient-purple-light to-gradient-yellow-light bg-[length:400%_400%] animate-gradient-shift"></div>

      {/* Background patterns */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_var(--gradient-yellow)_0%,_transparent_30%),radial-gradient(circle_at_80%_80%,_var(--gradient-purple)_0%,_transparent_30%),radial-gradient(circle_at_40%_60%,_var(--gradient-yellow)_0%,_transparent_25%),radial-gradient(circle_at_60%_40%,_var(--gradient-purple)_0%,_transparent_25%)] bg-[length:200px_200px,300px_300px,150px_150px,250px_250px] animate-float"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="fixed top-10 left-10 w-20 h-20 bg-gradient-to-br from-gradient-yellow to-gradient-purple border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-30 animate-pulse"></div>
      <div className="fixed top-32 right-16 w-16 h-16 bg-gradient-to-tl from-gradient-purple to-gradient-yellow border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-25 animate-pulse delay-1000"></div>
      <div className="fixed bottom-20 left-20 w-12 h-12 bg-gradient-yellow border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-35 animate-pulse delay-2000"></div>
      <div className="fixed bottom-32 right-32 w-24 h-24 bg-gradient-purple border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-20 animate-pulse delay-500"></div>
      <div className="fixed top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-gradient-yellow to-gradient-purple border-3 border-border rounded-full shadow-[2px_2px_0px_0px_var(--border)] opacity-25 animate-bounce"></div>
      <div className="fixed top-1/3 right-1/3 w-6 h-6 bg-gradient-to-l from-gradient-purple to-gradient-yellow border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] opacity-30 animate-bounce delay-700"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
      </div>
    </div>
  )
}

export default AuthPage
