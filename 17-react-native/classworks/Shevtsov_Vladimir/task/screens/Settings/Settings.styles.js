import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    color: '#fff',
    backgroundColor: '#151515',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 21,
    color: '#fff',
  },
  listItem: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    color: '#fff',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'bold',
    backgroundColor: '#2f2f2f',
    borderRadius: 4,
  },
  poster: {
    width: 70,
    height: 80,
    borderRadius: 2,
  }
});
