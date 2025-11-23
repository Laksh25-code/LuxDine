import React from 'react';

// Mock data for "What's New" items
const mockNews = [
  {
    id: 1,
    type: 'Event',
    title: 'Live Jazz Nights',
    description: 'Join us every Friday for soulful jazz performances and exquisite cocktails.',
    date: 'Starting Nov 25, 2025',
    image: 'https://via.placeholder.com/600x400/6D6D6D/FFF7E9?text=Jazz+Night',
  },
  {
    id: 2,
    type: 'Menu Update',
    title: 'Autumn Harvest Menu',
    description: 'Savor the flavors of the season with our new dishes featuring fresh, local ingredients.',
    date: 'Available from Nov 15, 2025',
    image: 'https://via.placeholder.com/600x400/7A8E4D/0F0F0F?text=Autumn+Menu',
  },
  {
    id: 3,
    type: 'Special Offer',
    title: 'Holiday Dinner Reservations Open',
    description: 'Book your festive celebrations with us! Limited slots available for December.',
    date: 'Book now for Dec 2025',
    image: 'https://via.placeholder.com/600x400/F5C542/0F0F0F?text=Holiday+Dinner',
  },
  {
    id: 4,
    type: 'New Dish',
    title: 'Seared Scallops with Saffron Risotto',
    description: 'A delicate new addition to our menu, perfectly paired with our curated wine list.',
    date: 'Introduced Nov 10, 2025',
    image: 'https://via.placeholder.com/600x400/C62828/FFF7E9?text=Scallops',
  },
];

const NewsCard = ({ item }) => {
  return (
    <div className="bg-card rounded-lg shadow-xl overflow-hidden border border-border transition-transform duration-300 hover:scale-105">
      <img src={item.image} alt={item.title} className="w-full h-56 object-cover object-center" />
      <div className="p-6">
        <span className="text-gold-warm text-sm font-semibold mb-2 block uppercase">{item.type}</span>
        <h3 className="text-2xl font-bold font-heading text-cream-soft mb-3">{item.title}</h3>
        <p className="text-text-secondary text-base mb-4">{item.description}</p>
        <p className="text-text-secondary text-sm italic">{item.date}</p>
      </div>
    </div>
  );
};

const WhatsNew = () => {
  return (
    <section id="whats-new" className="py-16 md:py-24 bg-surface text-cream-soft">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 text-gold-warm">What's New</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
