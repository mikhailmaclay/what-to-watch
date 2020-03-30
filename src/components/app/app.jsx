// Libraries
import React from 'react';
import {PathName} from '../../constants/consts';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
// Components
import MoviePageContainerWrapped from '../../containers/movie-page/movie-page';
import WatchPageContainerWrapped from '../../containers/watch-page/watch-page';
import AddReviewPageContainerWrapped from '../../containers/add-review-page/add-review-page';
import MainContainer from '../../containers/main/main';
import SignInPageContainer from '../../containers/sign-in-page/sign-in-page';
import PrivateRouteContainer from '../../containers/private-route/private-route';
import MyListPageContainer from '../../containers/my-list-page/my-list-page';
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
          <PrivateRouteContainer path={PathName.MY_LIST}>
            <MyListPageContainer/>
          </PrivateRouteContainer>
          <PrivateRouteContainer path={`${PathName.MOVIE_PAGE}:id/review`} exact>
            <AddReviewPageContainerWrapped/>
          </PrivateRouteContainer>
          <Route path={`${PathName.MOVIE_PAGE}:id/player`} exact>
            <WatchPageContainerWrapped isAutoPlay isLooped/>
          </Route>
          <Route path={`${PathName.MOVIE_PAGE}:id`}>
            <MoviePageContainerWrapped/>
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
