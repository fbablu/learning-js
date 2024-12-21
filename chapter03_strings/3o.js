// BONUS, display everything onto the alert:


alert(
`Items ($${2 + 2}): $${ (100 * 2 * 20.95 + 100 * 2 * 7.99) / 100}
Shipping & handling: $${ (100 * 2 * 4.99) / 100}
Total before tax: $${ ((100 * 2 * 20.95 + 100 * 2 * 7.99) + (100 * 2 * 4.99) ) / 100}
Estimated tax (10%): $${Math.round(((100 * 2 * 20.95 + 100 * 2 * 7.99) + (100 * 2 * 4.99) ) * 0.1) / 100}
Order total: $${ (((100 * 2 * 20.95 + 100 * 2 * 7.99) + (100 * 2 * 4.99) ) +  Math.round(((100 * 2 * 20.95 + 100 * 2 * 7.99) + (100 * 2 * 4.99) ) * 0.1)) / 100}`
);

// result is given as an alert!

`Items (4): $57.88
Shipping & handling: $9.98
Total before tax: $67.86
Estimated tax (10%): $6.79
Order total:$74.65
`