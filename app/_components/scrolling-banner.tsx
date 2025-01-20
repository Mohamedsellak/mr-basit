interface ScrollingBannerProps {
  text?: string;
}

const ScrollingBanner = ({ 
  text = "Welcome to Mr. Basit's Moroccan Treasures • Discover authentic Moroccan craftsmanship • Experience the magic of Morocco • Handcrafted with love • " 
}: ScrollingBannerProps) => {
  return (
    <div className="fixed top-0 left-0 w-full overflow-hidden bg-gradient-to-r from-amber-50/90 via-amber-100/90 to-amber-50/90 backdrop-blur-sm py-3 z-50 border-b border-amber-200/50 shadow-sm">
      <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused] select-none">
        {[...Array(4)].map((_, index) => (
          <span 
            key={index} 
            className="mr-12 inline-flex items-center text-amber-900 font-medium tracking-wide"
          >
            <span className="text-amber-500 mr-2">✦</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner; 