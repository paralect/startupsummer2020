import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2f2f2f',
    borderRadius: 4,
    padding: 6
  },
  characterIcon: {
    width: 70,
    height: 80,
  },
  img: {
   width: 70,
   height: 80,
  },
  nickAndFull: {
    flexDirection: 'column',
    marginLeft: 20,

  },
  nickname: {
    fontFamily: 'Roboto Condensed, serif',
    fontSize: 14,
    lineHeight: 16,
    color: '#fffffF',
  },
  fullName: {
    fontFamily: 'Roboto Condensed, serif',
    fontSize: 12,
    lineHeight: 12,
    color: '#ffffff',
  },
  heartIcon: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.5)',
    margin: 15,
  },
  first: {
    flexDirection: 'row'
  }
});
