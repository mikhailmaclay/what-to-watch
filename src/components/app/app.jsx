// Libraries
import React from 'react';
import {PathName} from '../../constants/consts';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
// Components
import MoviePageContainerWrapped from '../../containers/movie-page/movie-page';
import WatchPageContainerWrapped from '../../containers/watch-page/watch-page';
import MainContainer from '../../containers/main/main';
import SignInPageContainer from '../../containers/sign-in-page/sign-in-page';
//
import history from '../../history';

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path={PathName.ROOT} exact>
            <MainContainer/>
          </Route>
          <Route path={`${PathName.MOVIE_PAGE}:id`}>
            <MoviePageContainerWrapped/>
          </Route>
          <Route path={`${PathName.WATCH}:id`} exact>
            <WatchPageContainerWrapped isAutoPlay isLooped/>
          </Route>
          <Route path={PathName.SIGN_IN} exact>
            <SignInPageContainer/>
          </Route>
          <Route>
            <Redirect to={PathName.ROOT}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default React.memo(App);
