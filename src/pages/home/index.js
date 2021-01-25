import Header from '../../components/header'

import { SectionPrimary } from './style'

import ImageCelular from '../../images/img-celular.webp'

export default function Home(){
    return(
        <>
            <Header/>
            <section>
                <SectionPrimary>
                    <div>
                        <h1>Pix: um novo jeito de fazer transferências e pagamentos</h1>
                        <a href="/">Saiba como funciona</a>
                    </div>

                    <div>
                        <img src={ImageCelular} alt=""/>
                    </div>

                    <div>
                        { /*  FORMULARIO  */ }
                    </div>
                </SectionPrimary>
            </section>
        </>
    )
}