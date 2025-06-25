import { Component } from "react";

type props = {
    tema: string;
};

export default class FormularioBuscarTutor extends Component<props> {
    render() {
        return (
            <div className="container mt-4">
                <h3>Buscar Tutor</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nome ou Email do Tutor</label>
                        <input type="text" className="form-control" placeholder="Digite o nome ou email" />
                    </div>
                    <button type="submit" className="btn btn-info">Buscar</button>
                </form>
            </div>
        );
    }
}
