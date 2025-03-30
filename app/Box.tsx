import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BoxProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,               // Fixed width to ensure consistency
    height: 100,              // Fixed height
    justifyContent: 'center', // Centers text vertically
    alignItems: 'center',     // Centers text horizontally
    margin: 5,                // Adds space between boxes
    padding: 10,              // Padding inside each box
    borderRadius: 5,          // Optional rounded corners
    backgroundColor: 'lightgray', // Background color for visibility
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Box;
