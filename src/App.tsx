import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import './stylesheets/normalize.css';
import './stylesheets/global.css';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Welcome />
        <Footer />
      </ThemeProvider>
    );
  }
}

// Rendering the overall App
render(<App />, document.getElementById('root'));
