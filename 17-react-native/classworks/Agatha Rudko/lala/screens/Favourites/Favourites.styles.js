import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202020',
  },
  title: {
    fontSize: 36,
    marginBottom: 5,
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },
  button: {
    alignSelf: 'stretch',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#2F2F2F',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
  }
});
