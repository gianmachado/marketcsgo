import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

class Home extends Component {
    state = {
        skins: [],
    };

    async componentDidMount() {
        const response = await api.get('skins');
        const data = response.data.map(skin => ({
            ...skin,
            priceFormatted: formatPrice(skin.preco),
        }));
        this.setState({ skins: data });
    }

    HandleAddProduct = skin => {
        const { dispatch } = this.props;

        dispatch({
            type: 'ADD_TO_CART',
            skin,
        });
    };

    render() {
        const { skins } = this.state;
        return (
            <ProductList>
                {skins.map(skin => (
                    <li key={skin.id}>
                        <img src={skin.img} alt={skin.title} />
                        <strong>{skin.title}</strong>
                        <span>{skin.priceFormatted}</span>

                        <button
                            type="button"
                            onClick={() => this.HandleAddProduct(skin)}
                        >
                            <div>
                                <MdAddShoppingCart size={16} color="#fff" /> 1
                            </div>
                            <span>ADICIONAR AO CARRINHO</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}

export default connect()(Home);
