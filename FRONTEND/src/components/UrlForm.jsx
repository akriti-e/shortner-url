

import React, { useState } from "react"
import { createShortUrl } from "../api/shortUrl.api"
import { useSelector } from "react-redux"
import { queryClient } from "../main"

const UrlForm = () => {
  const [url, setUrl] = useState("https://www.google.com")
  const [shortUrl, setShortUrl] = useState()
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)
  const [customSlug, setCustomSlug] = useState("")
  const { isAuthenticated } = useSelector((state) => state.auth)

  const handleSubmit = async () => {
    try {
      const shortUrl = await createShortUrl(url, customSlug)
      setShortUrl(shortUrl)
      queryClient.invalidateQueries({ queryKey: ["userUrls"] })
      setError(null)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="bg-gradient-to-r from-gradient-yellow-light via-gradient-purple-light to-gradient-yellow-light border-4 border-border rounded-[--radius-base] p-8 shadow-[--shadow-shadow] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] transition-all duration-200 backdrop-blur-sm">
        <h2 className="text-3xl font-heading text-foreground text-center mb-8 uppercase tracking-wide">
          URL Shortener
        </h2>

        <div className="space-y-6">
          <div>
            <label htmlFor="url" className="block text-foreground text-sm font-heading mb-3 uppercase tracking-wide">
              Enter Your URL
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onInput={(event) => setUrl(event.target.value)}
              placeholder="https://example.com"
              required
              className="w-full py-3 px-4 text-foreground bg-background border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--border)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 font-base placeholder:text-foreground/60"
            />
          </div>

          {isAuthenticated && (
            <div>
              <label
                htmlFor="customSlug"
                className="block text-foreground text-sm font-heading mb-3 uppercase tracking-wide"
              >
                Custom URL (Optional)
              </label>
              <input
                type="text"
                id="customSlug"
                value={customSlug}
                onChange={(event) => setCustomSlug(event.target.value)}
                placeholder="Enter custom slug"
                className="w-full py-3 px-4 text-foreground bg-background border-3 border-border rounded-[--radius-base] shadow-[2px_2px_0px_0px_var(--border)] focus:outline-none focus:shadow-[4px_4px_0px_0px_var(--border)] focus:translate-x-[-2px] focus:translate-y-[-2px] transition-all duration-200 font-base placeholder:text-foreground/60"
              />
            </div>
          )}

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-4 px-6 bg-chart-1 text-main-foreground font-heading text-lg uppercase tracking-wide border-3 border-border rounded-[--radius-base] shadow-[--shadow-shadow] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-200 hover:bg-chart-1/90"
          >
            Shorten URL
          </button>

          {error && (
            <div className="p-4 bg-chart-2 text-main-foreground rounded-[--radius-base] border-2 border-border shadow-[2px_2px_0px_0px_var(--border)] font-base">
              <span className="font-heading text-sm uppercase tracking-wide">{error}</span>
            </div>
          )}

          {shortUrl && (
            <div className="bg-chart-4/20 border-3 border-border rounded-[--radius-base] p-6 shadow-[2px_2px_0px_0px_var(--border)]">
              <h3 className="text-xl font-heading text-foreground mb-4 uppercase tracking-wide">Your Shortened URL:</h3>
              <div className="flex items-stretch">
                <input
                  type="text"
                  readOnly
                  value={shortUrl}
                  className="flex-1 py-3 px-4 text-foreground bg-background border-3 border-r-0 border-border rounded-l-[--radius-base] font-base"
                />
                <button
                  onClick={handleCopy}
                  className={`px-6 py-3 font-heading text-sm uppercase tracking-wide border-3 border-border rounded-r-[--radius-base] transition-all duration-200 ${
                    copied
                      ? "bg-chart-4 text-main-foreground shadow-[2px_2px_0px_0px_var(--border)]"
                      : "bg-chart-3 text-main-foreground hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] shadow-[4px_4px_0px_0px_var(--border)]"
                  }`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UrlForm
