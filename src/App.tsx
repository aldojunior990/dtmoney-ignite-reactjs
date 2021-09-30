import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal/index";
import { TransactionsProvider } from "./hooks/useTransactions";
import { ButtonDarkMode } from "./components/ButtonDarkMode";

Modal.setAppElement("#root");

export function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function HandleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function HandleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header />
      <ButtonDarkMode setDarkMode={setDarkMode} darkMode={darkMode} />
      <Dashboard onOpenNewTransactionModal={HandleOpenNewTransactionModal} />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={HandleCloseNewTransactionModal}
      />

      <GlobalStyle darkMode={darkMode} />
    </TransactionsProvider>
  );
}
