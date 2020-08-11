import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    flexGrow: 1,

  },
  header: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 1,
    marginTop: 22,
    justifyContent: 'space-between',
    marginLeft: 32,
    marginRight: 18,
  },
  name: {
    flex: 1,
    flexWrap: 'wrap',
    flexGrow: 1,
    fontSize: 18,
    lineHeight: 21,
    color: '#fff',
  },
  itemText: {
    fontSize: 18,
    color: '#fff'
  },
  img: {
    width: 150,
    height: 170.56,
    borderRadius: 6,
  },
  heroDescription: {
    marginTop: 10,
  },
  heroDescription__text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#BBBBBB',
    marginLeft: 32,
    marginRight: 18,
  },
  comics: {
    marginTop: 20,
    marginLeft: 32,
    marginRight: 18,
  },
  comics__header: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  story: {
    flex: 1,
    backgroundColor: '#2F2F2F',
    borderRadius: 4,
    padding: 6,
    marginBottom: 13,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  story__img: {

    height: 80,
    width: 52,
  },
  story__description: {
    flex: 10,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
    marginRight: 12,
    marginLeft: 12,
  }
});
