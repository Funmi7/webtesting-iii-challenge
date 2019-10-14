// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Display />)
})

describe('Display component', () => {
    test('Matches the snapshot!', () => {
        expect(wrapper.container).toMatchSnapshot();
    })

    it('displays if gate is open/closed and if it is locked/unlocked', () => {
        expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    })

    it('displays closed if the closed prop is true and locked is true', () => {
        const wrapper = rtl.render(<Display closed={true} locked={true}/>)
        expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
        // expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    })
})