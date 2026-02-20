// ==========================================
// PETIT PARIS - SITE CONFIGURATION
// Edit this single file to update all content
// ==========================================

export const siteConfig = {
  // Brand Info
  name: "Petit Paris",
  tagline: "Parisian Desserts in Jodhpur's Blue City",
  description: "Freshly baked cheesecakes, brownies, cupcakes, cookies & coffee—perfect for cravings and celebrations.",
  
  // Contact Info
  phone: "+91 95714 73146",
  whatsappNumber: "919571473146",
  whatsappLink: "https://wa.me/919571473146",
  email: "hello@petitparis.in",
  
  // Location
  address: {
    line1: "1st C Rd, Sardarpura",
    city: "Jodhpur",
    state: "Rajasthan",
    pincode: "342001",
    country: "India",
    full: "1st C Rd, Sardarpura, Jodhpur, Rajasthan 342001",
  },
  mapLink: "https://www.google.com/maps/place/petit+paris/data=!4m2!3m1!1s0x39418ddfe8575613:0x3f971499cb76cff0",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.8!2d72.98!3d26.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418ddfe8575613%3A0x3f971499cb76cff0!2sPetit%20Paris!5e0!3m2!1sen!2sin!4v1700000000000",
  
  // Hours
  hours: {
    display: "12:00 PM – 11:00 PM",
    note: "Timings may vary—confirm on call",
    days: "Open Daily",
  },
  
  // Pricing
  averageSpend: "₹200 – ₹400",
  
  // Ratings
  ratings: {
    google: "4.4",
    zomato: "4.6",
  },
  
  // Social Links
  social: {
    instagram: "https://instagram.com/petitparisjodhpur",
    facebook: "https://facebook.com/petitparisjodhpur",
  },
  
  // Navigation
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Order", href: "/order" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  
  // Trust badges for hero
  trustBadges: [
    "Custom Cakes",
    "Delivery & Takeaway",
    "Veg-Friendly Options",
  ],
};

// Pre-filled WhatsApp messages
export const whatsappMessages = {
  general: "Hi! I'd like to place an order from Petit Paris.",
  menuItem: (item: string) => `Hi! I'd like to order ${item} from Petit Paris.`,
  customCake: (details: string) => `Hi! I'd like to inquire about a custom cake:\n${details}`,
  contact: "Hi! I have a question about Petit Paris.",
};

// Generate WhatsApp URL with message
export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

// Menu Categories and Items
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: ('bestseller' | 'new' | 'eggless' | 'contains-nuts' | 'chocolate' | 'fruit' | 'veg')[];
  image: string;
};

export const menuCategories = [
  { id: "cheesecakes", label: "Cheesecakes", icon: "🧀" },
  { id: "cakes", label: "Cakes", icon: "🎂" },
  { id: "pastries", label: "Pastries", icon: "🥐" },
  { id: "brownies", label: "Brownies", icon: "🍫" },
  { id: "cookies", label: "Cookies", icon: "🍪" },
  { id: "beverages", label: "Beverages", icon: "☕" },
];

export const menuItems: MenuItem[] = [
  // Cheesecakes
  { id: "cc1", name: "New York Cheesecake", description: "Classic creamy cheesecake with graham cracker crust", price: 350, category: "cheesecakes", tags: ["bestseller", "eggless"], image: "/images/gallery/gallery-01.jpg" },
  { id: "cc2", name: "Blueberry Cheesecake", description: "NY style topped with fresh blueberry compote", price: 380, category: "cheesecakes", tags: ["bestseller", "fruit"], image: "/images/gallery/gallery-02.jpg" },
  { id: "cc3", name: "Mango Cheesecake", description: "Seasonal alphonso mango with creamy filling", price: 400, category: "cheesecakes", tags: ["new", "fruit", "eggless"], image: "/images/gallery/gallery-03.jpg" },
  { id: "cc4", name: "Lotus Biscoff Cheesecake", description: "Caramelized biscuit base with Biscoff swirl", price: 420, category: "cheesecakes", tags: ["bestseller"], image: "/images/gallery/gallery-04.jpg" },
  { id: "cc5", name: "Oreo Cheesecake", description: "Crushed Oreo cookies in creamy cheesecake", price: 360, category: "cheesecakes", tags: ["chocolate"], image: "/images/gallery/gallery-05.jpg" },
  { id: "cc6", name: "Strawberry Cheesecake", description: "Fresh strawberry topping with vanilla bean", price: 390, category: "cheesecakes", tags: ["fruit", "eggless"], image: "/images/gallery/gallery-06.jpg" },
  
  // Cakes
  { id: "ck1", name: "Chocolate Truffle Cake", description: "Rich Belgian chocolate layers with ganache", price: 450, category: "cakes", tags: ["bestseller", "chocolate"], image: "/images/gallery/gallery-07.jpg" },
  { id: "ck2", name: "Red Velvet Cake", description: "Velvety cocoa cake with cream cheese frosting", price: 420, category: "cakes", tags: ["bestseller"], image: "/images/gallery/gallery-08.jpg" },
  { id: "ck3", name: "Black Forest Cake", description: "Chocolate sponge with cherries and cream", price: 400, category: "cakes", tags: ["fruit", "chocolate"], image: "/images/gallery/gallery-09.jpg" },
  { id: "ck4", name: "Dutch Chocolate Cake", description: "Intense dark chocolate with fudge frosting", price: 480, category: "cakes", tags: ["chocolate"], image: "/images/gallery/gallery-10.jpg" },
  { id: "ck5", name: "Vanilla Bean Cake", description: "Light vanilla sponge with buttercream", price: 380, category: "cakes", tags: ["eggless", "veg"], image: "/images/gallery/gallery-11.jpg" },
  { id: "ck6", name: "Butterscotch Cake", description: "Caramel crunch with butterscotch cream", price: 400, category: "cakes", tags: ["contains-nuts"], image: "/images/gallery/gallery-12.jpg" },
  
  // Pastries
  { id: "ps1", name: "Bomboloni", description: "Italian filled doughnuts with custard", price: 120, category: "pastries", tags: ["bestseller", "new"], image: "/images/gallery/gallery-13.jpg" },
  { id: "ps2", name: "Butter Croissant", description: "Flaky French pastry with pure butter", price: 150, category: "pastries", tags: ["bestseller"], image: "/images/gallery/gallery-14.jpg" },
  { id: "ps3", name: "Chocolate Croissant", description: "Pain au chocolat with dark chocolate batons", price: 180, category: "pastries", tags: ["chocolate"], image: "/images/gallery/gallery-15.jpg" },
  { id: "ps4", name: "Danish Pastry", description: "Fruit-topped laminated pastry", price: 160, category: "pastries", tags: ["fruit"], image: "/images/gallery/gallery-16.jpg" },
  { id: "ps5", name: "Chocolate Éclair", description: "Choux pastry with chocolate cream", price: 140, category: "pastries", tags: ["chocolate"], image: "/images/gallery/gallery-20.jpg" },
  { id: "ps6", name: "Apple Turnover", description: "Puff pastry with spiced apple filling", price: 130, category: "pastries", tags: ["fruit", "veg"], image: "/images/gallery/gallery-18.jpg" },
  
  // Brownies
  { id: "br1", name: "Walnut Brownie", description: "Fudgy brownie loaded with California walnuts", price: 100, category: "brownies", tags: ["bestseller", "chocolate", "contains-nuts"], image: "/images/gallery/gallery-19.jpg" },
  { id: "br2", name: "Fudge Brownie", description: "Pure chocolate indulgence, extra gooey", price: 90, category: "brownies", tags: ["chocolate", "eggless"], image: "/images/gallery/gallery-20.jpg" },
  { id: "br3", name: "Cream Cheese Brownie", description: "Marbled with tangy cream cheese swirl", price: 120, category: "brownies", tags: ["new", "chocolate"], image: "/images/gallery/gallery-21.jpg" },
  { id: "br4", name: "Salted Caramel Brownie", description: "Dark chocolate with sea salt caramel", price: 130, category: "brownies", tags: ["chocolate"], image: "/images/gallery/gallery-22.jpg" },
  { id: "br5", name: "Nutella Brownie", description: "Hazelnut chocolate spread baked in", price: 140, category: "brownies", tags: ["chocolate", "contains-nuts"], image: "/images/gallery/gallery-23.jpg" },
  
  // Cookies
  { id: "co1", name: "Chocolate Chip Cookie", description: "Classic with Belgian chocolate chips", price: 60, category: "cookies", tags: ["bestseller", "chocolate"], image: "/images/gallery/gallery-24.jpg" },
  { id: "co2", name: "Red Velvet Cookie", description: "Soft red velvet with white chocolate", price: 70, category: "cookies", tags: ["new"], image: "/images/gallery/gallery-25.jpg" },
  { id: "co3", name: "Oatmeal Raisin Cookie", description: "Chewy oats with plump raisins", price: 55, category: "cookies", tags: ["veg", "fruit"], image: "/images/gallery/gallery-26.jpg" },
  { id: "co4", name: "Double Chocolate Cookie", description: "Dark and white chocolate chunks", price: 75, category: "cookies", tags: ["chocolate"], image: "/images/gallery/gallery-27.jpg" },
  { id: "co5", name: "Peanut Butter Cookie", description: "Rich peanut butter with sea salt", price: 65, category: "cookies", tags: ["contains-nuts"], image: "/images/gallery/gallery-23.jpg" },
  
  // Beverages
  { id: "bv1", name: "Cappuccino", description: "Espresso with steamed milk foam", price: 180, category: "beverages", tags: ["bestseller"], image: "/images/gallery/gallery-28.jpg" },
  { id: "bv2", name: "Cold Coffee", description: "Blended iced coffee with cream", price: 160, category: "beverages", tags: ["bestseller"], image: "/images/gallery/gallery-29.jpg" },
  { id: "bv3", name: "Hot Chocolate", description: "Rich Belgian chocolate drink", price: 200, category: "beverages", tags: ["chocolate"], image: "/images/gallery/gallery-30.jpg" },
  { id: "bv4", name: "Matcha Latte", description: "Japanese green tea with steamed milk", price: 220, category: "beverages", tags: ["new", "veg"], image: "/images/gallery/gallery-31.jpg" },
  { id: "bv5", name: "Iced Americano", description: "Espresso shots over ice", price: 150, category: "beverages", tags: [], image: "/images/gallery/gallery-32.jpg" },
  { id: "bv6", name: "Caramel Frappe", description: "Blended coffee with caramel drizzle", price: 240, category: "beverages", tags: [], image: "/images/gallery/gallery-33.jpg" },
];

// Reviews
export const reviews = [
  { id: 1, name: "Priya Sharma", rating: 5, text: "The best cheesecake in Jodhpur! Lotus Biscoff is absolutely divine. Perfect for my birthday celebration.", date: "2 weeks ago", source: "Google" },
  { id: 2, name: "Rahul Mehra", rating: 5, text: "Finally, a café that understands Parisian pastries. The croissants are flaky perfection. Worth every rupee.", date: "1 month ago", source: "Zomato" },
  { id: 3, name: "Anjali Rathore", rating: 4, text: "Ordered a custom cake for my anniversary. Beautiful design and even better taste. Highly recommend!", date: "3 weeks ago", source: "Google" },
  { id: 4, name: "Vikram Singh", rating: 5, text: "The ambiance is lovely and the bomboloni are to die for. My new favorite spot in Sardarpura.", date: "1 week ago", source: "Google" },
  { id: 5, name: "Meera Joshi", rating: 5, text: "Love their eggless options! The mango cheesecake was fresh and not too sweet. Perfect balance.", date: "2 weeks ago", source: "Zomato" },
  { id: 6, name: "Arjun Patel", rating: 4, text: "Great coffee and even better brownies. The walnut brownie is criminally good. Will be back!", date: "1 month ago", source: "Google" },
];

// Gallery images
export const galleryImages = [
  { id: 1, src: "/images/gallery/gallery-02.jpg", alt: "Blueberry cheesecake slice", category: "cakes" },
  { id: 2, src: "/images/gallery/gallery-14.jpg", alt: "Fresh butter croissants", category: "cafe" },
  { id: 3, src: "/images/gallery/gallery-07.jpg", alt: "Chocolate birthday cake", category: "celebrations" },
  { id: 4, src: "/images/gallery/gallery-32.jpg", alt: "Iced coffee on table", category: "cafe" },
  { id: 5, src: "/images/gallery/gallery-13.jpg", alt: "Assorted bomboloni", category: "cakes" },
  { id: 6, src: "/images/gallery/gallery-18.jpg", alt: "Café interior with pastries", category: "cafe" },
  { id: 7, src: "/images/gallery/gallery-19.jpg", alt: "Walnut brownies stack", category: "cakes" },
  { id: 8, src: "/images/gallery/gallery-11.jpg", alt: "Wedding cake three tier", category: "celebrations" },
  { id: 9, src: "/images/gallery/gallery-24.jpg", alt: "Fresh baked cookies", category: "cakes" },
  { id: 10, src: "/images/gallery/gallery-35.jpg", alt: "Cozy café corner", category: "cafe" },
  { id: 11, src: "/images/gallery/gallery-08.jpg", alt: "Red velvet slice", category: "cakes" },
  { id: 12, src: "/images/gallery/gallery-36.jpg", alt: "Birthday party setup", category: "celebrations" },
  { id: 13, src: "/images/gallery/gallery-28.jpg", alt: "Perfect cappuccino art", category: "cafe" },
  { id: 14, src: "/images/gallery/gallery-04.jpg", alt: "Biscoff cheesecake whole", category: "cakes" },
  { id: 15, src: "/images/gallery/gallery-37.jpg", alt: "Anniversary cake cutting", category: "celebrations" },
  { id: 16, src: "/images/gallery/gallery-16.jpg", alt: "Danish pastry platter", category: "cakes" },
  { id: 17, src: "/images/gallery/gallery-38.jpg", alt: "Café seating area", category: "cafe" },
  { id: 18, src: "/images/gallery/gallery-39.jpg", alt: "Custom kids cake", category: "celebrations" },
];

// FAQ Items
export const faqItems = [
  { question: "How early should I order a custom cake?", answer: "For custom cakes, we recommend ordering at least 2-3 days in advance. For elaborate designs or large orders, please give us 4-5 days notice. Same-day orders may be possible—just message us on WhatsApp!" },
  { question: "Do you make eggless cakes?", answer: "Yes! We have a wide range of eggless options including cheesecakes, brownies, and our popular vanilla and butterscotch cakes. Look for the 'Eggless' tag on our menu." },
  { question: "What are your delivery and pickup timings?", answer: "We're open from 12 PM to 11 PM daily. Pickup is available anytime during our hours. For delivery, please contact us on WhatsApp to confirm availability in your area." },
  { question: "Can I customize the message on the cake?", answer: "Absolutely! When you order, let us know your message and we'll add it with our signature elegant piping. Fondant toppers and special decorations are also available." },
  { question: "Do you cater for events and parties?", answer: "Yes, we offer catering for birthdays, anniversaries, corporate events, and more. We can create dessert tables, pastry platters, and custom cake setups. Contact us for a custom quote." },
];

// About page content
export const aboutContent = {
  story: `In the heart of Jodhpur's historic Sardarpura, where the blue-washed walls meet the golden desert sun, Petit Paris brings a slice of Parisian patisserie charm to the Blue City.

Born from a passion for authentic baking and a love for Jodhpur's vibrant culture, we've created a space where French elegance meets Rajasthani warmth. Every cheesecake is crafted with care, every croissant baked to flaky perfection, and every coffee brewed with love.`,
  
  knownFor: [
    { title: "Signature Cheesecakes", description: "Our NY-style cheesecakes have become Jodhpur's favorite. Creamy, rich, and made with the finest ingredients." },
    { title: "Fresh Daily Bakes", description: "From butter croissants to bomboloni, everything is baked fresh in our kitchen every single day." },
    { title: "Custom Celebration Cakes", description: "Birthdays, anniversaries, or just because—we create stunning custom cakes that taste as good as they look." },
  ],
  
  values: [
    "Quality ingredients, no shortcuts",
    "Made fresh daily in-house",
    "Veg-friendly options available",
    "Hygiene & cleanliness first",
  ],
};
