import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/hero-bg.jpg"
          alt="Construction site"
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your Trusted Partner in <br />
          <span className="text-yellow-500">Building Materials</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Premium construction supplies, expert advice, and reliable delivery services in Winneba and beyond.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-yellow-500 hover:bg-yellow-400 transition-colors duration-200"
          >
            View Our Products
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
          <a
            href="tel:0201220888"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-200"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Sales Team
          </a>
        </div>
      </div>
    </div>
  );
}