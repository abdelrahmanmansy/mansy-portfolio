import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { skillGroups } from '../data/skills'

const Skills = () => {
  const { lang, t } = useLanguage()

  return (
    <Section
      id="skills"
      eyebrow={t('مهارات', 'Skills')}
      title={t('الأدوات اللي بشتغل بيها', 'Tools I work with')}
      description={t(
        'مهارات مستخدمة فعليًا في مشاريع حقيقية — مش قائمة محفوظة.',
        'Skills I actually use on real projects — not a list I memorized.',
      )}
    >
      <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.en.title} delay={index * 70}>
            <div className="border-t border-ink pt-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl leading-snug">{group[lang].title}</h3>
                <span className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <p className="mt-1 text-xs text-ink-soft">{group[lang].desc}</p>

              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                {group.items.map((item, itemIndex) => (
                  <li key={item} className="font-mono text-xs text-ink">
                    {item}
                    {itemIndex < group.items.length - 1 && (
                      <span className="ms-3 text-line" aria-hidden="true">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <p className="mt-9 max-w-2xl border-t border-line pt-4 text-xs leading-relaxed text-ink-soft">
          {t(
            'معظم المهارات دي مستخدمة في شغل منشور زي فانيليانو ومانسي تورز، وبكمّل تعلّم — آخرها Python.',
            'Most of these are used in shipped work like Vanilliano and Mansy Tours — and I keep learning, most recently Python.',
          )}
        </p>
      </Reveal>
    </Section>
  )
}

export default Skills
