import React, { useState } from 'react'
import {
    filterByBrand,
    filterByPrice,
    filterByCategory,
    filterBySize,
    combinationsFilter,
    combinationsFilter1,
    combinationsFilter2,
    combinationsFilter3,
    combinationsFilter4,
    combinationsFilter5,
    combinationsFilter6,
    combinationsFilter9,
    combinationsFilter7,
    combinationsFilter8,
    combinationsFilter10,
    combinationsFilter11,
    combinationsFilter12,
    combinationsFilter13,
    combinationsFilter14,
    combinationsFilter15,
    combinationsFilter16,
    combinationsFilter17,
    combinationsFilter18,
    combinationsFilter19,
    searchBar,
} from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import { DropdownMenu, Dropdown, DropdownToggle } from 'reactstrap'


export default function Filters({ setCurrentPage }) {

    const [menu, setMenu] = useState(false)

    const [brandFilter, setBrandFilter] = useState("default");
    const [categoryFilter, setCategoryFilter] = useState("default");
    const [sizeFilter, setSizeFilter] = useState("default");
    // const [nameFilter, setNameFilter] = useState("");
    const nameFilter = useSelector(state => state.searchBarValue)
    const [priceMin, setPriceMin] = useState("");
    const [priceMax, setPriceMax] = useState("");

    const dispatch = useDispatch()
    const allBrands = useSelector(state => state.brands)


    const handleInputPriceMin = (e) => {
        setPriceMin(e.target.value);
    };

    const handleInputPriceMax = (e) => {
        setPriceMax(e.target.value);
    };
   
    const handleFilterBrand = (e) => {
        setBrandFilter(e.target.value);
        if (nameFilter !== "" && sizeFilter !== "default" && priceMin !== "" && priceMax !== "" && categoryFilter !== "default") {
            dispatch(combinationsFilter18(sizeFilter, categoryFilter, e.target.value, nameFilter, priceMin, priceMax))
        } else if (nameFilter !== "" && sizeFilter !== "default" && priceMin !== "" && priceMax !== "") {
            dispatch(combinationsFilter14(sizeFilter, e.target.value, nameFilter, priceMin, priceMax))
        } else if (categoryFilter !== "default" && nameFilter !== "" && priceMin !== "" && priceMax !== "") {
            dispatch(combinationsFilter10(categoryFilter, nameFilter, priceMax, priceMin, e.target.value))
        } else if (categoryFilter !== "default" && sizeFilter !== "default" && priceMin !== "" && priceMax !== "") {
            dispatch(combinationsFilter19(sizeFilter, categoryFilter, e.target.value, priceMin, priceMax))
        } else if (priceMin !== "" && priceMax !== "" && sizeFilter !== "default") {
            dispatch(combinationsFilter11(e.target.value, priceMin, priceMax, sizeFilter))
        } else if (priceMax !== "" && priceMin !== "" && nameFilter !== "") {
            dispatch(combinationsFilter2(e.target.value, nameFilter, priceMin, priceMax))
        } else if (priceMax !== "" && priceMin !== "" && categoryFilter !== "default") {
            dispatch(combinationsFilter8(categoryFilter, e.target.value, priceMax, priceMin))
        } else if (categoryFilter !== "default" && sizeFilter !== "default") {
            dispatch(combinationsFilter17(sizeFilter, categoryFilter, e.target.value))
        } else if (categoryFilter !== "default" && nameFilter !== "") {
            dispatch(combinationsFilter7(categoryFilter, e.target.value, nameFilter))
        } else if (nameFilter !== "") {
            dispatch(combinationsFilter3(nameFilter, e.target.value))
        } else if (priceMin !== "" && priceMax !== "") {
            dispatch(combinationsFilter(e.target.value, priceMin, priceMax))
        } else if (sizeFilter !== "default") {
            dispatch(combinationsFilter13(sizeFilter, e.target.value))
        } else if (categoryFilter !== "default") {
            dispatch(combinationsFilter6(e.target.value, categoryFilter))
        } else {
            dispatch(filterByBrand(e.target.value))
        }
        setCurrentPage(1);
    };

    const handleCategories = (e) => {
        setCategoryFilter(e.target.value);
        if (nameFilter !== "" && brandFilter !== "default" && priceMin !== "" && priceMax !== "" && sizeFilter !== "default") {
            dispatch(combinationsFilter18(sizeFilter, e.target.value, brandFilter, nameFilter, priceMin, priceMax))
        } else if (brandFilter !== "default" && nameFilter !== "" && priceMin !== "" && priceMax !== "") {
            dispatch(combinationsFilter10(e.target.value, nameFilter, priceMax, priceMin, brandFilter))
        } else if (sizeFilter !== "default" && brandFilter !== "default" && priceMin !== "" && priceMax !== "") {
            dispatch(combinationsFilter19(sizeFilter, e.target.value, brandFilter, priceMin, priceMax))
        } else if (priceMax !== "" && priceMin !== " " && brandFilter !== "default") {
            dispatch(combinationsFilter8(e.target.value, nameFilter, brandFilter, priceMin, priceMax))
        } else if (nameFilter !== "default" && priceMin !== "" && priceMax !== "") {
            dispatch(combinationsFilter9(e.target.value, nameFilter, priceMin, priceMax))
        } else if (brandFilter !== "default" && sizeFilter !== "default") {
            dispatch(combinationsFilter17(sizeFilter, e.target.value, brandFilter))
        } else if (priceMin !== "" && priceMax !== "") {
            dispatch(combinationsFilter4(e.target.value, priceMin, priceMax))
        } else if (brandFilter !== "default" && nameFilter !== "") {
            dispatch(combinationsFilter7(e.target.value, brandFilter, nameFilter))
        } else if (nameFilter !== "") {
            dispatch(combinationsFilter5(e.target.value, nameFilter))
        } else if (brandFilter !== "default") {
            dispatch(combinationsFilter6(brandFilter, e.target.value))
        } else if (sizeFilter !== "default") {
            dispatch(combinationsFilter16(sizeFilter, e.target.value))
        } else {
            dispatch(filterByCategory(e.target.value))
        }
        setCurrentPage(1);
    };

    const handleFilterByPrice = (e) => {
        e.preventDefault();
        if (nameFilter !== "" && brandFilter !== "default" && priceMin !== "" && priceMax !== "" && categoryFilter !== "default") {
            dispatch(combinationsFilter18(sizeFilter, categoryFilter, brandFilter, nameFilter, priceMin, priceMax))
        } else if (nameFilter !== "" && sizeFilter !== "default" && brandFilter !== "default") {
            dispatch(combinationsFilter14(sizeFilter, brandFilter, nameFilter, priceMin, priceMax))
        } else if (categoryFilter !== "default" && brandFilter !== "default" && sizeFilter !== "default") {
            dispatch(combinationsFilter19(sizeFilter, categoryFilter, brandFilter, priceMin, priceMax))
        } else if (brandFilter !== "default" && nameFilter !== "" && categoryFilter !== "default") {
            dispatch(combinationsFilter10(categoryFilter, nameFilter, priceMax, priceMin, brandFilter))
        } else if (brandFilter !== "default" && nameFilter !== "") {
            dispatch(combinationsFilter2(brandFilter, nameFilter, priceMin, priceMax))
        } else if (brandFilter !== "default" && sizeFilter !== "default") {
            dispatch(combinationsFilter11(brandFilter, priceMin, priceMax, sizeFilter))
        } else if (brandFilter !== "default" && categoryFilter !== "default") {
            dispatch(combinationsFilter8(categoryFilter, brandFilter, priceMax, priceMin))
        } else if (nameFilter !== "" && categoryFilter !== "default") {
            dispatch(combinationsFilter9(categoryFilter, nameFilter, priceMin, priceMax))
        } else if (nameFilter !== "") {
            dispatch(combinationsFilter1(nameFilter, priceMin, priceMax))
        } else if (brandFilter !== "default") {
            dispatch(combinationsFilter(brandFilter, priceMin, priceMax))
        } else if (categoryFilter !== "default") {
            dispatch(combinationsFilter4(categoryFilter, priceMin, priceMax))
        } else if (sizeFilter !== "default" && priceMin !== "" && priceMax !== "") {
            dispatch(combinationsFilter12(sizeFilter, priceMin, priceMax))
        } else {
            dispatch(filterByPrice(priceMin, priceMax))
        }
        setCurrentPage(1);
    };

    const handleSize = (e) => {
        setSizeFilter(e.target.value);
        if (nameFilter !== "" && brandFilter !== "default" && priceMin !== "" && priceMax !== "" && categoryFilter !== "default") {
            dispatch(combinationsFilter18(e.target.value, categoryFilter, brandFilter, nameFilter, priceMin, priceMax))
        } else if (nameFilter !== "" && brandFilter !== "default" && priceMin !== "" && priceMax !== "") {
            dispatch(combinationsFilter14(e.target.value, brandFilter, nameFilter, priceMin, priceMax))
        } else if (categoryFilter !== "default" && brandFilter !== "default" && priceMin !== "" && priceMax !== "") {
            dispatch(combinationsFilter19(e.target.value, categoryFilter, brandFilter, priceMin, priceMax))
        } else if (priceMin !== "" && priceMax !== "" && brandFilter !== "default") {
            dispatch(combinationsFilter11(brandFilter, priceMin, priceMax, e.target.value))
        } else if (brandFilter !== "default" && categoryFilter !== "default") {
            dispatch(combinationsFilter17(e.target.value, categoryFilter, brandFilter))
        } else if (priceMax !== "" && priceMin !== "") {
            dispatch(combinationsFilter12(e.target.value, priceMin, priceMax))
        } else if (brandFilter !== "default") {
            dispatch(combinationsFilter13(e.target.value, brandFilter))
        } else if (nameFilter !== "") {
            dispatch(combinationsFilter15(e.target.value, nameFilter))
        } else if (categoryFilter !== "default") {
            dispatch(combinationsFilter16(e.target.value, categoryFilter))
        } else {
            dispatch(filterBySize(e.target.value))
        }
        setCurrentPage(1);
    };

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
            <Dropdown isOpen={menu} toggle={toggleMenu} className='w-25 px-2'>
                <DropdownToggle color='indigo' className={`btn-outline-dark`}>
                    Filtrar
                </DropdownToggle>
                <DropdownMenu className={`w-100 bg-light px-2 fs-5`}>
                    {menu &&
                    <>
                    <select 
                        onChange={(e) => handleFilterBrand(e)} 
                        value={brandFilter} 
                        className={`w-100 border-1 rounded-4 px-3 py-3 my-1 bg-pink-800  `}
                    >
                        <option value={"default"} disabled>Marcas</option>
                        { allBrands && allBrands.map((brand) => <option key={brand.id}>{ brand.name }</option> )}
                    </select>
                    <br />
                    <select
                        onChange={(e) => handleCategories(e)}
                        value={categoryFilter}
                        className={`w-100 border-1 rounded-4 px-3 py-3 my-1 `}
                    >
                        <option value={"default"} disabled>Categor??as</option>
                        <option value="Zapatillas">Zapatillas</option>
                        <option value="Botas y Botinetas">Botas y Botinetas</option>
                        <option value="Sandalias y Ojotas">Sandalias y Ojotas</option>
                        <option value="Stilletos y Plataformas">Stilletos y Plataformas</option>
                        <option value="Mocasines y Oxfords">Mocasines y Oxfords</option>
                        <option value="Pantuflas">Pantuflas</option>
                        <option value="Chatitas">Chatitas</option>
                        <option value="Alpargatas">Alpargatas</option>
                    </select>
                    <br />
                    <select
                        onChange={(e) => handleSize(e)}
                        value={sizeFilter}
                        className={`w-100 border-1 rounded-4 px-3 py-3 my-1 `}
                    >
                        <option value={"default"} disabled>
                            Talles
                        </option>
                        <option value={35}>35</option>
                        <option value={36}>36</option>
                        <option value={37}>37</option>
                        <option value={38}>38</option>
                        <option value={39}>39</option>
                        <option value={40}>40</option>
                        <option value={41}>41</option>
                        <option value={42}>42</option>
                        <option value={43}>43</option>
                    </select>
                    <br />
                    <form onSubmit={handleFilterByPrice}>
                        <input
                            value={priceMin}
                            type="search"
                            onChange={(e) => handleInputPriceMin(e)}
                            placeholder="Precio min."
                            className={`w-35 form-control-sm fs-5 border-1 rounded-3 me-1 py-2`}
                        />
                        <input
                            value={priceMax}
                            type="search"
                            onChange={(e) => handleInputPriceMax(e)}
                            placeholder="Precio max."
                            className={`w-35 form-control-sm fs-5 border-1 rounded-3 me-1 py-2`}
                        />
                        <button type="submit" className={`rounded-circle px-3 py-2 ms-3`}>
                            ???
                        </button>
                    </form>
                    </>
                    }
                </DropdownMenu>
            </Dropdown>
    )
}
