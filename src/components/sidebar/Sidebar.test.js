import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

let wrapped = shallow(<Sidebar></Sidebar>);
let title = "Filters"

describe('Side bar component', () => {
  it('should render the Title Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });

  it('renders the Title', () => { 
    expect(wrapped.find('h2').text()).toEqual(title);
  });
});