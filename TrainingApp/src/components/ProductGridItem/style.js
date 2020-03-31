import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8,

    backgroundColor: 'rgb(255, 255, 255)',
    shadowColor: 'rgba(0, 0, 0, 0.17)',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 3,
  },

  name: {
    paddingTop: 8,
  }
})
