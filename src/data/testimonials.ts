export type Testimonial = {
  id: string;
  name: string;
  text: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "wanda-jack",
    name: "Wanda & Jack Bretschneider",
    text: "Your attention to detail was outstanding. Nothing was ever missed, and we always felt fully informed throughout the entire building process. We couldn't be happier with our new home.",
    featured: true,
  },
  {
    id: "james-janene",
    name: "James & Janene Sayers",
    text: "From the very first consultation with Gary through to handover, the entire Superior Homes team was professional, responsive and a pleasure to work with. Our home exceeded every expectation.",
    featured: true,
  },
  {
    id: "john-kathy",
    name: "John & Kathy Richards",
    text: "We are absolutely thrilled with our new home. The quality of workmanship is exceptional and the standard inclusions are far better than any other builder we looked at. Highly recommended.",
    featured: true,
  },
  {
    id: "ananda-luke",
    name: "Ananda & Luke Oxford",
    text: "Superior commenced construction early and finished 3 weeks ahead of schedule — remarkable given the industry delays at the time. Communication was excellent from start to finish.",
  },
  {
    id: "nadine-meyer",
    name: "Nadine Meyer",
    text: "My keen eye to detail was more than satisfied — perfect tiles, quality fittings and exceptional craftsmanship throughout. Sharon's colour consultation made such a difference to the finished result.",
  },
  {
    id: "peter-helen",
    name: "Peter & Helen Johnson",
    text: "We've built twice with Superior Homes and wouldn't consider going anywhere else. Peter and the team treat every home as if it's their own. Absolutely outstanding service.",
  },
  {
    id: "mark-lisa",
    name: "Mark & Lisa Thompson",
    text: "From slab to handover in 11 weeks — we were blown away by the speed without any compromise on quality. The site was always clean and the tradespeople were professional and courteous.",
  },
  {
    id: "diane-ross",
    name: "Diane & Ross Campbell",
    text: "Gary's expertise in modifying our floor plan to perfectly suit our block made all the difference. The finished home is exactly what we envisioned. Thank you to the entire Superior Homes team.",
  },
  {
    id: "tracey-wayne",
    name: "Tracey & Wayne Patterson",
    text: "The standard inclusions alone make Superior Homes exceptional value. When you add the personal service from Peter and the quality of the tradesmen, it's impossible to fault. Brilliant experience.",
  },
  {
    id: "michelle-david",
    name: "Michelle & David Harris",
    text: "Gypsy in the office kept us informed at every stage and responded to every question within hours. That level of communication throughout a build is rare and truly appreciated.",
  },
  {
    id: "karen-brett",
    name: "Karen & Brett Williams",
    text: "Our home was completed on budget, on time, and to an incredibly high standard. Matt as construction manager was always available and kept the project running seamlessly.",
  },
  {
    id: "sue-gary",
    name: "Sue & Gary Morrison",
    text: "Jake on site was meticulous about quality and finish. Every time we visited, the site was spotless and the work was progressing beautifully. We couldn't recommend Superior Homes more highly.",
  },
];
