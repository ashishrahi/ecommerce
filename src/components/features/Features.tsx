import { Box, Typography, Grid } from '@mui/material';

const Features = () => {
  return (
    <Box
      sx={{
        width: '100%',
        pt: { xs: 5, sm: 10 },
        pb: { xs: 5, sm: 10 },
        backgroundColor: '#FAF3EA',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        sx={{ 
          maxWidth: { xs: '90%', md: 1334 }, 
          justifyContent: 'space-between' 
        }}
      >
        {/* High Quality */}
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3} 
          sx={{ display: 'flex', alignItems: 'center', gap: 2, textAlign: { xs: 'center', md: 'left' } }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            <Box sx={{ width: 52.77, height: 60, backgroundColor: '#242424' }} />
          </Box>
          <Box>
            <Typography
              sx={{
                color: '#242424',
                fontSize: { xs: 20, md: 25 },
                fontFamily: 'Poppins',
                fontWeight: 600,
                lineHeight: '37.5px',
              }}
            >
              High Quality
            </Typography>
            <Typography
              sx={{
                color: '#898989',
                fontSize: { xs: 16, md: 20 },
                fontFamily: 'Poppins',
                fontWeight: 500,
                lineHeight: '30px',
              }}
            >
              crafted from top materials
            </Typography>
          </Box>
        </Grid>

        {/* Warranty Protection */}
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3} 
          sx={{ display: 'flex', alignItems: 'center', gap: 2, textAlign: { xs: 'center', md: 'left' } }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            <Box sx={{ width: 60, height: 58.13, backgroundColor: '#242424' }} />
          </Box>
          <Box>
            <Typography
              sx={{
                color: '#242424',
                fontSize: { xs: 20, md: 25 },
                fontFamily: 'Poppins',
                fontWeight: 600,
                lineHeight: '37.5px',
              }}
            >
              Warranty Protection
            </Typography>
            <Typography
              sx={{
                color: '#898989',
                fontSize: { xs: 16, md: 20 },
                fontFamily: 'Poppins',
                fontWeight: 500,
                lineHeight: '30px',
              }}
            >
              Over 2 years
            </Typography>
          </Box>
        </Grid>

        {/* Free Shipping */}
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3} 
          sx={{ display: 'flex', alignItems: 'center', gap: 2, textAlign: { xs: 'center', md: 'left' } }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            <Box sx={{ width: 60, height: 55.97, backgroundColor: '#242424' }} />
          </Box>
          <Box>
            <Typography
              sx={{
                color: '#242424',
                fontSize: { xs: 20, md: 25 },
                fontFamily: 'Poppins',
                fontWeight: 600,
                lineHeight: '37.5px',
              }}
            >
              Free Shipping
            </Typography>
            <Typography
              sx={{
                color: '#898989',
                fontSize: { xs: 16, md: 20 },
                fontFamily: 'Poppins',
                fontWeight: 500,
                lineHeight: '30px',
              }}
            >
              Order over 150 $
            </Typography>
          </Box>
        </Grid>

        {/* 24/7 Support */}
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3} 
          sx={{ display: 'flex', alignItems: 'center', gap: 2, textAlign: { xs: 'center', md: 'left' } }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            <Box sx={{ width: 52.94, height: 60, backgroundColor: '#242424' }} />
          </Box>
          <Box>
            <Typography
              sx={{
                color: '#242424',
                fontSize: { xs: 20, md: 25 },
                fontFamily: 'Poppins',
                fontWeight: 600,
                lineHeight: '37.5px',
              }}
            >
              24 / 7 Support
            </Typography>
            <Typography
              sx={{
                color: '#898989',
                fontSize: { xs: 16, md: 20 },
                fontFamily: 'Poppins',
                fontWeight: 500,
                lineHeight: '30px',
              }}
            >
              Dedicated support
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
