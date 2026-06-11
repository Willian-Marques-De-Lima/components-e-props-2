function Usuario({ nome, idade }) {
  return (
    <div>
      <p>Nome: {nome} — Idade: {idade}</p>
    </div>
  )
}

function ListaUsuarios() {
  return (
    <div>
      <Usuario nome="Daniel" idade={28} />
      <Usuario nome="Bruna" idade={34} />
      <Usuario nome="Luiz" idade={21} />
    </div>
  )
}

function Exercicio13() {
  return <ListaUsuarios />
}

export default Exercicio13
