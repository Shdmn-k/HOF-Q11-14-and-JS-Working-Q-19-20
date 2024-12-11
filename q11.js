function processProducts(products) {
    let productNames = products.map(product => product.name);
  
    products.forEach(product => {
      if (product.price > 50) {
        console.log(`${product.name} is above $50`);
      } else {
        console.log(`${product.name} is below $50`);
      }
    });
  }
  
  let products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 40 },
    { name: "Monitor", price: 300 },
    { name: "Phone", price: 150 },
    { name: "Headphones", price: 30 },
    { name: "Camera", price: 550 }
  ];
  
  processProducts(products);