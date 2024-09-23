
import {
  useColorScheme
} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Container from '@mui/material/Container'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LightModeIcon fontSize='small'/> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap:1 }}>
            <DarkModeOutlinedIcon fontSize='small'/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap:1 }}>
            <SettingsBrightnessIcon fontSize='small'/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
// function ModeToggle() {
//   const { mode, setMode } = useColorScheme()
//   return (
//     <Button
//       onClick={() => {
//         setMode(mode === 'light' ? 'dark' : 'light')
//       }}
//     >
//       {mode === 'light' ? 'Turn dark' : 'Turn light'}
//     </Button>
//   )
// }

function App() {
  return (
    <Container maxWidth={false } disableGutters sx={{ height:'100vh' }}>
      <Box sx={{
        width:'100%',
        height: (theme) => theme.trello.appBarHeight,
        backgroundColor:'primary.dark',
        display:'flex',
        alignItems:'center' }}>
        <ModeSelect />
      </Box>
      <Box sx={{
        width:'100%',
        height: (theme) => theme.trello.boardBarHeight,
        backgroundColor:'primary.dark',
        display:'flex',
        alignItems:'center' }}>
        Board Bar
      </Box>
      <Box sx={{
        width:'100%',
        height: (theme) => `calc( 100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        backgroundColor:'primary.main',
        display:'flex',
        alignItems:'center' }}>
        Board Content
      </Box>
    </Container>
  )
}

export default App
