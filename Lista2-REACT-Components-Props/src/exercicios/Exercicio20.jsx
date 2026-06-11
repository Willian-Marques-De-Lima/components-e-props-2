function Header({ titulo, subtitulo }) {
  return (
    <header>
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </header>
  )
}

function Main({ conteudo }) {
  return (
    <main>
      <p>{conteudo}</p>
    </main>
  )
}

function Footer({ empresa, ano }) {
  return (
    <footer>
      <p>© {ano} — {empresa}</p>
    </footer>
  )
}

function Layout({ titulo, subtitulo, conteudo, empresa, ano }) {
  return (
    <div>
      <Header titulo={titulo} subtitulo={subtitulo} />
      <Main conteudo={conteudo} />
      <Footer empresa={empresa} ano={ano} />
    </div>
  )
}

function Exercicio20() {
  return (
    <Layout
      titulo="Meu Site React"
      subtitulo="Feito com componentes e props"
      conteudo="Este é o corpo principal da página. O Layout organiza Header, Main e Footer com props."
      empresa="React Aprendizado"
      ano={2026}
    />
  )
}

export default Exercicio20
