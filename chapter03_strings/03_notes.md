# Chapter 3



## Type coercion

JS has automatic type coercion


for example, `'$' + 20.95 + 7.99` is read from left to right, which means that we get all of this together as $20.957.99 


We can do it like this: '$' + (100 * (20.95 + 7.99)) / 100 which gives us the correct value


We can do this again by writing out the number of items:

'Items (' + (1 + 1) + '): ' + '$' + (100 * (20.95 +7.99)) / 100, which gives us:

'Items (2): $28.94'


## We can make string using '' and "" in JS

'hello' vs "hello" makes the exact same string.

Which one do we use? '' are usually easier, but we can use "" when there's a single quote within the string ie `'I'm learning JS'` doesn't work. 

We can solve this with `"I'm learning JS"` is more useful here


OR we can  use an escape character: `\'`. For example:
`'I\'m learning JavaScript'`



OR we can use `` to create template strings too, which allows for interpolation. Iterpolation lets use a value directly in a string.

``hello``

### Earlier we made this mess:
'Items (' + (1 + 1) + '): ' + '$' + (100 * (20.95 +7.99)) / 100, which gives us:

'Items (2): $28.94'


### But we can redo it like this

`Items (${1 + 1}): $${100 * (20.95 +7.99) / 100}`

which gives us

'Items (2): $28.94`, which is much easier.


Interpolation is a much cleaner and easier way to put values in a string rather than concatenation when applicable. 

## Multi-line strings

`some
text`

outputs `some\ntext`



So here we learned that:


1. strings are text
2. We can use strings and numbers together
3. three ways to create strings:
    a. '...' --> concatenation
    b. "..." --> concatenation
    c. `...` --> interpolation (we can input values with ${})

4. we can also use the escape characters, such asS:
    a. \' single quotes
    b. \" double quotes
    c. \\ back slash
    d. \n new line
    e. \r carriage return (represents end of a line)
    f. \t for a new tab
    g. \b backspace
    h. \form feed (shows a page break within a text (ff) )
    i. \v vertical tab (shows vt on alert(\v))
5. we can do interpolation with and have multi line strings with `



