import { Theme } from '@/theme';
import styled from 'styled-components';

export const ItemCustomerContainer = styled.div`
    width: 100%;
    margin: 10px 0;
    
    
    .main-record{
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    div{
        div:has(.btn-delete){
            width: 80px !important;
            min-width: 50px !important;
            display: flex;
            div{
                width: 100%;
                min-width: 30px !important;
            }
        }
    }
    .btn-edit{
        button{
            width: 25px;
            height: 25px;
            background: ${Theme.orange} !important;
            display: flex;
            justify-content: center;
            align-items: center;
            svg{
                width: 20px;
                height: 20px;
            }
        }
    }

    .btn-delete{
        button{
            width:25px;
            height: 25px;
            background: ${Theme.red} !important;
            display: flex;
            justify-content: center;
            align-items: center;
            svg{
                width: 20px;
                height: 20px;
            }
        }
    }
`;