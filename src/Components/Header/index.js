import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { Container, Cart } from './styles';

import Logo from '../../assets/logo.png';

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={Logo} alt="Logotipo" width="200px" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>3 itens</span>
                </div>
                <MdShoppingCart size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}
