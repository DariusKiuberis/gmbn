import React from 'react';
import { MantineProvider } from '@mantine/core';
import './App.css';
import Main from './components/pages/Main/Main.page';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App">
        <Main />
      </div>
    </MantineProvider>
  );
}

export default App;
