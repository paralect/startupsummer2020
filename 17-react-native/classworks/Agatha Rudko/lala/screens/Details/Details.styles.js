import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
  title: {
    fontSize: 36,
    marginBottom: 5,
    color: 'white',
    textTransform: 'uppercase',
  },
  itemText: {
    fontSize: 18,
    color: 'white',
  },
  img: {
      height: 170,
      width: 150,
    },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#2F2F2F',
    margin: 10,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    flexDirection: 'row',
  },
  content: {
    padding: 10,
  },
  comicsImg: {
    height: 80,
    width: 70,
  }
});
