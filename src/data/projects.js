// ============================================================
//  المشاريع — ضيف مشروع جديد بنسخ أي عنصر وتغيير بياناته
//  image: مسار الصورة داخل مجلد public
// ============================================================

export const projects = [
  {
    id: 'vanilliano',
    nameAr: 'فانيليانو',
    nameEn: 'Vanilliano',
    typeAr: 'متجر إلكتروني',
    typeEn: 'E-commerce',
    descAr: 'متجر إلكتروني لبيع خامات الحلويات والكيك ومستلزمات الحفلات والتغليف.',
    descEn: 'An online store for cake & confectionery supplies, party essentials, and gift packaging.',
    image: 'projects/vanilliano.jpg',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase'],
    highlightsAr: [
      'متجر كامل لعرض المنتجات والأقسام',
      'تجربة شراء سلسة ومتجاوبة',
      'ربط مع Supabase لإدارة المحتوى',
    ],
    highlightsEn: [
      'Full store with products and categories',
      'Smooth, responsive buying experience',
      'Supabase-powered content management',
    ],
    liveUrl: 'https://vanilliano.com',
    repoUrl: '',
    featured: true,
  },
  {
    id: 'mansy-tours',
    nameAr: 'مانسي تورز',
    nameEn: 'Mansy Tours',
    typeAr: 'رحلات وسياحة',
    typeEn: 'Travel & Tours',
    descAr: 'موقع رحلات وسياحة لعرض الجولات والوجهات مع تجربة حجز مميزة.',
    descEn: 'A tours & travel website showcasing destinations and trips with a clean booking experience.',
    image: 'projects/mansy-tours.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    highlightsAr: [
      'عرض الجولات والوجهات بشكل واضح',
      'تجربة تصفح وحجز نظيفة',
      'واجهة متجاوبة بـ Next.js وTypeScript',
    ],
    highlightsEn: [
      'Clear showcase of tours and destinations',
      'Clean browsing and booking experience',
      'Responsive UI built with Next.js & TypeScript',
    ],
    liveUrl: 'https://abdelrahmanmansy.github.io/mansy-tours/',
    repoUrl: '',
    featured: true,
  },
]
