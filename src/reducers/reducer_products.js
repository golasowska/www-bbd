import p1 from "../assets/images/products/p-1.svg";
import p2 from "../assets/images/products/p-2.svg";
import p3 from "../assets/images/products/p-3.svg";
import p4 from "../assets/images/products/p-4.svg";
import p1w from "../assets/images/products/p-1-w.svg";
import p2w from "../assets/images/products/p-2-w.svg";
import p3w from "../assets/images/products/p-3-w.svg";
import p4w from "../assets/images/products/p-4-w.svg";

export default function() {
  return [
    {
      name: ">  BBOD.10 Index Future",
      src: `${p1}`,
      srcW: `${p1w}`,
      description:
        "Not sure which crypto to hold? Trade the whole basket of crypto assets in a single trade through our world’s only cryptocurrency Index Future on the largest crypto assets.",
      alt: "icon",
      width: "150",
      colClass: "col col-md-6 home-product-item"
    },
    {
      name: ">  Ether-Dollar Contract",
      src: `${p2}`,
      srcW: `${p2w}`,
      description:
        "The world’s only, speculative Ether-Dollar Perpetual and Futures contract with up to 50x leverage.",
      alt: "icon",
      width: "150",
      colClass: "col col-md-5 home-product-item"
    },
    {
      name: ">  Altcoin futures Contract",
      src: `${p3}`,
      srcW: `${p3w}`,
      description:
        "Ripple, Litecoin and Neo against Ether futures contracts, trading with up to 20x leverage.",
      alt: "icon",
      width: "150",
      colClass: "col col-md-6 home-product-item"
    },
    {
      name: ">  Bitcoin-Ether Futures Contract",
      src: `${p4}`,
      srcW: `${p4w}`,
      description:
        "A speculative Bitcoin against Ether futures contract with up to 25x leverage.",
      alt: "icon",
      width: "150",
      colClass: "col col-md-5 home-product-item"
    }
  ];
}
