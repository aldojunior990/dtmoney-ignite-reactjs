
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'



export function Header(){
    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />      
            </Content>
        </Container>
    )
}