import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
function Footer() {
  return (
    <ContainerStyled>
      <FooterStyled>
        <TitleStyled>
          <h3>COMPANY</h3>
          <Link to={"/about"}>
            <p>About us</p>
          </Link>
          <Link to={"#"}>
            <p>Our Team</p>
          </Link>
        </TitleStyled>

        <TitleStyled>
          <h3>SUPPORT</h3>
          <Link to={"/faq"}>
            <p>FAQ section</p>
          </Link>
          <Link to={"/contact"}>
            <p>Contact</p>
          </Link>
        </TitleStyled>
        <TitleStyled>
          <h3>CONTACT</h3>
          <p>
            <FaPhone /> +52 998 492 1643
          </p>
          <p>
            <MdEmail /> contact@rentcar.com.ar
          </p>
          <p>
            <FaMapMarkerAlt /> Buenos Aires, Argentina
          </p>
        </TitleStyled>
      </FooterStyled>
      <CopyrightStyled>
        <p className="footer">Copyright © 2023 Rent Car. All rights reserved</p>
        <ul className="social-network">
          Follow us!
          <a href="https://www.facebook.com/profile.php?id=100090221383335">
            <li className="facebook">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                href="https://github.com/Julian-Rguez"
              >
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
              </svg>
            </li>
          </a>
          <a href="https://twitter.com/Rent_Car2023">
            <li className="twitter">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
              </svg>
            </li>
          </a>
          <a href="https://www.instagram.com/rent_car2023/">
            <li className="instagram">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </li>
          </a>
          <a href="mailto:info.grupo.rentcar@gmail.com">
            <li className="mail">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"></path>
              </svg>
            </li>
          </a>
        </ul>
      </CopyrightStyled>
    </ContainerStyled>
  );
}
export const ContainerStyled = styled.div`
  background-color: #56859a;
  color: #023047;
  font-size: 20px;
  width: 100%;
  padding-top: 20px;
  margin-top: auto;
  left: 0px;
  bottom: 0px;
`;

export const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-around;
  background-color: #56859a;
`;
export const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  justify-content: space-around;
`;

export const CopyrightStyled = styled.div`
  color: white;
  padding: 10px 10px;
  border-top: 1px solid white;
  display: flex;
  justify-content: space-around;
`;
export default Footer;
