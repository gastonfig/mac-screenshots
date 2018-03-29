export const captureOptions = [
  {
    command: 'tjpg',
    title: 'Format',
    type: 'tabs',
    value: 'jpg',
  },
  {
    command: 'c',
    title: 'Save to Clipboard',
    type: 'toggle',
    value: 'clipboard',
  },
  {
    command: 'x',
    title: 'Mute',
    type: 'toggle',
    value: 'mute',
  },
  {
    command: 's',
    title: 'Mouse',
    type: 'radio',
    value: 'mouse',
  },
  {
    command: 'w',
    title: 'Window',
    type: 'radio',
    value: 'window',
  },
];

export const targetRadioOptions = [
  {
    defaultChecked: true,
    title: 'Screen',
    value: 'screen',
  },
  {
    defaultChecked: false,
    title: 'Mouse',
    value: 'mouse',
  },
  {
    defaultChecked: false,
    title: 'Window',
    value: 'window',
  },
];
