import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import SocialIcon from '../components/SocialIcon'
import { useLanguage } from '../context/LanguageContext'
import { getMailToLink, getWhatsAppLink, siteConfig, socialList } from '../config/site'

const Contact = () => {
  const { lang, t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)
  const socials = socialList()

  useEffect(() => () => clearTimeout(timer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = getMailToLink()
    }
  }

  const methods = [
    {
      label: t('واتساب', 'WhatsApp'),
      value: siteConfig.phoneDisplay,
      href: getWhatsAppLink(lang),
      external: true,
      dir: 'ltr',
    },
    {
      label: t('البريد الإلكتروني', 'Email'),
      value: siteConfig.email,
      href: getMailToLink(),
      external: false,
    },
    {
      label: t('الموقع', 'Location'),
      value: siteConfig.location[lang],
    },
    {
      label: t('وقت الرد', 'Response time'),
      value: t('عادةً خلال وقت قصير', 'Usually quick'),
    },
  ]

  return (
    <Section
      id="contact"
      eyebrow={t('تواصل', 'Contact')}
      title={t('جاهز نبدأ مشروعك؟', 'Ready to start your project?')}
      description={t(
        'ابعتلي فكرة مشروعك أو أي سؤال — ولو مش متأكد من التفاصيل، مش مشكلة، هنشتغل عليها مع بعض.',
        "Send me your idea or any question — and if the details aren't clear yet, that's fine, we'll figure them out together.",
      )}
    >
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <p className="mono-label flex items-center gap-2 text-accent">
            <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
            {siteConfig.availability[lang]}
          </p>

          <p className="font-display mt-4 max-w-md text-2xl leading-snug sm:text-[1.75rem]">
            {t('خلّينا نحوّل فكرتك لشيء حقيقي.', "Let's turn your idea into something real.")}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
            {t(
              'موقع جديد، متجر إلكتروني، أو تحسين موقع موجود — ابدأ بمحادثة قصيرة وهقولك أنسب طريقة نمشي بيها.',
              "A new website, an online store, or improving an existing one — start with a short chat and I'll tell you the best way forward.",
            )}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href={getWhatsAppLink(lang)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-sm text-paper transition-colors hover:bg-accent"
            >
              {t('كلمني على واتساب', 'Message on WhatsApp')}
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5" />
            </a>
            <a
              href={getMailToLink(t('مشروع جديد', 'New project'))}
              className="border-b border-ink pb-1 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {t('ابعت إيميل', 'Send an email')}
            </a>
          </div>

          {socials.length > 0 && (
            <div className="mt-7 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-9 w-9 place-items-center border border-line text-ink-soft transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  <SocialIcon name={social.key} />
                </a>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal delay={100}>
          <ul className="border-t border-ink">
            {methods.map((method) => {
              const inner = (
                <>
                  <span className="mono-label shrink-0 text-ink-soft">{method.label}</span>
                  <span
                    className="min-w-0 break-all text-end text-sm leading-snug text-ink transition-colors group-hover:text-accent"
                    dir={method.dir}
                  >
                    {method.value}
                  </span>
                </>
              )

              return (
                <li key={method.label} className="border-b border-line">
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.external ? '_blank' : undefined}
                      rel={method.external ? 'noreferrer' : undefined}
                      className="group flex items-baseline justify-between gap-6 py-4"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-baseline justify-between gap-6 py-4">{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>

          <button
            onClick={copyEmail}
            className="mt-4 flex w-full items-center justify-between gap-3 border border-line px-4 py-3 text-sm transition-colors hover:border-ink"
          >
            <span className="flex items-center gap-2">
              {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} className="text-ink-soft" />}
              {copied ? t('تم نسخ الإيميل', 'Email copied') : t('انسخ الإيميل', 'Copy email')}
            </span>
            <span className="mono-label hidden text-ink-soft sm:inline">Ctrl + C</span>
          </button>

          <p className="mt-4 text-xs leading-relaxed text-ink-soft">
            {t(
              'أو تواصل معايا على واتساب مباشرة — برد في أقرب وقت.',
              'Or reach me directly on WhatsApp — I reply as soon as I can.',
            )}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}

export default Contact
