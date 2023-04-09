import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import useBlogCall from "../../hooks/useBlogCall";
import { useSelector } from "react-redux";


const BlogForm = () => {

  const [info, setInfo] = useState({
    title:"",
    content:"",
    image:"",
    category:0,
    status:"p",
    slug:""
  })

  const {postBlogData,getBlogData} = useBlogCall()
  const {categories} = useSelector((state)=>state.blog)

  const handleChange = (e)=>{
    const {name, value} = e.target
    setInfo({...info, [name]:value})
  }
  //
  const handleSubmit = (e)=>{
    e.preventDefault()
    postBlogData("blogs", info)
    setInfo(
      {
        title:"",
        content:"",
        image:"",
        category:0,
        status:"p",
        slug:""
      }
    )
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      component="form"
      width="100%"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" align="left" sx={{ fontWeight: 900 }}>
        New Blog
      </Typography>

      <TextField
        label="Title"
        name="title"
        id="title"
        type="text"
        variant="outlined"
        value={info?.title}
        onChange={handleChange}
        required
      />
      <TextField
        label="Image Url"
        name="image"
        id="image"
        type="url"
        variant="outlined"
        value={info?.image}
        onChange={handleChange}
        required
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select align="left"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="category"
          value={info?.category}
          label="Categories"
          onChange={handleChange}
        >
          <MenuItem  value={0}>Select Category</MenuItem>
          {categories?.map((item,index)=>(
            <MenuItem key={index} value={item?.id}>{item?.name}</MenuItem>
          ))}
          
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
        align="left"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="status"
          value={info.status}
          label="Status"
          nChange={handleChange}
        >
          <MenuItem value="p">Please Chose...</MenuItem>
          <MenuItem value="d">Draft</MenuItem>
          <MenuItem value="p">Published</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Content"
        name="content"
        id="content"
        type="text"
        variant="outlined"
        required
        multiline
        size="medium"
        value={info?.content}
        onChange={handleChange}
        rows={4}
      />

      <Button type="submit" variant="contained" >ADD NEW BLOG</Button>
    </Box>
  );
};

export default BlogForm;