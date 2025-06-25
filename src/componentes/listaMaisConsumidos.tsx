import { Component } from "react";

type props = {
    tema: string;
};

export default class ListaMaisConsumidos extends Component<props> {
    render() {
        return (
            <div className="container mt-4">
                <h3>Top Produtos e Serviços</h3>
                <ul className="list-group">
                    <li className="list-group-item">Vacinação - 45 vezes</li>
                    <li className="list-group-item">Ração Premium - 38 unidades</li>
                    <li className="list-group-item">Banho - 35 vezes</li>
                </ul>
            </div>
        );
    }
}
