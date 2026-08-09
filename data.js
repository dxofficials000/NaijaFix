const dprosDatabase = {
  version: "4.0",

  defaultArtisans: [
    {
      id: "art-001",
      name: "Adebayo Tailoring Hub",
      category: "Tailors & Fashion",
      location: "Ikeja, Lagos",
      rating: 0,
      reviewsCount: 0,
      verified: true,
      featured: false,
      phone: "2349135580184",
      image: "", // Type your personal picture filename here (e.g. "adebayo.jpg")
      description: "Master tailors specializing in bespoke Agbada, Senator wears, and clean corporate fitting."
    },
    {
      id: "art-002",
      name: "Chinedu Electrical & Solar",
      category: "Electricians",
      location: "Alaba, Lagos",
      rating: 0,
      reviewsCount: 0,
      verified: true,
      featured: false,
      phone: "2349135580184",
      image: "", // Type your personal picture filename here
      description: "Professional residential wiring, solar inverter installation, and fault troubleshooting."
    },
    {
      id: "art-003",
      name: "Fatima Plumbing & Pipeworks",
      category: "Plumbers",
      location: "Abuja, FCT",
      rating: 0,
      reviewsCount: 0,
      verified: true,
      featured: false,
      phone: "2349135580184",
      image: "", // Type your personal picture filename here
      description: "Expert leak detection, sanitary ware installation, and general domestic plumbing services."
    },
     {
      id: "art-004",
      name: "Uk Touch",
      category: "laundry",
      location: "lagos,lekki,ogombo",
      rating: 0,
      reviewsCount: 0,
      verified: false,
      featured: false,
      phone: "2349135580184",
      image: "", // Type your personal picture filename here
      description: "."
    },
    {
      id: "art-005",
      name: "God's Pinnacle",
      category: "Plumbers",
      location: "lagos,lekki,ogombo",
      rating: 0,
      reviewsCount:0,
      verified: true,
      featured: true,
      phone: "2349135580184",
      image: "vague.jpg", // Type your personal picture filename here
      description: "Expert leak detection, sanitary ware installation, and general domestic plumbing services."
    },
  ],

  getArtisans() {
    return this.defaultArtisans;
  },

  getBanners() {
    return this.defaultArtisans.filter(artisan => artisan.featured === true);
  },

  getCategories() {
    const categories = this.defaultArtisans.map(item => item.category);
    return ["All Categories", ...new Set(categories)];
  }
};
