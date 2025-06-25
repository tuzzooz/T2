import { Component } from "react";

type props = {
    botoes: string[]
    seletorView: Function
    tema: string
}

export default class BarraNavegacao extends Component<props> {
    render() {
        let tema = this.props.tema
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1"> Pet Lovers</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            {this.props.botoes.map((valor, indice) => (
                                <li key={indice} className="nav-item">
                                    <a className="nav-link" href="#" onClick={(e) => this.props.seletorView(valor, e)}>
                                        {valor}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
