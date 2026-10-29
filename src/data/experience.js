// ============================================================
//  رحلة العمل — عدّل العناصر دي بتجربتك الحقيقية
//  period: تقدر تحط سنة أو مدى زمني، مثل { ar: '2024', en: '2024' }
//          أو تسيبها فاضية لو مش عايز تعرض تاريخ
// ============================================================

export const journey = [
  {
    id: 'start',
    period: { ar: 'البداية', en: 'The start' },
    title: { ar: 'أول خطوة في عالم الويب', en: 'First step into the web' },
    subtitle: { ar: 'تعلّم الأساسيات', en: 'Learning the fundamentals' },
    desc: {
      ar: 'بدأت بـ HTML وCSS وJavaScript، وبنيت أول صفحات ويب وفهمت إزاي الواجهة بتتحول من فكرة لشيء شغّال.',
      en: 'I started with HTML, CSS, and JavaScript, built my first web pages, and learned how an interface turns from an idea into something that works.',
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'react',
    period: { ar: 'التخصص', en: 'Specializing' },
    title: { ar: 'React وNext.js', en: 'React & Next.js' },
    subtitle: { ar: 'أدوات حديثة', en: 'Modern tooling' },
    desc: {
      ar: 'انتقلت لأدوات حديثة: React وNext.js وTypeScript وTailwind CSS، وبقيت أبني واجهات أسرع وأنظف وأسهل في التطوير.',
      en: 'I moved to modern tooling: React, Next.js, TypeScript, and Tailwind CSS — building faster, cleaner, more maintainable interfaces.',
    },
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'vanilliano',
    period: { ar: 'مشروع حقيقي', en: 'Real project' },
    title: { ar: 'Vanilliano', en: 'Vanilliano' },
    subtitle: { ar: 'متجر إلكتروني', en: 'E-commerce store' },
    desc: {
      ar: 'طوّرت متجر إلكتروني كامل لخامات الحلويات ومستلزمات الحفلات والتغليف، مع ربط Supabase لإدارة المحتوى.',
      en: 'Built a complete e-commerce store for confectionery and party supplies, with Supabase powering the content.',
    },
    tags: ['React', 'Vite', 'Supabase'],
  },
  {
    id: 'tours',
    period: { ar: 'مشروع سياحي', en: 'Travel project' },
    title: { ar: 'Mansy Tours', en: 'Mansy Tours' },
    subtitle: { ar: 'رحلات وسياحة', en: 'Tours & travel' },
    desc: {
      ar: 'بنيت موقع رحلات لعرض الوجهات والجولات بتجربة تصفح وحجز نظيفة، باستخدام Next.js وTypeScript.',
      en: 'Built a travel site showcasing destinations and tours with a clean browsing and booking experience, using Next.js and TypeScript.',
    },
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'today',
    period: { ar: 'اليوم', en: 'Today' },
    title: { ar: 'شريك مؤسس في Sanabel Apps', en: 'Co-founder at Sanabel Apps' },
    subtitle: { ar: 'برمجيات وتطبيقات', en: 'Software & apps' },
    desc: {
      ar: 'شريك مؤسس في Sanabel Apps، بساهم في تحويل الأفكار لمنتجات وبرمجيات متقنة. Sanabel Apps كانت أكتر من مكان أتعلم فيه برمجة — شكّلت طريقة تفكيري، وعلّمتني الصبر والانضباط والمسؤولية، وإني أحوّل الأفكار لمشاريع حقيقية.',
      en: 'Co-founder at Sanabel Apps, helping turn ideas into polished products and software. It was more than a place to learn programming — it shaped how I think and taught me patience, discipline, responsibility, and how to turn ideas into real projects.',
    },
    tags: ['Sanabel Apps', 'Product', 'UI/UX', 'Development'],
  },
]
