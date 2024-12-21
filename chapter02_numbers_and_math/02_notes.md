# Chapter 02 | Time 

Now we're working around the already built Amazon (project)[https://supersimple.dev/projects/amazon/checkout]. We did inspect element and some basic maths here.


## Float behavior 

Weird behaviors of math in JS.

2,3,4 = ints 

0.1, 0.2 = floats

Computers and languages like JS have trouble calculating things with floats. A simple example is that 0.1 + 0.2  in JS = 0.3000000000000004. This is because like ints, floats are stored in a computer in 0's and 1's. There is a mismatch when doing calculations because of this. I.e. computers can store ALL floats accurately.

When calculating money, its better to use cents rather than dollars, since it works around the float addition errors.

So:

1. Caluclations with floats are sometimes inaccurate
2. When working with money, its best to
    a. Calculate money in cents
    b. Convert back to dollars




## Rounding

Round with Math.round()