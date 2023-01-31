import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackRotas from './src/rotas/StackRotas';
export default function App() {
  return (
    <NavigationContainer>
      <StackRotas/>
    </NavigationContainer>
  );
}