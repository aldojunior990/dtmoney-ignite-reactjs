
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal/index';
import { TransactionsProvider } from './TransactionsContext';



Modal.setAppElement('#root')

export function App() {
 
 
 
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function HandleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }
  function HandleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  
  return (

    <TransactionsProvider>

      <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={HandleCloseNewTransactionModal} 
      />
      <GlobalStyle />
      
    </TransactionsProvider>
      
  );
}

