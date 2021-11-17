/* imageGallery.test.js
*
* Example test file for components. Stored in __test__ folder
* Uses react-testing-library, enzyme, jest
*/

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ImageGallery from '../components/imageGallery.js';

import { act } from "react-dom/test-utils";
import { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('Check if renders correctly on init', () => {
  it('should render', () => {
    const component = shallow(<ImageGallery />)
    expect(component).toMatchSnapshot();
  })
})