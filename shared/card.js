import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card (props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#dcdce3',
    shadowOffset: { width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  }
})