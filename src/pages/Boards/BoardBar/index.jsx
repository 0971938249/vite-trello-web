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
const MENUSTYLES={
  color:'primary.main',
  bgcolor:'white',
  border:'none',
  paddingX:'5px',
  borderRadius:'4px',
  '& .MuiSvgIcon-root':{
    color:'primary.main'
  },
  '&:hover':{
    bgcolor:'primary.50'
  }
}
function BoardBar() {
  return (
    <div>
      <Box sx={{
        px:2,
        gap:2,
        width:'100%',
        height: (theme) => theme.trello.boardBarHeight,
        // backgroundColor:'primary.dark',
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        borderTop: '1px solid #00bfa5',
        overflowX:'auto' }}>
        <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
          <Chip
            sx={MENUSTYLES}
            icon={<DashboardIcon />} label="MERN Stack Board"
            onClick={() => {}}
          />
          <Chip
            sx={MENUSTYLES}
            icon={<VpnLockIcon />} label="Public/Private workspace"
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
          <Button variant='outlined' startIcon={<PersonAddIcon/>}>Invite</Button>
          <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 34, height: 34, fontSize: 12 } }}>
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

