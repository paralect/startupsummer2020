import { StyleSheet } from 'react-native';
import { getBackgroundColor } from 'react-native/Libraries/LogBox/UI/LogBoxStyle';

export default StyleSheet.create({
  story: {
    flex: 1,
    backgroundColor: '#2F2F2F',
    borderRadius: 4,
    height: 92,
    marginBottom: 13,
  },
  story__text: {
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
  },

});
