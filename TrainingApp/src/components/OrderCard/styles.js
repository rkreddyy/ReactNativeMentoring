import { StyleSheet } from 'react-native';

import { colors } from 'src/assets/styles/colors';

export default StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  row: {
    flexBasis: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  rowLabel: {
    color: colors.bostonBlue,
    fontSize: 18
  },
  rowValue: {
    width: 180,
    fontSize: 18
  }
});
