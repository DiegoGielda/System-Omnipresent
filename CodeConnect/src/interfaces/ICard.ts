interface ICard {
  id: number;
  imagem_capa: string;
  titulo: string;
  resumo: string;
  linhas_de_codigo: number;
  compartilhamentos: number;
  comentarios: number;
  usuario: {
    imagem: string;
    nome: string;
  };
}

export default ICard;