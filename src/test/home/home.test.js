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
import toJson from 'enzyme-to-json'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Home from '../../modules/components/home'
import UpdatedHomeComponent from '../../modules/components/home/homeHOC.jsx'

const ComponentRendered = UpdatedHomeComponent(Home)

configure({ adapter: new Adapter() })

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({})

describe('home', () => {
    const props = {
        comic: {
            alt: 'Canadas travel restrictions on the US are 99% about keeping out COVID and 1% about keeping out people who say pod.',
            day: '29',
            img: 'https://imgs.xkcd.com/comics/pods_vs_bubbles.png',
            link: '',
            month: '7',
            news: '',
            num: 2339,
            safe_title: 'Pods vs Bubbles',
            title: 'Pods vs Bubbles',
            transcript: '',
            year: '2020'
        },
        searchComic: jest.fn()
    }
    it('should render correctly', () => {
        let searchComic = jest.fn()
        const wrapper = shallow(<ComponentRendered store={store} searchComic={searchComic} {...props} />, { context: { store, ...props } }).dive()
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})