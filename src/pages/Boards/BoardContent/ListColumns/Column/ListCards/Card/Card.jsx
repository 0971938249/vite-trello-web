
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Typography from '@mui/material/Typography'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor:'pointer',
        boxShadow:'0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow:'unset'
      }}>
        <CardContent sx={{ p:1.5, '&:last-child':{ p:1.5 } }}>
          <Typography>Card 01</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor:'pointer',
      boxShadow:'0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow:'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://yt3.ggpht.com/KAlamn8MV7BijjPduiSfB6BFPa80CV8mqw550f7ZKdHFgHX4npPVAxthJ23OKmg73HmgHLi010wXcg=s1024-nd-v1"
        title="green iguana"
      />
      <CardContent sx={{ p:1.5, '&:last-child':{ p:1.5 } }}>
        <Typography>Nhật Quang DEV</Typography>
      </CardContent>
      <CardActions sx={{ p:'0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<ModeCommentIcon />}>10</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>15</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
