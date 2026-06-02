addToCart: (state, action) => {
  const existing = state.items.find(item => item._id === action.payload._id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.items.push({ ...action.payload, quantity: 1 }); // add new
  }
  state.totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );
},


removeFromCart: (state, action) => {
  state.items = state.items.filter(item => item._id !== action.payload);
},


clearCart: (state) => {
  state.items = [];
  state.totalPrice = 0;
},