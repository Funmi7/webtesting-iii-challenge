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

    it('displays Closed if the closed prop is true and Open if otherwise', () => {
        const wrapper = rtl.render(<Display closed={true} locked={false} />);
        expect(wrapper.queryByText(/Closed/)).toBeInTheDocument();
      });

      it('displays Locked if the locked prop is true and Unlocked if otherwise', () => {

        const wrapper = rtl.render(<Display closed={false} locked={true} />);
        expect(wrapper.queryByText(/Locked/)).toBeInTheDocument();
      });
})