import DarkModeToggle from "./DarkModeToggle";

function Settings() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Configuraciones</h1>
      <div className="flex flex-col items-center">
        <DarkModeToggle />
      </div>
    </div>
  );
}
export default Settings;
