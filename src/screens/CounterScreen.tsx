import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Fab from '../components/Fab';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>Counter: {count}</Text>

      <Fab title="+" onPress={() => setCount(count + 1)} />
      <Fab title="reset" align="center" onPress={() => setCount(0)} />
      <Fab title="-" align="right" onPress={() => setCount(count - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#F3FFC6',
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    color: '#1C5253',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CounterScreen;
