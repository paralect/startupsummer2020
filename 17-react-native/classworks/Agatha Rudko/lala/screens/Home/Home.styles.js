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
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    marginLeft: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 14,
  },
  img: {
    height: 80,
    width: 70,
  }
});
