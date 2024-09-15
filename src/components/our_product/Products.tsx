import { Card, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { products } from '../../assets/data';
import { useState } from 'react';
import ShopBanner from '../../assets/images/shopbanner.png'


// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  width: 285,
  height: 446,
  position: 'relative',
  '&:hover .overlay': {
    opacity: 1,
  },
}));

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(58, 58, 58, 0.72)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const CtaButton = styled(Button)({
  backgroundColor: 'white',
  color: '#B88E2F',
  fontSize: 16,
  fontFamily: 'Poppins',
  fontWeight: 600,
  lineHeight: '24px',
  padding: '12px 24px',
  marginBottom: 24,
});

const IconButton = styled(Button)({
  color: 'white',
  fontSize: 16,
  fontFamily: 'Poppins',
  fontWeight: 600,
  lineHeight: '24px',
  marginRight: 20,
});



const Header = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleShowMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 2, products.length));
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      p={2} 
      bgcolor="#f5f5f5" 
      borderBottom="2px solid #B88E2F" 
      mb={2}
    >
      <img src={ShopBanner} alt="" />

      <Typography 
        variant="h4" 
        component="div" 
        sx={{ 
          width: '100%', 
          textAlign: 'center', 
          mb: 2, 
          fontFamily: 'Poppins', 
          fontWeight: 700, 
          color: '#3A3A3A'
        }}
      >
        Product List
      </Typography>
      <Box 
        display="flex" 
        flexWrap="wrap" 
        gap={2} 
        justifyContent="center" 
        mb={2}
      >
        {products.slice(0, visibleCount).map((product) => (
          <StyledCard key={product.id}>
            <CardMedia
              component="img"
              height="301"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: '#3A3A3A', fontFamily: 'Poppins', fontWeight: 600 }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: '#898989', fontFamily: 'Poppins', fontWeight: 500 }}>
                {product.description}
              </Typography>
              <Typography variant="h6" sx={{ color: '#3A3A3A', fontFamily: 'Poppins', fontWeight: 600 }}>
                {product.price}
              </Typography>
            </CardContent>
            <Overlay className="overlay">
              <CtaButton>Add to cart</CtaButton>
              <Box display="flex">
                <IconButton startIcon={<i className="fas fa-share-alt"></i>}>Share</IconButton>
                <IconButton startIcon={<i className="fas fa-compare"></i>}>Compare</IconButton>
                <IconButton startIcon={<i className="fas fa-heart"></i>}>Like</IconButton>
              </Box>
            </Overlay>
          </StyledCard>
        ))}
      </Box>
      {visibleCount < products.length && (
        <Button 
          onClick={handleShowMore} 
          variant="contained" 
          sx={{ backgroundColor: '#B88E2F', color: 'white' }}
        >
          Show More
        </Button>
      )}
    </Box>
  );
};

export default Header;
