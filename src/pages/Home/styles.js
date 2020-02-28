import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 4px;
        padding: 20px;

        img {
            align-self: center;
            width: 250px;
        }

        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
        }

        > span {
            font-size: 13px;

            margin: 5px 0;
        }

        button {
            background: #339eff;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.1, '#339eff')};
            }

            div {
                display: flex;
                align-items: center;
                padding: 10px;
                background: rgba(0, 0, 0, 0.1);

                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
    }
`;
