// Libraries
import React from 'react';
import {connect} from 'react-redux';
// PropTypes
import propTypes from './my-list-page.prop-types';
// Components
import MyListPage from '../../components/my-list-page/my-list-page';
import OperationCreator from '../../store/operations/operation-creator';
import excludeProps from '../../utils/components/exclude-props';

const PROPS_TO_EXCLUDE = [`loadMyList`];

class MyListPageContainer extends React.PureComponent {
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

MyListPageContainer.propTypes = propTypes;

const mapStateToProps = ({user}) => ({movies: user.myList});

const mapDispatchToProps = (dispatch) => ({
  loadMyList: () => dispatch(OperationCreator.loadMyList())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyListPageContainer);
