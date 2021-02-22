import React from 'react';
import StyledCell from './styles/StyledCell'
import TETRIMINOS from '../tetrominos'

const Cell = ({ type }) => {
  return(
    <StyledCell type={type} color={TETRIMINOS[type].color} />
  )
}

export default Cell
