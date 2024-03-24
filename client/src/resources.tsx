import ant from "./assets/images/ANT_EDUARD_FLORIN_NIGA.png";
import elephant from "./assets/images/ELEPHANT_BRENT_STIRTON.png";
import manatees from "./assets/images/MANATEES_JASON_GULLEY.png";
import orcas from "./assets/images/ORCAS_BERTIE_GREGORY.png";
import spider from "./assets/images/SPIDER_JAVIER_AZNAR.png";
import mountainHares from "./assets/images/MOUNTAIN_HARES_ANDY_PARKINSON.png";
import cardinalFish from "./assets/images/CARDINAL_FISH_DAVID_DOUBILET_AND_JENNIFER_HAYES.png";
import dutchTulips from "./assets/images/TULIPS_SISSE_BRIMBERG.png";
import woolCoats from "./assets/images/WOOL_COATS_CARY_WOLINSKY.png";
import bloomingHeather from "./assets/images/BLOOMING_HEATHER_JIM_RICHARDSON.png";
import gaggleOfGeese from "./assets/images/GAGGLE_OF_GEESE_TOMASZ_TOMASZEWSKI.png";
import panamaCattle from "./assets/images/PANAMA_CATTLE_BRUCE_DALE.png";
import holyMountain from "./assets/images/HOLY_MOUNTAIN_SIMON_NORFOLK.png";
import scaredStrands from "./assets/images/SACRED_STRANDS_ROBB_KENDRICK.png";
import fiveColoredPond from "./assets/images/FIVE_COLORED_POND_AMI_VITALE.png";
import {
  FaUsers,
  FaRegLightbulb,
  FaCamera,
  FaImage,
  FaVideo,
} from "react-icons/fa";
import { PiHandHeart } from "react-icons/pi";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { ReactElement } from "react";

export type GalleryItem = {
  title: string;
  description: string;
  photographer: string;
  img: string;
};

export const galleryArray: GalleryItem[] = [
  {
    title: "BROMELIAD SPIDER",
    description:
      "Spiders often have a bad reputation. But photographer Javier Aznar shows how the arachnids can be beautiful, unique, and even charming—like this bromeliad spider perched on a banana flower in Ecuador.",
    photographer: "PHOTOGRAPH BY JAVIER AZNAR",
    img: spider,
  },
  {
    title: "MOUNTAIN HARES",
    description:
      "Mountain hares in the Scottish Highlands have evolved to fit their surroundings—but as climate change ushers in varying weather, these animals stand out more often against a dark, snowless landscape, possibly leaving them vulnerable to predators.",
    photographer: "PHOTOGRAPH BY ANDY PARKINSON",
    img: mountainHares,
  },
  {
    title: "ORCAS",
    description:
      "These orcas have mastered a hunting technique called “wave washing”: In unison, the orcas turn water in a weapon, swimming fast and creating waves that crack the ice upon which a Weddell seal rests. When the seal falls into the water, the predators feast.",
    photographer: "PHOTOGRAPH BY BERTIE GREGORY",
    img: orcas,
  },
  {
    title: "DORYLUS MAYRI ANT",
    description:
      "Inspired by his daughter's curiosity, photographer Eduard Florin Niga documented the tiny yet fascinating world of ants up close. With fossil records that indicate ants have been around for up to 168 million years, they're one of the planet's most abundant and successful animals, as seen in this Dorylus mayri ant from West Africa.",
    photographer: "PHOTOGRAPH BY EDUARD FLORIN NIGA",
    img: ant,
  },
  {
    title: "ASIAN ELEPHANT",
    description:
      "An Asian elephant steps over an electric fence on a moonlit night at the edge of Sri Lanka's Kaudulla National Park. Though the island has nearly 3,000 miles of  fencing, elephants often outsmart it, for example using their trunks to push trees onto the fences. The endangered species are increasingly squeezed into small habitats within Southeast Asia, and humans and elephants have an uneasy coexistence.",
    photographer: "PHOTOGRAPH BY BRENT STIRTON",
    img: elephant,
  },
  {
    title: "FLORIDA MANATEES",
    description:
      "Florida manatees are beloved, and their peaceful demeanor has been critical to the subspecies' success. Conservationists have helped them rebound from under a thousand individuals in the 1960s to more than 7,500 about six years ago—but recent die-offs have troubled conservationists. Above, manatees gather on a sandy bottom near Homosassa Springs, where the water is warm in winter.",
    photographer: "PHOTOGRAPH BY JASON GULLEY",
    img: manatees,
  },
  {
    title: "CARDINAL FISH",
    description:
      "Cardinal fish and glassy sweepers swirl around a sea fan beneath a coral ledge in the Wayag Islands. Indonesia's Raja Ampat archipelago is home to some 1,600 species of fish and more than three-quarters of the world's coral species, and Wayag is among its most spectacular regions.",
    photographer: "PHOTOGRAPH BY DAVID DOUBILET AND JENNIFER HAYES",
    img: cardinalFish,
  },
  {
    title: "DUTCH TULIPS",
    description:
      "A person helps tend millions of tulips at Keukenhof, a world-famous botanical garden in The Netherlands. Each autumn, more than 100 growers donate bulbs to be planted for the next year's colorful displays.",
    photographer: "PHOTOGRAPH BY SISSE BRIMBERG",
    img: dutchTulips,
  },
  {
    title: "WOOL COATS",
    description:
      "In this photo, merino sheep in Canberra, Australia, wear woven plastic coats to protect their precious wool.",
    photographer: "PHOTOGRAPH BY CARY WOLINSKY",
    img: woolCoats,
  },
  {
    title: "BLOOMING HEATHER",
    description:
      "Blooming heather at the Mar Lodge Estate in Aberdeenshire, Scotland.",
    photographer: "PHOTOGRAPH BY JIM RICHARDSON",
    img: bloomingHeather,
  },
  {
    title: "GAGGLE OF GEESE",
    description:
      "A farmer marches his herd of domesticated geese to their barn in Hortobagy, Hungary.",
    photographer: "PHOTOGRAPH BY TOMASZ TOMASZEWSKI",
    img: gaggleOfGeese,
  },
  {
    title: "PANAMA CATTLE",
    description:
      "A cowboy herds his cattle through tall grass in the Herrera province in Panama.",
    photographer: "PHOTOGRAPH BY BRUCE DALE",
    img: panamaCattle,
  },
  {
    title: "HOLY MOUNTAIN",
    description:
      "During Passover, Samaritan men walk to the top of Mount Gerizim in the West Bank. ",
    photographer: "PHOTOGRAPH BY SIMON NORFOLK",
    img: holyMountain,
  },
  {
    title: "SACRED STRANDS",
    description:
      "An enormous structure of twisted rice straw, called shimenawa, hangs over Izumo Taisha, a Shinto shrine in Japan.",
    photographer: "PHOTOGRAPH BY ROBB KENDRICK",
    img: scaredStrands,
  },
  {
    title: "FIVE-COLORED POND",
    description:
      "Jiuzhaigou National Park in Sichuan Province, China, is home to many beautiful lakes and waterfalls, including this one, known as Five-Colored Pond.",
    photographer: "PHOTOGRAPH BY AMI VITALE",
    img: fiveColoredPond,
  },
];

type ValueCard = {
  title: string;
  description: string;
  icon: ReactElement;
};

export const valueCardArray: ValueCard[] = [
  {
    title: "Authenticity",
    description: "We believe in the power of genuine storytelling.",
    icon: <PiHandHeart size={100} />,
  },
  {
    title: "Creativity",
    description:
      "We embrace innovation and push the boundaries of visual narratives.",
    icon: <FaRegLightbulb size={100} />,
  },
  {
    title: "Collaboration",
    description:
      "We foster a culture of teamwork and value diverse perspectives.",
    icon: <FaUsers size={100} />,
  },
  {
    title: "Impact",
    description: "We strive to make a positive difference through our work.",
    icon: <IoRocketOutline size={100} />,
  },
];

type ServiceCard = {
  title: string;
  description: string;
  icon: ReactElement;
};

export const serviceCardArray: ServiceCard[] = [
  {
    title: "Product Photography",
    description:
      "Showcase your products in the best light with our professional product photography services. From simple white background shots to creative lifestyle images, we'll help you create visuals that sell.",
    icon: <FaCamera />,
  },
  {
    title: "Lifestyle Photography",
    description:
      "Bring your brand to life with authentic, engaging lifestyle photography. We'll capture images that showcase your products or services in real-world settings, connecting with your target audience on an emotional level.",
    icon: <FaImage />,
  },
  {
    title: "Corporate Photography",
    description:
      "From headshots to event coverage, our corporate photography services help you build a strong, professional brand image. We'll work with you to capture the essence of your company and its people.",
    icon: <FaVideo />,
  },
  {
    title: "Custom Projects",
    description:
      "Have a unique photography need? We're here to help. Our team is experienced in tackling custom projects of all sizes and scopes. Contact us to discuss your specific requirements, and we'll develop a tailored solution to meet your goals.",
    icon: <MdOutlineDashboardCustomize />,
  },
];
