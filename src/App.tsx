import styled from 'styled-components';
import styles from 'styled-components'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal'
import { useState } from 'react';


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
    <>
      <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal  
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={HandleCloseNewTransactionModal}>
                <h2>cadastrar</h2>
            </Modal>
      <GlobalStyle />
    </>
  );
}

