// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';


afterEach(rtl.cleanup);

let wrapper, toggleLockButton, toggleCloseButton;
const mock = jest.fn();

beforeEach(() => {
    wrapper = rtl.render(<Controls />)
    
})

describe('Control component', () => {

    test('Matches the snapshot!', () => {
        expect(wrapper.container).toMatchSnapshot();
    })  
    
    it('Button toggle the closed state', () => {
    const wrapper =  rtl.render(<Controls locked={false} closed={false} toggleClosed={mock} />)
      const toggleCloseButton = wrapper.queryByTestId('toggleCloseButton'); 
    //    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
       rtl.fireEvent.click(toggleCloseButton)
       expect(mock).toBeCalled()
       expect(wrapper.queryByText(/open/i)).not.toBeInTheDocument();
       expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
    })
})

