import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Card from './src/components/Card';
import theme from './src/theme';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <ThemeProvider theme={theme}>
            <Card amount="R$100,00" status="PAGO" />
            <Card amount="R$100,00" status="EM_ABERTO" />
            <Card amount="R$100,00" status="EM_ATRASO" />
            <Card amount="R$100,00" status="REVERTIDO" />
          </ThemeProvider>
        </View>
      </SafeAreaView>
    </>
  );
}
