import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite"
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CommentForm from "../components/blog/CommentForm";
import DeleteModal from "../components/blog/DeleteModal";
import UpdateModal from "../components/blog/UpdateModal";

const Detail = () => {
  const [commentCard, setCommentCard] = useState(false)
  const {currentUser} = useSelector((state)=>state.auth)
  const {id} = useParams()
  const {getDetailData} = useBlogCall()
  const {details} = useSelector((state)=>state.blog)
  //console.log(details)
  //modal delete states
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //update modal
  const [update, setUpdate] = useState(false);
  const updateOpen = () => setUpdate(true);
  const updateClose = () => setUpdate(false);

useEffect(()=>{
  getDetailData(`blogs/${id}`)
},[])

  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Card sx={{ maxWidth: 600, p:3 }}>
            <CardMedia
              sx={{
                objectFit: "contain",
                maxWidth: 500,
              }}
              image={details.image}
              component="img"
            />

            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2,mb:3 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccountCircleIcon fontSize="large" color="primary" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    {details?.author}
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
                    {new Date(details.publish_date).toDateString()}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h6">
                {details.title}
              </Typography>
              <Typography sx={{ color: "#777" }}>
                {details.content}
              </Typography>
            </CardContent>

              <CardActions>
              <IconButton>
                  <FavoriteIcon />
                  <Typography component="span">
                    {details.likes}
                  </Typography>
              </IconButton>

              {/* comment button ----------------  */}
              <IconButton onClick={()=>setCommentCard(!commentCard)}>
                  <CommentIcon />
                  <span>
                    {details.comment_count}
                  </span>
              </IconButton>

              <IconButton >
                  <VisibilityIcon />
                  <span>
                    {details.post_views}
                  </span>
              </IconButton>
              </CardActions>

              {/* comment card ------------------   */}
              {commentCard &&
                   <Box width="100%" mt={3} p={3}>
                    {details?.comments?.map((item, index)=>(
                          <Box key={index} p={2}>
                          <Typography>
                            {item.user}
                          </Typography>
                          <Typography color="#aaa">
                            {new Date(item.time_stamp).toDateString()}
                          </Typography>
                          <Typography mb={2}>
                            {item.content}
                          </Typography>
                          <Divider />
                      </Box>
                    ))}   

                    <CommentForm postId={details.id} />                
               </Box>
              }

              {/* delete update button ---------------- */}
             {(details.author === currentUser.username) &&
                    <CardActions>
                    <Button variant="contained" sx={{backgroundColor:"green"}}  
                    onClick={updateOpen}>
                        UPDATE BLOG
                    </Button>

                    <Button variant="contained" 
                    sx={{backgroundColor:"red"}}
                    onClick={handleOpen}
                    >
                        DELETE BLOG
                    </Button>


                    <DeleteModal 
                    handleOpen={handleOpen} 
                    handleClose={handleClose} 
                    open={open}
                    id={id}
                     />

                  <UpdateModal 
                    updateOpen={updateOpen} 
                    updateClose={updateClose} 
                    update={update}
                    id={id}
                     />
                    
                </CardActions>
             }
              
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;