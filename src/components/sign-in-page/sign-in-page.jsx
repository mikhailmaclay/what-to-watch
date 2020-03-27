// Libraries
import React from 'react';
// PropTypes
import propTypes from './sign-in-page.prop-types';
// Constants and utils
import bind from '../../utils/components/bind';
// Components
import Footer from '../footer/footer';
import Header from '../header/header';

class SignInPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    bind(this, this.handleSubmit);
  }

  handleSubmit(evt) {
    const {login} = this.props;
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;

    evt.preventDefault();

    login(email, password);
  }

  render() {
    const {message} = this.props;

    return (
      <div className="user-page">
        <Header className="page-header user-page__head">
          <h1 className="page-title user-page__title">Sign in</h1>
        </Header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this.handleSubmit}>
            {message &&
              <div className="sign-in__message">
                <p>{message}</p>
              </div>
            }
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref={this.emailRef} className="sign-in__input" placeholder="Email address" name="user-email" id="user-email"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={this.passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn">Sign in</button>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

SignInPage.propTypes = propTypes;

export default SignInPage;

