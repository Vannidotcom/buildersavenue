import { Hammer, Paintbrush, Home, Ruler, Axe, Package } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: 'Cement',
      description: 'High-quality cement from trusted brands for all your construction needs.',
      icon: Package
    },
    {
      name: 'POP & Fibre',
      description: 'Premium POP (Plaster of Paris) and fibre materials for ceiling and decoration.',
      icon: Ruler
    },
    {
      name: 'Paint',
      description: 'Wide range of interior and exterior paints in various colors and finishes.',
      icon: Paintbrush
    },
    {
      name: 'Wood',
      description: 'Quality timber and wood products for construction and furniture.',
      icon: Axe
    },
    {
      name: 'Nails & Hardware',
      description: 'Various sizes of nails and essential hardware items.',
      icon: Hammer
    },
    {
      name: 'Roofing Sheets',
      description: 'Durable roofing sheets and materials for lasting protection.',
      icon: Home
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:text-center mb-12">
        <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">Our Products</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Quality Building Materials
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          We offer a comprehensive range of building materials for all your construction needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <product.icon className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              </div>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          And many more products available in store. Visit us to explore our full range of building materials.
        </p>
      </div>
    </div>
  );
}