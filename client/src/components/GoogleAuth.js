import React from 'react';
import { connect } from 'react-redux';


import { SignIn, SignOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '517298489579-q8haacv0r95rbvcakg6u5k24t4pv8oea.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
      if (isSignedIn) {
          this.props.SignIn(this.auth.currentUser.get().getId());
      }
      else {
        this.props.SignOut();
      }
  }

  onSignInClick = () => {
      this.auth.signIn();
  }

  onSignOutClick = () => {
      this.auth.signOut();
  }

    renderAuthButton() {
        const { isSignedIn } = this.props;
        if (isSignedIn === null) {
            return null;
        }
        else if (isSignedIn === false) {
            return (
              <button onClick={ this.onSignInClick }> Sign in </button>
            );
        }
          return (
            <button onClick={ this.onSignOutClick }> Sign out </button>
          );
    }

    render() {
        return (
          <div>
            {this.renderAuthButton()}
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}
export default connect(mapStateToProps, { SignIn, SignOut })(GoogleAuth);
