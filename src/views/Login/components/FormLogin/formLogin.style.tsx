import { Theme } from '@/theme';
import styled from 'styled-components';

export const LoginForm = styled.form`
    width: 60%;
    height: 50%;
    background: #ffffff;
    border: solid 1px ${Theme.grisMedio};
    border-radius: 5px;
    box-shadow: 2px 2px 9px rgba(179, 179, 179, 0.3);
    max-width: 800px;
    max-height: 1000px;
    overflow: hidden;
`;