// Calculate the order total at the bottom


// estimated 10% tax
Math.round((4.99 * 100 + 20.95 * 100 + 7.99 * 100 + 18.99 * 100) * 0.1) / 100 // 5.29



// simpler way
(499 + 2095 + 799 + 1899) / 100  + Math.round((4.99 * 100 + 20.95 * 100 + 7.99 * 100 + 18.99 * 100) * 0.1) / 100 // 58.21


// more algorithmic way 
(4.99 + 20.95 + 7.99 + 18.99) * 100 / 100 + Math.round((4.99 + 20.95 + 7.99 + 18.99) * 100 * 0.1) /100 // 58.21

