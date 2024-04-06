import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'
import { ExperienceToEdit } from './Editables/ExperienceToEdit.jsx'

export function Experiences() {
  const [experienceCount, setExperienceCount] = useState(1)

  return (
    <section className={'border-4 border-black flex-[2] max-h-[50%] rounded'}>
      <h2 className={'font-medium text-2xl p-2 border-b-4 border-black'}>Experiences</h2>
      <div className={'p-4 flex flex-col gap-2'}>
        {[...Array(experienceCount)].map((experience, index) => (
          <ExperienceToEdit key={'experience_' + index}></ExperienceToEdit>
        ))}
        <button onClick={() => setExperienceCount(experienceCount + 1)}>
          <PlusCircle size={32} />
        </button>
      </div>
    </section>
  )
}
