import React from 'react';
import { shallow } from 'enzyme';

import { BaseStyles } from '../../../../app.styles';
import LoadingIndicator from '../loading-indicator';

describe(`LoadingIndicator component`, () => {
    const renderComponent = props => shallow(<LoadingIndicator {...props} />);
    describe('renders correctly with', () => {
        it('default props', () => {
            const component = renderComponent();

            expect(component).toMatchSnapshot();
        });

        it('with passed props', () => {
            const component = renderComponent({
                pointsCount: 4,
                color: BaseStyles.colors.white
            });

            expect(component).toMatchSnapshot();
        });
    });
});
