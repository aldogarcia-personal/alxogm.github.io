import SelectLanguage from "./language.tsx";
import DarkModeToggle from "./DarkModeToggle.tsx";
import Landing from "../assets/images/landing.webp";

const LandingPage = () => {
  // Define el estado showLogin para mostrar el modal de inicio de sesión
  // Define el estado showLogin para mostrar el modal de inicio de sesión

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="bg-0056B3 text-f5f5dc p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">EffiAutoTask</h1>

          <div>
            <ul className="flex flex-center items-center ">
              <li className="">
                <DarkModeToggle />
              </li>
              <li className="m-4">
                <SelectLanguage />
              </li>
              <li>
                <a
                  className="bg-white text-0056B3 px-4 py-2 rounded hover:bg-gray-300 mr-4"
                  href="/account/login"
                >
                  Iniciar Sesión
                </a>
              </li>
              <li>
                <a
                  className="bg-white text-0056B3 px-4 py-2 rounded hover:bg-gray-300"
                  href="/account/register"
                >
                  Regístrate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Cuerpo */}
      <div className="flex justify-center items-center">
        <img src={Landing} alt="landing" className="w-10/12 h-1/4" />
      </div>

      <main className="py-20">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8">
            Bienvenido a Nuestra Plataforma
          </h2>
          <p className="text-lg mb-8">
            Descubre cómo podemos ayudarte a alcanzar tus objetivos con nuestra
            solución.
          </p>
        </section>

        {/* Características */}
        <section className="mt-20">
          <div className="grid grid-cols-3 gap-8">
            <div className="feature">Característica 1</div>
            <div className="feature">Característica 2</div>
            <div className="feature">Característica 3</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
