import f1 from "../assets/images/features/f-1.svg";
import f2 from "../assets/images/features/f-2.svg";
import f3 from "../assets/images/features/f-3.svg";
import f4 from "../assets/images/features/f-4.svg";
import f5 from "../assets/images/features/f-5.svg";
import f6 from "../assets/images/features/f-6.svg";

import f1lb from "../assets/images/features/f-1-lb.svg";
import f2lb from "../assets/images/features/f-2-lb.svg";
import f3lb from "../assets/images/features/f-3-lb.svg";
import f4lb from "../assets/images/features/f-4-lb.svg";
import f5lb from "../assets/images/features/f-5-lb.svg";
import f6lb from "../assets/images/features/f-6-lb.svg";

export default function() {
  return [
    {
      name: "Most demanded Crypto Assets",
      src: `${f1}`,
      srcLb: `${f1lb}`,
      description:
        "The world’s first derivatives exchange to speculate directly on Ether-Dollar contract with up to 50x leverage. Trading basket of cryptos is now possible in a single trade through our world’s only BBOD.10 Index Future.",
      alt: "icon_md",
      width: "200"
    },
    {
      name: "Unprecedented Safety",
      src: `${f2}`,
      srcLb: `${f2lb}`,
      description:
        "BBOD does not hold your crypto assets. You do! We run a non-custodial smart contract wallet system. This means, that all account balances are held by a decentralized, smart contract on the Ethereum blockchain. Your crypto-funds never leave your pocket remaining under your control.",
      alt: "icon_md",
      width: "200"
    },
    {
      name: "World's fastest Trading Technology",
      src: `${f3}`,
      srcLb: `${f3lb}`,
      description:
        "BBOD exchange is underpinned by ultra low-latency, high-throughput matching engine. The exchange handles a throughput of up to 1,250,000 messages/sec with a sub-25μs latency. This defines BBOD as the world’s fastest Ether-based trading systems currently in global production.",
      alt: "icon_md",
      width: "200"
    },
    {
      name: "Automated Trading",
      src: `${f4}`,
      srcLb: `${f4lb}`,
      description:
        "Connect your algo-trading strategies with our deep liquidity through REST, Websocket, FIX API or binary protocol.",
      alt: "icon_md",
      width: "200"
    },
    {
      name: "Silicon Fen R & D",
      src: `${f5}`,
      srcLb: `${f5lb}`,
      description:
        "Cambridge Hub is the centre of global innovation with BBOD as one of emerging leader.",
      alt: "icon_md",
      width: "200"
    },
    {
      name: "Costumers First",
      src: `${f6}`,
      srcLb: `${f6lb}`,
      description:
        "All tickets and emails are handled manually by our friendly and helpful customer service desk.",
      alt: "icon_md",
      width: "200"
    }
  ];
}
