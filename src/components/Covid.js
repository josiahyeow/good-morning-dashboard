import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { covidConfig } from '../config'
import Card from './Card'

const Statuses = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1.2rem;
  max-width: 24rem;
`

const Status = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.span`
  font-weight: bold;
`

const Data = styled.span`
  color: ${({ color }) => color};
  font-size: 2rem;
`
const Flag = styled.img`
  max-width: 100px;
  border-radius: 6px;
`

const Covid = () => {
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
      const { URL, COUNTRY } = covidConfig
      const request = `${URL}${COUNTRY}`
      const data = await (await fetch(request)).json()
      setData(data)
    }
    fetchData()
  }, [])

  const { cases, todayCases, deaths, recovered, active, countryInfo } = data

  return (
    <Card title={'COVID-19'}>
      <Statuses>
        <Flag src={countryInfo.flag} />
        <Status>
          <Label>Cases</Label>
          <Data>{cases}</Data>
        </Status>
        <Status>
          <Label>Today</Label>
          <Data> {todayCases}</Data>
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

export default Covid
