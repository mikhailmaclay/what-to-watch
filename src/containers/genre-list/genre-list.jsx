// Libraries
import React from 'react';
import {connect} from 'react-redux';
// PropTypes
import propTypes from './genre-list.prop-types';
// Components
import GenreList from '../../components/genre-list/genre-list';
//
import ActionCreator from '../../store/actions/action-creator';

function GenreListContainer({currentGenre, genres, changeGenre}) {
  if (!genres) {
    return null;
  }

  return React.createElement(GenreList, {currentGenre, genres, changeGenre});
}

GenreListContainer.propTypes = propTypes;

const mapStateToProps = ({currentGenre, genres}) => ({
  currentGenre,
  genres
});

const mapDispatchToProps = (dispatch) =>({
  changeGenre: (genreName) => {
    if (!genreName) {
      dispatch(ActionCreator.resetGenreFilter());

      return;
    }

    dispatch(ActionCreator.setGenreFilter(genreName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreListContainer);
