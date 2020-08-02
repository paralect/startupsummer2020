import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    paddingRight: 26,
    paddingLeft: 26,
    flexDirection: 'column',
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    marginBottom: 20,
  },
  center: {
    alignItems: 'center',
  },
  characterIcon: {
    width: 150,
    height: 170,
  },
  img: {
    width: 150,
    height: 170,
  },
  nickAndFull: {
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 15,
    maxWidth: 140,
  },
  nickname: {
    fontSize: 18,
    lineHeight: 21,
    color: '#ffffff',
    marginBottom: 6,
    fontWeight: 'bold',
  },
  fullName: {
    fontSize: 12,
    lineHeight: 12,
    color: '#ffffff',
  },
  heartIcon: {
    fontSize: 20,
    margin: 15,
    color: '#bbbbbb',
  },
  heartIconClicked: {
    fontSize: 20,
    margin: 15,
    color: '#e62429',
  },
  firstBlock: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  description: {
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#bbbbbb',
    marginBottom: 20,
}
});
