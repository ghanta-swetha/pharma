import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const News = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null);

  // Sample announcements array with dates
  const announcements = [
    {
      id: 1,
      image: "/assets/news/image1.jpeg",
      date: new Date("2022-09-21"),
      alt: "IPHEX GLOBAL REGULATORS CONCLAVE"
    },
    {
      id: 2,
      image: "/assets/news/image2.jpeg",
      date: new Date("2022-08-15"),
      alt: "Previous announcement"
    },
    {
      id: 3,
      image: "/assets/news/image3.jpeg",
      date: new Date("2022-07-10"),
      alt: "Older announcement"
    }
  ];

  // Sample news items array
  const newsItems = [
    {
      id: 1,
      image: "/assets/news/image1.jpeg",
      title: "IPHEX GLOBAL REGULATORS CONCLAVE",
      date: "September 21-23, 2022",
      description: "Join us at Stall No. S40 at IEML Knowledge Park II, Greater Noida."
    },
    {
      id: 2,
      image: "/assets/news/image2.jpeg",
      title: "New Product Launch Event",
      date: "March 2, 2022",
      description: "We’re excited to announce the launch of our new product line at Hyderabad Expo Center."
    },
    {
      id: 3,
      image: "/assets/news/image3.jpeg",
      title: "Annual General Meeting 2022",
      date: "June 5, 2022",
      description: "Our AGM will be held at our headquarters in Hyderabad, open to all stakeholders."
    }
  ];

  useEffect(() => {
    // Find the most recent announcement
    if (announcements.length > 0) {
      const sortedAnnouncements = [...announcements].sort((a, b) => b.date - a.date);
      setCurrentAnnouncement(sortedAnnouncements[0]);
      setShowAnnouncement(true);
    }
  }, []);

  const closeAnnouncement = () => {
    setShowAnnouncement(false);
  };

  return (
    <div className="relative">
      {/* News page content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero section with background image */}
        <div 
          className="py-24 bg-cover bg-center bg-no-repeat relative"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
          }}
        >
          {/* Overlay to make text more readable */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-center text-white mb-4">News & Events</h1>
          </div>
        </div>

        {/* News content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {newsItems.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={news.image || "/placeholder.svg"} 
                alt={news.title} 
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-2">{news.date}</p>
                <p className="text-gray-700">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Announcement Popup */}
      {showAnnouncement && currentAnnouncement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-3xl w-full">
            <div className="relative border-4 border-green-600 bg-white">
              <button 
                onClick={closeAnnouncement}
                className="absolute top-0 right-0 bg-white text-gray-800 p-1 z-10"
                aria-label="Close announcement"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={currentAnnouncement.image || "/placeholder.svg"} 
                alt={currentAnnouncement.alt} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
      <div><Footer/></div>
    </div>
  );
};

export default News;