export type Language = 'uz' | 'ru' | 'en';

export interface Translation {
  nav: {
    services: string;
    location: string;
    about: string;
    hours: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    open: string;
    closed: string;
    bookNow: string;
    callNow: string;
    daily: string;
  };
  services: {
    title: string;
    subtitle: string;
    duration: string;
    book: string;
    priceLabel: string;
  };
  actions: {
    title: string;
    subtitle: string;
    book: string;
    call: string;
  };
  location: {
    title: string;
    subtitle: string;
    address: string;
    openMap: string;
    route: string;
  };
  about: {
    title: string;
    text: string;
  };
  hours: {
    title: string;
    subtitle: string;
    everyday: string;
    open: string;
    close: string;
    currentOpen: string;
    currentClosed: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    telegram: string;
    call: string;
    write: string;
  };
  booking: {
    title: string;
    service: string;
    price: string;
    duration: string;
    telegram: string;
    call: string;
    copy: string;
    copied: string;
    messageTemplate: string;
  };
  languageModal: {
    title: string;
    subtitle: string;
  };
  loader: {
    tagline: string;
  };
  footer: {
    rights: string;
  };
  floatingBook: string;
}

export const translations: Record<Language, Translation> = {
  uz: {
    nav: {
      services: 'Xizmatlar',
      location: 'Joylashuv',
      about: 'Usta haqida',
      hours: 'Ish vaqti',
      contact: 'Aloqa',
    },
    hero: {
      eyebrow: 'Toshkent · premium barber',
      role: 'Nizom barber',
      open: 'Ochiq',
      closed: 'Yopiq',
      bookNow: 'Yozilish',
      callNow: 'Qo‘ng‘iroq',
      daily: 'Har kuni 13:00–01:00',
    },
    services: {
      title: 'Xizmatlar va narxlar',
      subtitle: 'Kerakli xizmatni tanlang va darhol bog‘laning.',
      duration: 'Davomiyligi',
      book: 'Yozilish',
      priceLabel: 'Narx',
    },
    actions: {
      title: 'Tez bog‘lanish',
      subtitle: 'Telegram yoki qo‘ng‘iroq orqali yoziling.',
      book: 'Telegramga o‘tish',
      call: 'Qo‘ng‘iroq qilish',
    },
    location: {
      title: 'Joylashuv',
      subtitle: 'Nuqta va yo‘l ko‘rsatmasi',
      address: 'Manzil',
      openMap: 'Xaritani ochish',
      route: 'Yo‘l ko‘rsatish',
    },
    about: {
      title: 'Nega aynan Nizom',
      text: 'Eʼtibor tozalikka, shaklga va yakuniy natijaga qaratiladi. Sayt sodda: xizmatni tanlaysiz, keyin esa Telegram yoki qo‘ng‘iroq orqali tez yozilasiz.',
    },
    hours: {
      title: 'Ish vaqti',
      subtitle: 'Qulay vaqt oralig‘i',
      everyday: 'Har kuni',
      open: 'Ochilish',
      close: 'Yopilish',
      currentOpen: 'Hozir ochiq',
      currentClosed: 'Hozir yopiq',
    },
    contact: {
      title: 'Aloqa',
      subtitle: 'Tez bog‘lanish uchun',
      phone: 'Telefon',
      telegram: 'Telegram',
      call: 'Qo‘ng‘iroq',
      write: 'Yozish',
    },
    booking: {
      title: 'Yozilish',
      service: 'Xizmat',
      price: 'Narx',
      duration: 'Davomiyligi',
      telegram: 'Telegramda yozilish',
      call: 'Qo‘ng‘iroq qilish',
      copy: 'Matnni nusxalash',
      copied: 'Nusxalandi',
      messageTemplate: 'Salom! Yozilmoqchiman.\nXizmat: {service}\nNarx: {price}\nIltimos, yaqin bo‘sh vaqtni ayting.',
    },
    languageModal: {
      title: 'Tilni tanlang',
      subtitle: 'Tanlov qurilmada saqlanadi',
    },
    loader: {
      tagline: 'Yuklanmoqda',
    },
    footer: {
      rights: 'Barcha huquqlar himoyalangan',
    },
    floatingBook: 'Yozilish',
  },
  ru: {
    nav: {
      services: 'Услуги',
      location: 'Локация',
      about: 'О мастере',
      hours: 'Время',
      contact: 'Контакты',
    },
    hero: {
      eyebrow: 'Ташкент · premium barber',
      role: 'Nizom barber',
      open: 'Открыто',
      closed: 'Закрыто',
      bookNow: 'Записаться',
      callNow: 'Позвонить',
      daily: 'Ежедневно 13:00–01:00',
    },
    services: {
      title: 'Услуги и цены',
      subtitle: 'Выберите нужную услугу и сразу свяжитесь.',
      duration: 'Длительность',
      book: 'Записаться',
      priceLabel: 'Цена',
    },
    actions: {
      title: 'Быстрая связь',
      subtitle: 'Запись через Telegram или звонок.',
      book: 'Открыть Telegram',
      call: 'Позвонить',
    },
    location: {
      title: 'Локация',
      subtitle: 'Точка и маршрут',
      address: 'Адрес',
      openMap: 'Открыть карту',
      route: 'Построить маршрут',
    },
    about: {
      title: 'Почему Nizom',
      text: 'Акцент на чистых линиях, аккуратной форме и уверенном результате. Сайт сделан просто: выбрали услугу — сразу перешли в Telegram или на звонок.',
    },
    hours: {
      title: 'Рабочее время',
      subtitle: 'Удобный график каждый день',
      everyday: 'Ежедневно',
      open: 'Открытие',
      close: 'Закрытие',
      currentOpen: 'Сейчас открыто',
      currentClosed: 'Сейчас закрыто',
    },
    contact: {
      title: 'Контакты',
      subtitle: 'Связаться быстро',
      phone: 'Телефон',
      telegram: 'Telegram',
      call: 'Позвонить',
      write: 'Написать',
    },
    booking: {
      title: 'Запись',
      service: 'Услуга',
      price: 'Цена',
      duration: 'Длительность',
      telegram: 'Записаться в Telegram',
      call: 'Позвонить',
      copy: 'Скопировать текст',
      copied: 'Скопировано',
      messageTemplate: 'Здравствуйте! Хочу записаться.\nУслуга: {service}\nЦена: {price}\nПодскажите ближайшее свободное время.',
    },
    languageModal: {
      title: 'Выберите язык',
      subtitle: 'Выбор сохранится на этом устройстве',
    },
    loader: {
      tagline: 'Загрузка',
    },
    footer: {
      rights: 'Все права защищены',
    },
    floatingBook: 'Записаться',
  },
  en: {
    nav: {
      services: 'Services',
      location: 'Location',
      about: 'About',
      hours: 'Hours',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Tashkent · premium barber',
      role: 'Nizom barber',
      open: 'Open',
      closed: 'Closed',
      bookNow: 'Book now',
      callNow: 'Call now',
      daily: 'Daily 13:00–01:00',
    },
    services: {
      title: 'Services & prices',
      subtitle: 'Choose a service and contact instantly.',
      duration: 'Duration',
      book: 'Book now',
      priceLabel: 'Price',
    },
    actions: {
      title: 'Quick contact',
      subtitle: 'Book via Telegram or phone call.',
      book: 'Open Telegram',
      call: 'Call now',
    },
    location: {
      title: 'Location',
      subtitle: 'Point and directions',
      address: 'Address',
      openMap: 'Open map',
      route: 'Get directions',
    },
    about: {
      title: 'Why Nizom',
      text: 'The focus is on clean lines, shape precision and a confident finish. The site is intentionally simple: choose a service, then continue in Telegram or by phone.',
    },
    hours: {
      title: 'Working hours',
      subtitle: 'Convenient schedule every day',
      everyday: 'Daily',
      open: 'Opens',
      close: 'Closes',
      currentOpen: 'Currently open',
      currentClosed: 'Currently closed',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Reach out quickly',
      phone: 'Phone',
      telegram: 'Telegram',
      call: 'Call',
      write: 'Message',
    },
    booking: {
      title: 'Booking',
      service: 'Service',
      price: 'Price',
      duration: 'Duration',
      telegram: 'Book in Telegram',
      call: 'Call now',
      copy: 'Copy text',
      copied: 'Copied',
      messageTemplate: 'Hello! I would like to book an appointment.\nService: {service}\nPrice: {price}\nPlease let me know the nearest available time.',
    },
    languageModal: {
      title: 'Choose your language',
      subtitle: 'Your choice will be saved on this device',
    },
    loader: {
      tagline: 'Loading',
    },
    footer: {
      rights: 'All rights reserved',
    },
    floatingBook: 'Book now',
  },
};
