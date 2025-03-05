import apartment01 from './../../../markup/img/apartment-01.jpg';
import apartment02 from './../../../markup/img/apartment-02.jpg';
import apartment03 from './../../../markup/img/apartment-03.jpg';

export type CardProps = {
  img: string;
  isPremium?: boolean;
  price: number;
  rating: number;
  title: string;
  type: string;
  id: number;
};

export const cards: CardProps[] = [
  {
    img: apartment01,
    isPremium: true ,
    price: 110,
    rating: 80,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    id: 1
  },
  {
    img: apartment02,
    isPremium: false ,
    price: 120,
    rating: 80,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    id: 2
  },
  {
    img: apartment03,
    price: 140,
    rating: 80,
    title: 'Wood and stone place',
    type: 'Apartment',
    id: 3
  }
];
