import React from 'react';
import Menu from './components/Menu';
import './App.css';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Dashboard from './containers/Dashboard';

function App() {
  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
