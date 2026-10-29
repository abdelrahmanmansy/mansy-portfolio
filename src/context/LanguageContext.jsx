import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { siteConfig } from '../config/site'

const LanguageContext = createContext({
  lang: 'ar',
  dir: 'rtl',
  toggleLang: () => {},
  setLang: () => {},
  t: (ar) => ar,
})

const updateMeta = (selector, content) => {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'ar'
    const stored = localStorage.getItem('mansy-lang')
    return stored === 'en' ? 'en' : 'ar'
  })

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    if (typeof document === 'undefined') return

    document.documentElement.lang = lang
    document.documentElement.dir = dir
    localStorage.setItem('mansy-lang', lang)

    const title = `${siteConfig.name[lang]} | ${siteConfig.title[lang]}`
    const description = siteConfig.seoDescription[lang]

    document.title = title
    updateMeta('meta[name="description"]', description)
    updateMeta('meta[property="og:title"]', title)
    updateMeta('meta[property="og:description"]', description)
    updateMeta('meta[name="twitter:title"]', title)
    updateMeta('meta[name="twitter:description"]', description)
    updateMeta('meta[property="og:locale"]', lang === 'ar' ? 'ar_EG' : 'en_US')
  }, [lang, dir])

  const setLang = (value) => setLangState(value === 'en' ? 'en' : 'ar')
  const toggleLang = () => setLangState((prev) => (prev === 'ar' ? 'en' : 'ar'))
  const t = (ar, en) => (lang === 'ar' ? ar : en)

  const value = useMemo(() => ({ lang, dir, toggleLang, setLang, t }), [lang, dir])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
