import React from "react";

export const Footer = () => {
  return (
    <div className="bg-dark py-2 px-2 mb-3">
      <span>
        <a
          className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
          href="#"
        >
          <i className="fa text-light fa-github"></i>
          &nbsp; Repo URL
        </a>
        <a
          className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
          href="#"
        >
          <i className="fa text-light fa-linkedin"></i>
          &nbsp; Basliel Ababayehu
        </a>
        <a
          className="btn-sm text-decoration-none bg-dark rounded-0 text-light"
          href="#"
        >
          <i className="fa fa-globe"></i>
          &nbsp; Personal website
        </a>
      </span>
    </div>
  );
};

export default Footer;
