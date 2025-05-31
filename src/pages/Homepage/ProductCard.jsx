import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);
  const cardRef = useRef(null);

  // Use Intersection Observer to trigger animation when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimateCards(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Function to handle navigation on button click with scroll to top
  const handleKnowMore = (cardId) => {
    let path;
    switch (cardId) {
      case 'expertise':
        path = '/about?section=expertise';
        break;
      case 'rtf':
        path = '/about?section=rtf-pellets';
        break;
      case 'products':
        path = '/products';
        break;
      default:
        path = '/';
    }
    console.log('Navigated to:', path); // Debug log
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Card data (order matches the image: Expertise, RTF, Products)
  const cards = [
    {
      id: 'expertise',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M10 42H38M12 36H16M14 36V42M21 25L18 28M34 6L40 12M24 42C26.494 42.0002 28.9262 41.2234 30.9583 39.7774C32.9904 38.3315 34.5215 36.2883 35.3387 33.9319C36.1559 31.5756 36.2186 29.0232 35.5181 26.6295C34.8176 24.2359 33.3886 22.12 31.43 20.576M18 22L24 28L36 16L30 10L18 22Z"
            stroke="#008000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Expertise',
      description:
        'Contract Formulation Development, Product Commercialization And Manufacturing Are Focused Business Area For Spansules. Spansules Has Long Experience In Providing Its Customers With A Wide Range Of Specialty Products As Well As Formulation Development Services.',
    },
    {
      id: 'rtf',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M39.5599 8.51544C41.8102 10.7659 43.0743 13.818 43.0743 17.0004C43.0743 20.1829 41.8102 23.235 39.5599 25.4854L35.3159 29.7254L25.4159 39.6274C23.1593 41.8476 20.1168 43.0861 16.9511 43.0732C13.7855 43.0603 10.7532 41.7971 8.51472 39.5586C6.27625 37.3202 5.01299 34.2878 5.0001 31.1222C4.98721 27.9566 6.22574 24.9141 8.4459 22.6574L22.5879 8.51544C23.7022 7.40092 25.0252 6.51682 26.4812 5.91364C27.9373 5.31046 29.4979 5 31.0739 5C32.6499 5 34.2105 5.31046 35.6666 5.91364C37.1226 6.51682 38.4456 7.40092 39.5599 8.51544ZM29.6599 29.7274L18.3459 18.4154L11.2739 25.4854C9.77357 26.9858 8.93069 29.0207 8.93069 31.1424C8.93069 33.2642 9.77357 35.2991 11.2739 36.7994C12.7742 38.2998 14.8091 39.1426 16.9309 39.1426C19.0527 39.1426 21.0876 38.2998 22.5879 36.7994L29.6599 29.7274Z"
            fill="#008000"
          />
        </svg>
      ),
      title: 'Ready To Fill (RTF) Pellets', // Split as "Ready To Fill (RTF)" on first line, "Pellets" on second
      description:
        'Spansules Providing Pre-Finished Pharmaceuticals I.E. Ready To Fill (RTF) Pellets & Directly Compressible Granules (DCG) For Minimizing The Process And Reducing Manufacturing Cost.',
    },
    {
      id: 'products',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 2.5C22.79 2.5 21.676 2.8 20.458 3.304C19.28 3.792 17.912 4.51 16.21 5.404L12.074 7.574C9.984 8.67 8.314 9.548 7.02 10.41C5.684 11.304 4.652 12.244 3.902 13.518C3.154 14.788 2.818 16.164 2.656 17.802C2.5 19.392 2.5 21.346 2.5 23.806V24.194C2.5 26.654 2.5 28.608 2.656 30.198C2.818 31.838 3.156 33.212 3.902 34.482C4.652 35.756 5.682 36.696 7.022 37.59C8.312 38.452 9.984 39.33 12.074 40.426L16.21 42.596C17.912 43.49 19.28 44.208 20.458 44.696C21.678 45.2 22.79 45.5 24 45.5C25.21 45.5 26.324 45.2 27.542 44.696C28.72 44.208 30.088 43.49 31.79 42.596L35.926 40.428C38.016 39.33 39.686 38.452 40.978 37.59C42.318 36.696 43.348 35.756 44.098 34.482C44.846 33.212 45.182 31.836 45.344 30.198C45.5 28.608 45.5 26.654 45.5 24.196V23.804C45.5 21.346 45.5 19.392 45.344 17.802C45.182 16.162 44.844 14.788 44.098 13.518C43.348 12.244 42.318 11.304 40.978 10.41C39.688 9.548 38.016 8.67 35.926 7.574L31.79 5.404C30.088 4.51 28.72 3.792 27.542 3.304C26.322 2.8 25.21 2.5 24 2.5ZM17.54 8.092C19.32 7.158 20.568 6.506 21.604 6.078C22.612 5.66 23.322 5.5 24 5.5C24.68 5.5 25.388 5.66 26.396 6.078C27.432 6.506 28.678 7.158 30.458 8.092L34.458 10.192C36.638 11.334 38.168 12.14 39.314 12.904C39.878 13.282 40.32 13.632 40.68 13.984L34.018 17.314L17.018 8.366L17.54 8.092ZM13.89 10.008L13.542 10.192C11.362 11.334 9.832 12.14 8.688 12.904C8.20023 13.221 7.74294 13.5825 7.322 13.984L24 22.324L30.714 18.964L14.302 10.328C14.1481 10.2446 14.0089 10.1365 13.89 10.008ZM5.876 16.614C5.776 17.042 5.698 17.528 5.642 18.094C5.502 19.522 5.5 21.328 5.5 23.882V24.116C5.5 26.672 5.5 28.478 5.642 29.904C5.78 31.298 6.042 32.2 6.488 32.96C6.932 33.714 7.574 34.352 8.688 35.096C9.832 35.86 11.362 36.666 13.542 37.808L17.542 39.908C19.322 40.842 20.568 41.494 21.604 41.922C21.9293 42.0567 22.228 42.1667 22.5 42.252V24.926L5.876 16.614ZM25.5 42.25C25.772 42.166 26.0707 42.0567 26.396 41.922C27.432 41.494 28.678 40.842 30.458 39.908L34.458 37.808C36.638 36.664 38.168 35.86 39.314 35.096C40.426 34.352 41.068 33.714 41.514 32.96C41.96 32.2 42.22 31.3 42.358 29.904C42.498 28.478 42.5 26.672 42.5 24.118V23.884C42.5 21.328 42.5 19.522 42.358 18.096C42.3109 17.5983 42.2328 17.104 42.124 16.616L35.5 19.926V26C35.5 26.3978 35.342 26.7794 35.0607 27.0607C34.7794 27.342 34.3978 27.5 34 27.5C33.6022 27.5 33.2206 27.342 32.9393 27.0607C32.658 26.7794 32.5 26.3978 32.5 26V21.428L25.5 24.928V42.25Z"
            fill="#008000"
          />
        </svg>
      ),
      title: 'Products',
      description:
        'GASTRO INTESTINAL DRUGS & COMBINATIONS\nANTI - INFECTIVE\nCARDIO VASCULAR DRUGS\nRESPIRATORY DRUGS\nANTI - OBESITY\nANTI - BPH\nANTI - DEPRESSANT',
    },
  ];

  // Rearrange cards for medium view to match the image
  const topRowCards = [cards[0], cards[2]]; // Expertise and Products
  const bottomRowCard = cards[1]; // RTF Pellets

  // Helper function to render a card
  function renderCard(card, index) {
    const isMiddle = index === 1; // RTF Pellets is the green card
    const isHovered = hoveredCard === card.id;

    // Define card styles
    const cardClasses = `
      flex flex-col items-center p-6 sm:p-8 gap-4 
      flex-1
      rounded-xl shadow
      ${isMiddle ? 'shadow-lg' : 'shadow'} // Stronger shadow for middle card
      min-h-[300px] sm:min-h-[350px]
      ${isMiddle ? 'bg-[#2E7D32]' : isHovered ? 'bg-[#54AA54]' : 'bg-[E6F2E6]'} // Updated middle card background
      transition-all duration-700 ease-out
      ${!animateCards && index === 0 ? 'translate-x-[100%]' : ''}
      ${!animateCards && index === 2 ? '-translate-x-[100%]' : ''}
      ${animateCards ? 'translate-x-0 opacity-100' : 'opacity-30'}
    `;

    // Icon container classes
    const iconContainerClasses = `
      flex items-center justify-center p-4 rounded-xl mt-2
      ${isMiddle ? 'bg-white' : 'bg-green-50'}
    `;

    // Text classes
    const titleClasses = `
      font-['Roboto'] text-xl sm:text-2xl font-bold capitalize text-center w-full
      ${isMiddle || isHovered ? 'text-white' : 'text-black'}
      leading-tight // Ensure tight line spacing for better appearance
    `;

    const descriptionClasses = `
      font-['Roboto'] text-sm sm:text-base font-normal leading-[18px] sm:leading-[22px] capitalize text-center w-full
      ${isMiddle || isHovered ? 'text-white' : 'text-black'}
      flex-grow
    `;

    // Button classes
    const buttonClasses = `
      flex justify-center items-center px-4 py-2 sm:px-5 sm:py-3 rounded-lg
      font-['Montserrat'] text-sm sm:text-base font-semibold capitalize
      ${isMiddle ? 'bg-white text-[#16A34A] border border-[#54AA54]' : isHovered ? 'bg-white text-green-600 border border-green-600' : 'bg-white text-green-600 border border-green-600'}
      mb-2
    `;

    // Split the title for the middle card explicitly
    let titleContent = card.title;
    if (card.id === 'rtf') {
      titleContent = (
        <>
          Ready To Fill (RTF)<br />Pellets
        </>
      );
    } else {
      // For other cards, allow natural wrapping if needed, but they are single words
      titleContent = card.title;
    }

    return (
      <div
        key={card.id}
        className={cardClasses}
        onMouseEnter={() => setHoveredCard(card.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className={iconContainerClasses}>{card.icon}</div>
        <h3 className={titleClasses}>{titleContent}</h3>
        <div className={descriptionClasses}>
          {card.description.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
        <button className={buttonClasses} onClick={() => handleKnowMore(card.id)}>
          Know More
        </button>
      </div>
    );
  }

  return (
    <div ref={cardRef} className="p-4 w-full max-w-[1440px] mx-auto relative overflow-hidden">
      {/* For large screens (lg and up): original 3-column layout */}
      <div className="hidden lg:flex flex-row gap-8">{cards.map((card, index) => renderCard(card, index))}</div>

      {/* For medium screens (md): 2 cards in top row, 1 in bottom row */}
      <div className="hidden md:block lg:hidden">
        {/* Top row - Expertise and Products */}
        <div className="flex flex-row gap-6 mb-6">
          {topRowCards.map((card, index) => renderCard(card, index === 0 ? 0 : 2))}
        </div>

        {/* Bottom row - RTF Pellets (centered with the same width as other cards) */}
        <div className="flex justify-center">
          <div className="w-[calc(50%-12px)]">{renderCard(bottomRowCard, 1)}</div>
        </div>
      </div>

      {/* For small screens (sm and below): stacked cards */}
      <div className="flex flex-col gap-6 md:hidden">{cards.map((card, index) => renderCard(card, index))}</div>
    </div>
  );
};

export default ProductCard;