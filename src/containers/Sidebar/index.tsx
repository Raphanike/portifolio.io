import App from "../../App"
import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao,BotaoTema,SidebarContainer } from "./styles"

type Props = {
  trocaTema: () => void;
}

const  Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
    <Avatar/>
    <Titulo fontSize={20}>Raphael M.C</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>
        Raphanike
    </Paragrafo>
    <Descricao tipo="principal" fontSize={12}>
    Full-Stack Java
    </Descricao>
    <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
