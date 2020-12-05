import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './src/Navigation/BottomNavigation'
import useCachedResources from './src/hooks/useCachedResources';
import GraphQLProvider from './lib/GraphQLProvider'

const App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) return null;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <GraphQLProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppNavigator />
        </ApplicationProvider>
      </GraphQLProvider>
      <StatusBar />
    </>
  )
};

export default App
