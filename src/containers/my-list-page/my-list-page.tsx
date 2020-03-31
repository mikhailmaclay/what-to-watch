// Libraries
import * as React from 'react';
import {connect} from 'react-redux';
// Constants and utils
import excludeProps from '../../utils/components/exclude-props';
// Components
import MyListPage from '../../components/my-list-page/my-list-page';
//
import OperationCreator from '../../store/operations/operation-creator';
import {Movie} from '../../types';

const PROPS_TO_EXCLUDE = [`loadMyList`];

interface Props {
  movies: Movie[];
  loadMyList: () => void;
}

class MyListPageContainer extends React.PureComponent<Props, {}> {
  componentDidMount() {
    const {loadMyList} = this.props;

    loadMyList();
  }

  render() {
    const {movies} = this.props;

    if (!movies) {
      return null;
    }

    const propsToComponent = excludeProps(this.props, PROPS_TO_EXCLUDE);

    return <MyListPage {...propsToComponent}/>;
  }
}

const mapStateToProps = ({user}) => ({movies: user.myList});

const mapDispatchToProps = (dispatch) => ({
  loadMyList: () => dispatch(OperationCreator.loadMyList())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListPageContainer);
