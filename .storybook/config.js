import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import '../src/styles/index.css';


function loadStories() {
  const req = require.context('../src/components', true, /\-story\.js$/);
  req.keys().forEach(filename => req(filename));
  //require('../stories/index.js');
}

configure(loadStories, module);