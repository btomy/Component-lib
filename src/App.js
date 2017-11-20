import React       from 'react';
import Button      from './components/Button/Button.jsx';
import ButtonGroup from './components/ButtonGroup/ButtonGroup.jsx';
import Input       from './components/Input/Input.jsx';

class App extends React.Component {
	render() {
		return (
			<div className="main-container">
				<div className="main-content">
					<h1>Component Library</h1>

					<div>
						<h4>Form elements: input</h4>
						<Input
							disabled={false}
							required={false}
							type='email'
							id='exampleInputEmail1'
							placeholderText='Email'
							hintText='With additional help text'
							validationText='Please enter a valid email address'
							labelText='Inline validation error with field placeholder'
						/>
					</div>

					<div>
						<h4>Default button:</h4>
						<Button
							disabled={false}
							type='button'
							classNames='btn left-button-icon'
							event={() => {alert('Hello World!')}}>
							back
						</Button>
					</div>

					<div>
						<h4>Button group:</h4>
						<ButtonGroup>
							<Button
								disabled={false}
								type='button'
								classNames='btn'
								event={() => {alert('Left button clicked!')}}>
								Left
							</Button>

							<Button
								disabled={false}
								type='button'
								classNames='btn'
								event={() => {alert('Middle button clicked!')}}>
								Middle
							</Button>

							<Button
								disabled={false}
								type='button'
								classNames='btn'
								event={() => {alert('Right button clicked!')}}>
								Right
							</Button>
						</ButtonGroup>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
