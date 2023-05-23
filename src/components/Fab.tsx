import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  title: string;
  align?: 'left' | 'right' | 'center';
  onPress?: () => void;
}

const Fab = ({title, align = 'left', onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...style.btnContainer,
        ...(align === 'left'
          ? style.btnCL
          : align === 'right'
          ? style.btnCR
          : style.btnReset),
      }}>
      <Text style={style.btnText}>
        {title === 'reset' ? (
          <Icon name="reload1" size={25} color="snow" />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#306B34',
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    bottom: 20,
  },
  btnReset: {
    left: '45%',
    backgroundColor: '#B6174B',
  },
  btnCL: {
    left: 20,
  },
  btnCR: {
    right: 20,
  },
  btnText: {
    color: 'snow',
    fontSize: 25,
    fontWeight: '600',
    padding: 5,
    alignSelf: 'center',
  },
});

export default Fab;
