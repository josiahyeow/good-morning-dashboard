import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import config from '../config'
import Card from './Card'

const weatherIcon = {
  "01d": "sun.svg",
  "02d": "cloudy.svg",
  "03d": "cloud.svg",
  "04d": "windy.svg",
  "09d": "rain.svg",
  "10d": "rain-3.svg",
  "11d": "storm.svg",
  "13d": "snowflake.svg",
  "50d": "rain-1.svg",

  "01n": "moon.svg",
  "02n": "cloudy-night.svg",
  "03n": "cloud.svg",
  "04n": "wind.svg",
  "09n": "rain.svg",
  "10n": "rain-2.svg",
  "11n": "storm.svg",
  "13n": "snowflake.svg",
  "50n": "rain-2.svg"
}

const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  grid-column-gap: 24px;
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

const Icon = styled.img`
  width: 3rem;
`

const Description = styled.p`
  margin: 16px 0px 0px 0px;
  font-style: italic;
`

const Weather = () => {
  const [maxTemp, setMaxTemp] = useState()
  const [minTemp, setMinTemp] = useState()
  const [icon, setIcon] = useState()
  const [description, setDescription] = useState()

  useEffect(() => {
    async function fetchWeather() {
      const { OW_URL, OW_CITY_ID, OW_UNITS, OW_KEY } = config
      const request = `${OW_URL}id=${OW_CITY_ID}&units=${OW_UNITS}&appid=${OW_KEY}`
      const data = await (await fetch(request)).json()
      setMaxTemp(Math.round(data.main.temp_max))
      setMinTemp(Math.round(data.main.temp_min))
      setIcon(`/weather-icons/${weatherIcon[data.weather[0].icon]}`)
      const description = data.weather[0].description
      setDescription(description.charAt(0).toUpperCase() + description.slice(1))
    }
    fetchWeather()
  }, [])

  return (
    <Card title={"Today's weather"}>
      <WeatherContainer>
        <Icon src={icon} />
        <MaxTemp>{maxTemp}ºC</MaxTemp>
        <MinTemp>{minTemp}ºC</MinTemp>
      </WeatherContainer>
      <Description>{description}</Description>
    </Card>
  )
}

export default Weather
