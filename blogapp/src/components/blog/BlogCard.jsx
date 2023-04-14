import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import useBlogCall from "../../hooks/useBlogCall";
import { useSelector } from "react-redux";

const butonStyle = {
  color: "white",
  backgroundColor: "green",
  "&:hover": {
    backgroundColor: "white",
    color: "green",
  },
};

const BlogCard = ({blog}) => {
  const navigate = useNavigate()
  const {AddLike} = useBlogCall()
  const {currentUser} = useSelector((state)=>state.auth)
  //like function
  const likeStatus = ()=>(
    currentUser &&(
    blog?.likes_n.filter((item)=>(
      item.user_id === currentUser.id
    ))[0] && "red")
  )
 

  return (
    <Card sx={{ 
      maxWidth: 345,
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-around",
      height:500,
      m:3,
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset" 

      }}>
      <CardMedia
        sx={{objectFit:"contain"}}
        component="img"
        alt="green iguana"
        height="140"
        image={blog?.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {blog?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="justify">
          {blog?.content}
        </Typography>
        <Typography variant="body2" color="text.primary" align="left" mt={2}>
          {new Date(blog?.publish_date).toDateString()}
        </Typography>

        <Typography sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          {/* <Avatar          
          alt="Remy Sharp"
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
          sx={{ width: 24, height: 24,mt:2 }}
        />  */}
          <AccountCircleIcon />
          <span>{blog?.author}</span>
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="secondary" onClick={()=>AddLike(`likes/${blog.id}`)}>
            <FavoriteIcon sx={{
              color:likeStatus
            }} />
            <span>{blog?.likes}</span>
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineIcon />
            <span>{blog?.comment_count}</span>
          </IconButton>
          <IconButton>
            <VisibilityIcon />
            <span>{blog?.post_views}</span>
          </IconButton>
        </Typography>

        <Button
          size="small"
          sx={butonStyle}
          variant="contained"
          onClick={()=>navigate(`/detail/${blog?.id}`)}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
export default BlogCard;