import React, { memo } from 'react';
import { RefreshControl } from 'react-native';

import { appearanceProps } from './config';

export const ListRefreshControl = memo(props => <RefreshControl {...props} {...appearanceProps} />);

ListRefreshControl.displayName = 'ListRefreshControl';
