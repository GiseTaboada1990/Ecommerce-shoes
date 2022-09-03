import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";


export default function Searchbar({handleInputName, handleNameSubmit}) {
  
  return (
   
    <Form className="d-flex" onSubmit={(e) => handleNameSubmit(e)}  >
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleInputName(e)}
              id={"input-searchbar"}
            />
            <Button variant="outline-success" onClick={(e) => handleNameSubmit(e)}  style={{ color: 'black' , backgroundColor: '#f87d2d', borderColor:' #f87d2d'}}><FaSearch/></Button>
          </Form>
          
  );
}
