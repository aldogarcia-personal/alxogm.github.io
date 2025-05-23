import { useTranslation } from 'react-i18next'

function SelectLanguage (): JSX.Element {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string): void => {
    void i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      className='bg-0056B3 text-f5f5dc border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
    >
      <option value='es'>Español</option>
      <option value='en'>English</option>
    </select>
  )
}

export default SelectLanguage
