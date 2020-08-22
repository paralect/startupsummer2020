import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#202020',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 21,
  },
  logo: {
    marginBottom: 21,
  },
  content: {
    width: '100%',
  },
  characterInfo: {
    flexDirection: 'row',
  },
  characterImg: {
    width: 150,
    height: 170,
    marginRight: 18,
  },
  nameContainer: {
    marginTop: 24,
  },
  characterName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 13,
  },
  description: {
    fontWeight: 'bold',
    color: '#bbb',
    fontSize: 12,
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  comicsItem: {
    width: '100%',
    height: 92,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingLeft: 6,
    paddingRight: 13,
    backgroundColor: '#2f2f2f',
    marginBottom: 13,
  },
  comicsImg: {
    width: 52,
    height: 80,
    marginRight: 12,
  },
  comicsName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    width: 240,
  }
});
