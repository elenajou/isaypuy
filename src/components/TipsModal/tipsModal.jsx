export type Modal1Props = {
  name: string
  onClick: () => void
}

export const Modal1 = ({ name, onClick }: Modal1Props) => {
  const { remove } = useModal()

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={onClick}>Alert</button>
      <button onClick={remove}>Close</button>
    </div>
  )
}

export type Modal2Props = {
  age: string
  onClick: () => void
}

export const Modal2 = ({ age, onClick }: Modal2Props) => {
  const { remove } = useModal()

  return (
    <div>
      <h1>{age}</h1>
      <button onClick={onClick}>Alert</button>
      <button onClick={remove}>Close</button>
    </div>
  )
}