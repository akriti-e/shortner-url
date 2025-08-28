import React from "react"

import UrlForm from "../components/UrlForm"
import UserUrl from "../components/UserUrl"

const DashboardPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-bl from-gradient-purple-light via-gradient-yellow-light to-gradient-purple-light bg-[length:400%_400%] animate-gradient-shift"></div>

      {/* Background patterns */}
      <div className="fixed inset-0 opacity-8 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_var(--gradient-purple)_0%,_transparent_35%),radial-gradient(circle_at_75%_75%,_var(--gradient-yellow)_0%,_transparent_35%),radial-gradient(circle_at_50%_20%,_var(--gradient-purple)_0%,_transparent_30%),radial-gradient(circle_at_20%_80%,_var(--gradient-yellow)_0%,_transparent_30%)] bg-[length:250px_250px,200px_200px,180px_180px,220px_220px] animate-float"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="fixed top-16 left-16 w-16 h-16 bg-gradient-to-r from-gradient-purple to-gradient-yellow border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-25 animate-pulse"></div>
      <div className="fixed top-40 right-20 w-12 h-12 bg-gradient-yellow border-4 border-border rounded-full shadow-[--shadow-shadow] opacity-30 animate-pulse delay-1500"></div>
      <div className="fixed bottom-24 left-24 w-20 h-20 bg-gradient-to-bl from-gradient-yellow to-gradient-purple border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-20 animate-pulse delay-1000"></div>
      <div className="fixed bottom-40 right-40 w-14 h-14 bg-gradient-purple border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-35 animate-pulse delay-2500"></div>
      <div className="fixed top-2/3 left-1/5 w-10 h-10 bg-gradient-to-t from-gradient-purple to-gradient-yellow border-3 border-border rounded-full shadow-[2px_2px_0px_0px_var(--border)] opacity-25 animate-bounce delay-300"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-gradient-to-r from-gradient-yellow-light to-gradient-purple-light border-4 border-border rounded-[--radius-base] p-8 shadow-[--shadow-shadow] w-full max-w-6xl backdrop-blur-sm transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] transition-all duration-200">
          <h1 className="text-4xl font-heading text-foreground text-center mb-8 uppercase tracking-wide">
            URL Shortener Dashboard
          </h1>

          <div className="space-y-8">
            <UrlForm />
            <UserUrl />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
