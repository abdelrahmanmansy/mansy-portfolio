import Reveal from './Reveal'

const Section = ({ id, eyebrow, title, description, className = '', children }) => {
  return (
    <section id={id} className={`border-t border-line py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <Reveal>
            <div className="flex items-center gap-4">
              {eyebrow && <p className="mono-label shrink-0 text-accent">{eyebrow}</p>}
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 md:items-end md:gap-10">
              {title && (
                <h2 className="font-display text-[1.9rem] leading-[1.18] sm:text-[2.4rem] lg:text-[2.7rem]">
                  {title}
                </h2>
              )}
              {description && (
                <p className="max-w-md text-[15px] leading-relaxed text-ink-soft md:justify-self-end md:text-base">
                  {description}
                </p>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
