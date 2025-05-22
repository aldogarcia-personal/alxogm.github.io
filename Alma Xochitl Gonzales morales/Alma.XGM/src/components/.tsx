import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate para la navegación
import { Regresar } from "./icons.tsx";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(true); // Define el estado showRegister para mostrar el modal de registro

  const handleCloseModal = () => {
    setShowRegister(false);
    navigate("/"); // Redirige a la página principal
  };
  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulación de registro exitoso
    setTimeout(() => {
      setShowRegister(false); // Cambia el estado a false para cerrar el modal
      navigate("/account/login"); // Redirigir al formulario de inicio de sesión
    }, 1000);
  };

  return (
    showRegister && (
      <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center  ">
        <div className="bg-white p-6 rounded-lg relative ml-auto h-screen w-8/12 ">
          <h2 className="text-2xl mb-4">Regístrate</h2>
          <span>
            ¿Ya tienes una cuenta?{" "}
            <a href="/account/login" className="text-0056B3">
              Inicia sesión
            </a>
          </span>
          <form
            onSubmit={handleRegisterSubmit}
            className="flex flex-col justify-between "
          >
            <input
              type="text"
              placeholder="Username"
              className="border mb-4 p-2 w-1/2 h-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border mb-4 p-2 w-1/2"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="border mb-4 p-2 w-1/2"
            />
            <button
              type="submit"
              className="bg-0056B3 text-f5f5dc px-4 py-2 w-2/12"
            >
              Registrarse
            </button>
            <button
              onClick={handleCloseModal}
              className="absolute right-8 p-2 bg-0056B3 px-4 py-2 rounded-full text-f5f5dc hover:bg-00449B"
            >
              <Regresar />
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default Register;
