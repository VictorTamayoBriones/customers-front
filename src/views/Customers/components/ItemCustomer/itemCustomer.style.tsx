import { Theme } from '@/theme';
import styled from 'styled-components';

export const ItemCustomerContainer = styled.div`
    width: 100%;
    margin: 10px 0;
    
    .main-record{
        padding: 10px 0;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        justify-items: center;
        align-items: center;
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

    .version{
        padding: 10px 0;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        justify-items: center;
        background: #00808052;
        align-items: center;
        border-top: solid 1px teal;
        border-bottom: solid 1px teal;
        button{
            padding: 5px;
        }
    }

    /* 
    <div className="version">
        <div><p>{version.full_name}</p></div>
        <div><p>{version.nss}</p></div>
        <div><p>{version.rfc}</p></div>
        <div><p>{version.address}</p></div>
        <div><p>{version.phone}</p></div>
    </div> 
    */
`;