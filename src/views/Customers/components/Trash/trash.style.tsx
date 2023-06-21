import { Theme } from '@/theme';
import styled from 'styled-components';

interface Props{
    status: boolean
}

export const MainTrashContainer = styled.div`
    width: 250px;
    position: absolute;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .3s ease-in-out;
    .showTrash{
        position: absolute;
        top: 10px;
        left: 20px;
        border: none;
        background: ${Theme.red};
        color: #fff;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
    }
`;

export const TrashContainer = styled.aside<Props>`
    width: ${(props)=>props.status ? '250px' : '0px'};
    background: #fff;
    padding: 20px ${(props)=>props.status ? '20px' : '0px'};
    height: 100vh;
    overflow: scroll;
    border-right: solid 1px ${Theme.grisMedio};
    transition: all .3s ease-in-out;
    div{
        margin: 20px 0;
        background: ${Theme.azul};
        color: #fff;
        text-align: justify;
        border-radius: 3px;
        padding: 10px;
        button{
            width: 100%;
            cursor: pointer;
        }
    }
`;