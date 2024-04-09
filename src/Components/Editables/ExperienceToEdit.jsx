import { InputToEdit } from './InputToEdit.jsx'
import { MinusCircle } from '@phosphor-icons/react'

// eslint-disable-next-line react/prop-types
export function ExperienceToEdit({ experience, onUpdateExperience, onDeleteExperience }) {
  function handleUpdateExerience(e) {
    const { name, value } = e.target
    onUpdateExperience({ ...experience, [name]: value })
  }

  const classForNomDuMetier = ' font-bold'
  return (
    <>
      <div className={'flex border-2 rounded border-black p-2 shadow-brutal5px05opacity relative'}>
        <button onClick={() => onDeleteExperience(experience.id)} className={'absolute top-0 right-0'}>
          <MinusCircle size={32} />
        </button>
        <div className={'border-2 border-black rounded h-fit my-auto p-1 bg-gray-950 bg-opacity-20'}>
          <InputToEdit
            valueToDisplay={experience.dateDebut}
            onChange={handleUpdateExerience}
            name={'dateDebut'}
            classForTailwind={''}
          />
          <InputToEdit
            valueToDisplay={experience.dateFin}
            onChange={handleUpdateExerience}
            name={'dateFin'}
            classForTailwind={'text-nowrap'}
          />
        </div>

        <div className={'ml-2'}>
          <InputToEdit
            valueToDisplay={experience.nomDuMetier}
            onChange={handleUpdateExerience}
            classForTailwind={classForNomDuMetier}
            name={'nomDuMetier'}
          />
          <div className={'flex gap-4'}>
            <InputToEdit
              valueToDisplay={experience.entreprise}
              onChange={handleUpdateExerience}
              classForTailwind={'uppercase font-medium tracking-tight text-sm'}
              name={'entreprise'}
            />
            <InputToEdit valueToDisplay={experience.ville} onChange={handleUpdateExerience} name={'ville'} />
          </div>
          <InputToEdit
            valueToDisplay={experience.description}
            type={'textarea'}
            onChange={handleUpdateExerience}
            name={'description'}
          />
        </div>
      </div>
    </>
  )
}
