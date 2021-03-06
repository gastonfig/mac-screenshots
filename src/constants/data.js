export const captureOptions = [
  {
    command: 'tjpg',
    title: 'Format',
    type: 'tabs',
    value: 'jpg',
  },
  {
    command: 'c',
    title: 'Clipboard',
    type: 'toggle',
    value: 'clipboard',
  },
  {
    command: 'x',
    title: 'Silent',
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
    title: 'Portion',
    value: 'mouse',
  },
  {
    defaultChecked: false,
    title: 'Window',
    value: 'window',
  },
];
