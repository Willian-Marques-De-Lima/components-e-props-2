function Comentario({ autor, mensagem }) {
  return (
    <div>
      <strong>{autor}</strong>
      <p>{mensagem}</p>
    </div>
  )
}

function ListaComentarios() {
  return (
    <div>
      <Comentario autor="Daniel" mensagem="Ótimo post, aprendi muito!" />
      <Comentario autor="Bruna" mensagem="Concordo, React é fantástico." />
      <Comentario autor="Luiz" mensagem="Aguardando o próximo conteúdo!" />
    </div>
  )
}

function Exercicio15() {
  return <ListaComentarios />
}

export default Exercicio15
