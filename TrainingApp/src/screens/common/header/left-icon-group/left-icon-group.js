import React from 'react';

import MenuButton from '../menu-button/menu-button';
import BackButton from '../back-button/back-button';

const LeftIconGroup = ({ needToShowMenuButton, goBack, openMenu }) =>
    needToShowMenuButton ? <MenuButton openMenu={openMenu} /> : <BackButton goBack={goBack} />;

export default LeftIconGroup;
