import Header from '../../components/header'

import { SectionPrimary, Col1, Col2, Col3 } from './style'

import ImageCelular from '../../assets/images/img-celular.webp'

export default function Home(){
    return(
        <>
            <Header/>
            <section>
                <SectionPrimary>
                    <Col1>
                        <h1>Pix: um novo jeito de fazer transferências e pagamentos</h1>
                        <a href="/">Saiba como funciona</a>
                    </Col1>

                    <Col2>
                        <img src={ImageCelular} alt=""/>
                    </Col2>

                    <Col3>
                        { /*  FORMULARIO  */ }
                        <input type="text"/>
                    </Col3>
                </SectionPrimary>
            </section>
        </>
    )
}