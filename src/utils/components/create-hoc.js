import getDisplayName from './get-display-name';
import urlize from '../strings/urlize';

function createHOC(HOCName, options) {
  return (Component) => {
    const urlizedHOCName = urlize(HOCName);
    let constructor = null;

    try {
      constructor = require(`./../../hocs/${urlizedHOCName}`).default;
    } catch (_) {
      try {
        constructor = require(`./../../hocs/${urlizedHOCName}/${urlizedHOCName}`).default;
      } catch (__) {
        return Component;
      }
    }

    const ComponentWrapped = constructor(Component, options);

    ComponentWrapped.displayName = `${constructor.name}(${getDisplayName(Component)}`;

    return ComponentWrapped;
  };
}

export default createHOC;
