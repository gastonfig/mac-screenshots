import { parseDate } from '../utils/parseDate';

const remote = window.require('electron').remote;
const { spawn } = remote.require('child_process');

class ChildProcess {
  constructor() {
    this.cmdName = 'screencapture';
    this.date = null;
    this.filename = null;
    this.outputFileName = 'Screen Shot';
    this.outputLocation = '/Users/gastonfigueroa/Desktop/';
    this.options = null;
  }

  spawn(options) {
    this.date = new Date();
    this.fileName = `${this.outputFileName} ${parseDate(this.date)}`;
    this.options = `-${options}`;
    var extension = 'jpg';

    return spawn(this.cmdName, [
      this.options,
      `${this.outputLocation}${this.fileName}.${extension}`,
    ]);
  }
}

export default ChildProcess;
