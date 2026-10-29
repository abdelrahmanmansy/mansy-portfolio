import { ArrowDown, MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { getMailToLink, getWhatsAppLink, siteConfig } from '../config/site'

const Hero = () => {
  const { lang, t } = useLanguage()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const details = [
    {
      label: t('الشغل الحالي', 'Current role'),
      value: (
        <a
          href={siteConfig.company.url}
          target="_blank"
          rel="noreferrer"
          className="underline-grow"
        >
          {siteConfig.company.role[lang]} — {siteConfig.company.name[lang]}
        </a>
      ),
    },
    {
      label: t('التخصص', 'Focus'),
      value: t('تصميم + تطوير واجهات الويب', 'UI/UX + Frontend development'),
    },
    {
      label: t('الإيميل', 'Email'),
      value: (
        <a href={getMailToLink()} className="underline-grow break-all" dir="ltr">
          {siteConfig.email}
        </a>
      ),
    },
    {
      label: t('اللغات', 'Languages'),
      value: t('العربية · الإنجليزية', 'Arabic · English'),
    },
  ]

  return (
    <section id="hero" className="pb-14 pt-24 sm:pt-28 lg:pb-16 lg:pt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
          <p className="mono-label text-ink-soft">{t('بورتفوليو — ٢٠٢٦', 'Portfolio — 2026')}</p>
          <p className="mono-label text-ink-soft">{siteConfig.location[lang]}</p>
        </div>

        <div className="grid gap-12 pt-9 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:pt-12">
          <div>
            <p className="mono-label flex items-center gap-2 text-accent">
              <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
              {siteConfig.availability[lang]}
            </p>

            <h1 className="font-display mt-5 text-[2.7rem] leading-[1.04] tracking-[-0.01em] sm:text-[3.6rem] lg:text-[4.4rem]">
              <span className="block text-ink">{siteConfig.name[lang]}</span>
              <span className={`mt-2 block text-ink-soft ${lang === 'en' ? 'italic' : ''}`}>
                {siteConfig.title[lang]}
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              {siteConfig.tagline[lang]}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-sm text-paper transition-colors hover:bg-accent"
              >
                {t('شوف أعمالي', 'View my work')}
                <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
              </button>
              <a
                href={getWhatsAppLink(lang)}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle size={15} />
                {t('كلمني على واتساب', 'Message on WhatsApp')}
              </a>
            </div>

            <dl className="mt-11 grid gap-x-8 gap-y-0 border-t border-line sm:grid-cols-2">
              {details.map((row) => (
                <div key={row.label} className="border-b border-line py-3.5">
                  <dt className="mono-label text-ink-soft">{row.label}</dt>
                  <dd className="mt-1.5 text-sm leading-snug">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="mx-auto w-full max-w-[22rem] lg:max-w-none">
            <div className="border border-line bg-paper-deep p-2 sm:p-2.5">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt={siteConfig.name[lang]}
                className="aspect-[4/5] w-full object-cover object-top"
                fetchPriority="high"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-line pt-2.5">
              <span className="mono-label text-ink">{siteConfig.name[lang]}</span>
              <span className="mono-label text-ink-soft">{siteConfig.location[lang]}</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 border-t border-line pt-4">
          <p className="mono-label text-ink-soft">{t('التقنيات اللي بشتغل بيها', 'Toolkit')}</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5">
            {siteConfig.techStack.map((tech, index) => (
              <li key={tech} className="flex items-center gap-6 font-mono text-xs text-ink">
                {tech}
                {index < siteConfig.techStack.length - 1 && (
                  <span className="text-line" aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
