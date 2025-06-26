import React, { useEffect, useState } from 'react'
import API from '../services/api'
import './StatsSummary.css'

const StatsSummary = () => {
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchStats = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await API.get('/stats')
      setStats(res.data)
    } catch (err) {
      setError('Failed to load stats.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  return (
    <div className="stats-summary">
      <h2>Ticket Summary</h2>
      {loading && <p>Loading stats...</p>}
      {error && <p className="error-msg">{error}</p>}
      {!loading && !stats.length && <p>No ticket data available.</p>}
      <ul>
        {stats.map(stat => (
          <li key={stat.status}>
            <strong>{stat.status.replace('_', ' ').toUpperCase()}:</strong> {stat.count}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StatsSummary
