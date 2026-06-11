// Exercício 12 - Componente CardProduto
function CardProduto({ nome, preco, descricao }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {preco}</strong>
    </div>
  )
}

function Exercicio12() {
  return (
    <CardProduto
      nome="Notebook Pro"
      preco={4299}
      descricao="Processador i7, 16GB RAM, SSD 512GB. Ideal para programadores."
    />
  )
}

export default Exercicio12
