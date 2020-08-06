import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  title: {
    fontSize: 36,
    marginBottom: 5,
  },

  item: {
    flexDirection: 'row',
    width: 300,
    height: 92,
    marginTop: 7.5,
    marginBottom: 7.5,
    marginLeft: 26,
    marginRight: 26,
    backgroundColor: '#2F2F2F',
    borderRadius: 4,
  },

  img: {
    width: 70,
    height: 80,
    alignSelf: 'center',
    marginLeft: 6,
  },

  description: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 12,
    marginLeft: 20,
  },

  description__name: {
    flex: 1,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
  },

  view: {
    flex: 1,
    marginRight: -50,
  }
});
