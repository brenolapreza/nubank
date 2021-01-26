import styled from 'styled-components';

const SectionPrimary = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    align-items:center;
    justify-items: center;

    min-height: calc(100vh - 4rem);
    width:100%;
    padding:60px;

    background-color:#8A3FBE;
    @media (max-width:800px){
        display: flex;
        align-items: center;
        flex-direction: column;

        padding:10px;
    }
`
const Col1 = styled.div`
    a{
        color:#fff;
        text-decoration:none;
        font-size:17px;
        
        &::after {
            content: '';
            display: block;
            width: 0;
            height: 1px;
            background: #fff;
            transition: width .7s;
        }
        &:hover::after{
            width: 35%;
        }
    }
    h1{
        font-size: 45px;
        color: #fff;
        padding-bottom:15px;
        @media (max-width: 786px){
            font-size: 30px;
        };
    }

`
const Col2 = styled.div`
    img{
        width: 480px;
        @media (max-width: 786px){
            width: 300px;
        };
    }
`
const Col3 = styled.div`

`
export { SectionPrimary, Col1, Col2, Col3 };