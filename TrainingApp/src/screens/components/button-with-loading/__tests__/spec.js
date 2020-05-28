import React from 'react';
import { shallow } from 'enzyme';

import ButtonWithLoading from '../button-with-loading';

describe(`ButtonWithLoading component`, () => {
    const renderComponent = props => shallow(<ButtonWithLoading {...props} />);

    describe('correctly renders', () => {
        it('show loading indicator', () => {
            const component = renderComponent({
                isLoading: true
            });

            expect(component).toMatchSnapshot();
        });

        it('hide loading indicator', () => {
            const component = renderComponent({
                isLoading: false
            });

            expect(component).toMatchSnapshot();
        });

        it('label text', () => {
            const component = renderComponent({
                defaultLabel: "Test button"
            });

            expect(component).toMatchSnapshot();
        });

        it('all props', () => {
            const component = renderComponent({
                isLoading: true,
                isError: false,
                defaultLabel: 'Test Button',
                errorLabel: null
            });

            expect(component).toMatchSnapshot();
        });
    });
});
