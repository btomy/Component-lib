import React from 'react';
import Button from '../Button';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Renders <button> props as expected', () => {
    const wrapper = shallow(
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      <Button tabIndex={2}>
        <div className="child">child</div>
        <div className="child">child</div>
      </Button>
    );

    it('Renders as a <button> element without an href', () => {
      expect(wrapper.is('button')).toBe(true);
    });

  });
