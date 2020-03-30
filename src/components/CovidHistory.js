import csv from 'csvtojson'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { VictoryChart, VictoryArea, VictoryTheme } from 'victory'
import { covidConfig } from '../config'
import Card from './Card'

const convertToDataArray = (data) => {
  let dataArray = []
  Object.entries(data).map(
    (entry, value) =>
      value > 3 &&
      dataArray.push({ x: dataArray.length, y: parseInt(entry[1]) })
  )
  return dataArray
}

const fetchStateData = async (url, report, state) => {
  const data = await (await fetch(`${url}${report}`)).text()
  const parsedData = await csv({
    noheader: true,
    output: 'json',
  }).fromString(data)
  return parsedData.filter((row) => row['field1'] === state)[0]
}

const CovidHistory = ({ state }) => {
  const [confirmed, setConfirmed] = useState([])
  const [recovered, setRecovered] = useState([])
  const [deaths, setDeaths] = useState([])

  useEffect(() => {
    async function fetchData() {
      const {
        CSSE_BASE,
        CSSE_SERIES,
        CSSE_CONFIRMED,
        CSSE_RECOVERED,
        CSSE_DEATHS,
      } = covidConfig
      const request = `${CSSE_BASE}${CSSE_SERIES}`

      const confirmedData = await fetchStateData(request, CSSE_CONFIRMED, state)
      // const recoveredData = await fetchStateData(request, CSSE_RECOVERED, state)
      // const deathsData = await fetchStateData(request, CSSE_DEATHS, state)

      setConfirmed(convertToDataArray(confirmedData))
      // setRecovered(convertToDataArray(recoveredData))
      // setDeaths(convertToDataArray(deathsData))
    }
    fetchData()
  }, [])

  return (
    <>
      <VictoryChart theme={VictoryTheme.grayscale}>
        <VictoryArea
          style={{ data: { fill: '#000000' } }}
          data={confirmed}
          interpolation="natural"
        />
      </VictoryChart>
      {/* <VictoryChart theme={VictoryTheme.grayscale}>
        <VictoryArea
          style={{ data: { fill: '#40f780' } }}
          data={recovered}
          interpolation="natural"
        />
      </VictoryChart>
      <VictoryChart theme={VictoryTheme.grayscale}>
        <VictoryArea
          style={{ data: { fill: '#575757' } }}
          data={deaths}
          interpolation="natural"
        />
      </VictoryChart> */}
    </>
  )
}

export default CovidHistory
