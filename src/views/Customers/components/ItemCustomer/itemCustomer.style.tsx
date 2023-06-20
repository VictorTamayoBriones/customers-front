import { Theme } from '@/theme';
import styled from 'styled-components';

export const ItemCustomerContainer = styled.div`
    width: 100%;
    margin: 10px 0;
    
    
    .main-record{
        display: flex;
        justify-content: space-between;
        border-top: solid 1px ${Theme.grisMedio};
        border-bottom: solid 1px ${Theme.grisMedio};
        &:hover{
            background: ${Theme.grisClaro};
            cursor: pointer;
        }
        div{
            padding: 10px 0;
            min-width: 200px;
            overflow: scroll;
            text-align: center;
        }
    }
`;