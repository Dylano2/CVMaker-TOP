import { InputToEdit } from './InputToEdit.jsx'
import { MinusCircle } from '@phosphor-icons/react'

function FormationToEdit({ borderClassNames, formation, onDeleteFormation, onUpdateFormation }) {
  function handleUpdateFormation(e) {
    onUpdateFormation({ ...formation, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className={'relative border-2 rounded border-black p-1'}>
        <div
          className={
            'before:block before:absolute before:border-2 before:w-4 before:h-4 before:rounded-full before:bg-black  before:border-black before:top-1/2 before:-left-5 '
          }
        >
          <div className={borderClassNames}></div>
          <button onClick={() => onDeleteFormation(formation.id)} className={'absolute top-0 right-0'}>
            <MinusCircle size={32} />
          </button>
          <InputToEdit
            name={'nomDuDiplome'}
            classForTailwind={'font-bold text-lg'}
            onChange={handleUpdateFormation}
            valueToDisplay={formation.nomDuDiplome}
          />
          <div className={'flex gap-4'}>
            <InputToEdit
              name={'etablissement'}
              onChange={handleUpdateFormation}
              valueToDisplay={formation.etablissement}
            />
            <InputToEdit
              name={'villeObtention'}
              onChange={handleUpdateFormation}
              valueToDisplay={formation.villeObtention}
            />
          </div>
          <InputToEdit
            name={'dateObtention'}
            onChange={handleUpdateFormation}
            valueToDisplay={formation.dateObtention}
          />
        </div>
      </div>
    </>
  )
}

export default FormationToEdit
