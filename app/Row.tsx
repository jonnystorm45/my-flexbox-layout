import React from 'react';
import { View, ViewStyle } from 'react-native';

interface RowProps {
  children: React.ReactNode;
  style?: ViewStyle; // Optional style for custom styling
}

const Row: React.FC<RowProps> = ({ children, style }) => {
  return (
    <View style={[{ flexDirection: 'row', justifyContent: 'center' }, style]}>
      {children} {/* Render the children (Columns) */}
    </View>
  );
};

export default Row;
