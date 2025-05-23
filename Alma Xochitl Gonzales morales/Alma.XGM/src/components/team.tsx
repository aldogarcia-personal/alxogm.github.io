import { Desplegar } from './icons'
interface userName {
  userName: string
}

const DropdownUser: React.FC<userName> = ({ userName }): JSX.Element => {
  return (
    <>
      <img
        src={`../assets/users/${userName}.jpeg`}
        alt='user'
        className='h-10 w-10 rounded-full'
      />
      <Desplegar />
      <label htmlFor='' />
    </>
  )
}

export default DropdownUser
