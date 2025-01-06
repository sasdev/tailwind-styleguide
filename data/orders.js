<<<<<<< HEAD
// orders.js
const orders = [
    {
      id: 1,
      customer_name: 'John Smith',
      order_date: '2023-01-01',
      status: 'Shipped',
      total: '$100.00'
    },
    {
      id: 2,
      customer_name: 'Jane Johnson',
      order_date: '2023-01-02',
      status: 'Processing',
      total: '$150.00'
    },
    {
      id: 3,
      customer_name: 'Robert Williams',
      order_date: '2023-01-03',
      status: 'Delivered',
      total: '$200.00'
    },
    {
      id: 4,
      customer_name: 'Mary Brown',
      order_date: '2023-01-04',
      status: 'Cancelled',
      total: '$50.00'
    },
    {
      id: 5,
      customer_name: 'James Jones',
      order_date: '2023-01-05',
      status: 'Shipped',
      total: '$300.00'
    },
    {
      id: 6,
      customer_name: 'Patricia Garcia',
      order_date: '2023-01-06',
      status: 'Processing',
      total: '$400.00'
    },
    {
      id: 7,
      customer_name: 'Michael Miller',
      order_date: '2023-01-07',
      status: 'Delivered',
      total: '$250.00'
    },
    {
      id: 8,
      customer_name: 'Linda Davis',
      order_date: '2023-01-08',
      status: 'Cancelled',
      total: '$100.00'
    },
    {
      id: 9,
      customer_name: 'William Rodriguez',
      order_date: '2023-01-09',
      status: 'Shipped',
      total: '$350.00'
    },
    {
      id: 10,
      customer_name: 'Barbara Martinez',
      order_date: '2023-01-10',
      status: 'Processing',
      total: '$450.00'
    },
    {
      id: 11,
      customer_name: 'Richard Hernandez',
      order_date: '2023-01-11',
      status: 'Delivered',
      total: '$500.00'
    },
    {
      id: 12,
      customer_name: 'Susan Lopez',
      order_date: '2023-01-12',
      status: 'Cancelled',
      total: '$150.00'
    },
    {
      id: 13,
      customer_name: 'Joseph Gonzalez',
      order_date: '2023-01-13',
      status: 'Shipped',
      total: '$600.00'
    },
    {
      id: 14,
      customer_name: 'Jessica Wilson',
      order_date: '2023-01-14',
      status: 'Processing',
      total: '$700.00'
    },
    {
      id: 15,
      customer_name: 'Thomas Anderson',
      order_date: '2023-01-15',
      status: 'Delivered',
      total: '$800.00'
    },
    {
      id: 16,
      customer_name: 'Karen Thomas',
      order_date: '2023-01-16',
      status: 'Cancelled',
      total: '$200.00'
    },
    {
      id: 17,
      customer_name: 'Emily Taylor',
      order_date: '2023-01-17',
      status: 'Shipped',
      total: '$900.00'
    },
    {
      id: 18,
      customer_name: 'Daniel Moore',
      order_date: '2023-01-18',
      status: 'Processing',
      total: '$1000.00'
    },
    {
      id: 19,
      customer_name: 'Sarah Jackson',
      order_date: '2023-01-19',
      status: 'Delivered',
      total: '$1100.00'
    },
    {
      id: 20,
      customer_name: 'David Martin',
      order_date: '2023-01-20',
      status: 'Cancelled',
      total: '$1200.00'
    }
  ];
  
  module.exports = orders;
=======
/**
 * This file generates a list of random orders.
 * Each order includes the following fields:
 * - id: Unique order ID
 * - person_id: ID of the person who placed the order
 * - order_date: Date of the order
 * - status: Status of the order (Shipped, Processing, Delivered, Cancelled)
 * - total: Total amount of the order
 * - title: Title of the order
 * - description: Description of the order
 * - imageUrl: Image URL for the order
 * - products: List of products in the order, each with a product_id
 */

// Helper function to generate random products
const generateRandomProducts = () => {
  const numProducts = Math.floor(Math.random() * 5) + 5; // Generate a random number between 5 and 9
  const products = [];
  for (let i = 0; i < numProducts; i++) {
    products.push({ product_id: Math.floor(Math.random() * 20) + 1 });
  }
  return products;
};

const generateRandomDate = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  return new Date(randomTime).toISOString().split('T')[0];
};

let orderIdCounter = 1;

// Helper function to generate random orders for each person
const generateRandomOrdersForPerson = (personId, numOrders) => {
  const orders = [];
  for (let i = 0; i < numOrders; i++) {
    orders.push({
      id: orderIdCounter++, // Sequential order ID starting from 1
      person_id: personId,
      order_date: generateRandomDate('2022-01-01', '2023-12-31'), // Random date between 2022 and 2023
      status: ['Shipped', 'Processing', 'Delivered', 'Cancelled'][Math.floor(Math.random() * 4)],
      total: `$${(Math.random() * 500 + 100).toFixed(2)}`,
      products: generateRandomProducts()
    });
  }
  return orders;
};

// Generate orders for each person
const generateAllOrders = (numPeople) => {
  const allOrders = [];
  for (let personId = 1; personId <= numPeople; personId++) {
    const numOrders = Math.floor(Math.random() * 3) + 2; // Generate between 2 and 4 orders per person
    const personOrders = generateRandomOrdersForPerson(personId, numOrders);
    allOrders.push(...personOrders);
  }
  return allOrders;
};

// Generate orders for 20 people
const orders = generateAllOrders(20);

export default orders;
>>>>>>> gh-pages
