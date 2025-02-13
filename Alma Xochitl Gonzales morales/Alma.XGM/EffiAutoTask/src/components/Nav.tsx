import SelectLanguage from "./language";
import DropdownUser from "./DropdownUser";
import DarkModeToggle from "./DarkModeToggle";

function Nav() {
  return (
    <nav className="bg-nav-light dark:bg-nav-dark flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <a
          href="/home"
          className="text-0056B3 text-xl font-bold dark:text-f5f5dc"
        >
          EffiAutoTask
        </a>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a
            href="/home"
            className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/tasks"
            className="text-0056B3 no-underline hover:text-gray-300 p-4 dark:text-f5f5dc dark:hover:text-gray-400"
          >
            Tasks
          </a>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <SelectLanguage />
        <DropdownUser userName="aldo" />
      </div>
    </nav>
  );
}

export default Nav;
