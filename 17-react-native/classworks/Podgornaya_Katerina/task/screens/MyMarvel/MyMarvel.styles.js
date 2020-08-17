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
    backgroundColor: '#202020',
    height: '100%',
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 21,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#fff',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  character: {
    display: 'flex',
    flexDirection: 'row',
    width: 323,
    height: 92,
    backgroundColor: '#2F2F2F',
    borderRadius: 4, 
    marginBottom: 15,
  },
  photo: {
    margin: 6,
    width: 70,
    height: 80,
  },
  name: {
    display: 'flex',
    flexDirection: 'column',
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