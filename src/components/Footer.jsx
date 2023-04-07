import { Image } from '@mui/icons-material';
import { Box, Container, IconButton, Paper, Typography } from '@mui/material'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";


export const Footer = () => {
   
        return (
          <Paper sx={{marginTop: 'calc(10% + 60px)',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          backgroundColor:'inherit'
          }} component="footer" square >
            <Container maxWidth="lg">
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "center",
                  display: "flex",
                  my:1
                }}
              >
                  <div>
                  <Image priority="true" src="/Logo.svg" width={75} height={30} alt="Logo" />
                  </div>
              </Box>
              
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "center",
                  display: "flex",
                  mb: 2,
                }}
              >
                <Typography variant="caption" color="initial">
                  Copyright ©️ {new Date().getFullYear()} [] Limited
                </Typography>
                <Box>
                <IconButton sx={{ color: "white" }} onClick={() => window.open("")}>
              <GitHubIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }} onClick={() => window.open("")}>
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }} onClick={() => window.open("")}>
              <FacebookIcon />
            </IconButton>
                </Box>
              </Box>
            </Container>
          </Paper>
        );
     }
     export default Footer