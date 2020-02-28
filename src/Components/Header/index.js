import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { Container, Cart } from './styles';

import Logo from '../../assets/logo.png';
import { connect } from 'react-redux';

function Header({ cartSize }) {
    return (
        <Container>
            <Link to="/">
                <img src={Logo} alt="Logotipo" width="200px" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingCart size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);
