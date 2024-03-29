import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history'

export default class App extends React.Component {
    render() {
        return (
          <div>
          <Router history={history}>
              <div>
                <Header />
                <Switch>
                <Route path='/' exact component={StreamList}/>
                <Route path='/streams/new' exact component={StreamCreate}/>
                <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                <Route path='/streams/:id' exact component={StreamShow}/>
                </Switch>
              </div>
          </Router>
          </div>
      );
    }
}
