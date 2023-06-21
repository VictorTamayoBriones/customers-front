import { Theme } from '@/theme';
import styled from 'styled-components';

export const CustomersContainer = styled.div`
    width: 100vw;
    height: 100vh;

    .btnCreateCustomer{
        button{
            width: 120px !important;
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }

    .btnCloseSession{
        button{
            width: 120px !important;
            position: absolute;
            top: 50px;
            right: 10px;
            background: ${Theme.red};
        }
    }
`;