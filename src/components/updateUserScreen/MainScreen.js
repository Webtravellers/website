import React from "react";
import { Container, Row } from "reactstrap";

function MainScreen({ children, title }) {
  return (
    <div className="mainback d-flex flex-column justify-content-center align-items-center">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading d-flex justify-content-center">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MainScreen;
