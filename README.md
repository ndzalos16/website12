<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genevieves Boutique - Unlimited Lash Heaven</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Google Fonts - Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Custom CSS for animations */
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

        /* Adjusted blob animation duration for 20% faster movement */
        .animate-blob {
            animation: blob 5.6s infinite cubic-bezier(0.6, 0.01, 0.3, 1); /* 7s * 0.8 = 5.6s */
        }

        /* Adjusted animation delays proportionally */
        .animation-delay-2000 {
            animation-delay: 1.6s; /* 2s * 0.8 = 1.6s */
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
            animation-delay: 3.2s; /* 4s * 0.8 = 3.2s */
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
            /* Adjust logo size for smaller screens */
            .logo-img {
                height: 3rem; /* h-12 = 48px, consistent with desktop h-12 */
            }
        }
    </style>
</head>
<body class="font-inter antialiased text-gray-800 bg-white">

    <!-- Header Section -->
    <header class="fixed w-full bg-white shadow-md z-50 animate-fade-in-down">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <!-- Logo -->
            <div class="flex items-center">
                <!-- Logo size set to h-12 (48px), border and shadow removed for blending -->
                <img
                    src="WhatsApp Image 2025-07-01 at 21.42.24_682aba3c.jpg"
                    alt="Genevieves Boutique Logo"
                    class="h-12 w-auto logo-img"
                    onerror="this.onerror=null;this.src='https://placehold.co/150x50/F8C8DC/000?text=Logo';"
                />
                <!-- "Genevieves Boutique" text now visible on all screen sizes -->
                <span class="ml-3 text-2xl font-bold text-pink-600">Genevieves Boutique</span>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex space-x-8">
                <a href="#home" class="text-gray-700 hover:text-pink-600 transition duration-300 cursor-pointer text-lg font-medium">Home</a>
                <a href="#products" class="text-gray-700 hover:text-pink-600 transition duration-300 cursor-pointer text-lg font-medium">Products</a>
                <a href="#about" class="text-gray-700 hover:text-pink-600 transition duration-300 cursor-pointer text-lg font-medium">About</a>
                <a href="#contact" class="text-gray-700 hover:text-pink-600 transition duration-300 cursor-pointer text-lg font-medium">Contact</a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden">
                <button id="mobile-menu-button" class="text-gray-700 focus:outline-none focus:text-pink-600">
                    <svg id="menu-icon-open" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg id="menu-icon-close" class="h-8 w-8 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </nav>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="md:hidden bg-white py-4 animate-fade-in-down hidden">
            <a href="#home" class="block px-6 py-2 text-gray-700 hover:bg-pink-100 transition duration-300 cursor-pointer text-lg font-medium">Home</a>
            <a href="#products" class="block px-6 py-2 text-gray-700 hover:bg-pink-100 transition duration-300 cursor-pointer text-lg font-medium">Products</a>
            <a href="#about" class="block px-6 py-2 text-gray-700 hover:bg-pink-100 transition duration-300 cursor-pointer text-lg font-medium">About</a>
            <a href="#contact" class="block px-6 py-2 text-gray-700 hover:bg-pink-100 transition duration-300 cursor-pointer text-lg font-medium">Contact</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="relative h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 overflow-hidden pt-16">
        <!-- Background animation elements -->
        <div class="absolute inset-0 z-0">
            <div class="absolute top-1/4 left-1/4 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute bottom-1/4 left-1/3 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div class="relative z-10 text-center px-6 animate-fade-in-up">
            <h1 class="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-lg">
                Unleash Your Inner Radiance
            </h1>
            <p class="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Discover the secret to captivating eyes and effortless beauty with Genevieves Boutique's premium lash collections.
            </p>
            <button
                onclick="scrollToSection('products')"
                class="px-8 py-4 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-300"
            >
                Explore Our Collections
            </button>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="py-16 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">Our Exquisite Collections</h2>

            <!-- New Collection -->
            <div class="mb-16 animate-fade-in-up animation-delay-300">
                <h3 class="text-3xl font-semibold text-center text-pink-600 mb-8">New Arrivals</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Product Card 1: New Collection Essentials -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out group">
                        <img
                            src="69feb53c-c75b-4dc9-8a22-c740d5b685cb-removebg-preview.png"
                            alt="New Collection Essentials"
                            class="w-full h-18 object-cover object-center rounded-t-xl group-hover:opacity-90 transition-opacity duration-300"
                            onerror="this.onerror=null;this.src='https://placehold.co/400x300/F8C8DC/000?text=Product+Image';"
                        />
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">New Collection Essentials</h3>
                            <p class="text-gray-600 text-base mb-4">Bond, Seal, Lash Remover, and Tweezers for a perfect application.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-pink-600">R150</span>
                                <button class="px-5 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition duration-300 transform hover:shadow-md">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Product Card 2: Complete Lash Kit -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out group">
                        <img
                            src="4b57972d-0fdd-4bf7-97ed-34e232d4a3ab-removebg-preview.png"
                            alt="Complete Lash Kit"
                            class="w-full h-19 object-cover object-center rounded-t-xl group-hover:opacity-90 transition-opacity duration-300"
                            onerror="this.onerror=null;this.src='https://placehold.co/400x300/F8C8DC/000?text=Product+Image';"
                        />
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Complete Lash Kit</h3>
                            <p class="text-gray-600 text-base mb-4">Everything you need for stunning lashes: shampoo, curler, glue, and more.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-pink-600">R450</span>
                                <button class="px-5 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition duration-300 transform hover:shadow-md">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Product Card 3: Lash Starter Kit (placeholder) -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out group">
                        <img
                            src="https://placehold.co/400x300/F8C8DC/000?text=Starter+Kit"
                            alt="Lash Starter Kit"
                            class="w-full h-19 object-cover object-center rounded-t-xl group-hover:opacity-90 transition-opacity duration-300"
                            onerror="this.onerror=null;this.src='https://placehold.co/400x300/F8C8DC/000?text=Product+Image';"
                        />
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Lash Starter Kit</h3>
                            <p class="text-gray-600 text-base mb-4">Your journey to beautiful lashes starts here with 3 cluster sets and tools.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-pink-600">R350</span>
                                <button class="px-5 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition duration-300 transform hover:shadow-md">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Special Products -->
            <div class="mb-16 animate-fade-in-up animation-delay-600">
                <h3 class="text-3xl font-semibold text-center text-pink-600 mb-8">Specialty Products</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Product Card 4 -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out group">
                        <img
                            src="https://placehold.co/400x300/F8C8DC/000?text=Magnetic+Lashes"
                            alt="Magnetic Eyelashes Combo"
                            class="w-full h-19 object-cover object-center rounded-t-xl group-hover:opacity-90 transition-opacity duration-300"
                            onerror="this.onerror=null;this.src='https://placehold.co/400x300/F8C8DC/000?text=Product+Image';"
                        />
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Magnetic Eyelashes Combo</h3>
                            <p class="text-gray-600 text-base mb-4">Effortless 'up and go' magnetic lashes for a natural, captivating look.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-pink-600">R250</span>
                                <button class="px-5 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition duration-300 transform hover:shadow-md">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Product Card 5 -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out group">
                        <img
                            src="https://placehold.co/400x300/F8C8DC/000?text=Lash+Lift+Kit"
                            alt="Lash Lift Kit"
                            class="w-full h-19 object-cover object-center rounded-t-xl group-hover:opacity-90 transition-opacity duration-300"
                            onerror="this.onerror=null;this.src='https://placehold.co/400x300/F8C8DC/000?text=Product+Image';"
                        />
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Lash Lift Kit</h3>
                            <p class="text-gray-600 text-base mb-4">Achieve a professional lash lift at home for long-lasting curl.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-pink-600">R250</span>
                                <button class="px-5 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition duration-300 transform hover:shadow-md">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Product Card 6 -->
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out group">
                        <img
                            src="https://placehold.co/400x300/F8C8DC/000?text=Teddy+Bears"
                            alt="Plush Comfort Teddies"
                            class="w-full h-19 object-cover object-center rounded-t-xl group-hover:opacity-90 transition-opacity duration-300"
                            onerror="this.onerror=null;this.src='https://placehold.co/400x300/F8C8DC/000?text=Product+Image';"
                        />
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Plush Comfort Teddies</h3>
                            <p class="text-gray-600 text-base mb-4">Soft and cuddly teddy bears, perfect for a special gift or a cozy companion.</p>
                            <div class="flex justify-between items-center">
                                <span class="text-2xl font-bold text-pink-600">R300</span>
                                <button class="px-5 py-2 bg-pink-500 text-white rounded-full text-sm font-medium hover:bg-pink-600 transition duration-300 transform hover:shadow-md">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Combos and Individual Items -->
            <div class="mb-16 animate-fade-in-up animation-delay-900">
                <h3 class="text-3xl font-semibold text-center text-pink-600 mb-8">Combos & Individual Items</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Combos -->
                    <div class="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h4 class="text-2xl font-bold text-gray-800 mb-4">Combos</h4>
                        <ul class="space-y-3 text-lg text-gray-700">
                            <li class="flex justify-between items-center">
                                <span>The Ordinary</span>
                                <span class="font-semibold text-pink-600">R120</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span>Bond & Seal / Tweezers / Remover</span>
                                <span class="font-semibold text-pink-600">R150</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span>Lash Starter Kit</span>
                                <span class="font-semibold text-pink-600">R350</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span>All You Need Kit</span>
                                <span class="font-semibold text-pink-600">R450</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Individual Items -->
                    <div class="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h4 class="text-2xl font-bold text-gray-800 mb-4">Individual Items</h4>
                        <ul class="space-y-3 text-lg text-gray-700">
                            <li class="flex justify-between items-center">
                                <span>Mini False Eyelash Remover Kit (29pcs)</span>
                                <span class="font-semibold text-pink-600">R180</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span>Mini Eyelash Extension Kit (31pcs)</span>
                                <span class="font-semibold text-pink-600">R300</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span>Eyelash Curler</span>
                                <span class="font-semibold text-pink-600">R100</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span>Electric Hot Eyelash Curler</span>
                                <span class="font-semibold text-pink-600">R199.99</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span>Lash Mouse Mild</span>
                                <span class="font-semibold text-pink-600">R150</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span>Waterproof Lash Glue</span>
                                <span class="font-semibold text-pink-600">R200</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span>Eyelash Cleaner</span>
                                <span class="font-semibold text-pink-600">R45.00</span>
                            </li>
                            <li class="flex justify-between items-center">
                                <span>Eyelash Mirror Mini</span>
                                <span class="font-semibold text-pink-600">R45.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">About Genevieves Boutique</h2>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
                At Genevieves Boutique, we believe that beauty is an expression of self-love and confidence. We are dedicated to providing high-quality, innovative lash products and beauty essentials that empower you to look and feel your absolute best. Our mission is to bring "unlimited lash heaven" to every customer, ensuring a seamless and luxurious beauty experience. We carefully curate our collections to offer the latest trends and most effective solutions, helping you achieve captivating eyes with ease.
            </p>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">Get in Touch</h2>
            <div class="max-w-xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl shadow-lg animate-fade-in-up animation-delay-300">
                <form class="space-y-6">
                    <div>
                        <label for="name" class="block text-lg font-medium text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-lg transition duration-200"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label for="email" class="block text-lg font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-lg transition duration-200"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label for="message" class="block text-lg font-medium text-gray-700 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-lg transition duration-200"
                            placeholder="How can we help you?"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="w-full px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-6 text-center">
            <p class="text-lg mb-4">&copy; <span id="current-year"></span> Genevieves Boutique. All rights reserved.</p>
            <div class="flex justify-center space-x-6">
                <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                    <i class="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                    <i class="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition duration-300">
                    <i class="fab fa-twitter text-2xl"></i>
                </a>
            </div>
        </div>
    </footer>

    <script>
        // JavaScript for mobile menu and smooth scrolling
        document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIconOpen = document.getElementById('menu-icon-open');
            const menuIconClose = document.getElementById('menu-icon-close');
            const navLinks = document.querySelectorAll('nav a'); // Select all navigation links

            // Set current year in footer
            document.getElementById('current-year').textContent = new Date().getFullYear();

            // Toggle mobile menu visibility
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                menuIconOpen.classList.toggle('hidden');
                menuIconClose.classList.toggle('hidden');
            });

            // Smooth scroll function for navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault(); // Prevent default anchor link behavior
                    const targetId = this.getAttribute('href').substring(1); // Get target section ID
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                        // Close mobile menu if open
                        if (!mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                            menuIconOpen.classList.remove('hidden');
                            menuIconClose.classList.add('hidden');
                        }
                    }
                });
            });

            // Handle product card rendering (simplified as static HTML)
            // In a real scenario, you might fetch product data and dynamically create these cards.
        });

        // Global smooth scroll function for buttons (e.g., "Explore Our Collections")
        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    </script>
</body>
</html>
