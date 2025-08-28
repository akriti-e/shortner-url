
import React, { useState } from "react"
import { registerUser } from "../api/user.api"
import { useDispatch } from "react-redux"
import { login } from "../store/slice/authSlice"
import { useNavigate } from "@tanstack/react-router"

const RegisterForm = ({ state }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }
    setLoading(true)
    setError("")
    try {
      const data = await registerUser(name, password, email)
      setLoading(false)
      dispatch(login(data.user))
      navigate({ to: "/dashboard" })
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err.message || "Registration failed. Please try again.")
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-gradient-to-tl from-gradient-purple-light to-gradient-yellow-light border-4 border-border rounded-[--radius-base] p-8 shadow-[--shadow-shadow] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] transition-all duration-200 backdrop-blur-sm">
        <h2 className="text-3xl font-heading text-foreground text-center mb-8 uppercase tracking-wide">
          Create Account
        </h2>

        {error && (
          <div className="mb-6 p-4 bg-chart-2 text-main-foreground rounded-[--radius-base] border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] font-base">
            <span className="font-heading text-sm uppercase tracking-wide">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-foreground text-sm font-heading mb-3 uppercase tracking-wide" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full py-3 px-4 text-foreground bg-background border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--border)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 font-base placeholder:text-foreground/60"
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-foreground text-sm font-heading mb-3 uppercase tracking-wide" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full py-3 px-4 text-foreground bg-background border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--border)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 font-base placeholder:text-foreground/60"
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              className="block text-foreground text-sm font-heading mb-3 uppercase tracking-wide"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full py-3 px-4 text-foreground bg-background border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--border)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 font-base placeholder:text-foreground/60"
              id="password"
              type="password"
              placeholder="••••••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          <button
            className={`w-full py-4 px-6 bg-chart-4 text-main-foreground font-heading text-lg uppercase tracking-wide border-3 border-border rounded-[--radius-base] shadow-[--shadow-shadow] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-200 ${
              loading
                ? "opacity-60 cursor-not-allowed transform-none shadow-[2px_2px_0px_0px_var(--border)]"
                : "hover:bg-chart-4/90"
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "CREATING..." : "CREATE ACCOUNT"}
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-foreground font-base">
            Already have an account?{" "}
            <span
              onClick={() => state(true)}
              className="text-main font-heading uppercase tracking-wide cursor-pointer hover:underline hover:underline-offset-4 decoration-2 decoration-main transition-all duration-200"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
