import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  character: {
    backgroundColor: '#2F2F2F',
    marginBottom: 22,
    padding: 6,
    borderRadius: 4,
  },
  characterInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  characterInfo: {
    flexDirection: 'row',
  },
  characterImg: {
    width: 70.36,
    height: 80,
  },
  nameWrapper: {
    marginLeft: 20,
    marginTop: 6,
  },
  name: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 16,
  },
  realName: {
    color: '#bbb',
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 14,
  },
  heart: {
    marginTop: 21.5,
    marginRight: 17.3,
  },
});