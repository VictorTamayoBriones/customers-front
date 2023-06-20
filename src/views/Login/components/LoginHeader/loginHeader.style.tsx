import { Theme } from '@/theme';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background: ${Theme.azul};
    padding: 15px 0;
    border-bottom: solid 1px ${Theme.grisMedio};
    h2{
        font-weight: 400;
        text-align: center;
        color: #fff;
    }
`;