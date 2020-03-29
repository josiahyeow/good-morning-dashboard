import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
  min-width: 17rem;
`

const Time = styled.span`
  font-size: 2.5rem;
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
        <Time>
          {time.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
          })}
        </Time>
      </Container>
    </Card>
  )
}

export default Clock
