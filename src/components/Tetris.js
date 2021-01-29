import React from 'react'

//components
import Stage from './Stage'
import StartButton from './StartButton'
import Display from './Display'
import { createStage } from '../gameHelpers'

import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

const Tetris = () => {
  return(
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage = {createStage()}/>
        <aside>
          <Display text="Score"/>
          <Display text="Row"/>
          <Display text="Level"/>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
