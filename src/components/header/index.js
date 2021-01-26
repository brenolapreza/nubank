import { HeaderWrapper, HeaderGroup, HeaderItem } from './style'
import LogoNubank from '../../assets/images/nubank-logo-3.png'
export default function Header(){
    return(
        <HeaderWrapper>
            <HeaderGroup>
                <HeaderItem>
                    <a href="/"><img src={LogoNubank} alt="Logo Nu"/></a>
                </HeaderItem>

                <HeaderItem>
                    <a href="/">Inicio</a>
                </HeaderItem>

                <HeaderItem>
                    <a href="/">Conta Digital</a>
                </HeaderItem>

                <HeaderItem>
                    <a href="/">Cartão de crédito</a>
                </HeaderItem>

                <HeaderItem>
                    <a href="/">Pix <span>novo</span></a>
                </HeaderItem>

                <HeaderItem>
                    <a href="/">Empréstimo</a>
                </HeaderItem>

                <HeaderItem>
                    <a href="/">Conta PJ</a>
                </HeaderItem>

                <HeaderItem>
                    <a href="/">Rewards</a>
                </HeaderItem>

                <HeaderItem>
                    <a href="/">Seguros <span>novo</span></a>
                </HeaderItem>

                <HeaderItem>
                    <a href="/">Sobre nós</a>
                </HeaderItem>

                <HeaderItem>
                    <a href="/">Carreiras</a>
                </HeaderItem>
    
            </HeaderGroup>
            <div>
                <HeaderItem>
                    <a href="/">Login</a>
                </HeaderItem>
            </div>
        </HeaderWrapper>
    )
}