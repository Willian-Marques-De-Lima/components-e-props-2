function Menu({ itens }) {
  return (
    <nav>
      {itens.map((item, index) => (
        <a key={index} href={item.href}>{item.label}</a>
      ))}
    </nav>
  )
}

function Exercicio19() {
  const itens = [
    { label: "Início",   href: "#" },
    { label: "Sobre",    href: "#" },
    { label: "Serviços", href: "#" },
    { label: "Contato",  href: "#" },
  ]

  return <Menu itens={itens} />
}

export default Exercicio19
