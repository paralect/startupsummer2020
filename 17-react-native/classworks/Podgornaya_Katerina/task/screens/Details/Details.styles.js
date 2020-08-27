import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  marvelLogo: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 105,
    height: 40,
    marginTop: 21,
  },
  container: {
    flex: 1,
    backgroundColor: '#202020',
    height: '100%',
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 21,
  },
  heroName : {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    marginTop: 12,
    marginLeft: 20,
    color: '#fff',
    textTransform: 'uppercase',
  },
  personName: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    marginTop: 12,
    marginLeft: 20,
    color: '#BBBBBB',
  },
});
