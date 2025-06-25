import { Component } from "react";

type props = {
    tema: string;
};

export default class ListaServicos extends Component<props> {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-3">
                            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                                <h4 className="mb-0">Serviços Disponíveis</h4>
                                <button className="btn btn-light btn-sm">
                                    <i className="bi bi-plus"></i> Novo Serviço
                                </button>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Serviço</th>
                                                <th>Descrição</th>
                                                <th>Preço</th>
                                                <th>Duração</th>
                                                <th>Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Banho Completo</td>
                                                <td>Banho com shampoo especial e secagem</td>
                                                <td>R$ 45,00</td>
                                                <td>60 min</td>
                                                <td>
                                                    <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
                                                    <button className="btn btn-sm btn-outline-danger">Excluir</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Tosa Higiênica</td>
                                                <td>Corte de pelos em áreas específicas</td>
                                                <td>R$ 30,00</td>
                                                <td>30 min</td>
                                                <td>
                                                    <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
                                                    <button className="btn btn-sm btn-outline-danger">Excluir</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Consulta Veterinária</td>
                                                <td>Consulta com veterinário especializado</td>
                                                <td>R$ 120,00</td>
                                                <td>45 min</td>
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
