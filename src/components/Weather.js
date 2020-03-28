import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { weatherConfig } from '../config'
import Card from './Card'
import WeatherIcon from './WeatherIcon/WeatherIcon'

const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  align-items: center;
  grid-gap: 1.2rem;
  max-width: 16rem;
`

const MaxTemp = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  margin: 0px;
`

const MinTemp = styled.h3`
  font-weight: normal;
  font-size: 2rem;
  margin: 0px;
  opacity: 40%;
`

const Description = styled.p`
  margin: 16px 0px 0px 0px;
  font-style: italic;
`

const Weather = () => {
  const [maxTemp, setMaxTemp] = useState()
  const [minTemp, setMinTemp] = useState()
  const [iconCode, setIconCode] = useState()
  const [description, setDescription] = useState()

  useEffect(() => {
    async function fetchWeather() {
      const { OW_URL, OW_CITY_ID, OW_UNITS, OW_KEY } = weatherConfig
      const request = `${OW_URL}id=${OW_CITY_ID}&units=${OW_UNITS}&appid=${OW_KEY}`
      const data = await (await fetch(request)).json()
      setMaxTemp(Math.round(data.main.temp_max))
      setMinTemp(Math.round(data.main.temp_min))
      setIconCode(data.weather[0].icon)
      const description = data.weather[0].description
      setDescription(description.charAt(0).toUpperCase() + description.slice(1))
    }
    fetchWeather()
  }, [])

  return (
    <Card title={"Today's weather"}>
      <WeatherContainer>
        <WeatherIcon code={iconCode} />
        <MaxTemp>{maxTemp}ºC</MaxTemp>
        <MinTemp>{minTemp}ºC</MinTemp>
      </WeatherContainer>
      <Description>{description}</Description>
    </Card>
  )
}

export default Weather
