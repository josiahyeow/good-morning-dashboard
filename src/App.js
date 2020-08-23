import React from 'react'
import styled from 'styled-components'
import Title from './components/Title'
import Clock from './components/Clock'
import WeekDay from './components/WeekDay'
import Calendar from './components/Calendar'
import Weather from './components/Weather'

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
  @media only screen and (min-width: 600px) {
    padding: 1rem;
  }
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
      </WidgetSection>
    </AppContainer>
  )
}

export default App
