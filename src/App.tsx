import React from 'react';
import './App.css';
import ChessBoard from './components/ChessBoard';
import AppContext from './provider/AppContext'
function App() {
  return (
    <>
      <AppContext.ContextProvider>
      <ChessBoard></ChessBoard>
      </AppContext.ContextProvider>
    </>
  );
}

export default App;
