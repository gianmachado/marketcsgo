import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png"
                    alt="Dragon Lore"
                />
                <strong>AWP Dragon Lore</strong>
                <span>R$15000,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 1
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png"
                    alt="Dragon Lore"
                />
                <strong>AWP Dragon Lore</strong>
                <span>R$15000,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 1
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png"
                    alt="Dragon Lore"
                />
                <strong>AWP Dragon Lore</strong>
                <span>R$15000,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 1
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png"
                    alt="Dragon Lore"
                />
                <strong>AWP Dragon Lore</strong>
                <span>R$15000,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" /> 1
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}
