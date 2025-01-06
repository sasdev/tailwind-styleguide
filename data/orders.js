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
