import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { navLinks, siteConfig } from '../config/site'

const Navbar = () => {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean)

    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const line = window.scrollY + window.innerHeight * 0.3
      let current = sections[0]?.id ?? 'hero'
      for (const section of sections) {
        if (section.offsetTop <= line) current = section.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-paper transition-colors duration-300 ${
        scrolled || open ? 'border-ink' : 'border-line'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 text-start">
          <span className="grid h-8 w-8 place-items-center border border-ink font-mono text-[10px] tracking-[0.08em]">
            AM
          </span>
          <span className="hidden sm:block">
            <span className="font-display block text-base leading-tight">{siteConfig.name[lang]}</span>
            <span className="mono-label block text-[9px] text-ink-soft">{siteConfig.title[lang]}</span>
          </span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`mono-label relative py-1.5 transition-colors ${
                  isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {link[lang]}
                {isActive && <span className="absolute inset-x-0 -bottom-px h-px bg-accent" />}
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-mono text-[11px]" role="group" aria-label={t('اللغة', 'Language')}>
            <button
              onClick={() => setLang('ar')}
              aria-pressed={lang === 'ar'}
              className={lang === 'ar' ? 'text-ink' : 'text-ink-soft transition hover:text-ink'}
            >
              AR
            </button>
            <span className="text-line">/</span>
            <button
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={lang === 'en' ? 'text-ink' : 'text-ink-soft transition hover:text-ink'}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('contact')
            }}
            className="hidden border-b border-ink pb-0.5 text-sm transition hover:border-accent hover:text-accent lg:inline-block"
          >
            {t('تواصل', "Let's talk")}
          </a>

          <button
            onClick={() => setOpen((value) => !value)}
            className="grid h-8 w-8 place-items-center border border-line transition hover:border-ink md:hidden"
            aria-label={t('القائمة', 'Menu')}
            aria-expanded={open}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-fade-in border-t border-line bg-paper md:hidden">
          <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="flex w-full items-baseline justify-between border-b border-line py-3.5 text-start"
              >
                <span className={`font-display text-xl ${active === link.id ? 'text-ink' : 'text-ink-soft'}`}>
                  {link[lang]}
                </span>
                <span className="font-mono text-[10px] text-ink-soft">0{index + 1}</span>
              </button>
            ))}

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('contact')
              }}
              className="mt-5 flex w-full items-center justify-center bg-ink px-4 py-3 text-sm text-paper"
            >
              {t('ابدأ مشروعك', 'Start a project')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
