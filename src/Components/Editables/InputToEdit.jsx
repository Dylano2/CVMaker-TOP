import { useState } from 'react'

const MAX_INPUT = 50
// eslint-disable-next-line react/prop-types
export function InputToEdit({ type, valueToDisplay, onChange, classForTailwind, name }) {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <>
      {isEditing ? (
        type === 'textarea' ? (
          <textarea
            className={classForTailwind}
            onBlur={() => {
              setIsEditing(false)
            }}
            name={name ? name : ''}
            value={valueToDisplay}
            onChange={onChange}
            autoFocus
            maxLength={MAX_INPUT}
          />
        ) : (
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
        )
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
