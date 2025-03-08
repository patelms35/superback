import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';

// Define image URLs for testimonials
const userImages = {
  sarah: 'https://randomuser.me/api/portraits/women/44.jpg',
  michael: 'https://randomuser.me/api/portraits/men/32.jpg',
  jessica: 'https://randomuser.me/api/portraits/women/68.jpg',
  david: 'https://randomuser.me/api/portraits/men/75.jpg',
  emily: 'https://randomuser.me/api/portraits/women/17.jpg',
  robert: 'https://randomuser.me/api/portraits/men/91.jpg'
};

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, rating, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 relative">
      <div className="absolute -top-5 left-8 text-primary text-4xl">
        {FaQuoteLeft({})}
      </div>
      <div className="pt-6">
        <p className="text-gray-600 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
            <img src={image} alt={name} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-dark">{name}</p>
            <p className="text-gray-500 text-sm">{title}</p>
          </div>
          <div className="ml-auto flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
                {FaIcons.FaStar({})}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const testimonials = [
    {
      quote: "I've earned over $500 in cashback this year alone. Superback makes it so easy to save money on purchases I was already planning to make.",
      name: "Sarah Johnson",
      title: "Loyal User Since 2021",
      rating: 5,
      image: userImages.sarah
    },
    {
      quote: "The cashback rates are consistently higher than other sites I've used. Plus, the payouts are reliable and quick. Highly recommend!",
      name: "Michael Chen",
      title: "Power Shopper",
      rating: 5,
      image: userImages.michael
    },
    {
      quote: "I was skeptical at first, but after my first payout, I was convinced. Now I never shop online without checking Superback first.",
      name: "Jessica Williams",
      title: "New Member",
      rating: 4,
      image: userImages.jessica
    },
    {
      quote: "The browser extension makes it super convenient. I never miss a cashback opportunity now, and it's helped me save hundreds.",
      name: "David Rodriguez",
      title: "Tech Enthusiast",
      rating: 5,
      image: userImages.david
    },
    {
      quote: "Customer service is excellent. Had an issue with tracking a purchase and they resolved it quickly. Very impressed with the support.",
      name: "Emily Thompson",
      title: "Regular Shopper",
      rating: 5,
      image: userImages.emily
    },
    {
      quote: "I've tried several cashback sites and Superback offers the best rates consistently. The user interface is also much more intuitive.",
      name: "Robert Kim",
      title: "Comparison Shopper",
      rating: 4,
      image: userImages.robert
    }
  ];

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who are saving money on every purchase with Superback Cashback.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
        
        <div className="flex justify-between content-center mt-10 space-x-4">
          <button 
            onClick={handlePrevPage}
            className="bg-white text-primary hover:bg-primary hover:text-white border border-primary rounded-full h-10 w-10 flex items-center justify-center transition duration-300"
            aria-label="Previous page"
          >
            {FaChevronLeft({})}
          </button>
          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  i === currentPage ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button 
            onClick={handleNextPage}
            className="bg-white text-primary hover:bg-primary hover:text-white border border-primary rounded-full h-10 w-10 flex items-center justify-center transition duration-300"
            aria-label="Next page"
          >
            {FaChevronRight({})}
          </button>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex text-yellow-400 mr-3">
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  {FaIcons.FaStar({})}
                </div>
              ))}
            </div>
            <span className="font-bold text-dark">4.9 out of 5 stars</span>
            <span className="text-gray-500 ml-2">from over 10,000 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 