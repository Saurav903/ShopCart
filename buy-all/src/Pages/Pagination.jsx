import React from 'react'
import { Box, Button } from '@chakra-ui/react'

function Pagination({ current, onChange, total }) {
  return (
    <Box >
        <Button disabled={current === 1}
      onClick={() => onChange(current - 1)}>Prev</Button>
        <Button>{current}</Button>
        <Button disabled={current === total} onClick={()=>onChange(current + 1)}>Next</Button>
    </Box>
  )
}

export default Pagination