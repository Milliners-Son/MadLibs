# Mad Libs

Mad Libs is a JavaScript library for replacing words in a dom from a JSON

## Installation

Use npm to install

```bash
npm install @nathanaelscott/madlibs
```

## JavaScript usage

```javascript
import MadLibs from '@nathanaelscott/madlibs';


let options = {
    'flowers':{
        'type':'nested',
        'array':[
            {state:'VIC',flower:'Epacris impressa',size:'150mm'},
            {state:'NSW',flower:'Waratah',size:'113mm'},
            {state:'TAS',flower:'Tasmanian blue gum',size:'95mm'}
        ]
        
    },
    'animals':{
        'type':'variable',
        'biggest':'elephant',
        'smallest':'shrew'
    },
    'me':{
        'type':'single',
        'word':'Nathanael Scott'
    }
}

MadLibs(options);

```

## DOM usage:

Accepts the camel cased string in the title attribute or with a leading # in the href attribute.

```html

<a title="WORDflowersRANK1VALUEflower"></a> <!-- Returns: Epacris imperessa -->
<a title="WORDflowersSTATEtasVALUEsize"></a> <!-- Returns: 95mm -->

<a href="#WORDanimalsVALUEsmallest"></a> <!-- Returns: shrew -->
<a href="#WORDme"></a> <!-- Returns: Nathanael Scott -->
```

Returns:

```html
<span class="madlib-word">Epacris imperessa</span>
<span class="madlib-word">95mm</span>
<span class="madlib-word">shrew</span>
<span class="madlib-word">Nathanael Scott</span>
```

## Options

Mad Libs accepts a nested object. The object key is word the ID.

```javascript
const options = {
    'flowers':{...}
}
```
Adding camal cased option to the name attribute starting with WORD followed by the ID replaces the element with a span containg the output

```html
<a name="WORDflowers"></a>
```

# type

nested

Returns values from an array of objects using it's rank (position in array) or id

```javascript
'flowers':{
    'type':'nested',
    'array':[
        {state:'VIC',flower:'Epacris impressa',size:'150mm'},
        {state:'NSW',flower:'Waratah',size:'113mm'},
        {state:'TAS',flower:'Tasmanian blue gum',size:'95mm'}
    ]
}
```

```html
<a name="WORDflowersRANK1VALUEflower"></a> 
<!-- Returns the value flower from first entry in the array -->

<a name="WORDflowersSTATEtasVALUEsize"></a>
<!-- Returns the value size from the entry with the state TAS -->

<a name="WORDflowersRANK2VALUEstate"></a>
<!-- Returns the long Australian state name from the 2nd entry in the array -->

```

Options accepts

array - An ordered array (ordered to your own critera) with either a state (uppercase appreviation) or type variable as identification

Anchor options
state, type
rank

value

variable
Get values from the object via their names

Anchor options
value

single

Return a single word from the word value





