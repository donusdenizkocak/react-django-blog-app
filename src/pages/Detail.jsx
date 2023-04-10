
import {
Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite"
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Detail = () => {
  const [commendCard, setCommendCard] = useState("")
  const {id} = useParams()
  const {getDetailData} = useBlogCall()
  const {details} = useSelector((state)=>state.blog)
  console.log(details)

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
          <Card sx={{ maxWidth: 600 }}>
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
                    {details.publish_date}
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
              {/* ------------ comment button------------- --------------------------*/}
              <IconButton  onClick={()=> setCommendCard(!commendCard)}>
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

           {/* commend card  --------------- */}
           {commendCard &&
                   <Box width="100%" mt={3} p={3}>
                    {details?.comments?.map((item, index)=>(
                          <Box key={index} p={2}>
                          <Typography>
                            {item.user}
                          </Typography>
                          <Typography color="#aaa">
                            {new Date(item.time_stamp).toDateString()}
                          </Typography>
                          <Typography>
                            {item.content}
                          </Typography>
                          <Divider />
                          </Box>
                          ))}
                      </Box>       
                    }
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;