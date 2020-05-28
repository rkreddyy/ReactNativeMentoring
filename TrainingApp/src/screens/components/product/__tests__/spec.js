import React from 'react';
import { shallow } from 'enzyme';

import Product from '../product';

describe(`Product component`, () => {
    const renderComponent = props => shallow(<Product {...props} />);

    it('renders correctly', () => {
        const component = renderComponent({
            isExtended: true,
            item: { cell: { thumb: '' } },
            gotoProductDetails: () => { }
        });

        expect(component).toMatchSnapshot();
    });
});
