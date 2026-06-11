
function Aluno({ nome, nota }) {
  const aprovado = nota >= 6

  return (
    <div>
      <p>Aluno: {nome}</p>
      <p>Nota: {nota}</p>
      <p>Situação: {aprovado ? "✅ Aprovado" : "❌ Reprovado"}</p>
    </div>
  )
}

function Exercicio18() {
  return (
    <div>
      <Aluno nome="Pedro" nota={8} />
      <Aluno nome="Juliana" nota={4} />
      <Aluno nome="Marcos" nota={6} />
    </div>
  )
}

export default Exercicio18
