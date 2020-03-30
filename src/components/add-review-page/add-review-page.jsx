// Libraries
import React from 'react';
// PropTypes
import propTypes from './add-review-page.prop-types';
// Constants and utils
import {Config} from '../../constants/consts';
import bind from '../../utils/components/bind';
// Components
import Header from '../header/header';
import Link from '../link/link';
import MoviePoster from '../movie-poster/movie-poster';

class AddReviewPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.reviewFormRef = React.createRef();

    bind(this,
        this.validateForm,
        this.prepareForm,
        this.handleSubmit
    );
  }

  componentDidMount() {
    this.prepareForm();
  }

  componentDidUpdate() {
    this.prepareForm();
  }

  validateForm() {
    return new Promise((resolve, reject) => {
      const {showNotification} = this.props;

      const rating = this.reviewFormRef.current.elements.rating.value;
      const text = this.reviewFormRef.current.elements[`review-text`].value;

      if (!rating.length) {
        showNotification(`Validation error`, `You should choose a rating`);
        reject(`Validation error`);
      }

      if (!text.length || text.length < Config.MIN_REVIEW_LENGTH || text.length > Config.MAX_REVIEW_LENGTH) {
        showNotification(`Validation error`, `You should write a review of between 50 and 400 characters.`);
        reject(`Validation error`);
      }

      resolve();
    });
  }

  prepareForm() {
    const {isFetching} = this.props;

    Array.from(this.reviewFormRef.current.elements).forEach((element) => {
      element.disabled = isFetching;
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const {addReview, movie} = this.props;

    const rating = this.reviewFormRef.current.elements.rating.value;
    const text = this.reviewFormRef.current.elements[`review-text`].value;

    this.validateForm()
      .then(() => addReview(movie.id, rating, text));
  }

  render() {
    const {movie, baseURL} = this.props;
    const {name, poster, background} = movie;
    const [backgroundColor, backgroundImage] = background;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg" style={{backgroundColor}}>
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="page-header">
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={baseURL} className="breadcrumbs__link">{name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </Header>

          <MoviePoster src={poster} alt={name} className="movie-card__poster movie-card__poster--small"/>
        </div>

        <div className="add-review">
          <form ref={this.reviewFormRef} action="#" className="add-review__form" onSubmit={this.handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input visually-hidden" id="star-1" type="radio" name="rating" value="1"/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input visually-hidden" id="star-2" type="radio" name="rating" value="2"/>
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input visually-hidden" id="star-3" type="radio" name="rating" value="3"/>
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input visually-hidden" id="star-4" type="radio" name="rating" value="4"/>
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input visually-hidden" id="star-5" type="radio" name="rating" value="5" required/>
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength={Config.MIN_REVIEW_LENGTH} maxLength={Config.MAX_REVIEW_LENGTH} required/>
              <div className="add-review__submit">
                <button className="add-review__btn">Post</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

AddReviewPage.propTypes = propTypes;

export default AddReviewPage;
