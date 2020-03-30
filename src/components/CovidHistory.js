import csv from 'csvtojson'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { VictoryChart, VictoryArea, VictoryTheme } from 'victory'
import { covidConfig } from '../config'
import Card from './Card'

const Statuses = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 24rem;
`

const convertToDataArray = (data) => {
  let dataArray = []
  Object.entries(data).map(
    (entry, value) =>
      value > 3 &&
      dataArray.push({ x: dataArray.length, y: parseInt(entry[1]) })
  )
  return dataArray
}

const CovidHistory = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { CSSE_BASE, CSSE_SERIES, CSSE_CONFIRMED } = covidConfig
      const request = `${CSSE_BASE}${CSSE_SERIES}${CSSE_CONFIRMED}`
      const data = await (await fetch(request)).text()
      const parsedData = await csv({
        noheader: true,
        output: 'json',
      }).fromString(data)
      const stateData = parsedData.filter(
        (row) => row['field1'] === 'Victoria'
      )[0]

      
      setHistory(convertToDataArray(stateData))
    }
    fetchData()
  }, [])

  return (
    <Card title={`COVID-19: Curve`}>
      <VictoryChart theme={VictoryTheme.grayscale}>
        <VictoryArea data={history} />
      </VictoryChart>
    </Card>
  )
}

export default CovidHistory
