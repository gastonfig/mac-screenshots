const remote = window.require('electron').remote;
const { spawn } = remote.require('child_process');

function ChildProcess() {
  this.cmdName = 'screencapture';
  this.date = new Date;
  this.outputLocation = '/Users/gastonfigueroa/Desktop/';
  this.outputFileName = 'Screen Shot';
  this.options = null;
};

ChildProcess.prototype.spawn = function(options, extension = 'png') {
  this.options = `-${options}`;

  return spawn(
    this.cmdName,
    [
      this.options,
      this.outputLocation + this.outputFileName + '.' + extension
    ]
  );
};

export default ChildProcess;
