import React from 'react'
import styled from 'styled-components'

import Tooltip from '@mui/material/Tooltip'
import { Link } from 'react-router-dom'

const Icon = ({ Icon, link, name}) => {
  return (
    <Wrapper>
    <Link to={link}>
    <Tooltip title={name}>
        <Icon className='icon' />
    </Tooltip>
    </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
a {
    color: black;
    cursor: pointer;

    .icon {
    width: 17px;
    height: 17px;
    margin-right: 1.8rem;
    }
}
`

export default Icon