import { useState } from 'react'
import Exercicio11 from './exercicios/Exercicio11'
import Exercicio12 from './exercicios/Exercicio12'
import Exercicio13 from './exercicios/Exercicio13'
import Exercicio14 from './exercicios/Exercicio14'
import Exercicio15 from './exercicios/Exercicio15'
import Exercicio16 from './exercicios/Exercicio16'
import Exercicio17 from './exercicios/Exercicio17'
import Exercicio18 from './exercicios/Exercicio18'
import Exercicio19 from './exercicios/Exercicio19'
import Exercicio20 from './exercicios/Exercicio20'

const exercicios = [
  { num: 11, componente: 'Perfil',         props: 'nome, email, foto',          conceito: 'Props com imagem',          ex: <Exercicio11 /> },
  { num: 12, componente: 'CardProduto',    props: 'nome, preco, descricao',      conceito: 'Card estruturado',          ex: <Exercicio12 /> },
  { num: 13, componente: 'ListaUsuarios',  props: 'nome, idade (múltiplos)',     conceito: 'Composição de componentes', ex: <Exercicio13 /> },
  { num: 14, componente: 'Post',           props: 'titulo, autor, conteudo',     conceito: 'Artigo via props',          ex: <Exercicio14 /> },
  { num: 15, componente: 'Comentario',     props: 'autor, mensagem',             conceito: 'Lista de componentes',      ex: <Exercicio15 /> },
  { num: 16, componente: 'CardComImagem',  props: 'imagem, titulo, texto',       conceito: 'Card com imagem',           ex: <Exercicio16 /> },
  { num: 17, componente: 'TabelaSimples',  props: 'dados (array de objetos)',    conceito: 'Props com array + .map()', ex: <Exercicio17 /> },
  { num: 18, componente: 'Aluno',          props: 'nome, nota',                  conceito: 'Condicional via props',     ex: <Exercicio18 /> },
  { num: 19, componente: 'Menu',           props: 'itens (array)',               conceito: 'Lista de links via props',  ex: <Exercicio19 /> },
  { num: 20, componente: 'Layout',         props: 'titulo, conteudo, empresa…',  conceito: 'Composição aninhada',       ex: <Exercicio20 /> },
]

function App() {
  const [ativo, setAtivo] = useState(0)
  const ex = exercicios[ativo]

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-wrap">
            <span className="logo-icon">⚛</span>
            <div>
              <p className="logo-title">Components II</p>
              <p className="logo-sub">Lista 02 · Props</p>
            </div>
          </div>
        </div>
        <nav className="nav-list">
          {exercicios.map((e, i) => (
            <button
              key={e.num}
              className={`nav-item ${ativo === i ? 'nav-item--active' : ''}`}
              onClick={() => setAtivo(i)}
            >
              <span className="nav-num">{e.num}</span>
              <div className="nav-info">
                <span className="nav-label">{e.componente}</span>
                <span className="nav-hint">{e.conceito}</span>
              </div>
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">
        <div className="content-inner">

          <div className="breadcrumb">
            <span>Lista 02</span>
            <span className="bc-sep">›</span>
            <span>Exercício {ex.num}</span>
            <span className="bc-sep">›</span>
            <span className="bc-active">{ex.componente}</span>
          </div>

          <div className="ex-header">
            <h1 className="ex-title">{ex.componente}</h1>
            <p className="ex-conceito">{ex.conceito}</p>
            <div className="props-row">
              <span className="props-label">props:</span>
              {ex.props.split(',').map((p, i) => (
                <span key={i} className="prop-chip">{p.trim()}</span>
              ))}
            </div>
          </div>

          <div className="output-card">
            <div className="output-header">
              <div className="output-dots">
                <span className="dot r" /><span className="dot y" /><span className="dot g" />
              </div>
              <span className="output-file">Exercicio{String(ex.num).padStart(2,'0')}.jsx</span>
            </div>
            <div className="output-body">
              {ex.ex}
            </div>
          </div>

          <div className="ex-nav">
            <button className="btn-nav" disabled={ativo === 0} onClick={() => setAtivo(a => a - 1)}>
              ← Anterior
            </button>
            <div className="nav-progress">
              {exercicios.map((_, i) => (
                <button
                  key={i}
                  className={`prog-dot ${i === ativo ? 'prog-dot--on' : ''}`}
                  onClick={() => setAtivo(i)}
                  aria-label={`Ir para exercício ${exercicios[i].num}`}
                />
              ))}
            </div>
            <button className="btn-nav" disabled={ativo === exercicios.length - 1} onClick={() => setAtivo(a => a + 1)}>
              Próximo →
            </button>
          </div>

        </div>
      </main>
    </div>
  )
}

export default App
