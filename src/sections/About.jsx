import { ArrowUpRight } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../config/site'

const About = () => {
  const { lang, t } = useLanguage()

  const highlights = [
    t('تصميم واجهات نظيفة ومدروسة', 'Clean, thoughtful interface design'),
    t('تطوير بـ React وNext.js', 'Development with React & Next.js'),
    t('سرعة وأداء محسّن', 'Speed and optimized performance'),
    t('تجاوب كامل مع كل الشاشات', 'Fully responsive on every screen'),
    t('دعم عربي وإنجليزي', 'Arabic and English support'),
    t('تفاصيل من الفكرة للتسليم', 'From first idea to final delivery'),
  ]

  const info = [
    {
      label: t('الشغل الحالي', 'Current role'),
      value: `${siteConfig.company.role[lang]} — ${siteConfig.company.name[lang]}`,
    },
    {
      label: t('التخصص', 'Focus'),
      value: t('تصميم + تطوير واجهات الويب', 'UI/UX + Frontend'),
    },
    { label: t('الموقع', 'Location'), value: siteConfig.location[lang] },
    { label: t('اللغات', 'Languages'), value: t('العربية · الإنجليزية', 'Arabic · English') },
  ]

  return (
    <Section
      id="about"
      eyebrow={t('نبذة', 'About')}
      title={t('من أنا', 'Who I am')}
      description={t(
        'مصمم ومطور مواقع بيهتم بالتفاصيل اللي بتخلي التجربة أسهل وأجمل.',
        'A designer and developer who cares about the details that make an experience easier and better.',
      )}
    >
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-[17px]">
            <p>
              <span className="font-display text-lg text-ink sm:text-xl">
                {t('أنا Abdelrahman Mansy،', "I'm Abdelrahman Mansy,")}
              </span>{' '}
              {t(
                'مصمم ومطور مواقع من مصر، وشريك مؤسس في Sanabel Apps. بشتغل على تحويل الأفكار لمواقع حقيقية — من التصميم الأولي لحد آخر سطر كود — بتركيز على البساطة، السرعة، والتفاصيل اللي بتفرق.',
                'a website designer and developer from Egypt and co-founder at Sanabel Apps. I turn ideas into real websites — from the first design to the last line of code — focusing on simplicity, speed, and the details that matter.',
              )}
            </p>
            <p>
              {t(
                'مركّز على الشغل مع عملاء في مصر والخليج، وبحب المشاريع اللي فيها هوية واضحة وناس محتاجة موقع يوصّل رسالتها صح — سواء متجر إلكتروني، موقع خدمات، أو صفحة تعريفية.',
                "I focus on working with clients across Egypt and the Gulf, and I love projects with a clear identity and people who need a website that tells their story properly — whether it's an online store, a services site, or a simple landing page.",
              )}
            </p>
          </div>

          <ul className="mt-9 grid sm:grid-cols-2 sm:gap-x-8">
            {highlights.map((item, index) => (
              <li key={item} className="flex items-baseline gap-3 border-t border-line py-3 text-sm">
                <span className="font-mono text-[11px] text-accent">{String(index + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-sm text-paper transition-colors hover:bg-accent"
            >
              {t('خلينا نتكلم', "Let's talk")}
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border-b border-ink pb-1 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              {t('شوف شغلي', 'See my work')}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-3">
            <p className="mono-label text-accent">{t('بطاقة سريعة', 'At a glance')}</p>
            <p className="mono-label text-ink-soft" dir="ltr">
              {t('محدّث', 'Updated')} 2026
            </p>
          </div>

          <dl>
            {info.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-6 border-b border-line py-3.5">
                <dt className="mono-label shrink-0 text-ink-soft">{row.label}</dt>
                <dd className="text-end text-sm leading-snug">{row.value}</dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-6 border-b border-line py-3.5">
              <dt className="mono-label shrink-0 text-ink-soft">{t('الحالة', 'Status')}</dt>
              <dd className="flex items-center gap-2 text-end text-sm">
                <span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                {siteConfig.availability[lang]}
              </dd>
            </div>
          </dl>

          <p className="mt-5 text-xs leading-relaxed text-ink-soft">
            {t(
              'مركّز على عملاء في مصر والخليج — من أول فكرة لحد التسليم.',
              'Focused on clients in Egypt and the Gulf — from the first idea to delivery.',
            )}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}

export default About
