import { Titulo as TtuloEstilo } from "./styles"

export type Props = {
  children: string
  fontSize?: number
}
const Titulo = (props: Props) => <TtuloEstilo fontSize={props.fontSize}>{props.children}</TtuloEstilo>


export default Titulo
