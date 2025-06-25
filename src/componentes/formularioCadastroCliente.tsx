import { Component } from "react";

type props = {
    tema: string;
};

export default class FormularioCadastroCliente extends Component<props> {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mt-3">
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Cadastro de Cliente</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Nome Completo</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">CPF</label>
                                            <input type="text" className="form-control" placeholder="000.000.000-00" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Telefone</label>
                                            <input type="text" className="form-control" placeholder="(00) 00000-0000" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 mb-3">
                                            <label className="form-label">Endereço</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">CEP</label>
                                            <input type="text" className="form-control" placeholder="00000-000" />
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button type="submit" className="btn btn-primary">Salvar</button>
                                        <button type="button" className="btn btn-secondary">Cancelar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
