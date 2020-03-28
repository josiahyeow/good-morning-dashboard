import React from 'react'
import styled from 'styled-components'
import Title from './components/Title'
import Weather from './components/Weather'
import Covid from './components/Covid'

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
  margin: 2rem;
`
const WidgetSection = styled.section`
  display: grid;
  grid-row-gap: 16px;
`

const App = () => {
  return (
    <AppContainer>
      <Title />
      <WidgetSection>
        <Weather />
        <Covid />
      </WidgetSection>
    </AppContainer>
  )
}

export default App
