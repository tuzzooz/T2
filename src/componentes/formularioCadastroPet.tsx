import { Component } from "react";

type props = {
    tema: string;
};

export default class FormularioCadastroPet extends Component<props> {
    render() {
        return (
            <div className="container mt-4">
                <h3>Cadastro de Pet</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nome do Pet</label>
                        <input type="text" className="form-control" placeholder="Ex: Rex" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Espécie</label>
                        <input type="text" className="form-control" placeholder="Cachorro, Gato, etc" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Raça</label>
                        <input type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Cadastrar Pet</button>
                </form>
            </div>
        );
    }
}
