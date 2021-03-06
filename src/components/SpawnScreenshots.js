import { parseDate } from '../utils/parseDate';

const remote = window.require('electron').remote;
const { spawn } = remote.require('child_process');

class ChildProcess {
  constructor() {
    this.cmdName = 'screencapture';
    this.date = null;
    this.extension = null;
    this.filename = null;
    this.outputFileName = 'Screen Shot';
    this.outputLocation = null;
  }

  spawn(options, isJpg, directory) {
    this.date = new Date();
    this.extension = isJpg ? 'jpg' : 'png';
    this.fileName = `${this.outputFileName} ${parseDate(this.date)}`;
    this.outputLocation = directory;

    return spawn(this.cmdName, [
      ...options,
      `${this.outputLocation}${this.fileName}.${this.extension}`,
    ]);
  }
}

export default ChildProcess;
