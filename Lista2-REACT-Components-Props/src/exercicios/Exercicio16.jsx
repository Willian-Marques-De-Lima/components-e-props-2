function CardComImagem({ imagem, titulo, texto }) {
  return (
    <div>
      <img src={imagem} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{texto}</p>
    </div>
  )
}

function Exercicio16() {
  return (
    <CardComImagem
      imagem="https://picsum.photos/seed/card/400/200"
      titulo="Paisagem Incrível"
      texto="Uma foto gerada aleatoriamente passada como prop para o componente."
    />
  )
}

export default Exercicio16
