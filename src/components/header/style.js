import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display:flex;
    align-items:center;
    justify-content: space-between;

    width:100%;
    height:80px;

    border-bottom:1px solid #DCDCDC;
    
`
const HeaderGroup = styled.ul`
    display: flex;
    align-items:center;
    list-style:none;

    padding:0 2rem;

`
const HeaderItem = styled.li`
    padding:0 12px;
    margin-left: 5px;
    list-style:none;

    a {
        font-size:18px;
        text-decoration:none;
        color: rgba(17, 17, 17, 0.7);
        transition: .3s;

        &:hover {
            color: #BB7CD9;
        }
    }
    img {
        width:45px;
    }

    span {
        background-color:#E0CAE9;
        padding:3px 15px;
        border-radius:100px;
        color:#242424;
    }
`

export { HeaderWrapper, HeaderGroup, HeaderItem };