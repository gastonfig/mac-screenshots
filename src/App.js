import React, { Component } from 'react';

import './App.css';

import Button from './components/Button';
import Tabs from './components/Tabs';
import Toggle from './components/Toggle';
import ChildProcess from './components/SpawnScreenshots';

import { captureOptions } from './constants/data';

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
      selectedOptions: '',
    };
    this.childProcess = null;
    this.takeScreenshot = this.takeScreenshot.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateSelectedOptions = this.updateSelectedOptions.bind(this);
  }

  componentWillMount() {
    this.childProcess = new ChildProcess();
  }

  components = {
    tabs: Tabs,
    toggle: Toggle,
  };

  render() {
    return (
      <div className="App">
        {captureOptions &&
          captureOptions.map((toggle, key) => {
            const Component = this.components[toggle.type];
            return (
              <Component
                key={key}
                onChange={this.handleChange}
                title={toggle.title}
                value={toggle.value}
              />
            );
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

    this.updateSelectedOptions();
  }

  takeScreenshot() {
    const { selectedOptions, options } = this.state;
    const spawn = this.childProcess.spawn(selectedOptions, options.jpg);

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

  updateSelectedOptions() {
    const filteredOptions = captureOptions.filter(option => {
      return this.state.options[option.value];
    });

    const options = filteredOptions.map(option => `-${option.command}`);

    this.setState({
      selectedOptions: options,
    });
  }
}

export default App;
