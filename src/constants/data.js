export const OPTIONS_MAP = {
  clipboard: 'c',
  format: 'tjpg',
  mouse: 's',
  mute: 'x',
  window: 'w',
};

export const toggles = [
  {
    title: 'Allow Mouse',
    type: 'toggle',
    value: 'mouse',
  },
  {
    title: 'Save to Clipboard',
    type: 'toggle',
    value: 'clipboard',
  },
  {
    title: 'Format',
    type: 'segmented',
    value: 'jpg',
  },
  {
    title: 'Mute',
    type: 'toggle',
    value: 'mute',
  },
  {
    title: 'Select Window',
    type: 'toggle',
    value: 'window',
  },
];
