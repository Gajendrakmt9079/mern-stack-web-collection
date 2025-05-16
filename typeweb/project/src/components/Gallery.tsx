import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Performance tyres close-up',
    category: 'tyres'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Tyre fitting service',
    category: 'services'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/6573512/pexels-photo-6573512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Car wheel alignment',
    category: 'services'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Mechanic working on wheels',
    category: 'services'
  },
  {
    id: 5,
    src: 'https://plus.unsplash.com/premium_photo-1664391873177-531d7fbb6dd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2ludGVyJTIwdHlyZXN8ZW58MHx8MHx8fDA%3D',
    alt: 'Winter tyres',
    category: 'tyres'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Workshop interior',
    category: 'facility'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/8134629/pexels-photo-8134629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Sports car tyre',
    category: 'tyres'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Facility entrance',
    category: 'facility'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our facilities, services, and the premium tyres we offer.
          </p>
          
          <div className="flex justify-center gap-2 flex-wrap mt-8">
            <button 
              onClick={() => setFilter('all')}
              className={`py-2 px-4 rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-900 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('tyres')}
              className={`py-2 px-4 rounded-md transition-colors ${
                filter === 'tyres' 
                  ? 'bg-blue-900 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tyres
            </button>
            <button 
              onClick={() => setFilter('services')}
              className={`py-2 px-4 rounded-md transition-colors ${
                filter === 'services' 
                  ? 'bg-blue-900 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => setFilter('facility')}
              className={`py-2 px-4 rounded-md transition-colors ${
                filter === 'facility' 
                  ? 'bg-blue-900 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Our Facility
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg h-64 cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <p className="text-white p-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
              <button 
                className="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
              
              <img 
                src={galleryImages.find(img => img.id === selectedImage)?.src} 
                alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
              />
              
              <p className="text-white text-center mt-4">
                {galleryImages.find(img => img.id === selectedImage)?.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;