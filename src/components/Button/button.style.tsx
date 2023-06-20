import { Theme } from '@/theme';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background: ${Theme.azul};
    color: #fff;
    width: 100%;
    border: none;
    padding: 10px 0;
    border-radius: 3px;
    cursor: pointer;
    &:hover{
        opacity: .9;
    }
`;