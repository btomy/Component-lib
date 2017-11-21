import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import SideNav from './SideNav.jsx';



storiesOf('SideNav', module)
.add('Default',
  withInfo(`
    description or documentation about my component, supports markdown
  
  `)(() =>
    <div className="wrapper-sideNav">
        <SideNav />
    </div>
  )
)