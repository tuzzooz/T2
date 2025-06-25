import { Component } from "react";

type props = {
    tema: string;
};

export default class FormularioAtualizarPet extends Component<props> {
    render() {
        return (
            <div className="container mt-4">
                <h3>Atualizar Pet</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">ID do Pet</label>
                        <input type="text" className="form-control" placeholder="Digite o ID para buscar" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Novo Nome</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nova Raça</label>
                        <input type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-warning">Atualizar Pet</button>
                </form>
            </div>
        );
    }
}
