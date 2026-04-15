export interface Location {
  name: string
  slug: string
  phone: string
  country: string
  region: string
  lat: number
  lng: number
  address?: string
  services?: string[]
  features?: string[]
  warehouseSize?: string
  description?: string
  heroImage?: string
}

export const regions = [
  { id: "north-america", name: "North America", emoji: "🌎" },
  { id: "europe", name: "Europe", emoji: "🌍" },
  { id: "asia-pacific", name: "Asia Pacific", emoji: "🌏" },
  { id: "middle-east-africa", name: "Middle East & Africa", emoji: "🌍" },
  { id: "latin-america", name: "Latin America", emoji: "🌎" },
]

function getRegion(country: string): string {
  const map: Record<string, string> = {
    USA: "north-america", Canada: "north-america",
    Germany: "europe", Ireland: "europe", "United Kingdom": "europe",
    Netherlands: "europe", Italy: "europe", Belgium: "europe",
    Poland: "europe", Spain: "europe",
    Australia: "asia-pacific", Brunei: "asia-pacific", Indonesia: "asia-pacific",
    Korea: "asia-pacific", Thailand: "asia-pacific", Malaysia: "asia-pacific",
    China: "asia-pacific", Taiwan: "asia-pacific", India: "asia-pacific",
    Japan: "asia-pacific", Vietnam: "asia-pacific", Singapore: "asia-pacific",
    "Saudi Arabia": "middle-east-africa", UAE: "middle-east-africa",
    "South Africa": "middle-east-africa", Qatar: "middle-east-africa",
    Namibia: "middle-east-africa",
    Argentina: "latin-america", Brazil: "latin-america", Mexico: "latin-america",
    Colombia: "latin-america", Guyana: "latin-america", Chile: "latin-america",
  }
  return map[country] || "europe"
}

function countryFromUrl(url: string): string {
  const map: Record<string, string> = {
    usa: "USA", canada: "Canada", australia: "Australia", brunei: "Brunei",
    indonesia: "Indonesia", korea: "Korea", thailand: "Thailand",
    malaysia: "Malaysia", argentina: "Argentina", brazil: "Brazil",
    "p.r-china": "China", colombia: "Colombia", mexico: "Mexico",
    taiwan: "Taiwan", germany: "Germany", india: "India",
    ireland: "Ireland", "united-kingdom": "United Kingdom",
    "kingdom-of-saudi-arabia": "Saudi Arabia", "south-africa": "South Africa",
    "united-arab-emirates": "UAE", "the-netherlands": "Netherlands",
    italy: "Italy", japan: "Japan", vietnam: "Vietnam",
    singapore: "Singapore", belgium: "Belgium", guyana: "Guyana",
    qatar: "Qatar", namibia: "Namibia", poland: "Poland",
    spain: "Spain", chile: "Chile",
  }
  const parts = url.split("/").filter(Boolean)
  if (parts.length >= 2) {
    return map[parts[1]] || parts[1]
  }
  return "Unknown"
}

function slugFromUrl(url: string): string {
  const parts = url.split("/").filter(Boolean)
  return parts.slice(1).join("-")
}

const rawLocations = [
  { name: "Calgary, Canada", phone: "+1 (403) 250 5158", url: "/locations/canada/calgary/", lng: -113.915250, lat: 51.197090 },
  { name: "Atlanta (ATL)", phone: "+1 678 586 2500", url: "/locations/usa/atlanta/", lng: -84.382813, lat: 33.650803 },
  { name: "Boston (BOS)", phone: "+1 617 884 3489", url: "/locations/usa/boston/", lng: -71.121240, lat: 42.790490 },
  { name: "Columbus (CMH)", phone: "+1 614 875 8800", url: "/locations/usa/columbus/", lng: -82.901833, lat: 39.837795 },
  { name: "Dallas (DFW)", phone: "+1 972 428 5600", url: "/locations/usa/dallas/", lng: -97.019190, lat: 32.859568 },
  { name: "Detroit (DTW)", phone: "+1 734 692 5679", url: "/locations/usa/detroit/", lng: -83.3158, lat: 42.22726 },
  { name: "Houston (IAH)", phone: "+1 281 443 2777", url: "/locations/usa/houston/", lng: -95.379069, lat: 29.963306 },
  { name: "New York (JFK)", phone: "+1 516 285 1236", url: "/locations/usa/new-york-jfk/", lng: -73.697070, lat: 40.658770 },
  { name: "Miami (MIA)", phone: "+1 305 392 4700", url: "/locations/usa/miami/", lng: -80.37881595592451, lat: 25.906530406809267 },
  { name: "Minneapolis (MSP)", phone: "+1 763 951 8500", url: "/locations/usa/minneapolis/", lng: -93.13409, lat: 44.846813 },
  { name: "Chicago (ORD)", phone: "+1 630 477 9100", url: "/locations/usa/chicago/", lng: -88.038855, lat: 41.983126 },
  { name: "Phoenix (PHX)", phone: "1-480-210-5019", url: "/locations/usa/phoenix/", lng: -111.79170707393669, lat: 33.26575956119199 },
  { name: "Seattle (SEA)", phone: "+1 206 659 4111", url: "/locations/usa/seattle/", lng: -122.252900, lat: 47.229000 },
  { name: "San Francisco (SFO)", phone: "+1 510 606 9199", url: "/locations/usa/san-francisco/", lng: -122.107500, lat: 37.622800 },
  { name: "Darwin, Australia", phone: "+61 8 9353 6611", url: "/locations/australia/darwin/", lng: 130.918100, lat: -12.474600 },
  { name: "Brisbane, Australia", phone: "+61 0420 322 539", url: "/locations/australia/brisbane/", lng: 153.076500, lat: -27.669100 },
  { name: "Vancouver, Canada", phone: "+1 (604) 231 9896", url: "/locations/canada/vancouver/", lng: -122.988400, lat: 49.164500 },
  { name: "Karratha, Australia", phone: "+61 8 9353 6611", url: "/locations/australia/karratha/", lng: 116.767500, lat: -20.750600 },
  { name: "Melbourne, Australia", phone: "+61 3 9338 5733", url: "/locations/australia/melbourne/", lng: 144.855300, lat: -37.706200 },
  { name: "Toronto, Canada", phone: "+1 (905) 564 6465", url: "/locations/canada/toronto/", lng: -79.690400, lat: 43.646300 },
  { name: "Perth, Australia", phone: "+61 8 9353 6611", url: "/locations/australia/perth/", lng: 115.957100, lat: -31.982700 },
  { name: "Bandar Seri Begawan", phone: "+673 223 0041", url: "/locations/brunei/brunei/", lng: 114.943500, lat: 4.888000 },
  { name: "Jakarta, Indonesia", phone: "+62 21 2903 6550", url: "/locations/indonesia/jakarta/", lng: 106.783300, lat: -6.242700 },
  { name: "Surabaya, Indonesia", phone: "+6231 6000 3408", url: "/locations/indonesia/surabaya/", lng: 112.738500, lat: -7.261000 },
  { name: "Seoul", phone: "+82 2 2093 3800", url: "/locations/korea/incheon/", lng: 126.879900, lat: 37.547800 },
  { name: "Busan", phone: "+82 70 4738 4181", url: "/locations/korea/pusan/", lng: 128.769900, lat: 35.089200 },
  { name: "Bangkok", phone: "+66 (2) 0909434", url: "/locations/thailand/bangkok/", lng: 100.593300, lat: 13.713800 },
  { name: "Kuala Lumpur", phone: "+603 5569 8630", url: "/locations/malaysia/kuala-lumpur/", lng: 101.584500, lat: 3.086000 },
  { name: "Labuan", phone: "+603 5569 8630", url: "/locations/malaysia/labuan/", lng: 115.236400, lat: 5.252600 },
  { name: "Buenos Aires", phone: "+54 11 5368 8200", url: "/locations/argentina/buenos-aires/", lng: -58.367000, lat: -34.618300 },
  { name: "Mendoza", phone: "+54 911 3376 9765", url: "/locations/argentina/mendoza/", lng: -68.844600, lat: -32.895500 },
  { name: "São Paulo, Brazil", phone: "+55 11 4193-3531", url: "/locations/brazil/sao-paolo/", lng: -47.010400, lat: -23.479000 },
  { name: "Campinas, Brazil", phone: "+55 19 2519 6608", url: "/locations/brazil/campinas/", lng: -47.058500, lat: -22.886200 },
  { name: "Guangzhou", phone: "+86 755 82714483", url: "/locations/p.r-china/guangzhou/", lng: 113.289900, lat: 23.113500 },
  { name: "Bogota", phone: "+60 1 7430226", url: "/locations/colombia/bogota/", lng: -74.106000, lat: 4.659700 },
  { name: "Changsha", phone: "+86 18692277424", url: "/locations/p.r-china/changsha/", lng: 112.938800, lat: 28.228200 },
  { name: "Guadalajara", phone: "+52 33 3630 4663", url: "/locations/mexico/guadalajara/", lng: -103.375100, lat: 20.694200 },
  { name: "Mexico City", phone: "+52 55 4615 6558", url: "/locations/mexico/mexico-city/", lng: -99.167200, lat: 19.428200 },
  { name: "Monterrey", phone: "+52 81 8332 0326", url: "/locations/mexico/monterrey/", lng: -100.169800, lat: 25.766000 },
  { name: "Xiamen", phone: "+86 13164897652", url: "/locations/p.r-china/xiamen/", lng: 118.079900, lat: 24.460100 },
  { name: "Chongqing", phone: "+86 023 67723520", url: "/locations/p.r-china/chongqing/", lng: 106.574300, lat: 29.606700 },
  { name: "Manzanillo", phone: "+52 314 33 3 6896", url: "/locations/mexico/manzanillo/", lng: -104.309700, lat: 19.103700 },
  { name: "Hong Kong", phone: "+852 37966333", url: "/locations/p.r-china/hong-kong/", lng: 114.197500, lat: 22.335300 },
  { name: "Shanghai", phone: "+86 21 3251 5588", url: "/locations/p.r-china/shanghai/", lng: 121.409600, lat: 31.200800 },
  { name: "Shenzhen", phone: "+86 755 82714483", url: "/locations/p.r-china/shenzhen/", lng: 114.049900, lat: 22.536700 },
  { name: "Qingdao", phone: "05 32 85029850", url: "/locations/p.r-china/qingdao/", lng: 120.353500, lat: 36.056500 },
  { name: "Taipei", phone: "", url: "/locations/taiwan/taipei/", lng: 121.532700, lat: 25.052800 },
  { name: "Düsseldorf, Germany", phone: "+49 211 30 23 27 0", url: "/locations/germany/dusseldorf/", lng: 6.788600, lat: 51.287800 },
  { name: "Frankfurt, Germany", phone: "+49 69 87 00 882 0", url: "/locations/germany/frankfurt/", lng: 8.479500, lat: 50.036700 },
  { name: "Hamburg, Germany", phone: "+49 40 2316679 0", url: "/locations/germany/hamburg/", lng: 10.022900, lat: 53.548100 },
  { name: "Mumbai, India", phone: "+91 22 40290777", url: "/locations/india/mumbai/", lng: 72.879900, lat: 19.108400 },
  { name: "Delhi, India", phone: "+91 124 4989777", url: "/locations/india/delhi/", lng: 77.079100, lat: 28.476700 },
  { name: "Pune, India", phone: "+91 20 676 49 777", url: "/locations/india/pune/", lng: 73.774900, lat: 18.566600 },
  { name: "Chennai, India", phone: "+91 44 459 11 777", url: "/locations/india/chennai/", lng: 80.238200, lat: 13.053300 },
  { name: "Dublin, Ireland", phone: "+353 18447326", url: "/locations/ireland/dublin/", lng: -6.281300, lat: 53.456900 },
  { name: "Aberdeen", phone: "+44 1224772200", url: "/locations/united-kingdom/aberdeen-1/", lng: -2.158000, lat: 57.175500 },
  { name: "Cork, Ireland", phone: "+353 21 6024 260", url: "/locations/ireland/cork/", lng: -8.330000, lat: 51.896000 },
  { name: "Shannon, Ireland", phone: "+353 61 718146", url: "/locations/ireland/shannon/", lng: -8.889400, lat: 52.713300 },
  { name: "London", phone: "+44 1784 438800", url: "/locations/united-kingdom/london-heathrow/", lng: -0.416600, lat: 51.468600 },
  { name: "Al Khobar", phone: "+966 13 881 1710", url: "/locations/kingdom-of-saudi-arabia/saudi-arabia/", lng: 50.180900, lat: 26.300100 },
  { name: "Manchester", phone: "+44 161 667 2755", url: "/locations/united-kingdom/manchester/", lng: -2.274200, lat: 53.370900 },
  { name: "Johannesburg", phone: "+27 87 133 2317", url: "/locations/south-africa/johannesburg/", lng: 28.270300, lat: -26.074900 },
  { name: "Abu Dhabi", phone: "+971 0 2 4957 083", url: "/locations/united-arab-emirates/abu-dhabi/", lng: 54.531400, lat: 24.373500 },
  { name: "Amsterdam", phone: "+31 20 6535058", url: "/locations/the-netherlands/amsterdam/", lng: 4.724500, lat: 52.278300 },
  { name: "Rotterdam", phone: "+31 10 7603400", url: "/locations/the-netherlands/rotterdam/", lng: 4.452700, lat: 51.877900 },
  { name: "Tilburg", phone: "+31 13 7620300", url: "/locations/the-netherlands/tilburg/", lng: 5.055200, lat: 51.589900 },
  { name: "Dubai", phone: "+9714 363 1000", url: "/locations/united-arab-emirates/dubai2/", lng: 55.121300, lat: 24.975600 },
  { name: "Genoa", phone: "+39 010 9919 111", url: "/locations/italy/genova/", lng: 8.948500, lat: 44.404300 },
  { name: "Milan", phone: "+39 02 9268101", url: "/locations/italy/milan/", lng: 9.298200, lat: 45.497400 },
  { name: "Padova", phone: "+39 049/9816999", url: "/locations/italy/padova/", lng: 11.910600, lat: 45.409700 },
  { name: "Rio de Janeiro, Brazil", phone: "+55 21 3554-1820", url: "/locations/brazil/rio-de-janeiro/", lng: -43.172700, lat: -22.910400 },
  { name: "Denver (DEN)", phone: "+1 720 603 0000", url: "/locations/usa/denver/", lng: -104.777700, lat: 39.771100 },
  { name: "Los Angeles (LAX)", phone: "+1 310 765 2300", url: "/locations/usa/los-angeles/", lng: -118.157600, lat: 33.996900 },
  { name: "Tokyo", phone: "+81 (3) 4571 1049", url: "/locations/japan/tokyo/", lng: 139.749300, lat: 35.673500 },
  { name: "Ho Chi Minh", phone: "+84 28 5678 3979", url: "/locations/vietnam/ho-chi-minh/", lng: 106.667500, lat: 10.804300 },
  { name: "Singapore", phone: "+65 65426055", url: "/locations/singapore/singapore/", lng: 103.941400, lat: 1.355800 },
  { name: "Balikpapan, Indonesia", phone: "+62 542-886-3491", url: "/locations/indonesia/balikpapan/", lng: 116.842400, lat: -1.276600 },
  { name: "Batam, Indonesia", phone: "+62 778 4890628", url: "/locations/indonesia/batam/", lng: 104.036500, lat: 1.095700 },
  { name: "Vadodara, India", phone: "+91 265 2355777", url: "/locations/india/vadadora/", lng: 73.188400, lat: 22.306200 },
  { name: "Bangalore, India", phone: "", url: "/locations/india/bangalore/", lng: 77.592600, lat: 13.059300 },
  { name: "Ahmedabad, India", phone: "", url: "/locations/india/ahmedabad/", lng: 72.509300, lat: 23.015000 },
  { name: "Charlotte (CLT)", phone: "+1 704 499 6123", url: "/locations/usa/charlotte/", lng: -80.972500, lat: 35.089600 },
  { name: "Savannah (SAV)", phone: "+1 912 244 4541", url: "/locations/usa/savannah/", lng: -81.183900, lat: 32.181200 },
  { name: "Brussels", phone: "+32 492 395568", url: "/locations/belgium/brussels/", lng: 4.461100, lat: 50.909100 },
  { name: "Georgetown, Guyana", phone: "+592 502 0697", url: "/locations/guyana/georgetown/", lng: -58.159600, lat: 6.814100 },
  { name: "El Paso (ELP)", phone: "+1 915 859 4810", url: "/locations/usa/el-paso-elp/", lng: -106.234600, lat: 31.655600 },
  { name: "Laredo (LRD)", phone: "+1 956 625 3550", url: "/locations/usa/laredo/", lng: -99.451000, lat: 27.551600 },
  { name: "Chino (ONT)", phone: "+1 909 490 5804", url: "/locations/usa/chino-ont/", lng: -117.707700, lat: 33.982700 },
  { name: "Hai Phong", phone: "+84 28 5678 3979", url: "/locations/vietnam/hai-phong/", lng: 106.672400, lat: 20.861800 },
  { name: "Hanoi", phone: "+84 28 5678 3979", url: "/locations/vietnam/hanoi/", lng: 105.784100, lat: 21.028900 },
  { name: "Da Nang", phone: "+84 28 5678 3979", url: "/locations/vietnam/da-nang/", lng: 108.214800, lat: 16.086600 },
  { name: "Ranong", phone: "+6681 815 8442", url: "/locations/thailand/ranong/", lng: 99.653500, lat: 13.955100 },
  { name: "Laem Chabang", phone: "+66 087 494 5656", url: "/locations/thailand/leamchabang/", lng: 100.949800, lat: 13.158900 },
  { name: "Kansas City (MCI)", phone: "+1 816 891 9000", url: "/locations/usa/kansas/", lng: -94.684400, lat: 39.285100 },
  { name: "Omaha (OMA)", phone: "+1 402 573 5498", url: "/locations/usa/omaha/", lng: -96.020800, lat: 41.206700 },
  { name: "Nashville (BNA)", phone: "+1 888 870 2726", url: "/locations/usa/nashville/", lng: -86.390200, lat: 36.038000 },
  { name: "Doha", phone: "+974-44336181", url: "/locations/qatar/doha/", lng: 51.507300, lat: 25.320800 },
  { name: "Birmingham", phone: "+44 1789 532 240", url: "/locations/united-kingdom/midlands/", lng: -1.609500, lat: 52.185600 },
  { name: "New Jersey (EWR)", phone: "+1 862 288 1525", url: "/locations/usa/new-jersey/", lng: -74.508400, lat: 40.341700 },
  { name: "Cincinnati (CVG)", phone: "+1 859 869 8902", url: "/locations/usa/cincinnati/", lng: -84.690900, lat: 39.072500 },
  { name: "Adelaide, Australia", phone: "", url: "/locations/australia/adelaide/", lng: 138.517500, lat: -34.840000 },
  { name: "Orlando (MCO)", phone: "+1 407 850 5550", url: "/locations/usa/orlando/", lng: -81.415700, lat: 28.455000 },
  { name: "York (THV)", phone: "+1 717 268 4760", url: "/locations/usa/york/", lng: -76.718700, lat: 40.013000 },
  { name: "San Antonio (SAT)", phone: "+1 210 951 5607", url: "/locations/usa/san-antonio/", lng: -98.384000, lat: 29.438900 },
  { name: "Riyadh", phone: "+966 11 5062106", url: "/locations/kingdom-of-saudi-arabia/riyadh/", lng: 46.687000, lat: 24.775600 },
  { name: "San Luis Potosi", phone: "+52 44 4407 0353", url: "/locations/mexico/san-luis-potosi/", lng: -100.871200, lat: 21.973200 },
  { name: "Cartagena", phone: "+60 1 7430226", url: "/locations/colombia/cartagena/", lng: -75.536900, lat: 10.408200 },
  { name: "Zárate", phone: "", url: "/locations/argentina/zarate/", lng: -59.047500, lat: -34.099700 },
  { name: "Rome", phone: "+39 335 6353097", url: "/locations/italy/rome/", lng: 12.302100, lat: 41.805600 },
  { name: "Turin", phone: "+39 011 15633800", url: "/locations/italy/turin/", lng: 7.681200, lat: 45.154700 },
  { name: "Florence", phone: "+39 055 1997 3342", url: "/locations/italy/florence/", lng: 11.233800, lat: 43.800400 },
  { name: "Surrey, Canada", phone: "+1 (604) 231-9896", url: "/locations/canada/vancouver_2/", lng: -122.696600, lat: 49.066200 },
  { name: "Jeddah", phone: "012 6188566", url: "/locations/kingdom-of-saudi-arabia/jeddah/", lng: 39.117300, lat: 21.561900 },
  { name: "Roosendaal", phone: "", url: "/locations/the-netherlands/roosendaal/", lng: 4.509100, lat: 51.540500 },
  { name: "Ginsheim-Gustavsburg", phone: "+49 69 87 00 882 0", url: "/locations/germany/ginsheim-gustavsburg-warehouse/", lng: 8.324700, lat: 49.990000 },
  { name: "Antwerp", phone: "+32 3 318 72 00", url: "/locations/belgium/antwerp/", lng: 4.415300, lat: 51.192900 },
  { name: "Johor Bahru", phone: "+607 330 5902", url: "/locations/malaysia/johor-bahru/", lng: 103.777400, lat: 1.497000 },
  { name: "Penang", phone: "+6019 477 3772", url: "/locations/malaysia/penang/", lng: 100.265800, lat: 5.300300 },
  { name: "Salt Lake City (SLC)", phone: "+1 385 220 4021", url: "/locations/usa/salt-lake-city/", lng: -112.000900, lat: 40.798000 },
  { name: "Santiago", phone: "", url: "/locations/chile/santiago/", lng: -70.608800, lat: -33.423400 },
  { name: "Cape Town", phone: "+27 87 133 2317", url: "/locations/south-africa/cape-town/", lng: 18.706900, lat: -33.875400 },
  { name: "Walvis Bay, Namibia", phone: "+264 81 128 6919", url: "/locations/namibia/walvis-bay/", lng: 14.524000, lat: -22.936600 },
  { name: "Warsaw", phone: "+48 882 082 048", url: "/locations/poland/warsaw/", lng: 20.991900, lat: 52.177400 },
  { name: "Madrid, Spain", phone: "+34 916713100", url: "/locations/spain/madrid/", lng: -3.539200, lat: 40.436600 },
  { name: "Barcelona, Spain", phone: "", url: "/locations/spain/barcelona/", lng: 2.132600, lat: 41.365400 },
  { name: "Malpensa, Italy", phone: "+39 02 92681090", url: "/locations/italy/malpensa/", lng: 8.723300, lat: 45.630100 },
  { name: "Bologna, Italy", phone: "+39 051 0229215", url: "/locations/italy/bologna/", lng: 11.375000, lat: 44.614700 },
]

export const locations: Location[] = rawLocations.map((r) => {
  const country = countryFromUrl(r.url)
  return {
    name: r.name,
    slug: slugFromUrl(r.url),
    phone: r.phone,
    country,
    region: getRegion(country),
    lat: r.lat,
    lng: r.lng,
  }
})

// Houston detail data (showcase)
export const locationDetails: Record<string, Partial<Location> & {
  headline?: string
  intro?: string
  services?: string[]
  features?: string[]
  warehouseSize?: string
  keyFacts?: { label: string; value: string }[]
}> = {
  "usa-houston": {
    headline: "Do you need a global 3PL, Freight Forwarder, or Logistics Company in Houston, TX?",
    intro: "Our logistics services in Houston provide solutions to our clients' everyday challenges. We focus on the needs of our clients to ensure supply chain resilience now and in the future through our value-driven approach.",
    address: "1500 Rankin Road\nHouston, TX 77073",
    services: [
      "Air Freight",
      "Contract Logistics",
      "Customs Broker",
      "Ground",
      "Ocean Freight",
      "Project Logistics",
      "Rail Freight",
      "Battery Logistics",
      "NextGen Logistics",
      "Time-Critical Logistics Solutions",
    ],
    features: [
      "Onsite packing facility",
      "15 acre lay down yard",
      "8 miles from IAH airport",
      "40 miles from seaport",
      "RF scanning ability",
      "60,000 sq ft Foreign Trade Zone",
    ],
    warehouseSize: "526,000 sq ft",
    keyFacts: [
      { label: "Warehouse Space", value: "526,000 sq ft" },
      { label: "Foreign Trade Zone", value: "60,000 sq ft" },
      { label: "Distance to IAH", value: "8 miles" },
      { label: "Lay Down Yard", value: "15 acres" },
    ],
  },
}

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}

export function getLocationDetail(slug: string) {
  return locationDetails[slug]
}

export function getLocationsByRegion(regionId: string): Location[] {
  return locations.filter((l) => l.region === regionId)
}

export function getLocationsByCountry(country: string): Location[] {
  return locations.filter((l) => l.country === country)
}

export function getCountriesInRegion(regionId: string): string[] {
  const countries = new Set(locations.filter((l) => l.region === regionId).map((l) => l.country))
  return Array.from(countries).sort()
}
