// const calculateDiscountedPrice = function (price, discount, callback) {
//     const discountedPrice = price - (price * discount / 100);
//     callback(discountedPrice);
//   };
  
//   const showDiscountedPrice = function (price) {
//     console.log("Discounted price: " + price);
//   };
  
//   calculateDiscountedPrice(100, 10, showDiscountedPrice);

const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
    };
    
    const showDiscountedPrice = (price) => {
    console.log("Discounted price: " + price);
    };
    
    calculateDiscountedPrice(100, 10, showDiscountedPrice);