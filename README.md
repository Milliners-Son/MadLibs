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
        'array':[
            {state:'VIC',flower:'Epacris impressa',size:'150mm'},
            {state:'NSW',flower:'Waratah',size:'113mm'},
            {state:'TAS',flower:'Tasmanian blue gum',size:'95mm'}
        ],
        'type':'nested'
    }
}

MadLibs(options);

```

## DOM usage:

```html
<a name="WORDflowersRANK1VALUEflower"></a> <!-- Returns: Epacris imperessa-->
<a name="WORDflowersSTATEtasVALUEsize"></a> <!-- Returns: 95mm-->
```
