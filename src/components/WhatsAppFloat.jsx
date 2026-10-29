import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { getWhatsAppLink } from '../config/site'

const WhatsAppFloat = () => {
  const { lang, t } = useLanguage()

  return (
    <a
      href={getWhatsAppLink(lang)}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-4 end-4 z-40 flex items-center gap-2 border border-ink bg-paper px-3 py-2.5 text-sm text-ink transition-colors hover:bg-ink hover:text-paper sm:bottom-6 sm:end-6"
      aria-label={t('كلمني واتساب', 'WhatsApp me')}
    >
      <MessageCircle size={17} className="shrink-0" />
      <span className="hidden text-xs sm:inline">{t('واتساب', 'WhatsApp')}</span>
    </a>
  )
}

export default WhatsAppFloat
