import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Importa el hook useNavigate para la navegación
import { Regresar } from './icons'

const Login = (): JSX.Element => {
  const [showLogin, setShowLogin] = useState(true)
  const [identifier, setIdentifier] = useState('') // Cambiado a identifier
  const navigate = useNavigate()

  const handleCloseModal = (): void => {
    setShowLogin(false)
    navigate('/') // Redirige a la página principal
  }

  return (
    <div className=''>
      <h2>Inicia sesión en tu cuenta</h2>
      {showLogin && (
        <div className='fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg relative'>
            <button
              onClick={handleCloseModal}
              className='absolute top-2 right-2 p-2 bg-0056B3 px-4 py-2 rounded-full text-f5f5dc hover:bg-00449B'
            >
              <Regresar />
            </button>
            <h2 className='text-2xl mb-4'>Iniciar Sesión</h2>
            <form>
              <input
                type='text'
                placeholder='Usuario o Email'
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className='border mb-4 p-2 w-full'
                required
              />
              <input type='password' placeholder='Contraseña' required />
              <button type='submit' className='bg-0056B3 text-f5f5dc px-4 py-2'>
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
