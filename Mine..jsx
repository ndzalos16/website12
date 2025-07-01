import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll effect for navigation
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <div className="font-inter antialiased text-gray-800 bg-white">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>

      {/* Header Section */}
      <header className="fixed w-full bg-white shadow-md z-50 animate-fade-in-down">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* Using a placeholder for the logo based on the image provided */}
            <img
              src="https://placehold.co/150x50/F8C8DC/000?text=Genevieves+Boutique"
              alt="Genevieves Boutique Logo"
              className="h-12 rounded-lg shadow-md"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x50/F8C8DC/000?text=Logo"; }}
            />
            <span className="ml-3 text-2xl font-bold text-pink-600 hidden md:block">Genevieves Boutique</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-pink-600 transition duration-300 cursor-pointer text-lg font-medium">Home</a>
            <a onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-pink-600 transition duration-300 cursor-pointer text-lg font-medium">Products</a>
            <a onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-600 transition duration-300 cursor-pointer text-lg font-medium">About</a>
            <a onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-pink-600 transition duration-300 cursor-pointer text-lg font-medium">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none focus:text-pink-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 animate-fade-in-down">
            <a onClick={() => scrollToSection('home')} className="block px-6 py-2 text-gray-700 hover:bg-pink-100 transition duration-300 cursor-pointer text-lg font-medium">Home</a>
            <a onClick={() => scrollToSection('products')} className="block px-6 py-2 text-gray-700 hover:bg-pink-100 transition duration-300 cursor-pointer text-lg font-medium">Products</a>
            <a onClick={() => scrollToSection('about')} className="block px-6 py-2 text-gray-700 hover:bg-pink-100 transition duration-300 cursor-pointer text-lg font-medium">About</a>
            <a onClick={() => scrollToSection('contact')} className="block px-6 py-2 text-gray-700 hover:bg-pink-100 transition duration-300 cursor-pointer text-lg font-medium">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 overflow-hidden pt-16">
        {/* Background animation elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-lg">
            Unleash Your Inner Radiance
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover the secret to captivating eyes and effortless beauty with Genevieves Boutique's premium lash collections.
          </p>
          <button
            onClick={() => scrollToSection('products')}
            className="px-8 py-4 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Explore Our Collections
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">Our Exquisite Collections</h2>

          {/* New Collection */}
          <div className="mb-16 animate-fade-in-up animation-delay-300">
            <h3 className="text-3xl font-semibold text-center text-pink-600 mb-8">New Arrivals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                title="New Collection Essentials"
                price="R150"
                description="Bond, Seal, Lash Remover, and Tweezers for a perfect application."
                imageUrl="https://placehold.co/400x300/F8C8DC/000?text=New+Collection"
              />
              <ProductCard
                title="Complete Lash Kit"
                price="R450"
                description="Everything you need for stunning lashes: shampoo, curler, glue, and more."
                imageUrl="https://placehold.co/400x300/F8C8DC/000?text=Complete+Kit"
              />
              <ProductCard
                title="Lash Starter Kit"
                price="R350"
                description="Your journey to beautiful lashes starts here with 3 cluster sets and tools."
                imageUrl="https://placehold.co/400x300/F8C8DC/000?text=Starter+Kit"
              />
            </div>
          </div>

          {/* Special Products */}
          <div className="mb-16 animate-fade-in-up animation-delay-600">
            <h3 className="text-3xl font-semibold text-center text-pink-600 mb-8">Specialty Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                title="Magnetic Eyelashes Combo"
                price="R250"
                description="Effortless 'up and go' magnetic lashes for a natural, captivating look."
                imageUrl="https://placehold.co/400x300/F8C8DC/000?text=Magnetic+Lashes"
              />
              <ProductCard
                title="Lash Lift Kit"
                price="R250"
                description="Achieve a professional lash lift at home for long-lasting curl."
                imageUrl="https://placehold.co/400x300/F8C8DC/000?text=Lash+Lift+Kit"
              />
              <ProductCard
                title="Plush Comfort Teddies"
                price="R300"
                description="Soft and cuddly teddy bears, perfect for a special gift or a cozy companion."
                imageUrl="https://placehold.co/400x300/F8C8DC/000?text=Teddy+Bears"
              />
            </div>
          </div>

          {/* Combos and Individual Items */}
          <div className="mb-16 animate-fade-in-up animation-delay-900">
            <h3 className="text-3xl font-semibold text-center text-pink-600 mb-8">Combos & Individual Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Combos */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Combos</h4>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex justify-between items-center">
                    <span>The Ordinary</span>
                    <span className="font-semibold text-pink-600">R120</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Bond & Seal / Tweezers / Remover</span>
                    <span className="font-semibold text-pink-600">R150</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Lash Starter Kit</span>
                    <span className="font-semibold text-pink-600">R350</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>All You Need Kit</span>
                    <span className="font-semibold text-pink-600">R450</span>
                  </li>
                </ul>
              </div>

              {/* Individual Items */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Individual Items</h4>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex justify-between items-center">
                    <span>Mini False Eyelash Remover Kit (29pcs)</span>
                    <span className="font-semibold text-pink-600">R180</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Mini Eyelash Extension Kit (31pcs)</span>
                    <span className="font-semibold text-pink-600">R300</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Eyelash Curler</span>
                    <span className="font-semibold text-pink-600">R100</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Electric Hot Eyelash Curler</span>
                    <span className="font-semibold text-pink-600">R199.99</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Lash Mouse Mild</span>
                    <span className="font-semibold text-pink-600">R150</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Waterproof Lash Glue</span>
                    <span className="font-semibold text-pink-600">R200</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Eyelash Cleaner</span>
                    <span className="font-semibold text-pink-600">R45.00</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Eyelash Mirror Mini</span>
                    <span className="font-semibold text-pink-600">R45.00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">About Genevieves Boutique</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            At Genevieves Boutique, we believe that beauty is an expression of self-love and confidence. We are dedicated to providing high-quality, innovative lash products and beauty essentials that empower you to look and feel your absolute best. Our mission is to bring "unlimited lash heaven" to every customer, ensuring a seamless and luxurious beauty experience. We carefully curate our collections to offer the latest trends and most effective solutions, helping you achieve captivating eyes with ease.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">Get in Touch</h2>
          <div className="max-w-xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl shadow-lg animate-fade-in-up animation-delay-300">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-lg transition duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-lg transition duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-lg transition duration-200"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-4">&copy; {new Date().getFullYear()} Genevieves Boutique. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 1);
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Responsive adjustments for font sizes and spacing */
        @media (max-width: 768px) {
          .text-5xl {
            font-size: 3rem; /* Smaller on mobile */
          }
          .text-7xl {
            font-size: 4rem; /* Smaller on mobile */
          }
          .text-xl {
            font-size: 1.125rem;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
          .text-4xl {
            font-size: 2.5rem;
          }
          .px-8.py-4 {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
          }
        }
        `}
      </style>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ title, price, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out group">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover object-center rounded-t-xl group-hover:opacity-90 transition-opacity duration-300"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/F8C8DC/000?text=Product+Image"; }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-pink-600">{price}</span>
          <button className="px-5 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition duration-300 transform hover:shadow-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
