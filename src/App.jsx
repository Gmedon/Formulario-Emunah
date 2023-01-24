import './App.css'
import { Header } from './componentes/Header/Header'
import { Footer } from './componentes/Footer/Footer'
import logoemunah from './img/logoemunah.png'
function App() {
  function HandleClearClick(e) {
    e.preventDefault()
    let inputs = document.querySelectorAll('.input-required')
    for (let i in inputs) {
      inputs[i].value = ''
    }
  }
  return (
    <div className="App">
      <Header src={logoemunah} />
      <main>
        <form action="https://api.sheetmonkey.io/form/dTPcxtkktw5j3xZqDeMFCB" method="POST" target='_Blank'>
          <fieldset>
            <legend>Cadastro</legend>
            <label>Data do cadastro<br />
              <input type="text" name='Data do cadastro' required className='input-required' />
            </label>
            <hr />
            <label>
              Nome da criança<br />
              <input type="text" name='Nome da criança' required className='input-required' />
            </label><br />
            <label>
              Idade<br />
              <input type="number" name='Idade' required className='input-required' />
            </label><br />
            <label>
              Roupa/Calçado<br />
              <input type="text" name='Roupa/Calçado' required className='input-required' />
            </label><br />
            <label>
              CPF<br />
              <input type="text" name='CPF' required className='input-required' />
            </label><br />
            <label>
              Nome do responsavel<br />
              <input type="text" name='Nome do responsavel' required className='input-required' />
            </label>
          </fieldset>
          <fieldset className='label-atividades'>
            <legend>Atividades Emunah</legend>
            <label>
              <input type="checkbox" name='Ballet' />
              Ballet
            </label><hr />
            <label>
              <input type="checkbox" name='Jiu-Jitsu' />
              Jiu-Jitsu
            </label><hr />
            <label>
              <input type="checkbox" name='Teatro' />
              Teatro
            </label><hr />
            <label>
              <input type="checkbox" name='Informatica' />
              Informatica
            </label><hr />
            <label>
              <input type="checkbox" name='Eu lidero' />
              Eu lidero
            </label><hr />
            <label>
              <input type="checkbox" name='Libras' />
              Libras
            </label><hr />
            <label>
              <input type="checkbox" name='Reforço' />
              Reforço
            </label>
          </fieldset>
          <fieldset className='label-atividades'>
            <legend>Atividades Musica</legend>
            <label>
              <input type="checkbox" name='Violão' />
              Violão
            </label><hr />
            <label>
              <input type="checkbox" name='Canto Coral' />
              Canto Coral
            </label><hr />
            <label>
              <input type="checkbox" name='Musicalização' />
              Musicalização
            </label><hr />
            <label>
              <input type="checkbox" name='Flauta Doce' />
              Flauta Doce
            </label><hr />
            <label>
              <input type="checkbox" name='Violino' />
              Violino
            </label>
          </fieldset><hr />
          <div>
            <input type="checkbox" className='input-autorizo' name='Imagem' />
            Autorizo o uso de imagens, para ser utilizados em publicações ou experiências.
          </div>
          <hr />
          <button type='submit' className='bt'>Enviar</button>
          <button className='bt' onClick={HandleClearClick}>Limpar</button>
        </form><hr />
      </main>
      <Footer src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.0753120992706!2d-43.51337617081666!3d-23.01270876468252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa37d0d6c31fddd2!2zMjPCsDAwJzQ1LjgiUyA0M8KwMzAnNDYuMiJX!5e0!3m2!1spt-BR!2sbr!4v1672770622880!5m2!1spt-BR!2sbr' />
    </div >
  )
}

export default App
