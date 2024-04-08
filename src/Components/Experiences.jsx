import { useState } from 'react'
import { ExperienceToEdit } from './Editables/ExperienceToEdit.jsx'
import { PlusCircle } from '@phosphor-icons/react'

export function Experiences() {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      ville: 'dijon',
      dateDebut: '20-20-2005',
      dateFin: '2',
      entreprise: 'Ecorp',
      nomDuMetier: 'Caissier',
      description: 'e',
    },
    {
      id: 2,
      ville: 'Lyon',
      dateDebut: '20-20-2005',
      dateFin: '2',
      entreprise: 'google',
      nomDuMetier: 'googleman',
      description: 'e',
    },
  ])

  const [idCount, setIdCount] = useState(experiences.length + 1)

  function onUpdate(updatedExperience) {
    setExperiences((previousExperiences) => {
      return previousExperiences.map((experience) => {
        if (experience.id === updatedExperience.id) {
          return { ...experience, ...updatedExperience }
        }
        return experience
      })
    })
  }

  function onDelete(idToDelete) {
    setExperiences((previousExperiences) => {
      return previousExperiences.filter((experince) => experince.id !== idToDelete)
    })
  }

  return (
    <section className={'border-4 border-black flex-[2] max-h-[50%] rounded'}>
      <h2 className={'font-medium text-2xl p-2 border-b-4 border-black'}>Experiences</h2>
      <div className={'p-4 grid gap-2 ' + (experiences.length <= 3 ? 'grid-cols-1' : 'grid-cols-2')}>
        {experiences.map((experience) => (
          <ExperienceToEdit
            key={experience.id}
            onUpdateExperience={onUpdate}
            experience={experience}
            onDeleteExperience={onDelete}
          />
        ))}

        {experiences.length < 8 && (
          <button
            onClick={() =>
              setExperiences(() => {
                setIdCount(idCount + 1)
                return [...experiences, { ...experiences[experiences.length - 1], id: idCount }]
              })
            }
          >
            <PlusCircle size={32} />
          </button>
        )}
      </div>
    </section>
  )
}
