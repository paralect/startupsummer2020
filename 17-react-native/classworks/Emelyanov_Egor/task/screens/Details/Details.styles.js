import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#202020',
    height: '100%',
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 21,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  characterImg: {
    width: 150,
    height: 170.56,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    marginBottom: 13,
  },
  character: {
    flexDirection: 'row',
  },
  nameWrapper: {
    marginLeft: 18,
    paddingTop: 24,
  },
  description: {
    marginTop: 10.44,
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#BBBBBB',
  },
  comics: {
    marginTop: 20,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
  },
  comicsContent: {
    backgroundColor: '#2F2F2F',
    marginBottom: 22,
    padding: 6,
    borderRadius: 4,
  },
  comicsInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  comicsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  comicsImg: {
    width: 52,
    height: 80,
  },
  title: {
    color: '#fff',
    marginLeft: 12,
    width: '80%',
  }
});
