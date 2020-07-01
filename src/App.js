import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Menu/Menu';
import Help from './components/Help/Help';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/ayuda" component={Help} />
    </Router>
  );
};

export default App;
