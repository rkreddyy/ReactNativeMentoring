import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#808080',
  },

  title: {
    textTransform: 'uppercase',
  },

  containerLoading: {
    backgroundColor: '#000000',
  }
})
