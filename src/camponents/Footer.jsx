import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <div>
      <footer className="footer">
        {new Date().toLocaleDateString()}. We,re currently open
      </footer>
    </div>
  );
}

export default Footer;
