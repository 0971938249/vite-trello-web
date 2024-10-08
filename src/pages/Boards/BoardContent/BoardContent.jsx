
import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

function BoardContent({ board }) {
  const orderColumns= mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <div>
      <Box sx={{
        width:'100%',
        height: (theme) => (theme.trello.boardContentHeight),
        bgcolor:(theme) => (theme.palette.mode ==='dark'? '#34495e' : '#1976d2'),
        p:'10px 0' }}>
        <ListColumns columns={orderColumns}/>
      </Box>
    </div>
  )
}

export default BoardContent

