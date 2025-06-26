import React from 'react'
import TicketForm from '../components/TicketForm'
import TicketList from '../components/TicketList'
import StatsSummary from '../components/StatsSummary'

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <TicketForm />
      <StatsSummary />
      <TicketList />
    </div>
  )
}

export default Home
