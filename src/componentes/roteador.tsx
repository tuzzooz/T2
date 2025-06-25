import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaProdutos from "./listaProdutos";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaServicos from "./listaServiços";
import FormularioCadastroServico from "./formularioCadastroServiço";
import Pagamento from "./pagamento";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Home', 'Clientes', 'Produtos', 'Serviços', 'Pagamentos']} />
        
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card mt-4">
                                    <div className="card-header bg-primary text-white">
                                        <h3 className="mb-0">Sistema Pet Lovers</h3>
                                    </div>
                                    <div className="card-body text-center">
                                        <h4>Bem-vindo ao Sistema Pet Lovers</h4>
                                        <p className="lead">Gerencie clientes, produtos, serviços e pagamentos de forma simples e eficiente.</p>
                                        <div className="row mt-4">
                                            <div className="col-sm-6 col-md-3 mb-3">
                                                <div className="card bg-light">
                                                    <div className="card-body text-center">
                                                        <h5>Clientes</h5>
                                                        <p>Cadastre e gerencie seus clientes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3">
                                                <div className="card bg-light">
                                                    <div className="card-body text-center">
                                                        <h5>Produtos</h5>
                                                        <p>Controle seu estoque de produtos</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3">
                                                <div className="card bg-light">
                                                    <div className="card-body text-center">
                                                        <h5>Serviços</h5>
                                                        <p>Gerencie serviços oferecidos</p>
                                                        <br></br>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3">
                                                <div className="card bg-light">
                                                    <div className="card-body text-center">
                                                        <h5>Pagamentos</h5>
                                                        <p>Processe pagamentos dos clientes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastro Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastro Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastro Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Pagamentos') {
            return (
                <>
                    {barraNavegacao}
                    <Pagamento tema="#e3f2fd" />
                </>
            )
        }
    }
}
