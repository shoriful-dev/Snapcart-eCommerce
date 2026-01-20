import { Leaf, Smartphone, Truck } from 'lucide-react';

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      icon: (
        <Leaf className="w-20 h-20 sm:w-28 sm:h-28 text-green-400 drop-shadow-lg" />
      ),
      title: 'Fresh Organic Groceries 🥦',
      subTitle:
        'Farm-fresh fruits, vegetables, and daily essentials delivered to you.',
      btnText: 'Shop Now',
      bg: 'https://plus.unsplash.com/premium_photo-1661409279183-569bfddb7100?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      icon: (
        <Truck className="w-20 h-20 sm:w-28 sm:h-28 text-yellow-400 drop-shadow-lg" />
      ),
      title: 'Fast & Reliable Delivery 🚚',
      subTitle: 'We ensure your groceries reach your doorstep in no time',
      btnText: 'Order Now',
      bg: 'https://images.unsplash.com/photo-1607273685680-6bd976c5a5ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      icon: (
        <Smartphone className="w-20 h-20 sm:w-28 sm:h-28 text-blue-400 drop-shadow-lg" />
      ),
      title: 'Shop Anytime, Anywhere 📱',
      subTitle:
        'Easy and seamless online grocery shopping experience.',
      btnText: 'Get Started',
      bg: ''
    },
  ];

  console.log(slides);
  return <div>HeroSection</div>;
};

export default HeroSection;
