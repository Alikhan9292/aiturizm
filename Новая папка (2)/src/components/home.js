import * as React from 'react';
// eslint-disable-next-line
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography, Paper } from '@mui/material';
import { Accordion, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

//npm i axios
//import axios from axios v faile app


function App() {
  return (
    <>
      <Box sx={{
  backgroundImage: 'url(https://vsegda-pomnim.com/uploads/posts/2022-04/1650914206_25-vsegda-pomnim-com-p-almati-vid-na-gori-foto-27.jpg)',
  height: '70vh',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center'
}}>
  <Container fixed>
    <Typography variant="h4" sx={{ fontWeight: 'light', color: 'rgba(252, 101, 232, 1)', fontFamily: 'Montserrat, sans-serif', fontStyle: 'oblique', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
      Nomad's Odyssey
    </Typography>
    <Typography variant="h4" sx={{ fontWeight: 'light', color: 'rgba(252, 101, 232, 1)', fontFamily: 'Montserrat, sans-serif', fontStyle: 'oblique', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
      Откройте для себя мир приключений и неизведанных уголков Казахстана с Nomad's Odyssey!
    </Typography>
  </Container>
</Box>
<Box sx={{ p: 3 }}>
        <Typography variant="h4">Часто задаваемые вопросы</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="h5">Что такое "Путешествия кочевника"?</Typography>
          </AccordionSummary>
          <Typography variant="body1" color="black" sx={{ p: 2 }}>
          Nomad's Odyssey - это туристический сайт, который поможет вам открыть для себя приключения и красоту Казахстана.
          </Typography>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography variant="h5">Что представляет собой  сайт?</Typography>
          </AccordionSummary>
          <Typography variant="body1" color="black" sx={{ p: 2 }}>
          Сайт был создан в информационных целях а удивительных местах Казахстана.
          </Typography>
        </Accordion>
        {/* add more Accordion components for each question/answer pair */}
      </Box>
      <Box sx={{ bgcolor: '#F5F5F5', pt: 4, pb: 2 }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1" color="textSecondary" sx={{ flexGrow: 1 }}>
            &copy; 2023 Nomad's Odyssey. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <IconButton aria-label="Facebook" color="primary" sx={{ mr: 1 }}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" color="primary" sx={{ mr: 1 }}>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram" color="primary">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>

    </>
  );
}

export default App;
