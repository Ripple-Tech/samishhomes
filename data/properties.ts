import type { Property } from "@/components/PropertyCard";

export interface Estate {
  id: string;
  images: string[];
  coverImage: string;
  name: string;
  shortName: string;
  location: string;
  properties: Property[];
}

// Property images from the scraped site
const propertyImages = [
  "https://ext.same-assets.com/2617002787/2128637327.jpeg",
  "https://ext.same-assets.com/2617002787/1294819133.jpeg",
  "https://ext.same-assets.com/2617002787/3173310862.jpeg",
  "https://ext.same-assets.com/2617002787/2661240283.jpeg",
  "https://ext.same-assets.com/2617002787/2263543015.jpeg",
  "https://ext.same-assets.com/2617002787/1909179269.jpeg",
  "https://ext.same-assets.com/2617002787/1003212119.jpeg",
  "https://ext.same-assets.com/2617002787/1994372926.jpeg",
  "https://ext.same-assets.com/2617002787/4026451409.jpeg",
  "https://ext.same-assets.com/2617002787/3904350765.jpeg",
  "https://ext.same-assets.com/2617002787/4001650424.jpeg",
  "https://ext.same-assets.com/2617002787/1319706308.jpeg",
];

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
    properties: generateProperties("Hillcity Residence", "HILLCITY RESIDENCE", {
      "250 SQM": "45M",
      "300 SQM": "54M",
      "350 SQM": "63M",
      "500 SQM": "90M",
      "1000 SQM": "180M",
    },[ "/hillcity2.jpg", "/hillcity3.jpg", "/hillcity4.jpg", "/hillcity5.jpg", "/hillcity1.jpg"]),
  },
  {
    id: "crete-sterling-heights-guzape",
    name: "CRETE STERLING HEIGHTS ESTATE GUZAPE",
    images: ["/bana1.png"],
    coverImage: "/bana1.png",
    shortName: "CRETE STERLING HEIGHTS",
    location: "Guzape Main, Abuja, FCT",
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
    properties: generateProperties("Samish Homesphere Karsana", "SAMISH HOMESPHERE KARSANA", {
      "250 SQM": "55M",
      "300 SQM": "66M",
      "350 SQM": "77M",
      "500 SQM": "110M",
      "1000 SQM": "220M",
    }, ["/bana1.png", "/detached.jpg", "/semidetached.jpg", "/terrace.jpg", "/bana2.png"]),
  },

  // ✅ NEW
  {
    id: "samish-onyx-homes",
    name: "SAMISH ONYX HOMES",
    shortName: "SAMISH ONYX HOMES",
    images: ["/samish2.jpeg"],
    coverImage: "/samish2.jpeg",
    location: "Abuja, FCT",
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
    properties: generateProperties("El P raiso Estate Millennium City Kaduna", "EL PRAISO ESTATE, MILLENNIUM CITY, KADUNA", {
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
    location: "Opposite Police Housing Estate, Along Earstern Bypass, Millennium City, Kaduna, Kaduna State",
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
