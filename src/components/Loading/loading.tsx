import { useEffect, useMemo, useState } from 'react'
import './loading.css'

function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(timer)
          return 100
        }
        return prev + 1
      })
    }, 40)

    return () => window.clearInterval(timer)
  }, [])

  const statusLabel = useMemo(() => (progress >= 100 ? 'Completed' : 'Loading'), [progress])

  return (
    <div className="loading-screen">
      <div className="loading-header">
        <span>{statusLabel}</span>
        <span className="loading-progress-value">{progress}%</span>
      </div>
      <div className="loading-bar">
        <div className="loading-bar-border">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }}>
            <span className="loading-bar-stripes" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
