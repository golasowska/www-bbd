import news2 from "../assets/images/news/bbod_stacked.png";
import news1 from "../assets/images/news/news2.jpg";
import news3 from "../assets/images/news/ef.jpg";

export default function() {
  return [
    {
      title:
        "BBOD releases the most demanded cryptocurrency contract in the world",
      url: "http://everyinvestor.co.uk/2018/04/24/ethereum-futures/",
      src: `${news3}`,
      alt: "photo"
    },
    {
      title:
        "BBOD to launch Ethereum derivatives and spot exchange in partnership with GMEX Technologies",
      url:
        "https://www.hedgeweek.com/2018/03/14/262159/bbod-launch-ethereum-derivatives-and-spot-exchange-partnership-gmex-technologies",
      src: `${news2}`,
      alt: "photo"
    },
    {
      title: "Malta All Set to Become 'The Blockchain Island'",
      url:
        "http://www.vegasslotsonline.com/news/2018/03/28/malta-set-become-blockchain-island/",
      src: `${news1}`,
      alt: "photo"
    }
  ];
}
