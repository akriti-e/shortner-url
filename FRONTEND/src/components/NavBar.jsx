import React from "react"

import { Link } from "@tanstack/react-router"

const Navbar = () => {
  return (
    <nav className="bg-secondary-background border-b-4 border-border shadow-[0_4px_0px_0px_var(--border)] sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Left side - App Name */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-heading text-foreground uppercase tracking-wide hover:text-main transition-colors duration-200 flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-chart-3 border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] flex items-center justify-center">
                <svg className="w-4 h-4 text-main-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  ></path>
                </svg>
              </div>
              <span>URL Shortener</span>
            </Link>
          </div>

          {/* Right side - Auth buttons */}
          <div className="flex items-center space-x-4">
            {/* Uncomment when auth is ready */}
            {/* {(true) ? (
              <div className="flex items-center space-x-4">
                <span className="text-foreground font-base px-4 py-2 bg-chart-4/20 border-2 border-border rounded-[--radius-base] shadow-[1px_1px_0px_0px_var(--border)]">
                  Welcome, {userName || 'User'}
                </span>
                <button
                  onClick={onLogout}
                  className="bg-chart-2 text-main-foreground font-heading text-sm uppercase tracking-wide px-6 py-3 border-3 border-border rounded-[--radius-base] shadow-[--shadow-shadow] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : ( */}
            <Link
              to="/auth"
              className="bg-main text-main-foreground font-heading text-sm uppercase tracking-wide px-6 py-3 border-3 border-border rounded-[--radius-base] shadow-[--shadow-shadow] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-200 hover:bg-main/90"
            >
              Login
            </Link>
            {/* )} */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
