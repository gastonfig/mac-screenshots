import React, { Component } from 'react';

import './App.css';

import Button from './components/Button';
import Tabs from './components/Tabs';
import Toggle from './components/Toggle';
import ChildProcess from './components/SpawnScreenshots';

import { OPTIONS_MAP, toggles } from './constants/data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        clipboard: false,
        mouse: false,
        mute: false,
        jpg: false,
      },
      optionsString: '',
    };
    this.childProcess = null;
    this.takeScreenshot = this.takeScreenshot.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateOptionStr = this.updateOptionStr.bind(this);
  }

  componentWillMount() {
    this.childProcess = new ChildProcess();
  }

  render() {
    return (
      <div className="App">
        {toggles &&
          toggles.map((toggle, key) => {
            if (toggle.type === 'toggle') {
              return (
                <Toggle
                  key={key}
                  onChange={this.handleChange}
                  title={toggle.title}
                  value={toggle.value}
                />
              );
            } else {
              return (
                <Tabs
                  key={key}
                  onChange={this.handleChange}
                  title={toggle.title}
                  value={toggle.value}
                />
              );
            }
          })}

        <Button label="Take Screenshot" onClick={this.takeScreenshot} />
      </div>
    );
  }

  handleChange(e) {
    const { checked, value } = e.target;
    const { options } = this.state;
    const newOptions = options;
    newOptions[value] = checked;

    this.setState({
      options: newOptions,
    });

    this.updateOptionStr();
  }

  takeScreenshot() {
    const spawn = this.childProcess.spawn(this.state.optionsString);

    // spawn.stdout.on('data', data => {
    //   console.log(`stdout: ${data}`);
    // });

    spawn.stderr.on('data', data => {
      console.log(`stderr: ${data}`);
    });

    // spawn.on('close', code => {
    //   console.log(`child process exited with code ${code}`);
    // });
  }

  updateOptionStr() {
    let options = [];

    Object.keys(OPTIONS_MAP).forEach(key => {
      const value = this.state.options[key];

      if (value) {
        options.push(OPTIONS_MAP[key]);
      }
    });

    this.setState({
      optionsString: options.join(''),
    });
  }
}

export default App;
