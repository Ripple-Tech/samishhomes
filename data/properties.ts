import type { Property } from "@/components/PropertyCard";

export interface Estate {
  id: string;
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
  basePrices: { [key: string]: string }
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
    image: propertyImages[index % propertyImages.length],
    description: `Premium ${prop.type} on ${prop.size} plot at ${estateName}. This beautifully designed property features modern architecture, quality finishes, and all the amenities you need for comfortable living.`,
  }));
};

export const estates: Estate[] = [
  {
    id: "hillcity-residence",
    name: "HILLCITY RESIDENCE",
    shortName: "HILLCITY RESIDENCE",
    location: "Hillcity Residence, Abuja, FCT",
    properties: generateProperties("Hillcity Residence", "HILLCITY RESIDENCE", {
      "250 SQM": "45M",
      "300 SQM": "54M",
      "350 SQM": "63M",
      "500 SQM": "90M",
      "1000 SQM": "180M",
    }),
  },
  {
    id: "crete-sterling-heights-guzape",
    name: "CRETE STERLING HEIGHTS ESTATE GUZAPE MAIN",
    shortName: "CRETE STERLING HEIGHTS",
    location: "Guzape Main, Abuja, FCT",
    properties: generateProperties("Crete Sterling Heights Guzape", "CRETE STERLING HEIGHTS ESTATE GUZAP...", {
      "250 SQM": "65M",
      "300 SQM": "78M",
      "350 SQM": "91M",
      "500 SQM": "130M",
      "1000 SQM": "260M",
    }),
  },
  {
    id: "samish-homesphere-karsana",
    name: "SAMISH HOMESPHERE KARSANA",
    shortName: "SAMISH HOMESPHERE KARSANA",
    location: "Karsana, Abuja, FCT",
    properties: generateProperties("Samish Homesphere Karsana", "SAMISH HOMESPHERE KARSANA", {
      "250 SQM": "55M",
      "300 SQM": "66M",
      "350 SQM": "77M",
      "500 SQM": "110M",
      "1000 SQM": "220M",
    }),
  },
  {
    id: "sterling-heights-ridge-city-guzape",
    name: "STERLING HEIGHTS ESTATE (RIDGE CITY) GUZAPE",
    shortName: "STERLING HEIGHTS RIDGE CITY",
    location: "Ridge City, Guzape, Abuja, FCT",
    properties: generateProperties("Sterling Heights Ridge City Guzape", "STERLING HEIGHTS ESTATE (RIDGE CITY...", {
      "250 SQM": "70M",
      "300 SQM": "84M",
      "350 SQM": "98M",
      "500 SQM": "140M",
      "1000 SQM": "280M",
    }),
  },
  {
    id: "stardom-city-kurudu-jikwoyi",
    name: "STARDOM CITY ESTATE KURUDU JIKWOYI KARSHI ROAD",
    shortName: "STARDOM CITY ESTATE",
    location: "Kurudu Jikwoyi, Karshi Road, Abuja, FCT",
    properties: generateProperties("Stardom City Estate Kurudu", "STARDOM CITY ESTATE KURUDU JIKWOYI ...", {
      "250 SQM": "35M",
      "300 SQM": "42M",
      "350 SQM": "49M",
      "500 SQM": "70M",
      "1000 SQM": "140M",
    }),
  },
  {
    id: "starlight-estate-lugbe",
    name: "STARLIGHT ESTATE LUGBE AIRPORT ROAD",
    shortName: "STARLIGHT ESTATE LUGBE",
    location: "Lugbe, Airport Road, Abuja, FCT",
    properties: generateProperties("Starlight Estate Lugbe", "STARLIGHT ESTATE LUGBE AIRPORT ROAD", {
      "250 SQM": "40M",
      "300 SQM": "48M",
      "350 SQM": "56M",
      "500 SQM": "80M",
      "1000 SQM": "160M",
    }),
  },
  {
    id: "sunshine-estate-lugbe",
    name: "SUNSHINE ESTATE IN LUGBE, AIRPORT ROAD",
    shortName: "SUNSHINE ESTATE LUGBE",
    location: "Lugbe, Airport Road, Abuja, FCT",
    properties: generateProperties("Sunshine Estate Lugbe", "SUNSHINE ESTATE IN LUGBE, AIRPORT R...", {
      "250 SQM": "38M",
      "300 SQM": "46M",
      "350 SQM": "53M",
      "500 SQM": "76M",
      "1000 SQM": "152M",
    }),
  },
  {
    id: "prestige-resident-aviation-city",
    name: "PRESTIGE RESIDENT AVIATION CITY",
    shortName: "PRESTIGE RESIDENT",
    location: "Aviation City, Abuja, FCT",
    properties: generateProperties("Prestige Resident Aviation City", "PRESTIGE RESIDENT AVIATION CITY", {
      "250 SQM": "65M",
      "300 SQM": "102M",
      "350 SQM": "119M",
      "500 SQM": "170M",
      "1000 SQM": "340M",
    }),
  },
];

export const allProperties = estates.flatMap((estate) => estate.properties);

export const locations = [
  { id: "all", name: "All Locations" },
  ...estates.map((estate) => ({ id: estate.id, name: estate.shortName })),
];

export const sizes = ["250 SQM", "300 SQM", "350 SQM", "500 SQM", "1000 SQM"];
