import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import Workspaces from './Workspaces'
import { SvgIcon, Typography } from '@mui/material'
import { ReactComponent as Trello } from '~/assets/trello.svg'
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined'
import Recent from './Recent'
import Starred from './Starred'
import Templates from './Templates'
export default function LeftDrawer() {
  const [state, setState] = React.useState({
    left: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 250, px:'10px' }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <WidgetsOutlinedIcon sx={{ color: 'primary.main' }} />
          <SvgIcon component={Trello} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
            Trello
          </Typography>
        </Box>
        <Box >
          <Workspaces />
        </Box>
        <Recent />
        <Starred />
        <Templates />
        <Button variant="outlined">Create</Button>
      </Box>
    </Box>
  )

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><FormatListBulletedIcon/></Button>
      <Drawer
        anchor='left'
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  )
}