import { Component } from "react";

type props = {
    tema: string;
};

export default class ListaProdutos extends Component<props> {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-3">
                            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">Produtos Disponíveis</h4>
                                <button className="btn btn-light btn-sm">
                                    <i className="bi bi-plus"></i> Novo Produto
                                </button>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Ração Golden</h5>
                                                <p className="card-text">Ração premium para cães adultos</p>
                                                <p className="text-primary fw-bold">R$ 89,90</p>
                                                <div className="d-flex gap-2">
                                                    <button className="btn btn-sm btn-outline-primary">Editar</button>
                                                    <button className="btn btn-sm btn-outline-danger">Excluir</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Brinquedo de Borracha</h5>
                                                <p className="card-text">Brinquedo resistente para cães</p>
                                                <p className="text-primary fw-bold">R$ 25,50</p>
                                                <div className="d-flex gap-2">
                                                    <button className="btn btn-sm btn-outline-primary">Editar</button>
                                                    <button className="btn btn-sm btn-outline-danger">Excluir</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Petiscos Premium</h5>
                                                <p className="card-text">Petiscos naturais para recompensa</p>
                                                <p className="text-primary fw-bold">R$ 15,90</p>
                                                <div className="d-flex gap-2">
                                                    <button className="btn btn-sm btn-outline-primary">Editar</button>
                                                    <button className="btn btn-sm btn-outline-danger">Excluir</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
