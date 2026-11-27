export interface Property {
  id: number;
  title: string;
  location: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  description: string;
  amenities: string[];
  owner: string;
  ownerEmail: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Luxury 2BHK Apartment",
    location: "Sector 62, Noida",
    city: "Noida",
    price: 18000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    description:
      "A beautiful and spacious apartment with modern interiors, excellent connectivity and a peaceful environment.",
    amenities: ["Parking", "WiFi", "Lift", "Security"],
    owner: "Rahul Sharma",
    ownerEmail: "rahul@example.com"
  },

  {
    id: 2,
    title: "Modern Family House",
    location: "Zirakpur, Punjab",
    city: "Zirakpur",
    price: 25000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    description:
      "A modern family house with spacious rooms, natural lighting and all essential facilities.",
    amenities: ["Garden", "Parking", "Security", "Balcony"],
    owner: "Aman Verma",
    ownerEmail: "aman@example.com"
  },

  {
    id: 3,
    title: "Affordable 1BHK Flat",
    location: "Sector 15, Chandigarh",
    city: "Chandigarh",
    price: 12000,
    bedrooms: 1,
    bathrooms: 1,
    area: 750,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
    description:
      "An affordable and comfortable flat suitable for students and working professionals.",
    amenities: ["WiFi", "Water Supply", "Security"],
    owner: "Priya Mehta",
    ownerEmail: "priya@example.com"
  },

  {
    id: 4,
    title: "Premium 3BHK Villa",
    location: "Patiala, Punjab",
    city: "Patiala",
    price: 30000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2000,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    description:
      "A premium villa featuring spacious interiors, beautiful surroundings and modern amenities.",
    amenities: ["Swimming Pool", "Garden", "Parking", "Security"],
    owner: "Karan Singh",
    ownerEmail: "karan@example.com"
  }
];