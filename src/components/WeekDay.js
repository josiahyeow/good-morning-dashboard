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
  0: 'Mon',
  1: 'Tue',
  2: 'Wed',
  3: 'Thu',
  4: 'Fri',
  5: 'Sat',
  6: 'Sun',
}

const WeekDay = () => {
  const [today] = useState((new Date().getDay() + 6) % 7)
  const weekdays = Object.values(WEEKDAYS)
  return (
    <Card title={'Day'}>
      <Days>
        {weekdays.map((day) => (
          <Day key={day} day={day} today={today}>
            {day}
          </Day>
        ))}
      </Days>
    </Card>
  )
}

export default WeekDay
