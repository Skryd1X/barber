export interface BusinessInfo {
  name: string;
  role: { uz: string; ru: string; en: string };
  slogan: { uz: string; ru: string; en: string };
  description: { uz: string; ru: string; en: string };
  telegram: string;
  telegramUrl: string;
  instagram: string;
  instagramUrl: string;
  phone: string;
  phoneDisplay: string;
  address: { uz: string; ru: string; en: string };
  mapUrl: string;
  workingHours: {
    daily: { open: string; close: string };
  };
  heroImage: string;
}

export const business: BusinessInfo = {
  name: 'Nizom',
  role: {
    uz: 'Premium barber',
    ru: 'Премиальный барбер',
    en: 'Premium barber',
  },
  slogan: {
    uz: 'Toza chiziqlar. Aniq shakl. Ishonchli natija.',
    ru: 'Чистые линии. Точная форма. Уверенный результат.',
    en: 'Clean lines. Sharp shape. Confident result.',
  },
  description: {
    uz: 'Erkaklar sochi va soqoli uchun zamonaviy, toza va didli xizmat. Qisqa vaqt ichida kerakli xizmatni tanlang va Telegram yoki qo‘ng‘iroq orqali bog‘laning.',
    ru: 'Современный и аккуратный сервис для мужских стрижек и ухода за бородой. Быстро выберите услугу и свяжитесь через Telegram или звонок.',
    en: 'A modern and precise grooming service for men’s haircuts and beard care. Quickly choose a service and contact via Telegram or phone.',
  },
  telegram: '@barbernizom',
  telegramUrl: 'https://t.me/barbernizom',
  instagram: '@barbernizom',
  instagramUrl: 'https://instagram.com/barbernizom',
  phone: '+998937858494',
  phoneDisplay: '+998 93 785 84 94',
  address: {
    uz: 'Nest One, B blok, T-57 ofis, 1-qavat, Toshkent, Oʻzbekiston',
    ru: 'Nest One, блок B, офис T-57, 1 этаж, Ташкент, Узбекистан',
    en: 'Nest One, Block B, Office T-57, 1st floor, Tashkent, Uzbekistan',
  },
  mapUrl: 'https://yandex.uz/maps/-/CXQW78Kf',
  workingHours: {
    daily: { open: '13:00', close: '01:00' },
  },
  heroImage:
    'https://images.pexels.com/photos/769739/pexels-photo-769739.jpeg?auto=compress&cs=tinysrgb&w=1200',
};
