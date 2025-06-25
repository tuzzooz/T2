import { Component } from "react";

type props = {
    tema: string;
};

export default class ListaCliente extends Component<props> {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-3">
                            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">Lista de Clientes</h4>
                                <button className="btn btn-light btn-sm">
                                    <i className="bi bi-plus"></i> Novo Cliente
                                </button>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>CPF</th>
                                                <th>Telefone</th>
                                                <th>Email</th>
                                                <th>Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>João Silva</td>
                                                <td>123.456.789-00</td>
                                                <td>(11) 99999-9999</td>
                                                <td>joao@email.com</td>
                                                <td>
                                                    <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
                                                    <button className="btn btn-sm btn-outline-danger">Excluir</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Maria Santos</td>
                                                <td>987.654.321-00</td>
                                                <td>(11) 88888-8888</td>
                                                <td>maria@email.com</td>
                                                <td>
                                                    <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
                                                    <button className="btn btn-sm btn-outline-danger">Excluir</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
