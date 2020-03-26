import React from 'react'
import styled from 'styled-components'
import Sun from './icons/sun.svg'
import Cloudy from './icons/cloudy.svg'
import Cloud from './icons/cloud.svg'
import Windy from './icons/windy.svg'
import Rain from './icons/rain.svg'
import Rain3 from './icons/rain-3.svg'
import Storm from './icons/storm.svg'
import Snowflake from './icons/snowflake.svg'
import Rain1 from './icons/rain-1.svg'
import Moon from './icons/moon.svg'
import CloudyNight from './icons/cloudy-night.svg'
import Rain2 from './icons/rain-2.svg'

const Icon = styled.div`
  width: 3rem;
`

const getIcon = ({ code }) => {
  switch (code) {
    case '01d':
      return <Sun />
    case '02d':
      return <Cloudy />
    case '03d':
    case '03n':
      return <Cloud />
    case '04d':
      return <Windy />
    case '09d':
    case '09n':
      return <Rain />
    case '10d':
      return <Rain3 />
    case '11d':
    case '11n':
      return <Storm />
    case '13d':
    case '13n':
      return <Snowflake />
    case '50d':
    case '50n':
      return <Rain1 />
    case '01n':
      return <Moon />
    case '02n':
      return <CloudyNight />
    case '04n':
      return <Windy />
    case '10n':
      return <Rain2 />
  }
}

const WeatherIcon = (code) => <Icon>{getIcon(code)}</Icon>

export default WeatherIcon
