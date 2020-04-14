import { createAction } from '@reduxjs/toolkit';

import { TOGGLE_SEARCH } from './actionTypes';

export default {
    toggleSearch: createAction(TOGGLE_SEARCH),
};
