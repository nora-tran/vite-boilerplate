import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './AppRouter';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
