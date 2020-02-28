import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    padding: 25px;
    background: #fff;
    border-radius: 4px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: #339eff;
            color: #fff;
            border: 0;
            border-radius: 4px;
            padding: 10px;
            text-transform: uppercase;
            font-weight: bold;

            &:hover {
                background: ${darken(0.1, '#339eff')};
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #999;
        text-align: left;
        padding: 10px;
    }

    tbody td {
        padding: 10px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 180px;
    }

    strong {
        color: #333;
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 16px;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
            text-align: center;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
    }

    strong {
        font-size: 25px;
        margin-left: 3px;
    }
`;
