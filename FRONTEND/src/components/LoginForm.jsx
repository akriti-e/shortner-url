
import React, { useState } from "react"
import { loginUser } from "../api/user.api"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/slice/authSlice.js"
import { useNavigate } from "@tanstack/react-router"

const LoginForm = ({ state }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  console.log(auth)

  const handleSubmit = async () => {
    setLoading(true)
    setError("")
    try {
      const data = await loginUser(password, email)
      dispatch(login(data.user))
      navigate({ to: "/dashboard" })
      setLoading(false)
      console.log("signin success")
    } catch (err) {
      setLoading(false)
      setError(err.message || "Login failed. Please check your credentials.")
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-gradient-to-br from-gradient-yellow-light to-gradient-purple-light border-4 border-border rounded-[--radius-base] p-8 shadow-[--shadow-shadow] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] transition-all duration-200 backdrop-blur-sm">
        <h2 className="text-3xl font-heading text-foreground text-center mb-8 uppercase tracking-wide">LOGIN</h2>

        {error && (
          <div className="mb-6 p-4 bg-chart-2 text-main-foreground rounded-[--radius-base] border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] font-base">
            <span className="font-heading text-sm uppercase tracking-wide">{error}</span>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-foreground text-sm font-heading mb-3 uppercase tracking-wide" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full py-3 px-4 text-foreground bg-background border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--border)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 font-base placeholder:text-foreground/60"
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-8">
          <label className="block text-foreground text-sm font-heading mb-3 uppercase tracking-wide" htmlFor="password">
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
          />
        </div>

        <button
          className={`w-full py-4 px-6 bg-main text-main-foreground font-heading text-lg uppercase tracking-wide border-3 border-border rounded-[--radius-base] shadow-[--shadow-shadow] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-200 ${
            loading
              ? "opacity-60 cursor-not-allowed transform-none shadow-[2px_2px_0px_0px_var(--border)]"
              : "hover:bg-main/90"
          }`}
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "SIGNING IN..." : "SIGN IN"}
        </button>

        <div className="text-center mt-8">
          <p className="text-foreground font-base">
            Don't have an account?{" "}
            <span
              onClick={() => state(false)}
              className="text-main font-heading uppercase tracking-wide cursor-pointer hover:underline hover:underline-offset-4 decoration-2 decoration-main transition-all duration-200"
            >
              Register Here
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
