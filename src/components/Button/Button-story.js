import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Buttons', module)
.add('Buttons (directions)',
  withInfo(`
    description or documentation about my component, supports markdown
  
    ~~~js 
    <Button>Click Here</Button>
    ~~~
  
  `)(() =>
    <div className="wrapper">  
      <Button
        disabled={false}
        type='button'
        classNames='btn-light left-button-icon'
        event={action('onClick')}>
        Back
        </Button>
        <Button
        disabled={false}
        type='button'
        classNames='btn right-button-icon'
        event={action('onClick')}>
        Continue
        </Button>
        <Button
        disabled={false}
        type='button'
        classNames='btn tick-button-icon'
        event={action('onClick')}>
        Submit
        </Button>
        <Button
        disabled={false}
        type='button'
        classNames='btn search-button-icon'
        event={action('onClick')}>
        Search
        </Button>
      </div>
  )
)

.add('Buttons (additional)',
withInfo(`
  description or documentation about my component, supports markdown

  ~~~js 
  <Button>Click Here</Button>
  ~~~

`)(() =>
    <div className="wrapper">  
    <Button
      disabled={false}
      type='button'
      classNames='btn-disabled'
      event={action('onClick')}>
        Continue
      </Button>
      <Button
      disabled={false}
      type='button'
      classNames='btn-success'
      event={action('onClick')}>
      Success
      </Button>
      <Button
      disabled={false}
      type='button'
      classNames='btn-warning exclamation-button-icon'
      event={action('onClick')}>
      Warning
      </Button>
      <Button
      disabled={false}
      type='button'
      classNames='btn-loading'
      event={action('onClick')}>
      Loading
      </Button>
    </div>
  )
)