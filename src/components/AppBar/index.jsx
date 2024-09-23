import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
function AppBar() {
  return (
    <div>
      <Box sx={{
        width:'100%',
        height: (theme) => theme.trello.appBarHeight,
        backgroundColor:'primary.dark',
        display:'flex',
        alignItems:'center' }}>
        <ModeSelect />
      </Box>
    </div>
  )
}

export default AppBar
