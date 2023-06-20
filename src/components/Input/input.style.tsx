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
        &:focus~label{
            transform: translateX(0px) translateY(-55px);
            color: ${Theme.azul};
        }
        &:valid~span{
            transform: translateX(-10px) translateY(-32px);
        }
        &:invalid~span{
            transform: translateX(-10px) translateY(-32px);
            color: ${Theme.red};
        }
    }
`;