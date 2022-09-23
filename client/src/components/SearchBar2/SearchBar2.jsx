import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { filterByName } from "../../redux/actions";
import { useDispatch } from "react-redux";


export default function SearchBar2() {

  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleOnChange= (e)=>{
    setName(e.target.value)
  }
  const handleSubmit = ()=>{
    dispatch(filterByName(name))
    setName('')
  }
  return (
    <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}  >
      <Form.Control
        type="search"
        placeholder="Buscar..."
        className="me-2"
        aria-label="Search"
        onChange={(e) => handleOnChange(e)}
        id={"input-searchbar"}
        value={name}
      />
      <Button variant="outline-success" onClick={(e) => handleSubmit(e)} style={{ color: 'black', backgroundColor: '#f87d2d', borderColor: ' #f87d2d' }}><FaSearch /></Button>
    </Form>
  );
}
