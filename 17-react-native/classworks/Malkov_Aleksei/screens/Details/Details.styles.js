import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#202020',
    paddingTop: 21,
  },
  header: {
    flexDirection: 'row',
  },
  photo: {
    marginRight: 18,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    lineHeight: 21,
    fontWeight: 'bold',
    fontFamily: 'RobotoCondensed_700Bold',
  },
  likebtn: {
    marginTop: 10,
  },
  itemText: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  biography: {
    maxWidth: 323,
    fontSize: 12,
    lineHeight: 14,
    color: '#BBBBBB',
    fontFamily: 'RobotoCondensed_700Bold',
  },
  comicsContainer: {
    maxWidth: 323,
  },
  comicsTitle: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    lineHeight: 21,
    fontWeight: 'bold',
    fontFamily: 'RobotoCondensed_700Bold',
  },
  comic: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
    backgroundColor: '#2F2F2F',
    padding: 6,
  },
  comicPoster: {
    maxWidth: 53,
  },
  comicTitle: {
    fontSize: 14,
    lineHeight: 16,
    color: '#ffffff',
    fontFamily: 'RobotoCondensed_700Bold',
    marginLeft: 6,
  },
});
