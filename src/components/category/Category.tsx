import { Box, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import {categories} from '../../assets/data'
// Data for the sections (Living, Dining, Bedroom)


const Category = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 1183, margin: '0 auto' }}>
      {/* Top Section: Browse The Range */}
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#333333',
              fontSize: { xs: 24, sm: 32 },
              fontFamily: 'Poppins',
              fontWeight: 700,
            }}
          >
            Browse The Range
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#666666',
              fontSize: { xs: 16, sm: 20 },
              fontFamily: 'Poppins',
              fontWeight: 400,
              mt: { xs: 1, sm: 2 },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
      </Grid>

      {/* Grid of Cards */}
      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ position: 'relative', height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image={category.image}
                alt={category.title}
              />
              <CardContent>
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: '#333333',
                    fontSize: 24,
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                  }}
                >
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
