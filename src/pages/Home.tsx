import Hero from '../components/Hero';
import { Truck, Package, Headphones, Shield, Clock, MapPin } from 'lucide-react';

export default function Home() {
  const features = [
    {
      name: 'Premium Products',
      description: 'Sourcing from trusted manufacturers, we ensure every product meets the highest quality standards.',
      icon: Shield,
    },
    {
      name: 'Fast Delivery',
      description: 'Same-day delivery within Winneba. Efficient logistics for surrounding areas.',
      icon: Truck,
    },
    {
      name: 'Expert Support',
      description: 'Our knowledgeable team provides expert advice on material selection and usage.',
      icon: Headphones,
    },
    {
      name: 'Extensive Inventory',
      description: 'From foundation materials to finishing touches, find everything under one roof.',
      icon: Package,
    },
    {
      name: 'Flexible Hours',
      description: 'Open 7 days a week with extended hours to accommodate your schedule.',
      icon: Clock,
    },
    {
      name: 'Strategic Location',
      description: 'Conveniently located in Winneba with easy access for loading and unloading.',
      icon: MapPin,
    },
  ];

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for your construction project
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We pride ourselves on providing quality building materials, exceptional service, and reliable delivery to support your construction needs.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="relative group">
                  <div className="absolute h-12 w-12 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-200">
                    <feature.icon className="h-12 w-12" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-yellow-600 transition-colors duration-200">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-yellow-500">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to start your project?</span>
            <span className="block text-white">Get in touch with our sales team.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="tel:0201220888"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-500 bg-white hover:bg-gray-50"
              >
                Call Now
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
              >
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}