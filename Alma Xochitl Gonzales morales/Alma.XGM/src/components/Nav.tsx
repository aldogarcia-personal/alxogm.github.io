import SelectLanguage from "./language";

function Nav() {
  return (
    <nav className="bg-nav-blue  flex justify-between items-center p-4 shadow-md">
      <h1 className="text-nav-logo">Alma Xochitl Gonzales Morales</h1>
      <img src="" alt="" />
      <div className="flex items-center space-x-4">
        <a
          href="/inicio"
          className="text-nav-link no-underline hover:text-nav-hover p-4 "
        >
          Inicio
        </a>
        <ul className="flex space-x-6">
          <li>
            <a
              href="/Research"
              className="text-nav-link no-underline hover:text-nav-hover p-4 "
            >
              investigación
            </a>
          </li>
          <li>
            <a
              href="/Outreach"
              className="text-nav-link no-underline hover:text-nav-hover p-4 "
            >
              divulgación
            </a>
          </li>
          <li>
            <a
              href="/Teaching"
              className="text-nav-link no-underline hover:text-nav-hover p-4 "
            >
              Enseñanza
            </a>
          </li>
          <li>
            <a
              href="/Blog"
              className="text-nav-link no-underline hover:text-nav-hover p-4 "
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-nav-link no-underline hover:text-nav-hover p-4 "
            >
              contacto
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-nav-link no-underline hover:text-nav-hover p-4 "
            >
              CV
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <SelectLanguage />
      </div>
    </nav>
  );
}

export default Nav;
