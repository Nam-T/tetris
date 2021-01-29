import React from 'react';
import StyledCell from './styles/StyledCell'
import TETRIMINOS from '../tetrominos'

const Cell = ({ type }) => {
  return(
    <StyledCell type={'L'} color={TETRIMINOS['O'].color} />
  )
}

export default Cell
