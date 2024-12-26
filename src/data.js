import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Enjoy affordable travel packages without compromising quality. Our tours are tailored to give you the best value for your money.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'From serene trails to challenging peaks, our hiking tours let you reconnect with nature and create unforgettable memories.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Relax in carefully selected accommodations with all the amenities you need after a day of exploring.',
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    alt: 'Tibet Adventure',
    date: 'August 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Discover the breathtaking beauty of Tibet. Explore its ancient temples, serene monasteries, and majestic landscapes on this unforgettable 6-day journey.',
    location: 'China',
    duration: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    img: tour2,
    alt: 'Best of Java',
    date: 'October 1st, 2020',
    title: 'Best of Java',
    text: 'Immerse yourself in the culture and history of Java, Indonesia. This 11-day tour includes visits to Borobudur, lush rainforests, and vibrant cities.',
    location: 'Indonesia',
    duration: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    img: tour3,
    alt: 'Explore Hong Kong',
    date: 'September 15th, 2020',
    title: 'Explore Hong Kong',
    text: 'Experience the vibrant culture and stunning skyline of Hong Kong. This 8-day tour includes iconic landmarks, shopping, and culinary adventures.',
    location: 'Hong Kong',
    duration: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    img: tour4,
    alt: 'Kenya Highlights',
    date: 'December 5th, 2019',
    title: 'Kenya Highlights',
    text: 'Embark on a 20-day safari adventure through Kenya’s savannas. Witness the Great Migration, explore national parks, and meet local tribes.',
    location: 'Kenya',
    duration: '20 days',
    price: 'from $3300',
  },
  {
    id: 5,
    img: tour5,
    alt: 'Tibet Adventure',
    date: 'September 10th, 2021',
    title: 'Discover Tibet',
    text: 'Journey through the heart of Tibet. Visit sacred monasteries and enjoy stunning mountain views on this 7-day adventure.',
    location: 'China',
    duration: '7 days',
    price: 'from $2200',
  },
  {
    id: 6,
    img: tour6,
    alt: 'Taj Mahal Tour',
    date: 'March 15th, 2022',
    title: 'Taj Mahal Experience',
    text: 'Witness the timeless beauty of the Taj Mahal, a symbol of love and Mughal architecture. This 5-day tour includes visits to Agra Fort, Fatehpur Sikri, and local markets.',
    location: 'India',
    duration: '5 days',
    price: 'from $1200',
  },
];
