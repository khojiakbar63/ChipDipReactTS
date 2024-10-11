import React, { useState } from "react";
import { Button, Popover } from "antd";
import { PiChatCircleBold } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import { Input, Tooltip } from "antd";
import { LuPaperclip } from "react-icons/lu";
import { FaCircle } from "react-icons/fa";
import "./_style.scss";
import { Link } from "react-router-dom";

export const FixedChat: React.FC = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Popover

      content={
        <>
          <div className="chat_card">
            <div className="chat_card--header">
              <h1 className="chat_card--header-title">Lorem ipsum dolor sit.</h1>
            </div>
            <div className="chat_card--body"></div>
            <div className="chat_card--footer">
              <Input
              className="chat_input"
                prefix={<LuPaperclip fontSize={20} color="#8797a1a9" />}
                suffix={
                  <Link to={"#"}>
                    <FaCircle color="red" />
                  </Link>
                }
              />
            </div>
          </div>
        </>
      }
      trigger="click"
      open={open}
      className="fixed-chat"
      onOpenChange={handleOpenChange}
    >
      <button className="fixed-chat-button">
        {open ? (
          <PiChatCircleBold className="icon" />
        ) : (
          <FaAngleDown className="icon close" />
        )}
      </button>
    </Popover>
  );
};
