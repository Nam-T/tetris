import { useCallback, useState } from 'react';
import { STAGE_WIDTH } from '../gameHelpers';

import { Tetrominos ,randomTetromino } from '../tetrominos';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x:0, y:0 },
    tetrominos: Tetrominos[0].shape,
    collied: false
  })

  const updatePlayerPos = ({x, y, collied}) => {
    setPlayer(prev => ({
      ...prev,
      pos: {
        x: (prev.pos.x += x),
        y: (prev.pos.y += y)
      },
      collied,
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetrominos: randomTetromino().shape,
      collied: false
    })
  }, [])

  return [player, updatePlayerPos, resetPlayer]
}
