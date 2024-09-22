import * as React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import LightModeIcon from'@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from'@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from'@mui/icons-material/SettingsBrightness'

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
          <Box sx={{display: 'flex', alignItems: 'center', gap:1 }}>
            <DarkModeOutlinedIcon fontSize='small'/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{display: 'flex', alignItems: 'center', gap:1 }}>
            <SettingsBrightnessIcon fontSize='small'/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect />
      <hr/>
      <ModeToggle />
      <br/>
      <div>Nhật Quang</div>
      <Typography variant='body2'color="secondary">ádadasda</Typography>
      <Button variant="contained" color="secondary">Hello world</Button>
      <AccessAlarmIcon/>
      <ThreeDRotation/>
    </>
  )
}

export default App
