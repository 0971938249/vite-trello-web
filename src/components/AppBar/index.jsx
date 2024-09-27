import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'
import { ReactComponent as Trello } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import { Typography } from '@mui/material'
import Workspaces from './Menus/Workspaces'
import Button from '@mui/material/Button'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profiles'
import LeftDrawer from './Menus/Drawer'
function AppBar() {
  return (
    <div>
      <Box
        sx={{
          width:'100%',
          height: (theme) => theme.trello.appBarHeight,
          display:'flex',
          alignItems:'center',
          justifyContent: 'space-between' }}>
        <Box sx={{ display: { md: 'none' } }}>
          <LeftDrawer sx={{ minWidth:0 }}/>
        </Box>
        <Box pl={2} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          <WidgetsOutlinedIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SvgIcon component={Trello} inheritViewBox sx={{ color: 'primary.main' }} />
            <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
      Trello
            </Typography>
          </Box>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
        <Box pr={2} sx={{ display:'flex', alignItems:'center', gap:2, pl:'8px' }}>
          <TextField id="outlined-search" label="Search field..." type="search" size='small'/>
          <ModeSelect sx={{ width: { xs: '100%', sm: 'auto' }, padding: { xs: 2, sm: 4 } }} />
          <Tooltip title="Notifitation">
            <Badge color="secondary" variant="dot" sx={{ cursor:'pointer', color:'primary.main' }}>
              <NotificationsNoneIcon/>
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ cursor:'pointer', color:'primary.main' }}/>
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </div>
  )
}

export default AppBar
