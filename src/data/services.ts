import { Scissors, Palette, Hand, UserRound } from 'lucide-react';
import type { Language } from './translations';

export interface ServiceItem {
  id: string;
  icon: typeof Scissors;
  name: Record<Language, string>;
  description: Record<Language, string>;
  price: number;
}

export const services: ServiceItem[] = [
  {
    id: 'haircut',
    icon: Scissors,
    name: { uz: 'Soch olish', ru: 'Стрижка', en: 'Haircut' },
    description: {
      uz: 'Toza kontur, mos shakl va tartibli yakun.',
      ru: 'Аккуратная форма, чистый контур и ухоженный результат.',
      en: 'Clean shape, sharp lines and a polished finish.',
    },
    price: 70000,
  },
  {
    id: 'hair-color',
    icon: Palette,
    name: { uz: 'Soch bo‘yash', ru: 'Покраска волос', en: 'Hair coloring' },
    description: {
      uz: 'Rangni yangilash va silliq, toza natija.',
      ru: 'Обновление цвета волос с аккуратным результатом.',
      en: 'Hair color refresh with a clean premium finish.',
    },
    price: 70000,
  },
  {
    id: 'head-massage',
    icon: Hand,
    name: { uz: 'Bosh massaj', ru: 'Массаж головы', en: 'Head massage' },
    description: {
      uz: 'Yengillik va bo‘shashish uchun tinchlantiruvchi xizmat.',
      ru: 'Расслабляющий массаж головы для снятия усталости.',
      en: 'A relaxing head massage to release tension.',
    },
    price: 50000,
  },
  {
    id: 'beard',
    icon: UserRound,
    name: { uz: 'Soqol olish', ru: 'Борода', en: 'Beard trim' },
    description: {
      uz: 'Soqolga toza shakl va ozoda ko‘rinish berish.',
      ru: 'Аккуратное оформление бороды и чистый контур.',
      en: 'Beard shaping with a clean outline and finish.',
    },
    price: 50000,
  },
];

export function formatPrice(price: number): string {
  return `${price.toLocaleString('ru-RU')} UZS`;
}
