import { Theme } from '@/theme';
import styled from 'styled-components';

export const TableContainer = styled.div`
    width: 90%;
    max-height: 80vh;
    margin: 100px auto 20px auto;
    display: flex;
    flex-direction: column;
    border: solid 1px ${Theme.grisMedio};
    border-radius: 3px;
    overflow: scroll;
`;