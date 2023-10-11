import { FormEvent, useState } from 'react'

import { FormVagas as FormVagasEstilo, BotaoEstilo, Input } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}
const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormVagasEstilo onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoEstilo type="submit">Pesquisar</BotaoEstilo>
    </FormVagasEstilo>
  )
}
export default FormVagas
