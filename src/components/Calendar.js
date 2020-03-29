import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const DayMonth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 4rem;
`

const Day = styled.span`
  font-size: 2rem;
`

const Month = styled.span`
  font-size: 1rem;
`

var MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const Calendar = () => {
  const [date] = useState(new Date())
  return (
    <Card title={'Date'}>
      <DayMonth>
        <Day>{date.getDate()}</Day>
        <Month>{MONTHS[date.getMonth()]}</Month>
      </DayMonth>
    </Card>
  )
}

export default Calendar
