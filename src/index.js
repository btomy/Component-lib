import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './App';
import './styles/index.css';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';


const stories = storiesOf('Storybook Knobs', module);


ReactDOM.render(
    <App />,
    document.getElementById('root')
);


storiesOf('Button', module)
.add('simple info',
  withInfo(`
    description or documentation about my component, supports markdown
  
    ~~~js
    <Button>Click Here</Button>
    ~~~
  
  `)(() =>
  <button onClick={ action('button-click') }>
  Hello World!
</button>
  )
)

storiesOf('Button', module)

.add('with some emoji', () => (
  <callout className="callout">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque provident, vitae possimus laboriosam itaque unde illum quia optio aperiam quidem, earum vero nulla magnam. Ullam dignissimos facilis voluptatibus itaque.
</callout>
));



stories.addDecorator(withKnobs);
// Knobs as dynamic variables.
stories.add('as dynamic variables', () => {
  const name = text('Name', 'Binu Tomy');
  const age = number('Age', 26);

  const content = `I am ${name} and I'm ${age} years old.`;
  return (<div>{content}</div>);
});

