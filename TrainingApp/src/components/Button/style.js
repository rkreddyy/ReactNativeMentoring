import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'grey',
  },

  title: {
    textTransform: 'uppercase',
  },

  containerLoading: {
    backgroundColor: 'black',
  }
})
