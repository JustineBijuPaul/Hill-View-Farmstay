import React, { useState } from 'react';
import { Menu, X, Leaf, Sunset, Home, Bird, MapPin, Map, Camera, Church, Calendar } from 'lucide-react';


const locationImages = {
  'Kuttikannam Pinedress': '/47.jpg',
  'Amaachi Kotteran': '/48.jpg',
  'Wagamon': '/49.jpg',
  'Parunthempara': '/50.jpg',
  'Panchalimad': '/51.jpg',
  'Pattunale Shrine': '/52.jpg',
  'Peermade Temple': '/53.jpg',
  'Pallikunnu': '/54.jpeg'
};

const Navigation = ({ setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', section: 'welcome' },
    { icon: Sunset, label: 'Gallery', section: 'gallery' },
    { icon: Leaf, label: 'Rooms', section: 'rooms' },
    { icon: Bird, label: 'Features', section: 'features' },
    { icon: MapPin, label: 'Neighborhood', section: 'neighborhood' },
    { icon: Calendar, label: 'Book Now', section: 'book_now' }
  ];

  return (
    <nav className="bg-green-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.webp"
            alt="Melrmrnnil Hillview Farmstay Logo"
            className="h-12 w-12 rounded-full mr-4"
          /> <a href="../index.html">
            <h1 className="text-2xl font-bold">Melemannil Hillview Farmstay</h1>
          </a>
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
                className="w-full text-left hover:bg-green-700 py-2 px-4 rounded flex items-center space-x-2"
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
        <div className="bg-green-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Comfortable & Cozy Accommodations</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We offer beautifully appointed room, equipped with comfortable bedding and linen. The homestay features an en-suite bathroom with a hot shower, and a separate dining area to ensure your comfort and convenience.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Home Stay</h3>
            <div className="flex">
              <ul className="space-y-2 mb-4">
                <li>✓ Comfortable Bedding</li>
                <li>✓ En-suite Bathroom</li>
                <li>✓ Hot Water Shower</li>
                <li>✓ Work Desk</li>
                <li>✓ Panoramic Valley View</li>
                <li>✓ King Size Bed</li>
                <li>✓ Private Balcony</li>
              </ul>
            </div>
            <br />
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src="/41.jpeg"
                alt="Home Stay Room 1"
                className="rounded-lg shadow-md object-cover w-full"
              />
              <img
                src="/42.jpeg"
                alt="Home Stay Room 2"
                className="rounded-lg shadow-md object-cover w-full"
              />
              <img
                src="/43.jpeg"
                alt="Home Stay Room 3"
                className="rounded-lg shadow-md object-cover w-full"
              />
              <img
                src="/44.jpeg"
                alt="Home Stay Room 4"
                className="rounded-lg shadow-md object-cover w-full"
              />
              <img
                src="/45.jpeg"
                alt="Home Stay Room 4"
                className="rounded-lg shadow-md object-cover w-full"
              />
              <img
                src="/46.jpeg"
                alt="Home Stay Room 4"
                className="rounded-lg shadow-md object-cover w-full"
              />
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
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                <img
                  src="/13.jpg"
                  alt="Orchard View"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/34.jpg"
                  alt="Coffee Plantation"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/4.jpg"
                  alt="Coffee Plantation"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/16.jpg"
                  alt="Coffee Plantation"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/18.jpg"
                  alt="Coffee Plantation"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/22.jpg"
                  alt="Coffee Plantation"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/23.jpg"
                  alt="Coffee Plantation"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/24.jpg"
                  alt="Coffee Plantation"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Farm Animals</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Diverse Bird Collection: Hens, Ducks, Doves</li>
                <li>• Main Attraction: Canadian Pygmy Goats</li>
                <li>• Interactive Farm Experience</li>
              </ul>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                <img
                  src="/19.jpg"
                  alt="Farm Animals - Ducks"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/28.jpg"
                  alt="Farm Animals - Ducks"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/36.jpg"
                  alt="Farm Animals - Ducks"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/38.jpg"
                  alt="Farm Animals - Ducks"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/39.jpg"
                  alt="Farm Animals - Ducks"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/40.jpg"
                  alt="Farm Animals - Ducks"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/37.jpg"
                  alt="Farm Animals - Ducks"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/35.jpg"
                  alt="Farm Animals - Ducks"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/20.jpg"
                  alt="Farm Animals - Ducks"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
                <img
                  src="/11.jpg"
                  alt="Farm Animals - Ducks"
                  className="rounded-lg shadow-md object-cover w-full mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    neighborhood: {
      title: 'Neighborhood',
      content: (
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-12 rounded-xl shadow-2xl">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-16">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-green-600" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-green-900 mb-4 sm:mb-6">
                Explore Nearby Attractions
              </h2>
              <p className="text-green-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
                Discover breathtaking landscapes, vibrant destinations, and sacred sites in our beautiful neighborhood.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
              {/* Nearby Locations */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 sm:mb-8">Nearby Locations</h3>
                <div className="space-y-6 sm:space-y-8">
                  {[
                    'Kuttikannam Pinedress',
                    'Amaachi Kotteran',
                    'Wagamon',
                    'Parunthempara',
                    'Panchalimad',
                  ].map((location) => (
                    <div
                      key={location}
                      className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 group transition-transform duration-300"
                    >
                      <div className="relative w-full sm:w-40 h-48 sm:h-40 overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={locationImages[location]}
                          alt={location}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-3">
                          <Map className="w-5 h-5 text-green-600" />
                          <h4 className="font-medium text-lg text-gray-800 group-hover:text-green-700 transition-colors">
                            {location}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Tourist Destination</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Religious Sites */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6 sm:mb-8">Religious Sites</h3>
                <div className="space-y-6 sm:space-y-8">
                  {['Pattunale Shrine', 'Peermade Temple', 'Pallikunnu'].map((site) => (
                    <div
                      key={site}
                      className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 group transition-transform duration-300"
                    >
                      <div className="relative w-full sm:w-40 h-48 sm:h-40 overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={locationImages[site]}
                          alt={site}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-3">
                          <Church className="w-5 h-5 text-green-600" />
                          <h4 className="font-medium text-lg text-gray-800 group-hover:text-green-700 transition-colors">
                            {site}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Religious Heritage</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center gap-4 text-green-800">
                <Map className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-sm sm:text-md">
                  All locations are within a 10km radius and easily accessible by local transport.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    book_now: {
      title: 'Book Now',
      content: (
        <div className="bg-green-100 p-4 sm:p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6 text-center">Book Your Stay</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData);

              // Format message for WhatsApp
              const message = `New Booking Request:\n
Name: ${data.name}\n
Email: ${data.email}\n
Phone: ${data.phone}\n
Check-in: ${data.checkIn}\n
Check-out: ${data.checkOut}\n
Guests: ${data.guests}\n
Special Requests: ${data.requests}`;

              // WhatsApp link (replace with your number)
              const whatsappNumber = "918826232329"; // Add your WhatsApp number here
              const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

              // Email link
              const emailSubject = "New Booking Request - Melemannil Hillview Farmstay";
              const emailBody = message;
              const mailtoLink = `mailto:justinebijupaul@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

              // Open both links
              window.open(whatsappLink, '_blank');
              window.open(mailtoLink, '_blank');
            }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-800 font-medium mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-green-800 font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-800 font-medium mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div>
                <label className="block text-green-800 font-medium mb-2" htmlFor="guests">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-800 font-medium mb-2" htmlFor="checkIn">
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-green-800 font-medium mb-2" htmlFor="checkOut">
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-green-800 font-medium mb-2" htmlFor="requests">
                Special Requests
              </label>
              <textarea
                id="requests"
                name="requests"
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Any special requirements or requests..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      ),
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
            <button 
              onClick={() => setActiveSection('book_now')} 
              className="hover:text-green-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmstayWebsite;