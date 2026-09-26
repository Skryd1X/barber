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
  mapEmbedUrl: string;
  yandexGoUrl: string;
  twoGisUrl: string;
  coordinates: { lat: number; lon: number };
  workingHours: {
    daily: { open: string; close: string };
  };
}

const lat = 41.272863;
const lon = 69.278935;
const addressQuery = encodeURIComponent('улица Гейдара Алиева, 303, Ташкент');

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
    uz: 'Erkaklar sochi va soqoli uchun zamonaviy, toza va didli xizmat. Xizmatni tanlang va Telegram yoki qo‘ng‘iroq orqali bog‘laning.',
    ru: 'Современный и аккуратный сервис для мужских стрижек и ухода за бородой. Выберите услугу и свяжитесь через Telegram или звонок.',
    en: 'A modern and precise grooming service for men’s haircuts and beard care. Choose a service and contact via Telegram or phone.',
  },
  telegram: '@barbernizom',
  telegramUrl: 'https://t.me/barbernizom',
  instagram: '@barbernizom',
  instagramUrl: 'https://instagram.com/barbernizom',
  phone: '+998937858494',
  phoneDisplay: '+998 93 785 84 94',
  address: {
    uz: 'Geydar Aliyev ko‘chasi, 303',
    ru: 'улица Гейдара Алиева, 303',
    en: '303 Heydar Aliyev Street',
  },
  mapUrl: 'https://yandex.uz/maps/-/CXQW78Kf',
  mapEmbedUrl: `https://yandex.uz/map-widget/v1/?mode=search&text=${addressQuery}&z=17`,
  yandexGoUrl: `https://3.redirect.appmetrica.yandex.com/route?end-lat=${lat}&end-lon=${lon}&ref=nizombarber&appmetrica_tracking_id=1178268795219780156`,
  twoGisUrl: `https://2gis.uz/tashkent/search/${addressQuery}`,
  coordinates: { lat, lon },
  workingHours: {
    daily: { open: '08:00', close: '22:00' },
  },
};
