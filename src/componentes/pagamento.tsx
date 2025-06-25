import { Component } from "react";

type props = {
    tema: string;
};

export default class Pagamento extends Component<props> {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mt-3">
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Processamento de Pagamento</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Nome do Cliente</label>
                                            <select className="form-select">
                                                <option>Selecionar cliente</option>
                                                <option>João Silva</option>
                                                <option>Maria Santos</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Valor Total</label>
                                            <input type="number" className="form-control" step="0.01" placeholder="0,00" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Forma de Pagamento</label>
                                        <div className="d-flex gap-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="pagamento" id="credito" />
                                                <label className="form-check-label" htmlFor="credito">
                                                     Crédito
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="pagamento" id="debito" />
                                                <label className="form-check-label" htmlFor="debito">
                                                     Débito
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="pagamento" id="pix" />
                                                <label className="form-check-label" htmlFor="pix">
                                                     PIX
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="pagamento" id="dinheiro" />
                                                <label className="form-check-label" htmlFor="dinheiro">
                                                     Dinheiro
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Observações</label>
                                        <textarea className="form-control" rows={2}></textarea>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button type="submit" className="btn btn-success">Confirmar Pagamento</button>
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
