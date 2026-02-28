export type FloorPlan = {
  slug: string;
  name: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  sqm?: number;
  style: "Colonial" | "Modern" | "Mediterranean";
  description: string;
};

export const floorPlans: FloorPlan[] = [
  {
    slug: "the-banksia-23",
    name: "The Banksia 23",
    image: "/images/floor-plans/the-banksia-23.jpg",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 230,
    style: "Modern",
    description:
      "A contemporary family home with open plan living, spacious bedrooms, and a double garage. Designed for the modern Queensland lifestyle.",
  },
  {
    slug: "the-hampton-23",
    name: "The Hampton 23",
    image: "/images/floor-plans/the-hampton-23.jpg",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 230,
    style: "Colonial",
    description:
      "The Hampton 23 combines timeless colonial charm with modern functionality. Featuring generous living areas and a welcoming front facade.",
  },
  {
    slug: "the-dundee-23",
    name: "The Dundee 23",
    image: "/images/floor-plans/the-dundee-23.jpg",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 230,
    style: "Modern",
    description:
      "A striking modern design with clean lines and an entertainer's layout. The Dundee 23 is built for family living and weekend hosting.",
  },
  {
    slug: "the-georgia-32",
    name: "The Georgia 32",
    image: "/images/floor-plans/the-georgia-32.jpg",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 320,
    style: "Modern",
    description:
      "One of our largest plans, The Georgia 32 offers exceptional space with a dedicated media room, generous master suite, and alfresco entertaining area.",
  },
  {
    slug: "the-daintree-3-23",
    name: "The Daintree 3-23",
    image: "/images/floor-plans/the-daintree-3-23.jpg",
    bedrooms: 3,
    bathrooms: 2,
    garage: 2,
    sqm: 230,
    style: "Modern",
    description:
      "Perfect for smaller families or first home buyers, The Daintree 3-23 maximises every square metre with smart, open plan design.",
  },
  {
    slug: "the-pilbara-23",
    name: "The Pilbara 23",
    image: "/images/floor-plans/the-pilbara-23.jpg",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 230,
    style: "Modern",
    description:
      "Bold and functional, The Pilbara 23 offers an open plan kitchen and living zone that flows seamlessly to the outdoor entertaining area.",
  },
  {
    slug: "the-flinders-23",
    name: "The Flinders 23",
    image: "/images/floor-plans/the-flinders-23.jpg",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 230,
    style: "Colonial",
    description:
      "The Flinders 23 blends colonial character with a practical family layout, featuring a large master suite and open plan dining and kitchen.",
  },
  {
    slug: "the-paroo-23",
    name: "The Paroo 23",
    image: "/images/floor-plans/the-paroo-23.jpg",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 230,
    style: "Mediterranean",
    description:
      "Mediterranean-inspired design with an elegant facade, tiled alfresco, and a thoughtfully designed interior that balances style and practicality.",
  },
  {
    slug: "the-daintree-5-23",
    name: "The Daintree 5-23",
    image: "/images/floor-plans/the-daintree-5-23.jpg",
    bedrooms: 5,
    bathrooms: 3,
    garage: 2,
    sqm: 290,
    style: "Modern",
    description:
      "Our five-bedroom offering, The Daintree 5-23 provides room for large families with multiple living zones and ample storage throughout.",
  },
  {
    slug: "the-pilliga-23",
    name: "The Pilliga 23",
    image: "/images/floor-plans/the-pilliga-23.jpg",
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
    sqm: 230,
    style: "Modern",
    description:
      "The Pilliga 23 is a versatile family home with a focus on indoor-outdoor living. A standout choice for entertaining families.",
  },
];
