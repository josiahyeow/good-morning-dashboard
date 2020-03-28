import React from 'react'
import styled from 'styled-components'

const Welcome = styled.div`
  color: #fff;
  padding: 1.5rem;
`

const Title = () => {
  return (
    <Welcome>
      <h1>Good Morning, Josiah 👋</h1>
    </Welcome>
  )
}

export default Title
