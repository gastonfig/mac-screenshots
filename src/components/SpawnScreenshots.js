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
  }

  spawn(options, isJpg) {
    this.date = new Date();
    this.fileName = `${this.outputFileName} ${parseDate(this.date)}`;
    var extension = isJpg ? 'jpg' : 'png';

    return spawn(this.cmdName, [
      ...options,
      `${this.outputLocation}${this.fileName}.${extension}`,
    ]);
  }
}

export default ChildProcess;
