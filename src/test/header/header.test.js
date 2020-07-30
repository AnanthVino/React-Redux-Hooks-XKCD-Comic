/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../../modules/shared/header'

configure({ adapter: new Adapter() })

describe('home', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper).toMatchSnapshot()
    })
})