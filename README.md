# moon-lodash
The Simple Lodash Wrapper for Moon.

## How-to-Install

### CommonJS

```bash
npm i moon-lodash
#or
yarn add moon-lodash 
```

```javascript
import Moon from 'moon'
import lodash from 'lodash'
import MoonLodash from 'moon-lodash'

Moon.use(MoonLodash, lodash)
```

### Script Tag

For this to work add Moon and Lodash Script files and then add:

```html
<script src="https://unpkg.com/moon-lodash"></script>
```

## Usage
```javascript
// I've added three bindings, use any one you prefer :) and call it just like lodash!
Moon.lodash()
this.$lodash()
this._()
```