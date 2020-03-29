import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const Days = styled.span`
  display: flex;
  flex-wrap: wrap;
`

const Day = styled.div`
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 0.5rem;
  ${({ today, day }) =>
    WEEKDAYS[today] === day &&
    ` background: #ff3a30;
      color: #ffffff;
      font-weight: bold;
    `};
`

const WEEKDAYS = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
}

const WeekDay = () => {
  const [today] = useState(new Date().getDay())

  return (
    <Card title={'Day'}>
      <Days>
        {Object.values(WEEKDAYS).map((day) => (
          <Day key={day} day={day} today={today}>
            {day}
          </Day>
        ))}
      </Days>
    </Card>
  )
}

export default WeekDay
