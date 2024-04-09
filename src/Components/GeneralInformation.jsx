import { useState } from 'react'
import { InputToEdit } from './Editables/InputToEdit.jsx'
import { MapPin, MicrosoftOutlookLogo, PhoneCall } from '@phosphor-icons/react'

const ICON_SIZE = 20
const COMMON_INPUT_CLASS = 'min-h-4 '

export function GeneralInformation({
  initialName,
  initialsurName,
  initialcvTitle,
  initialemail,
  initialtelephone,
  initiallocation,
}) {
  const [name, setName] = useState(initialName)
  const [surName, setSurName] = useState(initialsurName)
  const [cvTitle, setCvTitle] = useState(initialcvTitle)
  const [email, setEmail] = useState(initialemail)
  const [telephone, setTelephone] = useState(initialtelephone)
  const [location, setLocation] = useState(initiallocation)

  const nameStyleClassForTailWind = COMMON_INPUT_CLASS + 'w-full text-center overflow-hidden text-2xl font-bold'
  const dataInformationClassForTailWind = COMMON_INPUT_CLASS + ' w-fit'

  function handleOnChangeName(e) {
    setName(e.target.value)
  }

  function handleOnChangeSurName(e) {
    setSurName(e.target.value)
  }
  function handleOnChangeCvTitle(e) {
    setCvTitle(e.target.value)
  }
  function handleOnChangeEmail(e) {
    setEmail(e.target.value)
  }
  function handleOnChangeTelephone(e) {
    setTelephone(e.target.value)
  }
  function handleOnChangeLocation(e) {
    setLocation(e.target.value)
  }

  return (
    <section className={'border-4 border-black flex-1 flex flex-col rounded shadow-brutal5px02opacity'}>
      <div className={'flex w-full justify-center border-b-4 border-black p-4 gap-16 '}>
        <InputToEdit valueToDisplay={name} onChange={handleOnChangeName} classForTailwind={nameStyleClassForTailWind} />
        <InputToEdit
          valueToDisplay={surName}
          onChange={handleOnChangeSurName}
          classForTailwind={nameStyleClassForTailWind}
        />
      </div>

      <div className={'mx-auto p-8 text-3xl border-2 border-black rounded my-4 shadow-brutal5px05opacity'}>
        <InputToEdit valueToDisplay={cvTitle} onChange={handleOnChangeCvTitle} />
      </div>

      <div className={'grid grid-cols-3 border-t-2 border-black '}>
        <div className={'flex justify-center border-r-2 border-black pt-1'}>
          <MicrosoftOutlookLogo size={ICON_SIZE} onClick={() => setEmail('email')} />
          <InputToEdit
            valueToDisplay={email}
            onChange={handleOnChangeEmail}
            classForTailwind={dataInformationClassForTailWind}
          />
        </div>

        <div className={'flex justify-center border-r-2 border-black pt-1'}>
          <PhoneCall size={ICON_SIZE} onClick={() => setTelephone('066666')} />
          <InputToEdit
            valueToDisplay={telephone}
            onChange={handleOnChangeTelephone}
            classForTailwind={dataInformationClassForTailWind}
          />
        </div>

        <div className={'flex justify-center pt-1'}>
          <MapPin size={ICON_SIZE} onClick={() => setLocation('paris')} />
          <InputToEdit
            valueToDisplay={location}
            onChange={handleOnChangeLocation}
            classForTailwind={dataInformationClassForTailWind}
          />
        </div>
      </div>
    </section>
  )
}
