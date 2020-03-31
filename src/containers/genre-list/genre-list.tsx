// Libraries
import * as React from 'react';
import {connect} from 'react-redux';
// Components
import GenreList from '../../components/genre-list/genre-list';
//
import ActionCreator from '../../store/actions/action-creator';

interface Props {
  genres: string[];
  currentGenre: string;
  changeGenre: (genreName: string) => void;
}

function GenreListContainer(props: Props) {
  const {genres} = props;

  if (!genres) {
    return null;
  }

  return <GenreList {...props}/>;
}

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
