import { Theme } from '@/theme';
import styled from 'styled-components';

export const InputContainer = styled.section`
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    position: relative;

    label{
        bottom: 5px;
        left: 5px;
        pointer-events: none;
        color: ${Theme.grisMedio};
        transform: translateX(5px) translateY(-25px);
        transition: all .3s ease-in-out;
    }

    input{
        height: 30px;
        padding: 0 5px;
        &:focus~label{
            transform: translateX(0px) translateY(-55px);
            color: ${Theme.azul};
        }
        &:valid~label{
            transform: translateX(0px) translateY(-55px) !important;
            color: ${Theme.green} !important;
        }
        &:invalid~label{
            transform: translateX(0px) translateY(-55px);
            color: ${Theme.red};
        }
        &:empty~label{
            transform: translateX(5px) translateY(-25px);
            color: ${Theme.azul};
        }
    }
`;