



////////////////////////////////////  Category ///////////////////////////////////////////


interface Category {
    title: string;
    image: string;
  }
  
  export const categories: Category[] = [
    {
      title: 'Living',
      image: 'https://via.placeholder.com/782x521',
    },
    {
      title: 'Dining',
      image: 'https://via.placeholder.com/763x508',
    },
    {
      title: 'Bedroom',
      image: 'https://via.placeholder.com/721x480',
    },
  ];
  

///////////////////////////////////  Products  ////////////////////////////////////////////

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

// Sample product list
export const products:Product[] = [
  {
    id: 1,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 'Rp 2.500.000',
    image: 'https://via.placeholder.com/285x301',
  },
  {
    id: 2,
    name: 'Nimbus',
    description: 'Elegant dining table',
    price: 'Rp 4.000.000',
    image: 'https://via.placeholder.com/285x301',
  },
  // Add more products as needed
  {
    id: 3,
    name: 'Aurora',
    description: 'Modern lamp',
    price: 'Rp 1.200.000',
    image: 'https://via.placeholder.com/285x301',
  },
  {
    id: 4,
    name: 'Vortex',
    description: 'Sofa set',
    price: 'Rp 6.500.000',
    image: 'https://via.placeholder.com/285x301',
  },
  // More products for demonstration
];