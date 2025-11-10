import React from 'react';
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

interface PayPulseIconProps {
  size?: number;
  color?: 'gradient' | 'green' | 'white' | 'purple';
}

export const PayPulseIcon: React.FC<PayPulseIconProps> = ({ 
  size = 40, 
  color = 'gradient' 
}) => {
  const getColor = () => {
    switch (color) {
      case 'green': return '#14F195';
      case 'white': return '#FFFFFF';
      case 'purple': return '#9945FF';
      default: return 'url(#gradient)';
    }
  };

  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {color === 'gradient' && (
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#14F195" />
            <Stop offset="50%" stopColor="#9945FF" />
            <Stop offset="100%" stopColor="#00D4FF" />
          </LinearGradient>
        </Defs>
      )}
      
      {/* Outer pulse ring */}
      <Circle 
        cx="50" 
        cy="50" 
        r="42" 
        stroke={getColor()} 
        strokeWidth="2.5" 
        fill="none"
        opacity="0.25"
      />
      
      {/* Middle pulse ring */}
      <Circle 
        cx="50" 
        cy="50" 
        r="32" 
        stroke={getColor()} 
        strokeWidth="2.5" 
        fill="none"
        opacity="0.5"
      />
      
      {/* Lightning bolt - stylized "P" shape */}
      <Path
        d="M 55 22 L 38 48 L 50 48 L 46 78 L 63 52 L 51 52 Z"
        fill={getColor()}
      />
      
      {/* Center pulse dot */}
      <Circle 
        cx="50" 
        cy="50" 
        r="7" 
        fill={color === 'gradient' ? '#14F195' : getColor()}
      />
    </Svg>
  );
};

// Simplified version for small sizes
export const PayPulseIconSimple: React.FC<{ size?: number }> = ({ size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <Defs>
        <LinearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#14F195" />
          <Stop offset="100%" stopColor="#9945FF" />
        </LinearGradient>
      </Defs>
      
      {/* Single ring */}
      <Circle 
        cx="50" 
        cy="50" 
        r="40" 
        stroke="url(#simpleGradient)" 
        strokeWidth="4" 
        fill="none"
      />
      
      {/* Lightning bolt */}
      <Path
        d="M 55 25 L 40 50 L 50 50 L 45 75 L 60 50 L 50 50 Z"
        fill="url(#simpleGradient)"
      />
    </Svg>
  );
};
