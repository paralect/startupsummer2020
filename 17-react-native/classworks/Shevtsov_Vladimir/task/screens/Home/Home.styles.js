import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 2,
  }
});
