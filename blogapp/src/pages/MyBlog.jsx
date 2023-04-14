import { Grid } from '@mui/material'
import { useEffect } from 'react'
import useBlogCall from '../hooks/useBlogCall'
import { useSelector } from 'react-redux'


export const MyBlog = () => {
    const {getBlogData}=useBlogCall()
    const {currentUser} = useSelector((state)=>state.auth)
        useEffect(() => {
         getBlogData(`blogs/?author=${currentUser.id}`)
        }, [])
  return (
   <Grid container align="center"
   sx={{p:4,minHeight:"90vh"}}
   >
    {
        blogs?.map((blog)=>(

        ))
    }
   </Grid>
  )
}

