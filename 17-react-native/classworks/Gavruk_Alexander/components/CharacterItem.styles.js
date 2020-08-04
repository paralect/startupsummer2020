import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 92,
    paddingVertical: 6,
    paddingLeft: 6,
    paddingRight: 16,
    backgroundColor: '#2f2f2f',
    flexDirection: 'row',
    marginTop: 15,
  },
  image: {
    width: 70,
    height: 80,
  },
  nameContainer: {
    marginTop: 6,
    marginLeft: 20,
  },
  characterName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
  fullname: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#bbbbbb'
  },
  heart: {
    marginLeft: 'auto',
    marginTop: 6,
  }
});
