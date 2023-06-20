import { Theme } from '@/theme';
import styled from 'styled-components';

export const FormCustomersContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    h2{
        margin-bottom: 20px;
    }

    form{
        max-width: 500px;
        min-width: 300px;
        width: 50%;
        background: #fff;
        padding: 20px;
        border: solid 1px ${Theme.grisMedio};
        border-radius: 3px;
        overflow: hidden;
    }

    footer{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        .btn-cancel{
            width: 100%;
            button{
                border: solid 1px ${Theme.azul};
                background: #fff !important;
                color: ${Theme.azul};
                &:hover{
                    background: ${Theme.azul} !important;
                    color: #fff;
                }
            }
        }
        button{
            width: 100%;
            &:nth-child(2){
            }
        }
    }
`;