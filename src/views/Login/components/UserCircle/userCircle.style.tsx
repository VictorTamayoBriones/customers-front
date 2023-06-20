import { Theme } from '@/theme';
import styled from 'styled-components';

export const UserCircleContainer = styled.section`
    width: 80px;
    height: 80px;
    background: ${Theme.azul};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: solid 1px ${Theme.grisMedio};
    box-shadow: 2px 2px 9px rgba(179, 179, 179, 0.3);
    margin: 20px auto;

    svg{
        stroke: #fff;
        width: 50px;
        height: 50px;
    }
`;