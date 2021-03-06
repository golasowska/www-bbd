import f1 from '../assets/images/features/f-1.svg';
import f2 from '../assets/images/features/f-2.svg';
import f3 from '../assets/images/features/f-3.svg';

export default function() {
  return [
    {
      name: 'Crypto Assets',
      src: `${f1}`,
      description:
        'The world’s first derivatives trading platform to speculate directly on Ether-Dollar contract with up to 50x leverage. Trading basket of cryptos is now possible in a single trade through our world’s only BBOD.10 Index Future.',
      alt: 'icon_md',
      width: '150'
    },
    {
      name: 'Safety',
      src: `${f2}`,
      description:
        'BBOD does not hold your crypto assets. You do! We run a non-custodial smart contract wallet system. This means, that all account balances are held by a decentralized, smart contract on the Ethereum blockchain. Your crypto-funds never leave your pocket remaining under your control.',
      alt: 'icon_md',
      width: '150'
    },
    {
      name: 'Fast Technology',
      src: `${f3}`,
      description:
        'BBOD trading platform is underpinned by ultra low-latency, high-throughput matching engine. The trading platform handles a throughput of up to 1,250,000 messages/sec with a sub-25μs latency. This defines BBOD as the world’s fastest Ether-based trading systems currently in global production.',
      alt: 'icon_md',
      width: '150'
    }
  ];
}
