import React from "react"

import UrlForm from "../components/UrlForm"

const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-tr from-gradient-yellow-light via-gradient-purple-light via-gradient-yellow-light to-gradient-purple-light bg-[length:400%_400%] animate-gradient-shift"></div>

      {/* Background patterns */}
      <div className="fixed inset-0 opacity-12 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_var(--gradient-yellow)_0%,_transparent_40%),radial-gradient(circle_at_70%_60%,_var(--gradient-purple)_0%,_transparent_40%),radial-gradient(circle_at_10%_80%,_var(--gradient-yellow)_0%,_transparent_35%),radial-gradient(circle_at_90%_20%,_var(--gradient-purple)_0%,_transparent_35%)] bg-[length:300px_300px,250px_250px,200px_200px,180px_180px] animate-float"></div>
      </div>

      {/* Hero decorative elements */}
      <div className="fixed top-20 left-20 w-24 h-24 bg-gradient-to-br from-gradient-yellow to-gradient-purple border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-30 animate-pulse"></div>
      <div className="fixed top-28 right-28 w-18 h-18 bg-gradient-to-tl from-gradient-purple to-gradient-yellow border-4 border-border rounded-full shadow-[--shadow-shadow] opacity-25 animate-pulse delay-1000"></div>
      <div className="fixed bottom-28 left-32 w-16 h-16 bg-gradient-yellow border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-35 animate-pulse delay-2000"></div>
      <div className="fixed bottom-36 right-36 w-20 h-20 bg-gradient-purple border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] opacity-20 animate-pulse delay-500"></div>
      <div className="fixed top-1/2 left-1/6 w-12 h-12 bg-gradient-to-r from-gradient-yellow to-gradient-purple border-3 border-border rounded-full shadow-[2px_2px_0px_0px_var(--border)] opacity-25 animate-bounce"></div>
      <div className="fixed top-2/5 right-1/4 w-8 h-8 bg-gradient-to-l from-gradient-purple to-gradient-yellow border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] opacity-30 animate-bounce delay-700"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-heading text-foreground mb-4 uppercase tracking-wide">URL Shortener</h1>
          <p className="text-xl font-base text-foreground/80 max-w-2xl mx-auto">
            Transform your long URLs into short, shareable links with our brutalist-styled URL shortener
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-gradient-to-br from-gradient-purple-light to-gradient-yellow-light border-4 border-border rounded-[--radius-base] p-8 shadow-[--shadow-shadow] w-full max-w-2xl backdrop-blur-sm transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] transition-all duration-200">
          <UrlForm />
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-gradient-to-t from-gradient-yellow-light to-gradient-purple-light border-3 border-border rounded-[--radius-base] p-6 shadow-[2px_2px_0px_0px_var(--border)] text-center">
            <div className="w-12 h-12 bg-chart-1 border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] mx-auto mb-4 flex items-center justify-center">
              <span className="text-main-foreground font-heading text-xl">⚡</span>
            </div>
            <h3 className="text-lg font-heading text-foreground uppercase tracking-wide mb-2">Fast</h3>
            <p className="text-foreground/70 font-base text-sm">Lightning-fast URL shortening</p>
          </div>

          <div className="bg-gradient-to-t from-gradient-purple-light to-gradient-yellow-light border-3 border-border rounded-[--radius-base] p-6 shadow-[2px_2px_0px_0px_var(--border)] text-center">
            <div className="w-12 h-12 bg-chart-4 border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] mx-auto mb-4 flex items-center justify-center">
              <span className="text-main-foreground font-heading text-xl">🔒</span>
            </div>
            <h3 className="text-lg font-heading text-foreground uppercase tracking-wide mb-2">Secure</h3>
            <p className="text-foreground/70 font-base text-sm">Your links are safe with us</p>
          </div>

          <div className="bg-gradient-to-t from-gradient-yellow-light to-gradient-purple-light border-3 border-border rounded-[--radius-base] p-6 shadow-[2px_2px_0px_0px_var(--border)] text-center">
            <div className="w-12 h-12 bg-chart-3 border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] mx-auto mb-4 flex items-center justify-center">
              <span className="text-main-foreground font-heading text-xl">📊</span>
            </div>
            <h3 className="text-lg font-heading text-foreground uppercase tracking-wide mb-2">Analytics</h3>
            <p className="text-foreground/70 font-base text-sm">Track your link performance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
