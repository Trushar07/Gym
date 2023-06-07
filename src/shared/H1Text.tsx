import React from "react";

type Props = {
  children: React.ReactNode;
};

const H1Text = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  );
};

export default H1Text;
