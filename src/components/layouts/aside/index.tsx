
import React from "react";
import { useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Checkbox, Input } from "@chakra-ui/react";
import {TriangleUpIcon, TriangleDownIcon} from "@chakra-ui/icons"
import {Brend} from "../../../mocks";
import border from "../../../assets/images/border.svg"
import "./_style.scss"
import { color, px } from "framer-motion";
export const Aside: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return <aside className="aside">

    <Accordion backgroundColor={"#F3F4F6"} defaultIndex={[0]} allowMultiple>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}} onClick={() => setIsOpen(!isOpen)}>
             {isOpen ? <TriangleUpIcon/> : <TriangleDownIcon/>}
            <Box fontWeight={700} pl={1} fontSize={13} as='span' flex='1' textAlign='left'>
              Бренд
            </Box>
            <img src={border} alt="icon" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} maxHeight="200px" overflowY="auto">
        <Input variant='unstyled' placeholder='Поиск значений' />
          {
            Brend.map((item, i)=>(
              <Checkbox style={{display:"flex", alignItems:"center"}}  key={i} defaultValue={""}>{item.name} <sub>{item.num}</sub></Checkbox>
            )

            )
          }
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <TriangleUpIcon/> : <TriangleDownIcon/>}
            <Box fontWeight={700} pl={1} fontSize={13} as='span' flex='1' textAlign='left'>
              Серия
            </Box>
            <img src={border} alt="icon" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        <Input variant='unstyled' placeholder='Поиск значений' />
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
            <Box fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
              Тип преобразователя
            </Box>
            
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
            <Box fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
              Наличие изоляции выхода
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
            <Box fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
              Наличие внутреннего
              коммутатора
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
            <Box fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
              Максимальное напряжение
              силового ключа, В
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
          {isOpen ? <TriangleUpIcon/> : <TriangleDownIcon/>}
            <Box pl={1} fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
              Номинальная мощность, Вт
            </Box>
            <img src={border} alt="icon" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
          {isOpen ? <TriangleUpIcon/> : <TriangleDownIcon/>}
            <Box pl={1} fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
              Максимальная частота
              преобразователя, кГц
            </Box>
            <img src={border} alt="icon" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
          {isOpen ? <TriangleUpIcon/> : <TriangleDownIcon/>}
            <Box pl={1} fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
              Максимальная
              скважность
              преобразователя, %
            </Box>
            <img src={border} alt="icon" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
          {isOpen ? <TriangleUpIcon/> : <TriangleDownIcon/>}
            <Box pl={1} fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
              Защита от сбоев
            </Box>
            <img src={border} alt="icon" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
            <Box fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
              Особенности управления
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
            <Box fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
              Рабочая температура,°С
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
          {isOpen ? <TriangleUpIcon/> : <TriangleDownIcon/>}
            <Box pl={1} fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
              Корпус
            </Box>
            <img src={border} alt="icon" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
            <Box fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
            Товары в наличии
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _hover={{color:"red.500"}}>
            <Box fontWeight={700} fontSize={13} as='span' flex='1' textAlign='left'>
            Цена, руб.
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Checkbox defaultChecked>Сталь</Checkbox>
        </AccordionPanel>
      </AccordionItem>

    </Accordion>

  </aside>;
};
