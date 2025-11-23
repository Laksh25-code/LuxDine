import React from 'react';

// Mock data for discounts
const mockDiscounts = [
  {
    id: 1,
    title: 'Weekend Brunch Special',
    description: 'Enjoy 20% off our lavish weekend brunch menu. Perfect for family and friends.',
    code: 'BRUNCH20',
    validUntil: '2025-12-31',
    type: 'Percentage',
    value: '20%',
    image: 'https://via.placeholder.com/400x300/F5C542/0F0F0F?text=Brunch', // Placeholder
  },
  {
    id: 2,
    title: 'Date Night Deal',
    description: 'A complimentary dessert with any two main courses for a romantic evening.',
    code: 'DATENIGHT',
    validUntil: '2025-12-31',
    type: 'Item',
    value: 'Free Dessert',
    image: 'https://via.placeholder.com/400x300/C62828/FFF7E9?text=Date+Night', // Placeholder
  },
  {
    id: 3,
    title: 'Early Bird Dinner',
    description: '15% off your entire bill when seated before 6 PM, Monday - Thursday.',
    code: 'EARLYBIRD',
    validUntil: '2025-12-31',
    type: 'Percentage',
    value: '15%',
    image: 'https://via.placeholder.com/400x300/6D6D6D/FFF7E9?text=Early+Bird', // Placeholder
  },
  {
    id: 4,
    title: 'Celebration Package',
    description: 'Special offers for parties of 6 or more. Contact us for details.',
    code: null,
    validUntil: '2025-12-31',
    type: 'Special',
    value: 'Enquire Now',
    image: 'https://via.placeholder.com/400x300/7A8E4D/0F0F0F?text=Celebration', // Placeholder
  },
];

const PromoCard = ({ discount }) => {
  return (
    <div className="bg-card rounded-lg shadow-xl overflow-hidden border border-border transition-transform duration-300 hover:scale-105">
      <img src={discount.image} alt={discount.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold font-heading text-cream-soft mb-2">{discount.title}</h3>
        <p className="text-text-secondary text-sm mb-4">{discount.description}</p>
        <div className="flex items-center justify-between mb-4">
          {discount.code && (
            <span className="bg-crimson text-cream-soft text-xs font-semibold px-3 py-1 rounded-full uppercase">
              Code: {discount.code}
            </span>
          )}
          <span className="text-gold-warm text-lg font-bold">
            {discount.value}
          </span>
        </div>
        <p className="text-text-secondary text-xs">Valid until: {discount.validUntil}</p>
      </div>
    </div>
  );
};

const Discounts = () => {
  return (
    <section id="discounts" className="py-16 md:py-24 bg-charcoal-deep text-cream-soft">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 text-gold-warm">Exclusive Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mockDiscounts.map((discount) => (
            <PromoCard key={discount.id} discount={discount} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discounts;
