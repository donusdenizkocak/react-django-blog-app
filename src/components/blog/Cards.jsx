
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from "@mui/material/Container"
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid'; // Grid version 1
//import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Card } from '@mui/material';
import { useState } from 'react';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
 const Cards = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  

  return (
    <Container sx={{marginTop:'20px'}}>
    <Grid container>
        <Grid item>
        <Card sx={{ maxWidth: 345 }}>
     
      <CardMedia
        component="img"
        height="194"
        image="https://images.pexels.com/photos/15237016/pexels-photo-15237016.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt="Paella dish"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <Typography sx={{fontSize:'0.8rem',marginLeft:'1rem'}}>  {new Date().toLocaleString()}</Typography>
      <CardHeader sx={{fontSize:'0.8rem'}}
        avatar={
          <Avatar  sx={{ bgcolor: 'black', width: 24, height: 24 }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        
      />
      <CardActions disableSpacing sx={{display:'flex',justifyContent:'space-between'}}>
        <Box>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
        <ChatBubbleOutlineIcon/>
        </IconButton>
        <IconButton aria-label="share">
        < VisibilityIcon />
        </IconButton>
        </Box>
         <Box>
          <Button variant="contained">
            Read More
          </Button>
          </Box>
      </CardActions>
      
    </Card>
        </Grid>
    </Grid>
    </Container>
  )
}
export default Cards