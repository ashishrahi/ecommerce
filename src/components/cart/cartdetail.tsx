import React, { useState } from 'react';
import { Box, Typography, Button, Grid, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CartImage from '../../assets/images/cart.png';
import { Link } from 'react-router-dom';

const initialItems = [
  {
    id: 1,
    name: 'Asgaard sofa',
    price: 250000.00,
    quantity: 1,
    imageUrl: 'https://via.placeholder.com/111x90'
  }
];

const Cart = () => {
  const [items, setItems] = useState(initialItems);

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal; // For simplicity, assuming no additional taxes or fees

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Handle item removal
  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Handle checkout
  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <Box sx={{ width: '100%', height: 'auto', position: 'relative', bgcolor: 'white', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <img src={CartImage} alt="Cart" style={{ maxWidth: '100%', height: 'auto' }} />
      </Box>
      <Grid container spacing={2}>
        {/* Cart Items Section */}
        <Grid item xs={12} md={8}>
          <Box sx={{ bgcolor: '#F9F1E7', p: 2, borderRadius: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', pb: 1 }}>
              <Typography variant="h6">Product</Typography>
              <Typography variant="h6">Price</Typography>
              <Typography variant="h6">Quantity</Typography>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h6">Actions</Typography>
            </Box>
            {items.map(item => (
              <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <Box sx={{ width: 105, height: 105, borderRadius: 1, overflow: 'hidden', mr: 2 }}>
                    <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: 'auto' }} />
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ color: '#9F9F9F' }}>{item.name}</Typography>
                    <Typography variant="body1" sx={{ color: '#9F9F9F' }}>Rs. {item.price.toLocaleString()}</Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ color: '#9F9F9F' }}>Rs. {item.price.toLocaleString()}</Typography>
                <TextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                  sx={{ width: 60, mx: 2 }}
                />
                <Typography variant="body1" sx={{ color: '#9F9F9F' }}>Rs. {(item.price * item.quantity).toLocaleString()}</Typography>
                <IconButton aria-label="delete" sx={{ color: '#B88E2F' }} onClick={() => handleRemoveItem(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Cart Totals Section */}
        <Grid item xs={12} md={4}>
          <Box sx={{ bgcolor: '#F9F1E7', p: 2, borderRadius: 1 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Cart Totals</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body1">Subtotal</Typography>
              <Typography variant="body1" sx={{ color: '#9F9F9F' }}>Rs. {subtotal.toLocaleString()}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body1">Total</Typography>
              <Typography variant="body1" sx={{ color: '#B88E2F', fontSize: '20px' }}>Rs. {total.toLocaleString()}</Typography>
            </Box>
           <Link to={`/checkout`}> <Button
              variant="contained"
              sx={{ width: '100%', borderRadius: 2, bgcolor: 'black', color: 'white' }}
              onClick={handleCheckout}
            >
              Check Out
            </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
