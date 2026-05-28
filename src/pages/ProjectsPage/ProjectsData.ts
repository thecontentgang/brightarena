export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  gallery: string[];
  projectDetails: string;
  client: string;
  location: string;
  houseType: string;
  year: string;
  bg: string;
  textColor: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "bhargavi-vaishnavi-oasis",
    title: "Bhargavi – Vaishnavi Oasis",

    shortDescription:
      "We created a beautiful vibrant oasis for her 2 BHK apartment, using bold colors to create a dynamic and energetic atmosphere.",

    description:
      "The design seamlessly blends refreshing tones with comfortable spaces, turning the apartment into a lively and inviting home.",

    heroImage: "/projects/bhargavi/img-1.jpg",

    gallery: [
      "/projects/bhargavi/img-1.jpg",
      "/projects/bhargavi/img-2.jpg",
      "/projects/bhargavi/img-3.jpg",
      "/projects/bhargavi/img-4.jpg",
      "/projects/bhargavi/img-5.jpg",
      "/projects/bhargavi/img-6.jpg",
      "/projects/bhargavi/img-7.jpg",
      "/projects/bhargavi/img-8.jpg",
      "/projects/bhargavi/img-9.jpg",
      "/projects/bhargavi/img-10.jpg",
    ],

    projectDetails:
      "We are excited to share the successful completion of our Vaishnavi Oasis, Kismatpur, Bandlaguda Jagir project. This beautiful 2BHK combines elegance and comfort, featuring bold colors and intricate designs that bring a modern touch to every corner.",

    client: "Bhargavi",
    location: "Vaishnavi Oasis, Kismatpur, Bandlaguda Jagir",
    houseType: "2BHK",
    year: "2019",

    bg: "#F4EDDB",
    textColor: "#3A393F",
  },

  {
    id: 2,
    slug: "praveen-aparna-zenith",
    title: "Praveen – Aparna Zenith",

    shortDescription:
      "We designed the interiors of our client’s luxury 3 BHK flat with a modern touch, balancing style and practicality.",

    description:
      "Each space was customized to reflect their taste and create a sleek, inviting home.",

    heroImage: "/projects/praveen/img-1.jpg",

    gallery: [
      "/projects/praveen/img-1.jpg",
      "/projects/praveen/img-2.jpg",
      "/projects/praveen/img-3.jpg",
      "/projects/praveen/img-4.jpg",
      "/projects/praveen/img-5.jpg",
    ],

    projectDetails:
      "We designed the interiors of this luxurious 3BHK flat with a blend of modern aesthetics and functional design tailored to the client’s preferences.",

    client: "Praveen",
    location: "Nallagandla",
    houseType: "3BHK Luxurious Flat",
    year: "2024",

    bg: "#3A393F",
    textColor: "#F4EDDB",
  },

  {
    id: 3,
    slug: "kunjal-darshan-botanika",
    title: "Kunjal & Darshan – The Botanika",

    shortDescription:
      "We redesigned this 3 BHK apartment to make it look modern, practical, and truly feel like home.",

    description:
      "Smart layouts and thoughtful details transformed the apartment into a beautiful contemporary oasis.",

    heroImage: "/projects/botanika/img-1.jpg",

    gallery: [
      "/projects/botanika/img-1.jpg",
      "/projects/botanika/img-2.jpg",
      "/projects/botanika/img-3.jpg",
      "/projects/botanika/img-4.jpg",
      "/projects/botanika/img-5.jpg",
    ],

    projectDetails:
      "This project reflects a blend of modern aesthetics and functional design tailored to the client’s unique style and preferences.",

    client: "Kunjal & Darshan",
    location: "Gachibowli",
    houseType: "3BHK",
    year: "2024",

    bg: "#F4EDDB",
    textColor: "#3A393F",
  },

  {
    id: 4,
    slug: "sammys-villa-bangalore",
    title: "Sammy’s Villa – Bangalore",

    shortDescription:
      "We designed the interiors of our first villa in Bangalore, blending luxury with comfort.",

    description:
      "Every room was thoughtfully crafted to create an elegant and sophisticated atmosphere.",

    heroImage: "/projects/sammy/img-1.jpg",

    gallery: [
      "/projects/sammy/img-1.jpg",
      "/projects/sammy/img-2.jpg",
      "/projects/sammy/img-3.jpg",
      "/projects/sammy/img-4.jpg",
      "/projects/sammy/img-5.jpg",
    ],

    projectDetails:
      "This spacious villa project features different geometries, patterns, and shapes that create visual harmony and a soothing environment.",

    client: "Sammy’s Villa",
    location: "Bangalore",
    houseType: "Villa",
    year: "2024",

    bg: "#3A393F",
    textColor: "#F4EDDB",
  },

  {
    id: 5,
    slug: "haseeb-my-home-bhooja",
    title: "Haseeb – My Home Bhooja",

    shortDescription:
      "We redesigned this 4 BHK apartment using unique shapes and patterns to create a spacious and striking environment.",

    description:
      "The design introduced dynamic energy and luxury styling throughout the entire home.",

    heroImage: "/projects/haseeb/img-1.jpg",

    gallery: [
      "/projects/haseeb/img-1.jpg",
      "/projects/haseeb/img-2.jpg",
      "/projects/haseeb/img-3.jpg",
      "/projects/haseeb/img-4.jpg",
      "/projects/haseeb/img-5.jpg",
    ],

    projectDetails:
      "This beautiful 4BHK project utilized geometries, patterns, and textures to maximize every part of the home beautifully.",

    client: "Haseeb Mohammed",
    location: "My Home Bhooja, Raidurg",
    houseType: "4BHK",
    year: "2022-2023",

    bg: "#F4EDDB",
    textColor: "#3A393F",
  },

  {
    id: 6,
    slug: "indrani-my-home-krishe",
    title: "Indrani – My Home Krishe",

    shortDescription:
      "We redesigned this 3 BHK flat to maximize natural light and airflow, creating a bright and airy living experience.",

    description:
      "The open layouts and soft palette helped create a home deeply connected to nature.",

    heroImage: "/projects/indrani/img-1.jpg",

    gallery: [
      "/projects/indrani/img-1.jpg",
      "/projects/indrani/img-2.jpg",
      "/projects/indrani/img-3.jpg",
      "/projects/indrani/img-4.jpg",
      "/projects/indrani/img-5.jpg",
    ],

    projectDetails:
      "This stunning 3BHK project was designed with airy layouts, natural light, and soft tones to create a calm and spacious environment.",

    client: "Indrani Bandyopadhyay",
    location: "My Home Krishe, Gachibowli",
    houseType: "3BHK",
    year: "2022",

    bg: "#3A393F",
    textColor: "#F4EDDB",
  },

  {
    id: 7,
    slug: "rakesh-bhupathi-nagole",
    title: "Rakesh Bhupathi – Nagole",

    shortDescription:
      "We transformed this 4 BHK apartment with contemporary designs that perfectly balance elegance and functionality.",

    description:
      "Each room was reimagined into a modern and welcoming living space.",

    heroImage: "/projects/rakesh/img-1.jpg",

    gallery: [
      "/projects/rakesh/img-1.jpg",
      "/projects/rakesh/img-2.jpg",
      "/projects/rakesh/img-3.jpg",
      "/projects/rakesh/img-4.jpg",
      "/projects/rakesh/img-5.jpg",
      "/projects/rakesh/img-6.jpg",
    ],

    projectDetails:
      "This project focused on sleek contemporary design, natural light, and open layouts to create a bright and inviting home.",

    client: "Rakesh Bhupathi",
    location: "Nagole",
    houseType: "4BHK",
    year: "2021-2022",

    bg: "#F4EDDB",
    textColor: "#3A393F",
  },

  {
    id: 8,
    slug: "mr-nageswara-rao",
    title: "Mr. Nageswara Rao",

    shortDescription:
      "We transformed this 3 BHK apartment into a modern smart home with sleek and functional interiors.",

    description:
      "Automated systems and geometric design elements created a highly personalized living experience.",

    heroImage: "/projects/nageswara/img-1.jpg",

    gallery: [
      "/projects/nageswara/img-1.jpg",
      "/projects/nageswara/img-2.jpg",
      "/projects/nageswara/img-3.jpg",
      "/projects/nageswara/img-4.jpg",
      "/projects/nageswara/img-5.jpg",
    ],

    projectDetails:
      "This smart home project combines vibrant accents, geometric patterns, and modern technology for contemporary living.",

    client: "Mr. Nageswara Rao",
    location: "Myhome Navadweepa Apartments, Madhapur",
    houseType: "3BHK",
    year: "2022",

    bg: "#3A393F",
    textColor: "#F4EDDB",
  },
];