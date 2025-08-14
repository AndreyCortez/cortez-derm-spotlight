import { MessageCircle, Instagram } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a 
        href="https://wa.me/11940464727" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
      
      <a 
        href="https://instagram.com/mariacortez.dermato" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6 text-white" />
      </a>
    </div>
  );
};

export default FloatingButtons;