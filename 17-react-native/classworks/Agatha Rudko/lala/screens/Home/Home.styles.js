import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  title: {
    fontSize: 36,
    marginBottom: 5,
    color: 'white',
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#2F2F2F',
    margin: 10,
    padding: 10,
    height: 92,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
  },
  text: {
    color: 'white',
  }
});
