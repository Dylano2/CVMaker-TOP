import { useState } from 'react'
import { ExperienceToEdit } from './Editables/ExperienceToEdit.jsx'
import { PlusCircle, Rows, SquaresFour } from '@phosphor-icons/react'

const MAX_COUNT_EXPERIENCES = 6
const MIN_COUNT_EXPERIENCES_TOGGLE_BLOCK_LAYOUT = 3
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

  const [layoutList, setLayoutList] = useState(true)

  const experiencesLayout =
    !layoutList || experiences.length > MIN_COUNT_EXPERIENCES_TOGGLE_BLOCK_LAYOUT ? 'grid-cols-2' : 'grid-cols-1'

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
    <section className={'border-4 border-black flex-[2] shadow-brutal5px02opacity max-h-[50%] rounded'}>
      <div className={'relative font-medium text-2xl p-2 border-b-4 border-black'}>
        <h2>Experiences</h2>
        {experiences.length <= 3 && (
          <div className={'absolute top-0 right-3'}>
            <button
              className={!layoutList ? 'bg-black rounded bg-opacity-20' : undefined}
              onClick={() => setLayoutList(false)}
            >
              <SquaresFour size={24} color="#0a9283" weight="duotone" />
            </button>

            <button
              className={layoutList ? 'bg-black rounded bg-opacity-20' : undefined}
              onClick={() => setLayoutList(true)}
            >
              <Rows size={24} color="#0a9283" weight="duotone" />
            </button>
          </div>
        )}
      </div>

      <div className={'p-4 grid gap-2 ' + experiencesLayout}>
        {experiences.map((experience) => (
          <ExperienceToEdit
            key={'exp_' + experience.id}
            onUpdateExperience={onUpdate}
            experience={experience}
            onDeleteExperience={onDelete}
          />
        ))}

        {experiences.length < MAX_COUNT_EXPERIENCES && (
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
