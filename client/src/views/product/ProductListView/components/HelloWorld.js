import DBR from '../dbr';
import React from 'react';
import { makeStyles, colors, Button } from '@material-ui/core';
import { BiBarcodeReader } from 'react-icons/bi';

import BarcodeScanner from './BarcodeScanner';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.reader = null;
    this.refDivMessage = React.createRef();
    this.state = {
      messageKeyBase: 0,
      messages: [],
      bShowScanner: false
    };
  }

  //   classes = useStyles();

  componentDidUpdate() {
    this.refDivMessage.current.scrollTop = this.refDivMessage.current.scrollHeight;
  }
  componentWillUnmount() {
    if (this.reader) {
      this.reader.destroy();
    }
  }

  sendEmail = () => {
    console.log('se trimite emailul');
  };

  render() {
    return (
      <div>
        {!this.state.bShowScanner ? (
          <div>
            <div className="scan-btn">
              <Button onClick={this.sendEmail}>
                <BiBarcodeReader style={{ fontSize: '60px' }} />
                Click to scan
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={this.hideScanner}>hide scanner</button>
            <BarcodeScanner appendMessage={this.appendMessage}></BarcodeScanner>
          </div>
        )}

        <div
          className="div-message"
          style={style.div_message}
          ref={this.refDivMessage}
        >
          {this.state.messages.map((message, index) => (
            <p key={this.state.messageKeyBase + index}>{message}</p>
          ))}
        </div>
      </div>
    );
  }
  appendMessage = str => {
    this.setState(state => {
      state.messages.push(str);
      if (state.messages.length > 500) {
        ++state.messageKeyBase;
        state.messages.splice(0, 1);
      }
      return state;
    });
  };
  onIptChange = event => {
    // React can't get event.target in async func by default.
    // Thus get event.target in sync part.
    let input = event.target;

    (async () => {
      try {
        this.appendMessage('======== start read... ========');
        let reader = (this.reader =
          this.reader || (await DBR.BarcodeReader.createInstance()));
        let files = input.files;
        for (let i = 0; i < files.length; ++i) {
          let file = files[i];
          this.appendMessage(file.name + ':');
          let results = await reader.decode(file);
          for (let result of results) {
            this.appendMessage(result.barcodeText);
          }
        }
        input.value = '';
        this.appendMessage('======== finish read ========');
      } catch (ex) {
        this.appendMessage(ex.message);
        console.error(ex);
      }
    })();
  };
  showScanner = () => {
    this.setState({
      bShowScanner: true
    });
  };
  hideScanner = () => {
    this.setState({
      bShowScanner: false
    });
  };
}

const style = {
  div_message: {
    maxHeight: '200px',
    overflowY: 'auto',
    resize: 'both'
  }
};

export default HelloWorld;
