#Components styling

##Import order in components:

1. Libraries;
2. PropTypes;
3. Constants and utils;
4. Components;
5. HOCs;

```javascript
// Libraries
import React from 'react';
// PropTypes
import propTypes from './component-name.prop-types';
// Constants and utils
import {Config} from '../../consts';
import {makeItGood} from '../../utils';
// Components
import {Link, Route, Switch} from 'react-router-dom';
import {HelloWorld} from '../hello-world/hello-world';
// HOCs
import withAbilityToMakeItGood from '../../hocs/with-ability-to-make-it-good'
```
