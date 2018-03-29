import React, { Component } from 'react';

import './App.css';

import Button from './components/Button';
import RadioGroup from './components/RadioGroup';
import Tabs from './components/Tabs';
import Toggle from './components/Toggle';
import ChildProcess from './components/SpawnScreenshots';

import { captureOptions, targetRadioOptions } from './constants/data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        clipboard: false,
        mute: false,
        jpg: false,
        mouse: false,
        window: false,
      },
      selectedOptions: '',
    };
    this.childProcess = null;
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.takeScreenshot = this.takeScreenshot.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
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
          captureOptions
            .filter(toggle => toggle.type !== 'radio')
            .map((toggle, key) => {
              const Component = this.components[toggle.type];
              return (
                <div className="row hover-highlight" key={key}>
                  <Component
                    onChange={this.handleToggleChange}
                    title={toggle.title}
                    value={toggle.value}
                  />
                </div>
              );
            })}
        <div className="row hover-highlight">
          <RadioGroup
            onChange={this.handleRadioChange}
            options={targetRadioOptions}
          />
        </div>

        <div className="row">
          <Button label="Take Screenshot" onClick={this.takeScreenshot} />
        </div>
      </div>
    );
  }

  handleRadioChange(e) {
    const { value } = e.target;
    const newOptions = { ...this.state.options };

    targetRadioOptions
      .filter(target => target.value !== 'screen')
      .forEach(target => {
        newOptions[target.value] = value === target.value;
      });

    this.updateOptions(newOptions);
  }

  handleToggleChange(e) {
    const { checked, value } = e.target;
    const newOptions = { ...this.state.options };
    newOptions[value] = checked;

    this.updateOptions(newOptions);
  }

  updateOptions(newOptions) {
    this.setState(
      {
        options: newOptions,
      },
      this.updateSelectedOptions,
    );
  }

  takeScreenshot() {
    const { selectedOptions, options } = this.state;
    const directory = '/Users/gastonfigueroa/Documents/';
    const spawn = this.childProcess.spawn(
      selectedOptions,
      options.jpg,
      directory,
    );

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
