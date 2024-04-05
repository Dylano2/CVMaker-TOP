import './App.css'
import { CVFile } from './Components/CVFile.jsx'

function App() {
  const colorPicker = false
  const randomizedData = false
  const draggableElement = false
  const web2Pdf = false
  const toggleData = false
  return (
    <>
      <div className={'flex flex-col absolute'}>
        <label>
          <input type={'checkbox'} checked={colorPicker} />
          {' Faire un color picker '}
        </label>{' '}
        <label>
          <input type={'checkbox'} checked={randomizedData} />
          {' Randomisez la data du cv '}
        </label>{' '}
        <label>
          <input type={'checkbox'} checked={draggableElement} />
          {' element draggable '}
        </label>{' '}
        <label>
          <input type={'checkbox'} checked={web2Pdf} />
          {' export possible en pdf '}
        </label>{' '}
        <label>
          <input type={'checkbox'} checked={toggleData} />
          {' ajouter / supprimer des data '}
        </label>
      </div>
      <CVFile />
    </>
  )
}

export default App
