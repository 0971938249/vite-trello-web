import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Button, Tooltip } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import {capitalizeFirstLetter} from '~/utils/formater'
const MENUSTYLES={
  color:'white',
  bgcolor:'transparent',
  border:'none',
  paddingX:'5px',
  borderRadius:'4px',
  '& .MuiSvgIcon-root':{
    color:'white'
  },
  '&:hover':{
    bgcolor:'primary.50'
  }
}
function BoardBar({board}) {
  return (
    <div>
      <Box sx={{
        px:2,
        gap:2,
        width:'100%',
        height: (theme) => theme.trello.boardBarHeight,
        bgcolor:(theme) => (theme.palette.mode ==='dark'? '#34495e' : '#1976d2'),
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid white',
        overflowX:'auto' }}>
        <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
          <Chip
            sx={MENUSTYLES}
            icon={<DashboardIcon />} 
            label={board?.title}
            onClick={() => {}}
          />
          <Chip
            sx={MENUSTYLES}
            icon={<VpnLockIcon />} label={capitalizeFirstLetter(board?.type)}
            onClick={() => {}}
          />
          <Chip
            sx={MENUSTYLES}
            icon={<AddToDriveIcon />} label="Add To Google Drive"
            onClick={() => {}}
          />
          <Chip
            sx={MENUSTYLES}
            icon={<BoltIcon />} label="Automation"
            onClick={() => {}}
          />
          <Chip
            sx={MENUSTYLES}
            icon={<FilterListIcon />} label="Filter"
            onClick={() => {}}
          />
        </Box>
        <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
          <Button
            variant='outlined'
            startIcon={<PersonAddIcon/>}
            sx={{
              color:'white',
              borderColor:'white',
              '&:hover':{ borderColor:'white' }
            }}
          >
            Invite
          </Button>
          <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 34, height: 34, fontSize: 12, border:'none' } }}>
            <Tooltip title="List Images" alt="Nhật Quang">
              <Avatar
                alt="Remy Sharp"
                src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/336091474_191269386986968_7014965132778105620_n.jpg"
              />
            </Tooltip>
            <Tooltip title="List Images" alt="Nhật Quang">
              <Avatar
                alt="Remy Sharp"
                src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/336091474_191269386986968_7014965132778105620_n.jpg"
              />
            </Tooltip>
            <Tooltip title="List Images" alt="Nhật Quang">
              <Avatar
                alt="Remy Sharp"
                src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/336091474_191269386986968_7014965132778105620_n.jpg"
              />
            </Tooltip>
            <Tooltip title="List Images" alt="Nhật Quang">
              <Avatar
                alt="Remy Sharp"
                src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/336091474_191269386986968_7014965132778105620_n.jpg"
              />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </div>
  )
}

export default BoardBar

