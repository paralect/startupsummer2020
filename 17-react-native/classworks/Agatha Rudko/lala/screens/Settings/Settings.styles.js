import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#151515',
    paddingTop: 50,
    paddingLeft: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 5,
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    alignSelf: 'stretch',
    marginVertical: 5,
    padding: 10,

    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
  }
});
