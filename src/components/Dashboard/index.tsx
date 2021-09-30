import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Button, Container } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Dashboard({onOpenNewTransactionModal}: HeaderProps){
    return(
        <Container>
                <Summary/>
                <Button onClick={onOpenNewTransactionModal}>
                 Nova transação
                </Button>
                <TransactionsTable />
        </Container>
    )
}