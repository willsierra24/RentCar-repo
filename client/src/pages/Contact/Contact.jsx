import React, {useState} from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";
import "./Contact.css"

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  // lógica para enviar el formulario
  };

  return (
    <React.Fragment>
      <NavBar />
      <ContainerStyled>
        <TitleStyled>Contact us, we are here to help you</TitleStyled>
        <br />
      <form className="contact_form" onSubmit={handleSubmit}>
      <label className="contact_label">
        Name:
        <input className="contact_input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="contact_label">
        Email:
        <input className="contact_input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="contact_label">
        Message:
        <textarea className="contact_input" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button className="contact_button" type="submit">Send</button>
    </form>
      </ContainerStyled>
      <Footer />
    </React.Fragment>
  );
}

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  margin-top: 100px;
  margin-bottom: 300px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const TitleStyled = styled.h1`
  color: #023047;
`;

export default Contact;
