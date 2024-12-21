// Calculate the 10% tax exactly


// first convert all to cents and add + shipping
4.99 * 100 + 20.95 * 100 + 7.99 * 100 + 18.99 * 100 // 5292

// 10% tax then round
Math.round(4.99 * 100 + 20.95 * 100 + 7.99 * 100 + 18.99 * 100 * 0.1)

// divide by 100 to get final tax amount
Math.round((4.99 * 100 + 20.95 * 100 + 7.99 * 100 + 18.99 * 100) * 0.1) / 100