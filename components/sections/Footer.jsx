import React from "react";
// import ThemeToggler from "./ThemeToggler";

const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="wrapper h-16 flex items-center justify-center mx-auto">
        <p className="font-degular font-semibold text-md text-center">
          Updated 1/24
          <br />© 2024 Dhruvil S Shah.
        </p>
        {/* <ThemeToggler /> */}
      </div>
    </footer>
  );
};

export default Footer;
