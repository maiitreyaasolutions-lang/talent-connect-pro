import { motion } from "framer-motion";
import whatsappIcon from "../assets/whatsapp.svg";

const WhatsAppFloat = () => {
  const phoneNumber = "919696318388"; // Updated with client number
  const message = "Hello! I am interested in your workforce solutions.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl hover:shadow-[#25D366]/50 group"
      aria-label="Connect on WhatsApp"
      initial={{ y: 0 }}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="w-full h-full bg-[#25D366] rounded-full flex items-center justify-center overflow-hidden shadow-inner">
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-full h-full object-cover scale-110"
        />
      </div>
      <span className="absolute right-full mr-4 bg-white text-[#25D366] text-sm font-bold px-4 py-2 rounded-xl shadow-xl border border-[#25D366]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap hidden sm:block pointer-events-none transform translate-x-2 group-hover:translate-x-0">
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppFloat;
