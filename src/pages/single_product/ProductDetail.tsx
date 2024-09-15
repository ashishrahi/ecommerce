import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CompareIcon from '@mui/icons-material/Compare';

const Thumbnail = ({ src, onClick }: { src: string; onClick: () => void }) => (
  <Box
    component="img"
    src={src}
    alt="Product Thumbnail"
    sx={{
      width: '80px',
      height: '80px',
      borderRadius: '10px',
      backgroundColor: '#D9D9D9',
      cursor: 'pointer',
      objectFit: 'cover',
    }}
    onClick={onClick}
  />
);

const Rating = ({
  rating,
  onRate,
}: {
  rating: number;
  onRate: (value: number) => void;
}) => (
  <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
    {[...Array(5)].map((_, i) => (
      <IconButton
        key={i}
        onClick={() => onRate(i + 1)}
        sx={{ p: 0, color: i < rating ? '#FFC700' : '#D9D9D9' }}
      >
        <StarIcon />
      </IconButton>
    ))}
    <Typography sx={{ ml: 2 }} variant="body2" color="text.secondary">
      {rating} Customer Reviews
    </Typography>
  </Box>
);

const Selector = ({
  items,
  type,
  selected,
  onSelect,
}: {
  items: string[];
  type: 'Size' | 'Color';
  selected: string;
  onSelect: (item: string) => void;
}) => (
  <>
    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
      {type}
    </Typography>
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      {items.map((item) => (
        <Box
          key={item}
          sx={{
            width: type === 'Size' ? '40px' : '30px',
            height: type === 'Size' ? '40px' : '30px',
            bgcolor: type === 'Color' ? item : selected === item ? '#B88E2F' : '#F9F1E7',
            borderRadius: type === 'Color' ? '50%' : '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: type === 'Size' && selected === item ? 'white' : 'black',
            cursor: 'pointer',
            textAlign: 'center',
            lineHeight: type === 'Size' ? '40px' : '30px',
          }}
          onClick={() => onSelect(item)}
        >
          {type === 'Size' && item}
        </Box>
      ))}
    </Box>
  </>
);

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('#816DFA');
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [mainImage, setMainImage] = useState('https://via.placeholder.com/481x391?text=Main+Product');
  const [cart, setCart] = useState<any[]>([]); // Use appropriate type for cart items

  const thumbnails = [
    'https://via.placeholder.com/80x80?text=Image+1',
    'https://via.placeholder.com/80x80?text=Image+2',
    'https://via.placeholder.com/80x80?text=Image+3',
    'https://via.placeholder.com/80x80?text=Image+4',
  ];

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prevQuantity) => (increment ? prevQuantity + 1 : Math.max(prevQuantity - 1, 1)));
  };

  const handleAddToCart = () => {
    const item = {
      size: selectedSize,
      color: selectedColor,
      quantity,
      // Add other item details if needed
    };
    setCart((prevCart) => [...prevCart, item]);
    // Optionally store cart in local storage or send to server
    console.log('Added to cart:', item);
  };

  const handleCompare = () => {
    // Implement comparison logic here
    console.log('Comparing item with:', { size: selectedSize, color: selectedColor });
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'white', p: { xs: 2, md: 4 } }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Image Gallery and Main Image */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Main Image */}
          <Box
            component="img"
            src={mainImage}
            alt="Main Product"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              backgroundColor: '#F9F1E7',
              objectFit: 'cover',
            }}
          />
          {/* Thumbnails */}
          <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto' }}>
            {thumbnails.map((src) => (
              <Thumbnail
                key={src}
                src={src}
                onClick={() => setMainImage(src)}
              />
            ))}
          </Box>
        </Box>

        {/* Product Details */}
        <Box sx={{ flex: 2 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Asgaard Sofa
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Rs. 250,000.00
          </Typography>

          {/* Rating */}
          <Rating rating={rating} onRate={setRating} />

          {/* Description */}
          <Typography variant="body2" sx={{ mb: 4 }}>
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted
            hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </Typography>

          {/* Size Selector */}
          <Selector
            items={['L', 'XL', 'XS']}
            type="Size"
            selected={selectedSize}
            onSelect={setSelectedSize}
          />

          {/* Color Selector */}
          <Selector
            items={['#816DFA', 'black', '#B88E2F']}
            type="Color"
            selected={selectedColor}
            onSelect={setSelectedColor}
          />

          {/* Quantity Selector and Buttons */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center', my: 4 }}>
            {/* Quantity Selector */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #9F9F9F',
                borderRadius: '10px',
                width: '120px',
                justifyContent: 'space-between',
                p: 1,
              }}
            >
              <IconButton size="small" onClick={() => handleQuantityChange(false)}>
                <RemoveIcon />
              </IconButton>
              <Typography>{quantity}</Typography>
              <IconButton size="small" onClick={() => handleQuantityChange(true)}>
                <AddIcon />
              </IconButton>
            </Box>

            {/* Add to Cart Button */}
            <Button
              variant="outlined"
              startIcon={<ShoppingCartIcon />}
              sx={{
                borderRadius: '15px',
                px: 3,
                py: 1.5,
                fontSize: '18px',
                flexShrink: 0,
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>

            {/* Compare Button */}
            <Button
              variant="outlined"
              startIcon={<CompareIcon />}
              sx={{
                borderRadius: '15px',
                px: 3,
                py: 1.5,
                fontSize: '18px',
                flexShrink: 0,
              }}
              onClick={handleCompare}
            >
              Compare
            </Button>
          </Box>

          {/* SKU, Category, Tags */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              SKU: SS001
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: Sofas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tags: Sofa, Chair, Home, Shop
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
