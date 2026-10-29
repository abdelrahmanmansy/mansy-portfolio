import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { journey } from '../data/experience'

const Experience = () => {
  const { lang, t } = useLanguage()

  const values = [
    t('الصبر', 'Patience'),
    t('الانضباط', 'Discipline'),
    t('المسؤولية', 'Responsibility'),
    t('التعلم المستمر', 'Continuous learning'),
  ]

  return (
    <Section
      id="experience"
      eyebrow={t('الرحلة', 'Journey')}
      title={t('رحلتي', 'My journey')}
      description={t(
        'من أول سطر كود لحد مشاريع حقيقية منشورة — خطوة بخطوة.',
        'From the first line of code to real shipped projects — step by step.',
      )}
    >
      <ol className="mt-10 border-t border-ink">
        {journey.map((item, index) => (
          <li key={item.id} className="border-b border-line">
            <Reveal
              delay={index * 60}
              className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <div>
                <p className="mono-label text-accent">{item.period[lang]}</p>
                <p className="mt-1.5 text-xs text-ink-soft">{item.subtitle[lang]}</p>
              </div>

              <div>
                <h3 className="font-display text-xl leading-snug sm:text-[1.4rem]">{item.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc[lang]}</p>
                <p className="mt-3 font-mono text-[11px] text-ink-soft">{item.tags.join(' · ')}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={120}>
        <blockquote className="mt-12 border-s-2 border-accent ps-5 sm:ps-7">
          <p className="font-display text-xl leading-relaxed sm:text-2xl lg:text-[1.7rem]">
            {t(
              '«النجاح مش بس كتابة كود — النجاح إنك تكبر كإنسان وتصنع حاجة ليها معنى.»',
              "Success isn't just about writing code — it's about growing as a person and creating something meaningful.",
            )}
          </p>
          <footer className="mt-4">
            <p className="mono-label text-ink-soft">{t('وهذه مجرد البداية', 'This is only the beginning')}</p>
            <p className="mt-3 text-xs leading-relaxed text-ink-soft">{values.join(' · ')}</p>
          </footer>
        </blockquote>
      </Reveal>
    </Section>
  )
}

export default Experience
