import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

export default class Header extends React.Component {
    render() {
        return (
          <div>
            <Link to='/'>
                Streamy
            </Link>
            <div>
              <Link to='/'>
                All Streams
              </Link>
              <GoogleAuth />
            </div>
          </div>
      );
    }
}
