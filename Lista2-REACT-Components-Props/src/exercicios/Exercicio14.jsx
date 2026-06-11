function Post({ titulo, autor, conteudo }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p>Por: {autor}</p>
      <p>{conteudo}</p>
    </article>
  )
}

function Exercicio14() {
  return (
    <Post
      titulo="Atividade React"
      autor="Daniel"
      conteudo="aprendi como criar componentes e passar props. É incrível como o React organiza o código!"
    />
  )
}

export default Exercicio14
