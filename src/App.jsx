import React, { useState } from 'react';
import { Menu, X, Leaf, Sunset, Home, Bird, MapPin } from 'lucide-react';

const Navigation = ({ setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', section: 'welcome' },
    { icon: Sunset, label: 'Gallery', section: 'gallery' },
    { icon: Leaf, label: 'Rooms', section: 'rooms' },
    { icon: Bird, label: 'Features', section: 'features' },
    { icon: MapPin, label: 'Neighborhood', section: 'neighborhood' }
  ];

  return (
    <nav className="bg-green-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.webp"
            alt="Melrmrnnil Hillview Farmstay Logo"
            className="h-12 w-12 rounded-full mr-4"
          />
          <h1 className="text-2xl font-bold">Melemannil Hillview Farmstay</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => setActiveSection(item.section)}
              className="hover:text-green-300 flex items-center space-x-2 transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-800 py-4">
          <div className="container mx-auto px-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => {
                  setActiveSection(item.section);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left hover:bg-green-700 py-2 px-4 rounded flex items-center space-x-2"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const FarmstayWebsite = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  const sections = {
    welcome: {
      title: 'Welcome to Melemannil Hillview',
      content: (
        <div className="bg-green-50 p-8 rounded-lg shadow-md">
          <div className='max-sm:hidden'>
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/Cvsm9UwSjY4?si=vH0wvfQwn8P0FoJv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='md:hidden'>
            <iframe width="100%" height="200px" src="https://www.youtube.com/embed/Cvsm9UwSjY4?si=vH0wvfQwn8P0FoJv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <h2 className="text-3xl font-bold text-green-900 mb-4 mt-10">Your Cozy Retreat in Kuttikannam</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Nestled in the heart of Kuttikannam, our farmstay offers a warm and cozy retreat for travelers seeking a home away from home. Our beautiful farm is surrounded by hills and valleys, providing the perfect blend of relaxation and exploration.
          </p>
          <div className="md:grid grid-cols-3 grid-rows-2 gap-4 mt-6">
            <div className="relative w-full h-full">
              <img
                src="/2.jpg"
                alt="Farm Landscape"
                className="rounded-lg shadow-md object-cover w-full h-full max-sm:mt-4 m-b4"
              />
            </div>
            <div className="row-span-2 relative w-full h-full">
              <img
                src="/3.jpg"
                alt="Farm Landscape"
                className="rounded-lg shadow-md object-cover w-full h-full max-sm:mt-4 m-b4"
              />
            </div>
            <div className="row-span-2 relative w-full h-full">
              <img
                src="/4.jpg"
                alt="Farm Landscape"
                className="rounded-lg shadow-md object-cover w-full h-full max-sm:mt-4 m-b4"
              />
            </div>
            <div className="relative w-full h-full">
              <img
                src="/1.jpg"
                alt="Farm Landscape"
                className="rounded-lg shadow-md object-cover w-full h-full max-sm:mt-4 m-b4"
              />
            </div>
          </div>

        </div>
      )
    },
    gallery: {
      title: 'Gallery',
      content: (
        <div className="bg-green-100 p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-green-900 mb-6 text-center">
            A Family Legacy of Hospitality
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Our farmstay is a family-run endeavor driven by a passion for hospitality and a desire to share our culture with visitors from around the world. We take pride in providing a personalized and authentic experience for each of our guests.
          </p>
          <div className="mt-10 flex items-center space-x-6 justify-center">
            <blockquote className="italic text-green-800 text-center max-w-sm">
              "We believe in creating memories that last a lifetime, one guest at a time."
            </blockquote>
          </div>
          <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4">
            <div className="max-sm:hidden">
              <iframe className='mb-4 rounded-lg shadow-md' width="470" height="315" src="https://www.youtube.com/embed/05YDVb_40Ss?si=cXM-ZuGnvXml2nmm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="470" height="315" className='mb-4 rounded-lg shadow-md' src="https://www.youtube.com/embed/wE4WPivfDzA?si=06kpWgQULht7Y0En" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe className='mb-4 rounded-lg shadow-md' width="470" height="315" src="https://www.youtube.com/embed/nWruE4q9pp8?si=VmYezLpYUCVKkWwz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe className='mb-4 rounded-lg shadow-md' width="470" height="315" src="https://www.youtube.com/embed/CQiFZFhLyD4?si=0hcJ2QvcpJxXedb5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe className='mb-4 rounded-lg shadow-md' width="470" height="315" src="https://www.youtube.com/embed/28FaaaqLlQ0?si=9BIdmoH9NomjWXl3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe className='mb-4 rounded-lg shadow-md' width="470" height="315" src="https://www.youtube.com/embed/D4RYOi9Ux9c?si=J4T7dx0uPC9_v7T6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe className='mb-4 rounded-lg shadow-md' width="470" height="315" src="https://www.youtube.com/embed/efRwo2JmvXQ?si=Tyst6dfYBbMBk7A7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="md:hidden">
              <iframe className='mb-4 rounded-lg shadow-md' width="350" height="250" src="https://www.youtube.com/embed/05YDVb_40Ss?si=cXM-ZuGnvXml2nmm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe width="350" height="250" className='mb-4 rounded-lg shadow-md' src="https://www.youtube.com/embed/wE4WPivfDzA?si=06kpWgQULht7Y0En" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe className='mb-4 rounded-lg shadow-md' width="350" height="250" src="https://www.youtube.com/embed/nWruE4q9pp8?si=VmYezLpYUCVKkWwz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe className='mb-4 rounded-lg shadow-md' width="350" height="250" src="https://www.youtube.com/embed/CQiFZFhLyD4?si=0hcJ2QvcpJxXedb5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe className='mb-4 rounded-lg shadow-md' width="350" height="250" src="https://www.youtube.com/embed/28FaaaqLlQ0?si=9BIdmoH9NomjWXl3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe className='mb-4 rounded-lg shadow-md' width="350" height="250" src="https://www.youtube.com/embed/D4RYOi9Ux9c?si=J4T7dx0uPC9_v7T6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe className='mb-4 rounded-lg shadow-md' width="350" height="250" src="https://www.youtube.com/embed/efRwo2JmvXQ?si=Tyst6dfYBbMBk7A7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            {Array.from({ length: 40 }, (_, i) => (
              <img
                key={i + 1}
                src={`/${i + 1}.jpg`}
                alt={`Gallery Image ${i + 1}`}
                className="mb-4 rounded-lg shadow-md object-cover w-full"
              />
            ))}
          </div>
        </div>
      ),
    },

    rooms: {
      title: 'Rooms',
      content: (
        <div className="bg-green-50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Comfortable & Cozy Accommodations</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We offer beautifully appointed rooms, equipped with comfortable bedding and linen. Each room features an en-suite bathroom with a hot shower, and a separate dining area to ensure your comfort and convenience.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Standard Room</h3>
              <ul className="space-y-2">
                <li>✓ Comfortable Bedding</li>
                <li>✓ En-suite Bathroom</li>
                <li>✓ Hot Water Shower</li>
                <li>✓ Work Desk</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Deluxe Room</h3>
              <ul className="space-y-2">
                <li>✓ Panoramic Valley View</li>
                <li>✓ King Size Bed</li>
                <li>✓ Private Balcony</li>
                <li>✓ Spacious Bathroom</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    features: {
      title: 'Farm Features',
      content: (
        <div className="bg-green-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Explore Our Vibrant Farm</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Orchard & Plantation</h3>
              <p className="text-gray-700 mb-4">
                Stroll through our orchard with a variety of fruit trees including avocado, milkfruits, wrolonies, guava, and jackfruit. We also have an excellent coffee and pepper plantation where guests can learn about our organic farming methods.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Farm Animals</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Diverse Bird Collection: Hens, Ducks, Doves</li>
                <li>• Main Attraction: Canadian Pygmy Goats</li>
                <li>• Interactive Farm Experience</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    neighborhood: {
      title: 'Neighborhood',
      content: (
        <div className="bg-green-50 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Explore Nearby Attractions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Nearby Locations</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Kuttikannam Pinedress',
                  'Amaachi Kotteran',
                  'Wagamon',
                  'Parunthempara',
                  'Panchalimad'
                ].map(location => (
                  <li key={location}>• {location}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Religious Sites</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Pattunale Shrine',
                  'Peermade Temple',
                  'Peelikkannu'
                ].map(site => (
                  <li key={site}>• {site}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navigation setActiveSection={setActiveSection} />

      <main className="min-h-screen container mx-auto px-4 py-8">
        {sections[activeSection].content}
      </main>

      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Melrmrnnil Hillview Farmstay. All Rights Reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-green-300">Contact Us</a>
            <a href="#" className="hover:text-green-300">Book Now</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmstayWebsite;