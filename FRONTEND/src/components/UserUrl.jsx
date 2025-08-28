
import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getAllUserUrls } from "../api/user.api"

const UserUrl = () => {
  const {
    data: urls,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userUrls"],
    queryFn: getAllUserUrls,
    refetchInterval: 30000,
    staleTime: 0,
  })

  const [copiedId, setCopiedId] = useState(null)

  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => {
      setCopiedId(null)
    }, 2000)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <div className="w-16 h-16 border-4 border-border border-t-chart-1 rounded-full animate-spin shadow-[2px_2px_0px_0px_var(--border)]"></div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="bg-chart-2 text-main-foreground border-3 border-border rounded-[--radius-base] p-6 my-4 shadow-[2px_2px_0px_0px_var(--border)]">
        <span className="font-heading text-sm uppercase tracking-wide">Error loading your URLs: {error.message}</span>
      </div>
    )
  }

  if (!urls.urls || urls.urls.length === 0) {
    return (
      <div className="text-center bg-secondary-background border-4 border-border rounded-[--radius-base] p-8 my-6 shadow-[--shadow-shadow]">
        <div className="w-16 h-16 mx-auto mb-4 bg-chart-3 border-3 border-border rounded-[--radius-base] flex items-center justify-center shadow-[2px_2px_0px_0px_var(--border)]">
          <svg className="w-8 h-8 text-main-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-heading text-foreground mb-2 uppercase tracking-wide">No URLs Found</h3>
        <p className="text-foreground/70 font-base">You haven't created any shortened URLs yet.</p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-bl from-gradient-purple-light to-gradient-yellow-light border-4 border-border rounded-[--radius-base] shadow-[--shadow-shadow] overflow-hidden backdrop-blur-sm">
      <div className="bg-chart-5/20 border-b-3 border-border p-4">
        <h2 className="text-2xl font-heading text-foreground uppercase tracking-wide">Your URLs</h2>
      </div>

      <div className="overflow-x-auto max-h-96">
        <table className="min-w-full">
          <thead className="bg-chart-1/20 border-b-3 border-border">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-heading text-foreground uppercase tracking-wide border-r-2 border-border">
                Original URL
              </th>
              <th className="px-6 py-4 text-left text-sm font-heading text-foreground uppercase tracking-wide border-r-2 border-border">
                Short URL
              </th>
              <th className="px-6 py-4 text-left text-sm font-heading text-foreground uppercase tracking-wide border-r-2 border-border">
                Clicks
              </th>
              <th className="px-6 py-4 text-left text-sm font-heading text-foreground uppercase tracking-wide">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-secondary-background">
            {urls.urls.reverse().map((url, index) => (
              <tr
                key={url._id}
                className={`border-b-2 border-border hover:bg-chart-3/10 transition-colors duration-200 ${index % 2 === 0 ? "bg-background/50" : ""}`}
              >
                <td className="px-6 py-4 border-r-2 border-border">
                  <div className="text-sm text-foreground font-base truncate max-w-xs" title={url.full_url}>
                    {url.full_url}
                  </div>
                </td>
                <td className="px-6 py-4 border-r-2 border-border">
                  <a
                    href={`http://localhost:3000/${url.short_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-main font-base hover:underline hover:underline-offset-4 decoration-2 decoration-main transition-all duration-200"
                  >
                    {`localhost:3000/${url.short_url}`}
                  </a>
                </td>
                <td className="px-6 py-4 border-r-2 border-border">
                  <span className="px-3 py-1 bg-chart-1 text-main-foreground text-xs font-heading uppercase tracking-wide rounded-[--radius-base] border-2 border-border shadow-[1px_1px_0px_0px_var(--border)]">
                    {url.clicks} {url.clicks === 1 ? "click" : "clicks"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleCopy(`http://localhost:3000/${url.short_url}`, url._id)}
                    className={`inline-flex items-center px-4 py-2 font-heading text-xs uppercase tracking-wide border-3 border-border rounded-[--radius-base] transition-all duration-200 ${
                      copiedId === url._id
                        ? "bg-chart-4 text-main-foreground shadow-[2px_2px_0px_0px_var(--border)]"
                        : "bg-chart-3 text-main-foreground hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--border)] shadow-[4px_4px_0px_0px_var(--border)]"
                    }`}
                  >
                    {copiedId === url._id ? (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                          ></path>
                        </svg>
                        Copy URL
                      </>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserUrl
