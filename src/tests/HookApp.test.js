import React from 'react';
import { shallow} from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('Test on HookApp', () => {

  test('should show correctly', () => {
    const wrapper = shallow(<HooksApp/>);
    expect(wrapper).toMatchSnapshot();
  })

})
