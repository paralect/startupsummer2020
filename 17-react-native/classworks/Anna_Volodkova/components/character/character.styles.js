import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2f2f2f',
    borderRadius: 4,
    padding: 6,
    marginBottom: 15,
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
    marginTop: 15,
    maxWidth: 240,
  },
  nickname: {
    fontSize: 14,
    lineHeight: 16,
    color: '#ffffff',
    marginBottom: 4,
    fontWeight: 'bold',
    maxWidth: 240,
  },
  fullName: {
    fontSize: 12,
    lineHeight: 12,
    color: '#ffffff',
  },
  heartIcon: {
    fontSize: 20,
    marginTop: 15,
    marginRight: 15,
    color: '#bbbbbb',
  },
  heartIconClicked: {
    fontSize: 20,
    marginTop: 15,
    marginRight: 15,
    color: '#e62429',
  },
  first: {
    flexDirection: 'row'
  }
});
