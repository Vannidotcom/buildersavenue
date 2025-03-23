import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/builders-avenue-logo.png"
              alt="Builders Avenue Logo" 
              className="h-16"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="text-yellow-400" />
              <div className="flex flex-col">
                <a href="tel:0201220888" className="hover:text-yellow-400">0201220888</a>
                <a href="tel:0256039715" className="hover:text-yellow-400">0256039715</a>
                <a href="tel:0269387964" className="hover:text-yellow-400">0269387964</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
