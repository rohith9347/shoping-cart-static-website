document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', () => {
      // Simulate payment process (replace with real payment gateway integration)
      simulatePayment()
        .then(response => {
          if (response.success) {
            alert('Payment successful! Thank you for your order.');
            clearCart();
          } else {
            alert('Payment failed. Please try again.');
          }
        })
        .catch(error => {
          console.error('Payment error:', error);
          alert('An error occurred during payment. Please try again later.');
        });
    });
  });
  
  function simulatePayment() {
    // Simulate a successful payment after a brief delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() < 0.8; // 80% success rate
        if (success) {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1500); // Simulated delay of 1.5 seconds
    });
  }
  
  function clearCart() {
    // Clear the cart after a successful payment
    cartItems.length = 0;
    updateCart();
  }
  