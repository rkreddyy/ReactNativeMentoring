import React from 'react';
import { shallow } from 'enzyme';

import Divider from '../divider';
import styles from '../styles';

describe(`Divider component`, () => {
    const renderComponent = props => shallow(<Divider {...props} />);

    it('renders correctly', () => {
        const component = renderComponent({
            style: styles.divider
        });

        expect(component).toMatchSnapshot();
    });
});
