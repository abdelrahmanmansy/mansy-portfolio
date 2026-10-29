import { ArrowUpRight } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { services } from '../data/services'

const Services = () => {
  const { lang, t } = useLanguage()

  return (
    <Section
      id="services"
      eyebrow={t('خدمات', 'Services')}
      title={t('ماذا أقدم', 'What I offer')}
      description={t(
        'من التصميم للتطوير — كل اللي محتاجه موقعك في مكان واحد.',
        'From design to development — everything your website needs, in one place.',
      )}
    >
      <div className="mt-10 border-t border-ink">
        {services.map((service, index) => (
          <Reveal key={service.en.title} delay={index * 50}>
            <div className="group grid gap-2 border-b border-line py-6 sm:grid-cols-[3rem_1fr_1.15fr] sm:items-baseline sm:gap-6">
              <span className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-xl leading-snug transition-colors group-hover:text-accent sm:text-[1.35rem]">
                {service[lang].title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft">{service[lang].desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-soft">
            {t(
              'محتاج حاجة مختلفة أو مزيج من الخدمات دي؟',
              'Need something different, or a mix of these services?',
            )}
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            {t('اتكلم معايا', 'Talk to me')}
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}

export default Services
