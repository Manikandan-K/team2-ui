import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import CustomTabs from './CustomTabs';

describe('Custom Tabs', () => {
    it('should render custom tabs', () => {
        //Arrange
        const {getByText} = render(<CustomTabs tabHeaders= {['Now Showing', 'Upcoming']} tabContents={['content 1', 'content 2']} />)

        //Act
        const tab1 = getByText('Now Showing');
        const tab2 = getByText('Upcoming');

        //Expect
        expect(tab1.textContent).toBe('Now Showing');
        expect(tab2.textContent).toBe('Upcoming');
    })

    it('should select first tab by default', () => {
        //Arrange
        const {getByText} = render(<CustomTabs tabHeaders= {['Now Showing', 'Upcoming']} tabContents={['content 1', 'content 2']} />)

        //Act
        const content1 = getByText('content 1');
        // const content2 = getByText('content 2');

        //Expect
        expect(content1.textContent).toBe('content 1');
        // expect(content2).toBeUndefined();
    });

    it('should select second tab on click', () => {
        //Arrange
        const {getByText} = render(<CustomTabs tabHeaders= {['Now Showing', 'Upcoming']} tabContents={['content 1', 'content 2']} />)

        //Act
        fireEvent.click(getByText('Upcoming'));
        const content2  = getByText('content 2');

        //Expect
        expect(content2.textContent).toBe('content 2');
        // expect(content2).toBeUndefined();
    });


});