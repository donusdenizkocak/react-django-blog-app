import { useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { Grid } from "@mui/material";

const Dashboard = () => {
  const { getBlogData } = useBlogCall();
  const { blogs } = useSelector((state) => state.blog);

  console.log(blogs);
  useEffect(() => {
    getBlogData("blogs");
  }, []);
  return (
    <Grid
      container
      spacing={2}
      align="center"
      sx={{ minHeight: "90vh", display: "flex", alignItems: "center" }}
    >
      {blogs?.map((blog)=>(
        <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
              <BlogCard blog={blog} />
        </Grid>
      ))}     
    </Grid>
  );
};

export default Dashboard;