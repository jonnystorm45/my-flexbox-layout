import React from 'react';
import { View, ViewStyle } from 'react-native';

interface ColumnProps {
  children: React.ReactNode;
  style?: ViewStyle; // Optional style for custom styling
}

const Column: React.FC<ColumnProps> = ({ children, style }) => {
  return (
    <View style={[{ flexDirection: 'column', alignItems: 'center' }, style]}>
      {children} {/* Render the children (Boxes) */}
    </View>
  );
};

export default Column;
