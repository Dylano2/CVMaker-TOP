import { useState } from 'react'
import { InputToEdit } from './InputToEdit.jsx'

// eslint-disable-next-line react/prop-types
export function ExperienceToEdit() {
  const [dateDebut, setDateDebut] = useState('20-20-20')
  const [dateFin, setDateFin] = useState('20-20-40')
  const [ville, setVille] = useState('Toulouse')
  const [entreprise, setEntreprise] = useState('Ecorp')
  const [nomDuMetier, setNomDuMetier] = useState('Caissier')
  const [description, setDescritption] = useState('faire la caisse quoi')

  function handleChangeDateDebut(e) {
    setDateDebut(e.target.value)
  }
  function handleChangeDateFin(e) {
    setDateFin(e.target.value)
  }
  function handleChangeVille(e) {
    setVille(e.target.value)
  }
  function handleChangeEntreprise(e) {
    setEntreprise(e.target.value)
  }
  function handleChangeNomDuMetier(e) {
    setNomDuMetier(e.target.value)
  }
  function handleChangeDescription(e) {
    setDescritption(e.target.value)
  }

  const classForNomDuMetier = ' font-bold'
  return (
    <>
      <div className={'flex border-2 rounded border-black p-2 shadow-brutal5px05opacity '}>
        <div className={'border-2 border-black rounded h-fit my-auto p-1 bg-gray-950 bg-opacity-20'}>
          <InputToEdit valueToDisplay={dateDebut} onChange={handleChangeDateDebut} />
          <InputToEdit valueToDisplay={dateFin} onChange={handleChangeDateFin} />
        </div>

        <div className={'m-2'}>
          <InputToEdit
            valueToDisplay={nomDuMetier}
            onChange={handleChangeNomDuMetier}
            classForTailwind={classForNomDuMetier}
          />
          <div className={'flex gap-4'}>
            <InputToEdit
              valueToDisplay={entreprise}
              onChange={handleChangeEntreprise}
              classForTailwind={'uppercase font-medium tracking-tight text-sm'}
            />
            <InputToEdit valueToDisplay={ville} onChange={handleChangeVille} />
          </div>
          <InputToEdit valueToDisplay={description} onChange={handleChangeDescription} />
        </div>
      </div>
    </>
  )
}
