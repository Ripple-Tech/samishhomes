import type { Property } from "@/components/PropertyCard";

export interface Estate {
  id: string;
  images: string[];
  coverImage: string;
  name: string;
  shortName: string;
  location: string;
  description?: string;
  properties: Property[];
}

const generateProperties = (
  estateName: string,
  estateShortName: string,
  basePrices: { [key: string]: string },
  Images: string[]
): Property[] => {
  const propertyTypes = [
    { type: "Terrace Duplex", size: "250 SQM", beds: 3, baths: 3, area: 250 },
    { type: "Semi-Detached Duplex", size: "300 SQM", beds: 4, baths: 4, area: 300 },
    { type: "Detached Duplex", size: "350 SQM", beds: 4, baths: 4, area: 350 },
    { type: "Luxury Villa", size: "500 SQM", beds: 5, baths: 5, area: 500 },
    { type: "Mansion", size: "1000 SQM", beds: 6, baths: 6, area: 1000 },
  ];

  return propertyTypes.map((prop, index) => ({
    id: Math.random() * 10000,
    title: `${prop.type} - ${prop.size}`,
    location: estateName,
    locationShort: estateShortName,
    size: prop.size,
    type: prop.type,
    beds: prop.beds,
    baths: prop.baths,
    area: prop.area,
    price: basePrices[prop.size] || "45M",
    image: Images[index] || Images[0],
    description: `Premium ${prop.type} on ${prop.size} plot at ${estateName}. This beautifully designed property features modern architecture, quality finishes, and all the amenities you need for comfortable living.`,
  }));
};

export const estates: Estate[] = [
  {
    id: "hillcity-residence",
    name: "HILLCITY RESIDENCE",
    shortName: "HILLCITY RESIDENCE",
    images: ["/hillcity1.jpg"],
    coverImage: "/hillcity1.jpg",
    location: "Hillcity Residence, Abuja, FCT",
    description:
      "Samish HillCity Residences is a beautiful city within a city, designed to work in harmony with nature that will offer its residents a complete cosmopolitan lifestyle and serve as a hub for the wider community — a 'Front Range City for the elites'. Sensibly designed to offer an assortment of beautiful styles of varying sizes alongside her unique topography, with the land being partly green and hilly, bounded by the neighborhoods of Festrut Estate and Paradise Boulevard in Katampe main, sprawling across the beautiful Hill Valley Layout of Katampe, within the heart of the Federal Capital Territory, Abuja with land size of about 91,000 square meters. Samish HillCity Residences is centered on the principles of sustainable urban development, and marks Abuja's leap into the future as a high-value, knowledge-based community, with well-planned and modern 200 units.",
    properties: generateProperties("Hillcity Residence", "HILLCITY RESIDENCE", {
      "250 SQM": "45M",
      "300 SQM": "54M",
      "350 SQM": "63M",
      "500 SQM": "90M",
      "1000 SQM": "180M",
    }, ["/hillcity2.jpg", "/hillcity3.jpg", "/hillcity4.jpg", "/hillcity5.jpg", "/hillcity1.jpg"]),
  },
  {
    id: "crete-sterling-heights-guzape",
    name: "CRETE STERLING HEIGHTS ESTATE GUZAPE",
    images: ["/bana1.png"],
    coverImage: "/bana1.png",
    shortName: "CRETE STERLING HEIGHTS",
    location: "Guzape Main, Abuja, FCT",
    description:
      "CRETE (STERLING HEIGHTS ESTATE) is situated on the top of Guzape Hill — a premier real estate destination in Abuja, offering a unique blend of natural beauty, scenic views, and strategic location. Its attractiveness to luxury homebuyers, investors, and developers makes it a highly sought-after location for residential and commercial developments. Guzape Hill is strategically located with easy access to major roads, shopping centers, schools, and healthcare facilities, ensuring a convenient and comfortable lifestyle. The area's growing popularity and demand for real estate make it an attractive investment destination. Available units include: 4-Bedroom Terrace Duplex + attached BQ, 4-Bedroom Semi-Detached Duplex + attached BQ, 5-Bedroom Detached Duplex + BQ, and 5-Bedroom Executive Detached Duplex/Penthouse with Detached BQ.",
    properties: generateProperties("Crete Sterling Heights Guzape", "CRETE STERLING HEIGHTS ESTATE GUZAP...", {
      "250 SQM": "65M",
      "300 SQM": "78M",
      "350 SQM": "91M",
      "500 SQM": "130M",
      "1000 SQM": "260M",
    }, ["/bana1.png", "/bana2.png", "/bana3.png", "/bana4.png", "/bana5.png"]),
  },
  {
    id: "samish-homesphere-karsana",
    name: "SAMISH HOMESPHERE KARSANA",
    shortName: "SAMISH HOMESPHERE KARSANA",
    images: ["/bana1.png"],
    coverImage: "/bana1.png",
    location: "Karsana, Abuja, FCT",
    description:
      "Samish HOMESPHERE ESTATE is a beautiful location in a liveable community, with a friendly environment and beautiful nature along Ring Road 3, Karsana South District. Connected to the Gwarinpa highway and just a ten-minute drive to Abuja City Center.",
    properties: generateProperties("Samish Homesphere Karsana", "SAMISH HOMESPHERE KARSANA", {
      "250 SQM": "55M",
      "300 SQM": "66M",
      "350 SQM": "77M",
      "500 SQM": "110M",
      "1000 SQM": "220M",
    }, ["/bana1.png", "/detached.jpg", "/semidetached.jpg", "/terrace.jpg", "/bana2.png"]),
  },
  {
    id: "samish-onyx-homes",
    name: "SAMISH ONYX HOMES",
    shortName: "SAMISH ONYX HOMES",
    images: ["/samish2.jpeg"],
    coverImage: "/samish2.jpeg",
    location: "Abuja, FCT",
    description:
      "Samish ONYX Homes is a beautiful location in a livable community, with a friendly environment and beautiful nature. A rapidly developing residential area in Karsana bordering both Gwarimpa and Life Camp — connected to the Gwarinpa highway and just a ten-minute drive to Abuja City Center.",
    properties: generateProperties("Samish Onyx Homes", "SAMISH ONYX HOMES", {
      "250 SQM": "60M",
      "300 SQM": "72M",
      "350 SQM": "84M",
      "500 SQM": "120M",
      "1000 SQM": "240M",
    }, ["/terrace.jpg", "/semidetached.jpg", "/detached.jpg", "/bana4.png", "/bana1.png"]),
  },
  {
    id: "hill-view-residence",
    name: "HILL VIEW RESIDENCE",
    shortName: "HILL VIEW RESIDENCE",
    images: ["/bana2.png"],
    coverImage: "/bana2.png",
    location: "Abuja, FCT",
    properties: generateProperties("Hill View Residence", "HILL VIEW RESIDENCE", {
      "250 SQM": "50M",
      "300 SQM": "60M",
      "350 SQM": "70M",
      "500 SQM": "100M",
      "1000 SQM": "200M",
    }, ["/bana2.png", "/semidetached.jpg", "/detached.jpg", "/terrace.jpg", "/bana3.png"]),
  },
  {
    id: "sterling-heights-ridge-city-guzape",
    name: "STERLING HEIGHTS ESTATE (RIDGE CITY) GUZAPE",
    shortName: "STERLING HEIGHTS RIDGE CITY",
    images: ["/bana1.png"],
    coverImage: "/bana1.png",
    location: "Ridge City, Guzape, Abuja, FCT",
    properties: generateProperties("Sterling Heights Ridge City Guzape", "STERLING HEIGHTS ESTATE (RIDGE CITY...", {
      "250 SQM": "70M",
      "300 SQM": "84M",
      "350 SQM": "98M",
      "500 SQM": "140M",
      "1000 SQM": "280M",
    }, ["/bana1.png", "/terrace.jpg", "/semidetached.jpg", "/detached.jpg", "/bana2.png"]),
  },
  {
    id: "stardom-city-kurudu-jikwoyi",
    name: "STARDOM CITY ESTATE KURUDU JIKWOYI KARSHI ROAD",
    shortName: "STARDOM CITY ESTATE",
    images: ["/bana2.png"],
    coverImage: "/bana2.png",
    location: "Kurudu Jikwoyi, Karshi Road, Abuja, FCT",
    description:
      "Kurudu is a fast-growing dwelling within the Abuja Municipal Area Council (AMAC), connecting to the FCT City Center via both the Karu–Jikwoyi–Orozo road and the Apo–Wumba–Waru–Karshi road. The estate is located off the Jikwoyi–Karshi road, opposite the Army Post Service Estate, immediately after the Police Commission Housing Estate, beside the Deeper Life Church campground, Promiseland Estate, and the Police Housing Estate. The upcoming estate sits on about 30 hectares of land, proposed to provide housing units to approximately 800 families across various income levels.",
    properties: generateProperties("Stardom City Estate Kurudu", "STARDOM CITY ESTATE KURUDU JIKWOYI ...", {
      "250 SQM": "35M",
      "300 SQM": "42M",
      "350 SQM": "49M",
      "500 SQM": "70M",
      "1000 SQM": "140M",
    }, ["/bana2.png", "/bana3.png", "/bana4.png", "/bana5.png", "/bana1.png"]),
  },
  {
    id: "starlight-estate-lugbe",
    name: "STARLIGHT ESTATE LUGBE AIRPORT ROAD",
    shortName: "STARLIGHT ESTATE LUGBE",
    images: ["/bana3.png"],
    coverImage: "/bana3.png",
    location: "Lugbe, Airport Road, Abuja, FCT",
    description:
      "SAMISH Starlight Estate is a beautiful flat land on the hillside behind ACO Estate Phase 2, adjacent to Brekete Family Fish Farm, and 10 minutes away from the main Airport expressway. Located beside ACO Estate, before Centenary City, and approximately five minutes from the main Airport expressway.",
    properties: generateProperties("Starlight Estate Lugbe", "STARLIGHT ESTATE LUGBE AIRPORT ROAD", {
      "250 SQM": "40M",
      "300 SQM": "48M",
      "350 SQM": "56M",
      "500 SQM": "80M",
      "1000 SQM": "160M",
    }, ["/bana3.png", "/detached.jpg", "/semidetached.jpg", "/terrace.jpg", "/bana4.png"]),
  },
  {
    id: "el-praiso-estate-millennium-city-kaduna",
    name: "EL PRAISO ESTATE, MILLENNIUM CITY, KADUNA",
    shortName: "EL PRAISO ESTATE",
    images: ["/bana4.png"],
    coverImage: "/bana4.png",
    location: "Along Gen. Sani Abacha Way, Millennium City, Off Umaru Musa Yar'Adua Highway, Kaduna, Kaduna State",
    properties: generateProperties("El Praiso Estate Millennium City Kaduna", "EL PRAISO ESTATE, MILLENNIUM CITY, KADUNA", {
      "250 SQM": "38M",
      "300 SQM": "46M",
      "350 SQM": "53M",
      "500 SQM": "76M",
      "1000 SQM": "152M",
    }, ["/bana4.png", "/bana5.png", "/bana1.png", "/bana2.png", "/bana3.png"]),
  },
  {
    id: "samish-residence-millennium-city-kaduna",
    name: "SAMISH RESIDENCE, MILLENNIUM CITY KADUNA",
    shortName: "SAMISH RESIDENCE",
    images: ["/bana5.png"],
    coverImage: "/bana5.png",
    location: "Opposite Police Housing Estate, Along Eastern Bypass, Millennium City, Kaduna, Kaduna State",
    properties: generateProperties("Samish Residence Millennium City Kaduna", "SAMISH RESIDENCE, MILLENNIUM CITY KADUNA", {
      "250 SQM": "65M",
      "300 SQM": "102M",
      "350 SQM": "119M",
      "500 SQM": "170M",
      "1000 SQM": "340M",
    }, ["/bana5.png", "/detached.jpg", "/semidetached.jpg", "/terrace.jpg", "/bana1.png"]),
  },
];

export const allProperties = estates.flatMap((estate) => estate.properties);

export const locations = [
  { id: "all", name: "All Locations" },
  ...estates.map((estate) => ({ id: estate.id, name: estate.shortName })),
];

export const sizes = ["250 SQM", "300 SQM", "350 SQM", "500 SQM", "1000 SQM"];