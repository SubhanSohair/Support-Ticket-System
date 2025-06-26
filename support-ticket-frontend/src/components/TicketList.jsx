import React, { useEffect, useState } from 'react'
import API from '../services/api'
import TicketStatusUpdater from './TicketStatusUpdater'
import './TicketList.css'

const statuses = ['all', 'open', 'in_progress', 'closed']

const TicketList = () => {
  const [tickets, setTickets] = useState([])
  const [statusFilter, setStatusFilter] = useState('all')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchTickets = async () => {
    setLoading(true)
    setError(null)
    try {
      const url = statusFilter === 'all' ? '/tickets' : `/tickets?status=${statusFilter}`
      const res = await API.get(url)
      setTickets(res.data)
    } catch (err) {
      setError('Could not load tickets.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTickets()
  }, [statusFilter])

  return (
    <div className="ticket-list-container">
      <h2>Tickets</h2>

      <div className="filter-buttons">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={statusFilter === status ? 'active' : ''}
          >
            {status.replace('_', ' ').toUpperCase()}
          </button>
        ))}
      </div>

      {loading && <p>Loading tickets...</p>}
      {error && <p className="error-msg">{error}</p>}
      {!loading && !tickets.length && <p>No tickets found.</p>}

      <ul className="ticket-list">
        {tickets.map((ticket) => (
          <li key={ticket.id} className="ticket-card">
            <h3>{ticket.title}</h3>
            <p><strong>Description:</strong> {ticket.description}</p>
            <p><strong>Status:</strong> {ticket.status}</p>
            <p><strong>Assigned To:</strong> {ticket.assigned_to || 'Unassigned'}</p>
            <TicketStatusUpdater ticket={ticket} onStatusChange={fetchTickets} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TicketList
