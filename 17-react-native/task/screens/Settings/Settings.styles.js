import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#FFFFFF',
  },
  logo: {
    height: 40,
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
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
