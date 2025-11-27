export interface ModalCustomizadoProps {
 mostrarModalQuando: boolean;
 aoCancelar: () => void;
 titulo: string;
 corpo: string | React.ReactNode;
 textoBotaoConfirmar?: string;
 textoBotaoCancelamento?: string;
 aoConfirmar?: () => void;
 customizarBotoes?: boolean;
 exibirConteudoCentralizado?: boolean;
}
