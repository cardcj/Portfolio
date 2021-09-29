import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import './stylesheets/normalize.css';
import './stylesheets/global.css';

import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import ColLayout from './containers/ColLayout';
import ImageCard from './containers/ImageCard';

interface State {
  data: Response;
}

class App extends React.Component {
  state: State = {
    data: null
  };
  
  callBackendAPI = async () => {
    const resp = await fetch('/express_backend');
    const body = await resp.json();

    if(resp.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }
  
  componentDidMount() {
    this.callBackendAPI()
      .then((resp) => this.setState({ data: resp.express }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Welcome />
        <ColLayout numColumns={3}>
          <ImageCard
            altText="Placeholder image"
            cardBodyText="This is my card"
            imageSrc="https://picsum.photos/id/155/80/80"
          />
          <ImageCard
            altText="Placeholder image"
            cardBodyText="This is my card"
            imageSrc="https://picsum.photos/id/155/80/80"
          />
          <ImageCard
            altText="Placeholder image"
            cardBodyText="This is my card"
            imageSrc="https://picsum.photos/id/155/80/80"
          />
        </ColLayout>
        <Footer />
      </ThemeProvider>
    );
  }
}

// Rendering the overall App
render(<App />, document.getElementById('root'));
