import React from 'react';
import { StyleSheet } from 'react-native';
import theme from './theme';

const regStyles = StyleSheet.create({
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  indicator: {
    fontSize: 12,
    fontWeight: '600',
    padding: 6,
    textTransform: 'uppercase',
    fontFamily: 'Maax',
  },
  indicatorBorderOn: {
    borderBottomWidth: 3,
    borderBottomColor: theme.colors.pink,
  },
  indicatorBorderOff: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.white,
  },
});

export default regStyles;
