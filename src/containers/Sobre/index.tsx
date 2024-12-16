import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim </Titulo>
    <Paragrafo tipo="secundario">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quae ipsum deserunt consectetur. Deleniti sapiente quibusdam quo nihil iste voluptatum sit quas amet dicta ratione, alias reprehenderit, deserunt delectus consequuntur.</Paragrafo>
    <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=Raphanike&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Raphanike&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default Sobre
