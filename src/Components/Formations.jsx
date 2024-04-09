import FormationToEdit from './Editables/FormationToEdit.jsx'
import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'

const MAX_COUNT_FORMATIONS = 4
const MIN_COUNT_FORMATIONS_TOGGLE_BLOCK_LAYOUT = 2
export function Formations({ initialFormations }) {
  const [formations, setFormations] = useState(initialFormations)

  const [idCount, setIdCount] = useState(formations.length + 1)

  function onUpdate(updatedFormation) {
    setFormations((prevFormations) => {
      return prevFormations.map((formation) => {
        if (formation.id === updatedFormation.id) {
          return { ...formation, ...updatedFormation }
        }
        return formation
      })
    })
  }

  function onDelete(idToDelete) {
    setFormations((previousFormations) => previousFormations.filter((formation) => formation.id !== idToDelete))
  }

  const borderClassTop = ' w-0.5 h-1/2 -left-[0.813rem] top-2 absolute bg-black'
  const borderClassBottom =
    ' w-0.5 h-1/2 -left-[0.813rem] top-2 absolute' +
    ' before:bg-black before:h-[173%] before:w-0.5 before:top-full before:absolute'
  const borderClassTopAndBottom =
    ' w-0.5 h-1/2 -left-[0.813rem] top-2 absolute bg-black ' +
    ' before:bg-black before:h-[173%] before:w-0.5 before:top-full before:absolute'

  return (
    <section className={'border-4 border-black flex-[2] max-h-[50%] rounded shadow-brutal5px02opacity'}>
      <h2 className={'font-medium text-2xl p-2 border-b-4 border-black'}>Formations</h2>
      <div
        className={
          'p-6 grid gap-6 ' +
          (formations.length <= MIN_COUNT_FORMATIONS_TOGGLE_BLOCK_LAYOUT ? 'grid-cols-1' : 'grid-cols-2')
        }
      >
        {formations.map((formation, index) => {
          return (
            <FormationToEdit
              key={'formation_' + formation.id}
              onUpdateFormation={onUpdate}
              formation={formation}
              onDeleteFormation={onDelete}
              borderClassNames={
                formations.length === 1
                  ? ''
                  : formations.length <= MIN_COUNT_FORMATIONS_TOGGLE_BLOCK_LAYOUT
                    ? index === 0
                      ? borderClassBottom
                      : index === formations.length - 1
                        ? borderClassTop
                        : borderClassTopAndBottom
                    : index === 0 || index === 1
                      ? borderClassBottom
                      : index === formations.length - 1 || index === formations.length - 2
                        ? borderClassTop
                        : borderClassTopAndBottom
              }
            />
          )
        })}

        {formations.length < MAX_COUNT_FORMATIONS && (
          <button
            onClick={() =>
              setFormations(() => {
                setIdCount(idCount + 1)
                return [...formations, { ...formations[formations.length - 1], id: idCount }]
              })
            }
          >
            <PlusCircle size={32} />
          </button>
        )}

        {/*<FormationToEdit borderClassNames={borderClass} />*/}
        {/*<FormationToEdit borderClassNames={borderClass + ' bg-black'} />*/}
        {/*<FormationToEdit borderClassNames={'bg-black w-0.5 h-1/2 border-black -left-[0.813rem] top-2 absolute'} />*/}
      </div>
    </section>
  )
}
