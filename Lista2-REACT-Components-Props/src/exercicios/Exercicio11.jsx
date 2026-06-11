
function Perfil({ nome, email, foto }) {
  return (
    <div>
      <img src={foto} alt={nome} />
      <h2>{nome}</h2>
      <p>{email}</p>
    </div>
  )
}

function Exercicio11() {
  return (
    <Perfil
      nome="Daniel"
      email="Daniel@.Clovis"
      foto="https://i.pravatar.cc/80?img=1"
    />
  )
}

export default Exercicio11
