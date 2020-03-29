import React from 'react'
import styled from 'styled-components'
import Title from './components/Title'
import Clock from './components/Clock'
import WeekDay from './components/WeekDay'
import Calendar from './components/Calendar'
import Weather from './components/Weather'
import Covid from './components/Covid'

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
`
const WidgetSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const App = () => {
  return (
    <AppContainer>
      <Title />
      <WidgetSection>
        <Clock />
        <WeekDay />
        <Calendar />
        <Weather />
        <Covid />
      </WidgetSection>
    </AppContainer>
  )
}

export default App
