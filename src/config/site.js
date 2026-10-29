// ============================================================
//  ملف البيانات الأساسي — عدّل من هنا وكل الموقع هيتحدث تلقائيًا
// ============================================================

export const siteConfig = {
  // الأسماء (شخص/شركة/مشاريع) بتفضل إنجليزي في النسختين زي ما هي
  name: {
    ar: 'Abdelrahman Mansy',
    en: 'Abdelrahman Mansy',
  },
  // الاسم الأول — بيتستخدم في بعض العناوين القصيرة
  firstName: {
    ar: 'Abdelrahman',
    en: 'Abdelrahman',
  },
  title: {
    ar: 'مصمم ومطور مواقع',
    en: 'Website Designer & Developer',
  },
  // الشغل الحالي
  company: {
    name: { ar: 'Sanabel Apps', en: 'Sanabel Apps' },
    role: { ar: 'بتعلّم البرمجة', en: 'Learning to build' },
    url: 'https://sanabelapps.com',
  },
  // وصف الموقع لمحركات البحث ومنصات التواصل
  seoDescription: {
    ar: 'بورتفوليو Abdelrahman Mansy — مصمم ومطور مواقع من مصر. تصميم وتطوير مواقع ومتاجر إلكترونية عصرية، سريعة، ومتجاوبة مع دعم العربية والإنجليزية.',
    en: 'Abdelrahman Mansy — website designer and developer from Egypt. Modern, fast, responsive websites and e-commerce stores with Arabic and English support.',
  },
  // جملة قصيرة تحت الاسم
  tagline: {
    ar: 'بصمّم وأطوّر مواقع عصرية، سريعة، وبتفاصيل تخلّي علامتك تبان احترافية.',
    en: 'I design and build modern, fast websites with details that make your brand look the part.',
  },
  // الموقع — عدّل المدينة لو عايز
  location: {
    ar: 'مصر',
    en: 'Egypt',
  },
  availability: {
    ar: 'متاح لمشاريع جديدة',
    en: 'Available for new projects',
  },
  email: 'abdelrahmanahmedmansy@gmail.com',
  // رقم الواتساب بصيغة دولية (من غير + أو مسافات في الرابط)
  whatsapp: '+201009942440',
  phoneDisplay: '0100 994 2440',
  phoneIntl: '+20 100 994 2440',
  url: 'https://abdelrahmanmansy.github.io/mansy-portfolio',

  // بيانات التواصل الاجتماعي — سيب أي واحدة فاضية وهتختفي تلقائيًا
  socials: {
    linkedin: '',
    github: '',
    behance: '',
    x: '',
    instagram: '',
    facebook: '',
  },

  // المهارات الأساسية اللي بتظهر في شريط الهيرو
  techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Python', 'Supabase', 'Vite', 'Git'],

  languages: [
    { ar: 'العربية', en: 'Arabic', level: { ar: 'اللغة الأم', en: 'Native' } },
    { ar: 'الإنجليزية', en: 'English', level: { ar: 'جيد جدًا', en: 'Professional' } },
  ],
}

export const navLinks = [
  { id: 'hero', ar: 'الرئيسية', en: 'Home' },
  { id: 'about', ar: 'نبذة عني', en: 'About' },
  { id: 'services', ar: 'الخدمات', en: 'Services' },
  { id: 'skills', ar: 'المهارات', en: 'Skills' },
  { id: 'projects', ar: 'أعمالي', en: 'Work' },
  { id: 'experience', ar: 'رحلتي', en: 'Journey' },
  { id: 'contact', ar: 'تواصل', en: 'Contact' },
]

export const getWhatsAppLink = (
  lang = 'ar',
  text = lang === 'ar' ? 'مرحباً Abdelrahman، شفت البورتفوليو وحابب أتكلم معاك' : 'Hi Abdelrahman, I saw your portfolio and would like to talk',
) => {
  const phone = siteConfig.whatsapp.replace(/[^0-9]/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

export const getMailToLink = (subject = '') => {
  const base = `mailto:${siteConfig.email}`
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base
}

export const socialList = () => {
  const entries = [
    { key: 'linkedin', label: 'LinkedIn', href: siteConfig.socials.linkedin },
    { key: 'github', label: 'GitHub', href: siteConfig.socials.github },
    { key: 'behance', label: 'Behance', href: siteConfig.socials.behance },
    { key: 'x', label: 'X', href: siteConfig.socials.x },
    { key: 'instagram', label: 'Instagram', href: siteConfig.socials.instagram },
    { key: 'facebook', label: 'Facebook', href: siteConfig.socials.facebook },
  ]
  return entries.filter((item) => item.href.trim().length > 0)
}
