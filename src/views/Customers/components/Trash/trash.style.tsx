import { Theme } from '@/theme';
import styled from 'styled-components';

export const TrashContainer = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    padding: 20px;
    height: 100vh;
    overflow: scroll;
    border-right: solid 1px ${Theme.grisMedio};
    div{
        margin: 20px 0;
        background: ${Theme.grisMedio};
        border-radius: 3px;
        padding: 10px;
        button{
            width: 100%;
        }
    }
`;