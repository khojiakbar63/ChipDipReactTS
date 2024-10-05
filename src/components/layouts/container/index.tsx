import React from "react";
import "./_style.scss";
export const Container = ({children}: {children: React.ReactNode;}) => {
  return <div className="container">
            {children}
          </div>;
};
