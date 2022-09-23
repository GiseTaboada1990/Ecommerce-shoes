import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { filterByName, searchBar } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


export default function SearchBar() {

  const name = useSelector(state => state.searchBarValue)
  const dispatch = useDispatch()

  const handleOnChange= (e)=>{
    dispatch(searchBar(e.target.value))
  }
  const handleSubmit = ()=>{
    dispatch(searchBar(name))
    dispatch(filterByName(name))
  }
  return (
    <Form className="w-50 d-flex align-items-center" onSubmit={(e) => handleSubmit(e)}  >
      <Form.Control
        type="search"
        placeholder="Buscar..."
        className="me-2 py-1 px-2 fs-6 border"
        aria-label="Search"
        onChange={(e) => handleOnChange(e)}
        id={"input-searchbar"}
        value={name}
      />
      <Button 
        className="m-0 btn-sm"
        variant="outline-secondary" 
        onClick={(e) => handleSubmit(e)} 
      >
        <FaSearch className="text-secondary" />
      </Button>
    </Form>
  );
}
