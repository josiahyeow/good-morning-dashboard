import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import config from '../config'
import Card from './Card'

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

const Icon = styled.img``

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
      setIcon(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
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
