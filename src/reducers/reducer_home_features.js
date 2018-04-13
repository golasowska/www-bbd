import f1 from "../assets/images/features/f-1-w.svg";
import f2 from "../assets/images/features/f-2-w.svg";
import f3 from "../assets/images/features/f-3-w.svg";

export default function() {
  return [
    {
      name: "Crypto Assets",
      src: `${f1}`,
      description:
        "The world’s first derivatives exchange to speculate directly on Ether-Dollar contract with up to 50x leverage. Trading basket of cryptos is now possible in a single trade through our world’s only BBOD.10 Index Future.",
      alt: "icon_md",
      width: "200"
    },
    {
      name: "Safety",
      src: `${f2}`,
      description:
        "BBOD does not hold your crypto assets. You do! We run a non-custodial smart contract wallet system. This means, that all account balances are held by a decentralized, smart contract on the Ethereum blockchain. Your crypto-funds never leave your pocket remaining under your control.",
      alt: "icon_md",
      width: "200"
    },
    {
      name: "Fast Technology",
      src: `${f3}`,
      description:
        "BBOD exchange is underpinned by ultra low-latency, high-throughput matching engine. The exchange handles a throughput of up to 1,250,000 messages/sec with a sub-25μs latency. This defines BBOD as the world’s fastest Ether-based trading systems currently in global.",
      alt: "icon_md",
      width: "200"
    }
  ];
}
