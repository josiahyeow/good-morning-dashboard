import csv from 'csvtojson'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { covidConfig } from '../config'
import Card from './Card'

const Statuses = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 24rem;
`

const Status = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 1rem 1rem 0rem;
`

const Label = styled.span`
  font-weight: bold;
`

const Data = styled.span`
  color: ${({ color }) => color};
  font-size: 2rem;
`

const CovidVic = () => {
  const [data, setData] = useState({
    cases: '-',
    todayCases: '-',
    deaths: '-',
    recovered: '-',
    active: '-',
    countryInfo: {
      flag: '',
    },
  })

  useEffect(() => {
    async function fetchData() {
      const { CSSE_BASE, CSSE_KEY } = covidConfig
      const date = new Date()
      date.setDate(date.getDate() - 1)
      const formattedDate = date
        .toLocaleString('en-US')
        .split(/\D/)
        .slice(0, 3)
        .map((num) => num.padStart(2, '0'))
        .join('-')
      const filename = `${formattedDate}.csv`
      const request = `${CSSE_BASE}${filename}`
      const data = await (await fetch(request)).text()
      const parsedData = await csv({
        noheader: true,
        output: 'json',
        headers: [
          'FIPS',
          'Admin2',
          'state',
          'Country_Region',
          'Last_Update',
          'Lat',
          'Long',
          'cases',
          'deaths',
          'recovered',
          'active',
          'Combined_Key',
        ],
      }).fromString(data)
      setData(parsedData.filter((row) => row['Combined_Key'] === CSSE_KEY)[0])
    }
    fetchData()
  }, [])

  const { state, cases, deaths, recovered, active } = data

  return (
    <Card title={`COVID-19: ${state}`}>
      <Statuses>
        <Status>
          <Label>Cases</Label>
          <Data>{cases}</Data>
        </Status>
        <Status>
          <Label>Active</Label>
          <Data color={'#f74043'}>{active}</Data>
        </Status>
        <Status>
          <Label>Recovered</Label>
          <Data color={'#40f780'}>{recovered}</Data>
        </Status>
        <Status>
          <Label>Deaths</Label>
          <Data color={'#575757'}>{deaths}</Data>
        </Status>
      </Statuses>
    </Card>
  )
}

export default CovidVic
