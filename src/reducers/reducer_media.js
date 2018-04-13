import facebook from "../assets/images/F_icon.svg";
import medium from "../assets/images/Medium_icon.svg";
import twitter from "../assets/images/Twitter_Bird.svg";
import youtube from "../assets/images/YouTube_logo_button.svg";
import telegram from "../assets/images/Telegram_logo.svg";
import vk from "../assets/images/VK.com-logo.svg";
import investfeed from "../assets/images/investfeed_logo.png";

export default function() {
  return [
    {
      name: "Facebook",
      src: `${facebook}`,
      href: "https://www.facebook.com/BBODTradingPlatform",
      target: "_blank",
      width: "25",
      alt: "facebook_logo"
    },
    {
      name: "Medium",
      src: `${medium}`,
      href: "https://medium.com/@bbod",
      target: "_blank",
      width: "25",
      alt: "medium_logo"
    },
    {
      name: "Twitter",
      src: `${twitter}`,
      href: "https://twitter.com/BBODTrading",
      target: "_blank",
      width: "25",
      alt: "twitter_logo"
    },
    {
      name: "YouTube",
      src: `${youtube}`,
      href: "https://www.youtube.com/channel/UCNeZvSaLO5Eq2EL_yF90tvA",
      target: "_blank",
      width: "25",
      alt: "youtube_logo"
    },
    {
      name: "Telegram",
      src: `${telegram}`,
      href: "https://t.me/joinchat/HonEkxLP0jCMfxf5Kd63sw",
      target: "_blank",
      width: "25",
      alt: "telegram_logo"
    },
    {
      name: "VK",
      src: `${vk}`,
      href: "https://vk.com/bbod_trading",
      target: "_blank",
      width: "25",
      alt: "vk_logo"
    },
    {
      name: "Investfeed",
      src: `${investfeed}`,
      href: "http://www.investfeed.com/BBODExchange?rec=5cd59d3",
      target: "_blank",
      width: "25",
      alt: "investfeed_logo"
    }
  ];
}
