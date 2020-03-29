import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
  min-width: 13rem;
`

const Time = styled.span`
  font-size: 3rem;
  font-weight: bold;
`

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000)
  }, [])

  return (
    <Card title={'Time'}>
      <Container>
        <Time>{time.toLocaleTimeString()}</Time>
      </Container>
    </Card>
  )
}

export default Clock
