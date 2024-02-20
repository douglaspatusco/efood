export type Restaurant = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

export interface Menu {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
