// Libraries
import {withRouter as reactRouterDOMWithRouter} from 'react-router-dom';

function withRouter(Component) {
  return reactRouterDOMWithRouter(Component);
}

export default withRouter;
