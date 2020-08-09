import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#202020',
    paddingTop: 21,
  },
  title: {
    minWidth: 325,
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
  char: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#2F2F2F',
  },
  photo: {
    maxWidth: 70,
    marginRight: 20,
  },
  nickname: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  name: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#BBBBBB',
  },
  likebtn: {
    marginLeft: 'auto',
  },
  button: {
    alignSelf: 'stretch',
    marginVertical: 5,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
  }
});
