import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function DropdownUser ({ userName }: { userName: string }): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [logOut, setLogOut] = useState(false)
  const navigate = useNavigate()

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen)
  }

  const handleLogOutClick = (): void => {
    setIsOpen(false)
    setLogOut(true)
  }

  const confirmLogOut = (): void => {
    setLogOut(false)
    navigate('/')
  }

  const cancelLogOut = (): void => {
    setLogOut(false)
  }

  const goToSettings = (): void => {
    setIsOpen(false)
    navigate('/settings')
  }

  return (
    <div className='relative'>
      <button onClick={toggleDropdown} className='flex flex-col items-center'>
        <span className='text-f5f5dc dark:text-white mt-1'>{userName}</span>
      </button>
      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-20'>
          <button
            onClick={goToSettings}
            className='block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            Configuraciones
          </button>
          <button
            onClick={handleLogOutClick}
            className='block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            Cerrar Sesión
          </button>
        </div>
      )}
      {logOut && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30'>
          <div className='bg-white p-6 rounded-lg dark:bg-gray-800'>
            <h2 className='text-2xl mb-4 dark:text-white'>
              ¿Seguro que deseas cerrar sesión?
            </h2>
            <div className='flex space-x-4'>
              <button
                onClick={confirmLogOut}
                className='bg-red-500 text-white px-4 py-2 rounded dark:bg-red-600'
              >
                Confirmar
              </button>
              <button
                onClick={cancelLogOut}
                className='bg-gray-500 text-white px-4 py-2 rounded dark:bg-gray-600'
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownUser
