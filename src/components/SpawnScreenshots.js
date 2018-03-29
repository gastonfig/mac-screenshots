import { parseDate } from '../utils/parseDate';

const remote = window.require('electron').remote;
const { spawn } = remote.require('child_process');

class ChildProcess {
  constructor() {
    this.cmdName = 'screencapture';
    this.date = null;
    this.filename = null;
    this.outputFileName = 'Screen Shot';
    this.outputLocation;
  }

  spawn(options, isJpg, directory) {
    this.date = new Date();
    this.fileName = `${this.outputFileName} ${parseDate(this.date)}`;
    this.outputLocation = directory;
    var extension = isJpg ? 'jpg' : 'png';

    return spawn(this.cmdName, [
      ...options,
      `${this.outputLocation}${this.fileName}.${extension}`,
    ]);
  }
}

export default ChildProcess;
