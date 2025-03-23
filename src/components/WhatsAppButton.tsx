import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/233201220888"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>
      <div className="absolute right-0 bottom-20 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us on WhatsApp
      </div>
    </div>
  );
}
