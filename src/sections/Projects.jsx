import { ArrowUpRight, Monitor, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { projects } from '../data/projects'

const ProjectVisual = ({ project, lang }) => {
  const [failed, setFailed] = useState(false)
  const name = project[lang === 'ar' ? 'nameAr' : 'nameEn']
  const Icon = project.id === 'vanilliano' ? ShoppingBag : Monitor

  return (
    <div className="group relative overflow-hidden border border-line bg-paper-deep">
      {!failed ? (
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="aspect-[16/11] w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="flex aspect-[16/11] flex-col items-center justify-center gap-3 px-6 text-center">
          <Icon size={24} className="text-ink-soft" />
          <p className="font-display text-lg">{name}</p>
          <p className="font-mono text-[11px] text-ink-soft" dir="ltr">
            {project.liveUrl.replace(/^https?:\/\//, '')}
          </p>
        </div>
      )}
    </div>
  )
}

const Projects = () => {
  const { lang, t } = useLanguage()

  return (
    <Section
      id="projects"
      eyebrow={t('أعمالي', 'Work')}
      title={t('مشاريع حقيقية', 'Real projects')}
      description={t(
        'مشاريع بنيتها ونشرتها فعلاً — تقدر تفتحها وتشوفها بنفسك.',
        "Projects I've built and shipped — you can open them and see for yourself.",
      )}
    >
      <div className="mt-10 space-y-14">
        {projects.map((project, index) => {
          const name = project[lang === 'ar' ? 'nameAr' : 'nameEn']
          const type = project[lang === 'ar' ? 'typeAr' : 'typeEn']
          const desc = project[lang === 'ar' ? 'descAr' : 'descEn']
          const highlights = project[lang === 'ar' ? 'highlightsAr' : 'highlightsEn'] ?? []

          return (
            <Reveal key={project.id} delay={index * 80} as="article">
              <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
                <ProjectVisual project={project} lang={lang} />

                <div className="min-w-0">
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-2.5">
                    <p className="mono-label text-accent">
                      {String(index + 1).padStart(2, '0')} — {type}
                    </p>
                    <p className="mono-label hidden truncate text-ink-soft sm:block" dir="ltr">
                      {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </p>
                  </div>

                  <h3 className="font-display mt-4 text-2xl leading-snug sm:text-3xl">{name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{desc}</p>

                  <ul className="mt-5 space-y-1.5">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-[0.6em] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 border-b border-ink pb-1 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      {t('زيارة الموقع', 'Visit site')}
                      <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5" />
                    </a>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-line pb-1 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
                      >
                        {t('الكود', 'Source')}
                      </a>
                    )}
                    <span className="font-mono text-[11px] text-ink-soft">
                      {project.tags.join(' · ')}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={100}>
        <div className="mt-14 flex flex-col gap-5 border-t border-ink pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mono-label text-accent">{t('المشروع الجاي', 'Next project')}</p>
            <h3 className="font-display mt-2 text-2xl sm:text-3xl">
              {t('مشروعك يكون هنا؟', 'Could yours be here?')}
            </h3>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              {t(
                'عندك فكرة موقع أو متجر؟ ابعتلي وهنحولها لشيء حقيقي.',
                "Got a website or store idea? Send it over and let's make it real.",
              )}
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex shrink-0 items-center gap-3 bg-ink px-6 py-3.5 text-sm text-paper transition-colors hover:bg-accent"
          >
            {t('ابدأ مشروعك', 'Start your project')}
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}

export default Projects
