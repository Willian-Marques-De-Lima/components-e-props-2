function TabelaSimples({ dados }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.idade}</td>
            <td>{item.cidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function Exercicio17() {
  const dados = [
    { nome: "Ana",     idade: 22, cidade: "São Paulo" },
    { nome: "Bruno",   idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Carla",   idade: 27, cidade: "Curitiba" },
    { nome: "Diego",   idade: 35, cidade: "Belo Horizonte" },
  ]

  return <TabelaSimples dados={dados} />
}

export default Exercicio17
