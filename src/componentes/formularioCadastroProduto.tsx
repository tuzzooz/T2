import { Component } from "react";

type props = {
    tema: string;
};

export default class FormularioCadastroProduto extends Component<props> {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mt-3">
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Cadastro de Produto</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-8 mb-3">
                                            <label className="form-label">Nome do Produto</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label">Preço</label>
                                            <input type="number" className="form-control" step="0.01" placeholder="0,00" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Descrição</label>
                                        <textarea className="form-control" rows={3}></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Categoria</label>
                                            <select className="form-select">
                                                <option>Selecionar categoria</option>
                                                <option>Ração</option>
                                                <option>Brinquedos</option>
                                                <option>Acessórios</option>
                                                <option>Medicamentos</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Estoque</label>
                                            <input type="number" className="form-control" />
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
