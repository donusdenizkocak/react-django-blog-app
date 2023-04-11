import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material"
import useBlogCall from "../../hooks/useBlogCall"
import { modalStyle } from "../../styles/GlobalStyles"


const UpdateModal = ({updateOpen,updateClose,update}) => {
    const {putBlogData} = useBlogCall()
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <Modal
        open={update}
        onClose={() => {
            updateClose()
          //setInfo({ title: "", content: "", image: "", category: 0, status:"d" })
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Title"
              name="title"
              id="title"
              type="text"
              variant="outlined"
              required
            //   value={info?.title}
            //   onChange={handleChange}
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="text"
              variant="outlined"
              required
            //   value={info?.image}
            //   onChange={handleChange}
            />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select align="left"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="category"
                    // value={info?.category}
                    label="Categories"
                    // onChange={handleChange}
                >
                    <MenuItem  value={0}>Select Category</MenuItem>
                    {/* {categories?.map((item,index)=>(
                    <MenuItem key={index} value={item?.id}>{item?.name}</MenuItem>
                    ))} */}
                    
                </Select>
            </FormControl>

            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
            align="left"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="status"
                // value={info.status}
                label="Status"
                // nChange={handleChange}
            >
            <MenuItem value="0">Please Chose...</MenuItem>
            <MenuItem value="d">Draft</MenuItem>
            <MenuItem  value="p">Published</MenuItem>
          </Select>
        </FormControl>

            <TextField
              label="Content"
              name="content"
              id="content"
              type="text"
              variant="outlined"
              multiline
              rows={2}
              required
            //   value={info?.content}
            //   onChange={handleChange}
            />

            <Button type="submit" variant="contained">
              Submit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
  )
}

export default UpdateModal