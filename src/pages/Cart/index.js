import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Subtotal</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img
                                src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png"
                                alt="Item"
                            />
                        </td>
                        <td>
                            <strong>AWP Dragon Lore</strong>
                            <span>R$15000,00</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#339eff"
                                    />
                                </button>
                                <input type="number" readOnly value={1} />
                                <button type="button">
                                    <MdAddCircleOutline
                                        size={20}
                                        color="#339eff"
                                    />
                                </button>
                            </div>
                        </td>

                        <td>
                            <strong>R$3000,00</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#339eff" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>
            <footer>
                <button type="button"> Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>R$1920,58</strong>
                </Total>
            </footer>
        </Container>
    );
}
