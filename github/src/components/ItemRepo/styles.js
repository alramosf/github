import styled from "styled-components";

export const ItemContainer = styled.div`

    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p{ 
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a {
        color:#ff0000;
        text-decoration: none;
        margin-top:20px;

        &:hover{
            color:#ffffff;
        }
    }

    a.remove {
        color:#ff0000;
        text-decoration: none;
        margin-top:20px;

        &:hover{
            color:#ffffff;
        }
    }
    

    hr{
        color: #fafafa60;
        margin: 20px 0;
    }
`