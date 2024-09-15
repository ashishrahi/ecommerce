import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Button, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ResponsiveLayout() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="lg" sx={{ position: 'relative', padding: 0 }}>
      {/* Header */}
      <Box sx={{ width: '100%', height: 'auto', position: 'relative', mb: 2 }}>
        <Box sx={{
          width: '100%',
          height: 1,
          borderBottom: '1px solid #D9D9D9',
          mb: 2
        }}></Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" sx={{ fontWeight: 500 }}>
              Description
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textSecondary">
              Additional Information
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textSecondary">
              Reviews [5]
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Content */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" color="textSecondary" paragraph>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          More Details
        </Button>
      </Box>

      {/* Images */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            width: '100%',
            height: 0,
            paddingTop: '50%', // Aspect ratio 2:1
            position: 'relative',
            backgroundColor: '#F9F1E7',
            borderRadius: 1,
            overflow: 'hidden'
          }}>
            <img
              src="https://via.placeholder.com/828x551"
              alt="Placeholder"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            width: '100%',
            height: 0,
            paddingTop: '50%', // Aspect ratio 2:1
            position: 'relative',
            backgroundColor: '#F9F1E7',
            borderRadius: 1,
            overflow: 'hidden'
          }}>
            <img
              src="https://via.placeholder.com/657x436"
              alt="Placeholder"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box sx={{ width: '100%', height: 1, borderTop: '1px solid #D9D9D9', mt: 2 }}></Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 600,
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
          outline: 'none'
        }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-title" variant="h6" component="h2">
            Detailed Information
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Here you can add more detailed information about the product or content.
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}

export default ResponsiveLayout;
