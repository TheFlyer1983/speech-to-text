import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }
  onListenClick(){
    this.setState({active: true})
    fetch('http://localhost:3002/api/speech-to-text/token')
    .then(function(response) {
      return response.text();
    })
    .then((token) => {
      var stream = recognizeMic({
        token: token,
        objectMode: true, // send objects instead of text
        extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
        format: false // optional - performs basic formatting on the results such as capitals an periods
      });
      stream.on('data', (data) => {
        // console.log(data);
        this.setState({text: data.alternatives[0].transcript})
      });
      stream.on('error', function(err) {
        console.log(err);
      });
      document.querySelector('#stop').onclick = stream.stop.bind(stream);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  onStopClick(){
    if (this.stream) {
      this.stream.stop();
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className="d-flex p-2 justify-content-center">
          <button onClick={this.onListenClick.bind(this)} className="btn btn-info">Listen to Microphone</button>
          <button onClick={this.onStopClick.bind(this)} className="btn btn-danger" id="stop">Stop</button>
        </div>
        <div className="d-flex p-2 justify-content-center">
          <p>{this.state.text}</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
