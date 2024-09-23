import Box from '@mui/material/Box'
function BoardBar() {
  return (
    <div>
      <Box sx={{
        width:'100%',
        height: (theme) => theme.trello.boardBarHeight,
        backgroundColor:'primary.dark',
        display:'flex',
        alignItems:'center' }}>
            Board Bar
      </Box>
    </div>
  )
}

export default BoardBar

