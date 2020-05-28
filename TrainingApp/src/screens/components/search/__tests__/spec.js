import React from 'react';
import { shallow } from 'enzyme';

import Search from '../search';

describe(`Search component`, () => {
    const renderComponent = props => shallow(<Search {...props} />);

    it('renders correctly', () => {
        const component = renderComponent({
            isSearchVisible: true
        });

        expect(component).toMatchSnapshot();
    });
});
