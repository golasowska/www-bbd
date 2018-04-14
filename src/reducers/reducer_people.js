import peop1 from "../assets/images/people/miroslaw.png";
import peop2 from "../assets/images/people/piotr.png";
import peop3 from "../assets/images/people/krzysztof.png";
import peop4 from "../assets/images/people/hubert.png";

export default function() {
  return [
    {
      name: "Miroslaw",
      src: `${peop1}`,
      position: "Co-Founder, Managing Director, Strategy & Innovation",
      description:
        "Miroslaw is an entrepreneur and investor in various technology oriented businesses. He has many years of experience in running large scale multinational projects as well as trading equities and FX markets.",
      alt: "miroslaw",
      width: "400"
    },
    {
      name: "Piotr",
      src: `${peop2}`,
      position: "Co-Founder, Managing Director, Chief Economist",
      description:
        "Piotr is an expert in market microstructure theory, one of the leader of Quantitative Finance Research Group at University of Warsaw. He is an Assistant Professor in Finance at Poznan University of Economics where has educated +4000 students who later have worked for Goldman Sachs, Citi, EY, KPMG. Piotr is a Project Manager and manages day‑to‑day business operations at BBOD. He is a founder of Quant Technology, a fintech startup, where he ran algorithmic trading strategies for options and futures markets. Piotr holds Ph.D degree in Economics.",
      alt: "piotr",
      width: "400"
    },
    {
      name: "Krzysztof",
      src: `${peop3}`,
      position: "Co-Founder, Chief Technology Officer",
      description:
        "Krzysztof is highly experienced coder and mathematician with +20 years of professional and scientific experience in Max‑Planck Institute, Bunge and Trinity College Dublin. He is a great passionate about Informationism, the theory described in book: Informationism from Philosophy to Quantitative Trading. Krzysztof guards the quantitative accuracy of algorithms at BBOD platform. He has many years of experience in the FX markets as well as developing algorithmic trading strategies for options and futures. Krzysztof is a founder of Quant Technology, a fintech startup. Krzysztof holds Ph.D degree in Econophysics.",
      alt: "krzysztof",
      width: "400"
    },
    {
      name: "Hubert",
      src: `${peop4}`,
      position: "Co-Founder, Director of Business Development & Communication",
      description:
        "Hubert worked in the online services and telecommunications sectors. His main focus is public relations and online‑marketing. He has a master’s degree in media & communications from Middlesex University and his responsibility is to implement BBOD’s marketing and PR. Hubert is a voracious reader with a deep interest in socio‑economics.",
      alt: "hubert",
      width: "400"
    }
  ];
}
