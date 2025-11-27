import { Modal } from "react-bootstrap"
import "./ModalCustomizado.css"
import type { ModalCustomizadoProps } from "../../types/ModalCustomizadoProps"


export default function ModalCustomizado({
    mostrarModalQuando,
    aoCancelar,
    titulo,
    exibirConteudoCentralizado,
    corpo,
    customizarBotoes,
    textoBotaoCancelamento,
    textoBotaoConfirmar,
    aoConfirmar

}: ModalCustomizadoProps) {
    return (
        <Modal
            style={{ fontFamily: "Bellota, system-ui" }}
            show={mostrarModalQuando}
            onHide={aoCancelar}
            centered={exibirConteudoCentralizado}
        >
            <Modal.Header><Modal.Title>{titulo}</Modal.Title> </Modal.Header>
            <Modal.Body>{corpo}</Modal.Body>
            <Modal.Footer>
                {
                    customizarBotoes && (
                        <button onClick={aoCancelar} className='botaoModalCancelar'>
                            {textoBotaoCancelamento || "Cancelar"}
                        </button>
                    )
                }
                <button onClick={customizarBotoes ? aoConfirmar : aoCancelar} className='botaoSubmitModal'>
                    {customizarBotoes ? textoBotaoConfirmar : "OK"}
                </button>
            </Modal.Footer>
        </Modal>
    )
}

