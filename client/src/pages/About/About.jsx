import React from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
function About() {
  return (
    <React.Fragment>
      <NavBar />
      <ContainerStyled>
        <TitleStyled>About Rent Car</TitleStyled>
        <p>
          By the mid-1920s the American automobile had won the revolution Ford
          had begun. The country was on wheels, and the manufacture and sale of
          automobiles had become an important component in the American economy.
          The closed car was no longer exclusively a rich mans possession. In
          1920 most cars had been open models, the occupants protected from the
          weather by canvas-and-isinglass side curtains. The Essex coach, a
          no-frills two-door sedan introduced in 1922 by the Hudson Motor Car
          Company, reduced the cost of sheltered motoring to that of a touring
          car.
        </p>
        <p>
          Ten years later, Detroit manufacturers were producing closed models
          almost exclusively. The 1920s saw the emergence of the great European
          producers—Austin, Morris, and Singer in England, Fiat in Italy, and
          Citroën in France. Universal motor transportation was a long way off,
          but the concept of the small car that found expression in the Austin
          Seven and the Fiat Topolino, two of the descendants of Ettore Bugattis
          tiny Bébé Peugeot of 1911, was to have a profound effect.
        </p>
        <CardGroup style={{ width: '50rem', height:'13rem', margin: '30px', border: '1px solid black' }}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1547038577-da80abbc4f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            />
          </Card>
        </CardGroup>
      </ContainerStyled>
      <Footer />
    </React.Fragment>
  );
}
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 50px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 200px;
  margin-top: 150px;
  background-color: trasnparent;
  border: 1px solid black;
`;

export const TitleStyled = styled.h1`
  color: #023047;
  font-size: 30px;
  margin: 30px;
`;
export default About;
