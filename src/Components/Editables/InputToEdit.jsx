import { useState } from 'react'

const MAX_INPUT = 40
// eslint-disable-next-line react/prop-types
export function InputToEdit({ valueToDisplay, onChange, classForTailwind, name }) {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <>
      {isEditing ? (
        <input
          className={classForTailwind}
          onBlur={() => {
            setIsEditing(false)
          }}
          name={name ? name : ''}
          value={valueToDisplay}
          onChange={onChange}
          autoFocus
          maxLength={MAX_INPUT}
          size={valueToDisplay.length}
        />
      ) : (
        <p
          className={classForTailwind}
          onClick={() => {
            setIsEditing(true)
          }}
        >
          {valueToDisplay}
        </p>
      )}
    </>
  )
}
