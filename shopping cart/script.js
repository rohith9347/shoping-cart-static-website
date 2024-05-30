const phones = [
    { id: 1, name: 'iPhone', price: 500 },
    { id: 2, name: 'samsung', price: 700 },
    // Add more phone models here
  ];
  
  const cartItems = [];
  
  const cartContainer = document.getElementById('cart-items');
  const totalContainer = document.getElementById('total');
  const checkoutButton = document.getElementById('checkout-btn');
  
  function updateCart() {
    cartContainer.innerHTML = '';
    let totalPrice = 0;
  
    cartItems.forEach(item => {
      const phone = phones.find(phone => phone.id === item.id);
      const listItem = document.createElement('li');
      listItem.innerHTML = `${phone.name} - $${phone.price}`;
      cartContainer.appendChild(listItem);
      totalPrice += phone.price;
    });
  
    totalContainer.textContent = totalPrice;
  }
  
  phones.forEach(phone => {
    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = `Add ${phone.name} to Cart`;
    addToCartBtn.addEventListener('click', () => {
      cartItems.push({ id: phone.id });
      updateCart();
    });
    document.body.appendChild(addToCartBtn);
  });
  
  checkoutButton.addEventListener('click', () => {
    // In a real implementation, you would redirect to a payment gateway here
    alert('Redirecting to payment gateway...');
  });
  