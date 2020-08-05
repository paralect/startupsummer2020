import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#202020',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    margin: 5,
    height: 170,
    width: 150,
  },
  description: {
    width: 300,
    color: '#fff',
  },
  header: {
    height: 40,
    width: 105,
    marginTop: 21,
    marginBottom: 20,
  },
  mainBlock: {
    flexDirection: 'row',
    marginBottom: 10,
    width: 300,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    margin: 18,
  },
  icon: {
    marginLeft: 18,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    width: 323,
  },
  button: {
    borderRadius: 4,
    width: 323,
    height: 92,
    marginBottom: 15,
    flexDirection: 'row',
    backgroundColor: '#2f2f2f',
  },
  imgCom: {
    margin: 5,
    height: 80,
    width: 70,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    margin: 12,
  },
});
