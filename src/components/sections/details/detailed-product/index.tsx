// import React, { useState } from "react";
// import {
//   Flex,
//   Image,
//   Box,
//   Text,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from "@chakra-ui/react";
// import { Catalog_Products } from "../../../../mocks/index";
// import spriteMini from "../../../../assets/images/sprite-mini.svg fill.png";
// import logo from "../../../../assets/images/Link → DOC001175919.jpg.png";
// import upload from '../../../../assets/images/9054789_bx_upload_icon.png';
// import skype from '../../../../assets/images/211916_social_skype_icon.png';
// import viber from '../../../../assets/images/9110710_viber_icon.png';
// import tme from '../../../../assets/images/8547122_telegram_plane_icon.png';
// import whatsApp from '../../../../assets/images/843786_whatsapp_icon.png';
// import journal from '../../../../assets/images/115552_livejournal_icon.png';
// import copy from '../../../../assets/images/3671751_copy_icon.png'
// import ok from '../../../../assets/images/9055902_bxl_ok_ru_icon.png';
// import vk from '../../../../assets/images/8666508_vk_icon.png'
// import "./_style.scss";

// export const DetailedProduct: React.FC = () => {
//   const firstProduct = Catalog_Products.slice(1, 2);
//   const [count, setCount] = useState(0);
//   const [maxVolt, setMaxVolt] = useState(parseFloat(firstProduct[0].max_volt)); 
//   const sale = firstProduct[0].max_volt * 0.847;
//   const result = Math.floor(sale);

//   const handleCounter = (item:any) => {
//     setCount((prevCount) => {
//       const newCount = prevCount + 1;

//       if (newCount >= 5) {
//         setMaxVolt((prevVolt) => parseFloat((parseFloat(prevVolt) * 0.92).toFixed(2))); 
//       }

//       if (newCount > 5) {
//         setMaxVolt(parseFloat(item.max_volt));
//       }

//       return newCount;
//     });
//   };

//   const handleMinus = (item:any) => {
//     if (count > 0) {
//       setCount((prevCount) => {
//         const newCount = prevCount - 1;

//         if (newCount < 5) {
//           setMaxVolt(parseFloat(item.max_volt)); 
//         }

//         return newCount;
//       });
//     }
//   };

//   return (
//     <Box>
//       <Flex className="detaails_Card">
//         <div className="detaails_Card--wrapper">
//           {firstProduct.map((item, index) => {
//             return (
//               <div className="detaails_Card--wrapper-card" key={index}>
//                 <div className="detaails_Card--wrapper-card-top">
//                   <Text className="detaails_Card--wrapper-card-top-title">
//                     {item.title}
//                   </Text>
                  
//                   <div className="detaails_Card--wrapper-card-top-btns">
//                     <button>
//                       <Image src={spriteMini} alt="" />
//                     </button>
                    
//                     <Menu className="detaails_Card--wrapper-card-top-btns-acardion">
//                       <MenuButton className="detaails_Card--wrapper-card-top-btns-acardion-btn"> 
//                         <button><Image src={upload} alt="" /></button>
//                       </MenuButton>
//                       <MenuList className="detaails_Card--wrapper-card-top-btns-acardion-card" shadow="2xl">
//                         <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={copy} alt="" /> Скопировать ссылку</MenuItem>
//                         <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={vk} alt="" /> ВКонтакте</MenuItem>
//                         <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={tme} alt="" /> Telegram</MenuItem>
//                         <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={skype} alt="" /> Skype</MenuItem>
//                         <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={viber} alt="" /> Viber</MenuItem>
//                         <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={whatsApp} alt="" /> WhatsApp</MenuItem>
//                         <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={ok} alt="" /> Однаклассники</MenuItem>
//                         <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={journal} alt="" /> LiveJournal</MenuItem>
//                       </MenuList>
//                     </Menu>
//                   </div>
//                 </div>

//                 <div className="detaails_Card--wrapper-card-data">
//                   <div className="detaails_Card--wrapper-card-data-left">
//                     <Image src={item.image} alt="" />
//                     <div className="detaails_Card--wrapper-card-data-left-marketing">
//                       <h2 className="detaails_Card--wrapper-card-data-left-marketing-price">
//                         {Math.floor(maxVolt)} <span>руб</span>
//                       </h2>
//                       <div className="detaails_Card--wrapper-card-data-left-marketing-counter">
//                         <div className="detaails_Card--wrapper-card-data-left-marketing-counter-form">
//                           <button onClick={() => handleMinus(item)}>-</button>
//                           <h3>{count}</h3>
//                           <button onClick={() => handleCounter(item)}>+</button>
//                         </div>
//                         <div className="detaails_Card--wrapper-card-data-left-marketing-counter-price">
//                           <h3>
//                             от <span>5 шт.</span> {result} руб
//                           </h3>
//                         </div>
//                       </div>
//                       <h4>
//                         <i className="bi bi-arrow-right"></i> 1 шт. на сумму{" "}
//                         {item.max_volt} руб
//                       </h4>
//                       <button className="button">Добавить в корзину</button>
//                     </div>
//                   </div>
//                   <div className="detaails_Card--wrapper-card-data-right">
//                     <div>
//                       <p>Номенклатурный номер:</p>
//                       <h2>{item.phone}</h2>
//                     </div>
//                     <div>
//                       <p>Артикул:</p>
//                       <h2>{item.title.slice(0, 10)}</h2>
//                     </div>
//                     <div>
//                       <p>Бренд:</p>
//                       <h2>{item.brand} ***</h2>
//                     </div>
//                     <div>
//                       <Image src={logo} alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Flex>
//     </Box>
//   );
// };




import React, { useState } from "react";
import {
  Flex,
  Image,
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Catalog_Products } from "../../../../mocks/index";
import spriteMini from "../../../../assets/images/sprite-mini.svg fill.png";
import logo from "../../../../assets/images/Link → DOC001175919.jpg.png";
import upload from "../../../../assets/images/9054789_bx_upload_icon.png";
import skype from "../../../../assets/images/211916_social_skype_icon.png";
import viber from "../../../../assets/images/9110710_viber_icon.png";
import tme from "../../../../assets/images/8547122_telegram_plane_icon.png";
import whatsApp from "../../../../assets/images/843786_whatsapp_icon.png";
import journal from "../../../../assets/images/115552_livejournal_icon.png";
import copy from "../../../../assets/images/3671751_copy_icon.png";
import ok from "../../../../assets/images/9055902_bxl_ok_ru_icon.png";
import vk from "../../../../assets/images/8666508_vk_icon.png";
import "./_style.scss";

// Define the product type based on the structure of Catalog_Products
interface Product {
  title: string;
  max_volt: string; // assuming this is a string since you're parsing it
  phone: string;
  image: string;
  brand: string;
}

export const DetailedProduct: React.FC = () => {
  const firstProduct: Product[] = Catalog_Products.slice(1, 2);
  const [count, setCount] = useState(0);
  const [maxVolt, setMaxVolt] = useState<number>(parseFloat(firstProduct[0].max_volt)); 
  const sale = parseFloat(firstProduct[0].max_volt) * 0.847;
  const result = Math.floor(sale);

  const handleCounter = (item: Product) => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount >= 5) {
        setMaxVolt((prevVolt) => parseFloat((prevVolt * 0.92).toFixed(2)));
      }

      if (newCount > 5) {
        setMaxVolt(parseFloat(item.max_volt));
      }

      return newCount;
    });
  };

  const handleMinus = (item: Product) => {
    if (count > 0) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;

        if (newCount < 5) {
          setMaxVolt(parseFloat(item.max_volt));
        }

        return newCount;
      });
    }
  };

  return (
    <Box>
      <Flex className="detaails_Card">
        <div className="detaails_Card--wrapper">
          {firstProduct.map((item, index) => (
            <div className="detaails_Card--wrapper-card" key={index}>
              <div className="detaails_Card--wrapper-card-top">
                <Text className="detaails_Card--wrapper-card-top-title">
                  {item.title}
                </Text>
                
                <div className="detaails_Card--wrapper-card-top-btns">
                  <button>
                    <Image src={spriteMini} alt="" />
                  </button>
                  
                  <Menu className="detaails_Card--wrapper-card-top-btns-acardion">
                    <MenuButton className="detaails_Card--wrapper-card-top-btns-acardion-btn"> 
                      <button><Image src={upload} alt="" /></button>
                    </MenuButton>
                    <MenuList className="detaails_Card--wrapper-card-top-btns-acardion-card" shadow="2xl">
                      <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={copy} alt="" /> Скопировать ссылку</MenuItem>
                      <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={vk} alt="" /> ВКонтакте</MenuItem>
                      <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={tme} alt="" /> Telegram</MenuItem>
                      <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={skype} alt="" /> Skype</MenuItem>
                      <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={viber} alt="" /> Viber</MenuItem>
                      <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={whatsApp} alt="" /> WhatsApp</MenuItem>
                      <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={ok} alt="" /> Однаклассники</MenuItem>
                      <MenuItem className="detaails_Card--wrapper-card-top-btns-acardion-card-items"><Image src={journal} alt="" /> LiveJournal</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
              </div>

              <div className="detaails_Card--wrapper-card-data">
                <div className="detaails_Card--wrapper-card-data-left">
                  <Image src={item.image} alt="" />
                  <div className="detaails_Card--wrapper-card-data-left-marketing">
                    <h2 className="detaails_Card--wrapper-card-data-left-marketing-price">
                      {Math.floor(maxVolt)} <span>руб</span>
                    </h2>
                    <div className="detaails_Card--wrapper-card-data-left-marketing-counter">
                      <div className="detaails_Card--wrapper-card-data-left-marketing-counter-form">
                        <button onClick={() => handleMinus(item)}>-</button>
                        <h3>{count}</h3>
                        <button onClick={() => handleCounter(item)}>+</button>
                      </div>
                      <div className="detaails_Card--wrapper-card-data-left-marketing-counter-price">
                        <h3>
                          от <span>5 шт.</span> {result} руб
                        </h3>
                      </div>
                    </div>
                    <h4>
                      <i className="bi bi-arrow-right"></i> 1 шт. на сумму{" "}
                      {item.max_volt} руб
                    </h4>
                    <button className="button">Добавить в корзину</button>
                  </div>
                </div>
                <div className="detaails_Card--wrapper-card-data-right">
                  <div>
                    <p>Номенклатурный номер:</p>
                    <h2>{item.phone}</h2>
                  </div>
                  <div>
                    <p>Артикул:</p>
                    <h2>{item.title.slice(0, 10)}</h2>
                  </div>
                  <div>
                    <p>Бренд:</p>
                    <h2>{item.brand} ***</h2>
                  </div>
                  <div>
                    <Image src={logo} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Flex>
    </Box>
  );
};
