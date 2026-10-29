import { ArrowUp, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { getMailToLink, getWhatsAppLink, navLinks, siteConfig, socialList } from '../config/site'
import SocialIcon from './SocialIcon'

const Footer = () => {
  const { lang, t } = useLanguage()
  const year = new Date().getFullYear()
  const socials = socialList()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="border-t border-ink">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 text-start">
              <span className="grid h-8 w-8 place-items-center border border-ink font-mono text-[10px] tracking-[0.08em]">
                AM
              </span>
              <span className="font-display text-base">{siteConfig.name[lang]}</span>
            </button>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">{siteConfig.tagline[lang]}</p>

            <p className="mono-label mt-4 flex items-center gap-2 text-accent">
              <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
              {siteConfig.availability[lang]}
            </p>

            {socials.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-8 w-8 place-items-center border border-line text-ink-soft transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    <SocialIcon name={social.key} className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="mono-label border-b border-line pb-2 text-ink-soft">
              {t('روابط سريعة', 'Quick links')}
            </p>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-start text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {link[lang]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mono-label border-b border-line pb-2 text-ink-soft">{t('تواصل', 'Contact')}</p>
            <div className="mt-3 space-y-2.5 text-sm">
              <a
                href={getMailToLink()}
                className="flex items-start gap-2.5 text-ink-soft transition-colors hover:text-ink"
              >
                <Mail size={14} className="mt-1 shrink-0" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <a
                href={getWhatsAppLink(lang)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-ink-soft transition-colors hover:text-ink"
              >
                <MessageCircle size={14} className="shrink-0" />
                <span dir="ltr">{siteConfig.phoneIntl}</span>
              </a>
              <p className="flex items-center gap-2.5 text-ink-soft">
                <MapPin size={14} className="shrink-0" />
                {siteConfig.location[lang]}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-line pt-5 text-xs text-ink-soft sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name[lang]}. {t('جميع الحقوق محفوظة', 'All rights reserved')}.
          </p>
          <div className="flex items-center gap-5">
            <p>{t('مبني بـ React وTailwind CSS', 'Built with React & Tailwind CSS')}</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-ink"
              aria-label={t('العودة للأعلى', 'Back to top')}
            >
              {t('للأعلى', 'Top')}
              <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
