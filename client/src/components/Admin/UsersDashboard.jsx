import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const URL = process.env.REACT_APP_URL

// const users = [
//   {
//     address: 'Direccion donde vive',
//     date_of_Birth: null,
//     email: "correo@gmail.com",
//     id: 1,
//     image: "urldeimagen",
//     isActive: true,
//     isAdmin: false,
//     isBanned: false,
//     name: "Usuario 1",
//     orders: [],
//     password: null,
//     phone_number: null,
//     surname: "Apellidos usuarios",
//     username: "username",
//   },
//   {
//     address: 'Direccion donde vive',
//     date_of_Birth: null,
//     email: "correo@gmail.com",
//     id: 1,
//     image: "urldeimagen",
//     isActive: false,
//     isAdmin: false,
//     isBanned: false,
//     name: "Usuario 1",
//     orders: [],
//     password: null,
//     phone_number: null,
//     surname: "Apellidos usuarios",
//     username: "username",
//   },
//   {
//     address: 'Direccion donde vive',
//     date_of_Birth: null,
//     email: "correo@gmail.com",
//     id: 1,
//     image: "urldeimagen",
//     isActive: true,
//     isAdmin: false,
//     isBanned: false,
//     name: "Usuario 1",
//     orders: [],
//     password: null,
//     phone_number: null,
//     surname: "Apellidos usuarios",
//     username: "username",
//   },
//   {
//     address: 'Direccion donde vive',
//     date_of_Birth: null,
//     email: "correo@gmail.com",
//     id: 1,
//     image: "urldeimagen",
//     isActive: true,
//     isAdmin: false,
//     isBanned: false,
//     name: "Usuario 1",
//     orders: [],
//     password: null,
//     phone_number: null,
//     surname: "Apellidos usuarios",
//     username: "username",
//   },
//   {
//     address: 'Direccion donde vive',
//     date_of_Birth: null,
//     email: "correo@gmail.com",
//     id: 1,
//     image: "urldeimagen",
//     isActive: true,
//     isAdmin: false,
//     isBanned: false,
//     name: "Usuario 1",
//     orders: [],
//     password: null,
//     phone_number: null,
//     surname: "Apellidos usuarios",
//     username: "username",
//   },
// ]

export default function UsersDashboard() {

  const navigate = useNavigate()
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    
    fetch(`${URL}/user`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setUsers(res)
    })
    .catch(error => console.log(error))

  }, [])

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="d-flex justify-content-between align-items-center bg-gradient-primary shadow-primary border-radius-lg pt-3 pb-3">
                <h6 className="text-white text-capitalize m-0 ps-3">Tabla usuarios</h6>
                <Link className="badge badge-sm me-2 text-dark" to="/editUser" style={{ backgroundColor: '#fff' }}>
                  Crear usuario
                </Link>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0 w-100">
                  <thead className='container-fluid p-0 position-fixed' style={{ backgroundColor: '#fcfcfc' }}>
                    <tr className='d-flex'>
                      <th className="w-20 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombres</th>
                      <th className="w-20 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Apellidos</th>
                      <th className="w-10 text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                      <th className="w-15 text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Dirección</th>
                      <th className="w-15 text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody className='d-block mt-5 w-100' style={{ height: '65vh' }}>
                    {
                      users.map(user => (
                        <tr key={user.id}>
                          <td className='w-20'>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img src={user.image} className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">{user.name}</h6>
                                <p className="text-xs text-secondary mb-0">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className='w-20'>
                            <p className="text-xs font-weight-bold mb-0">{user.surname}</p>
                          </td>
                          <td className="w-10 align-middle text-center text-sm">
                            <span className={`badge badge-sm ${user.isActive ? 'bg-gradient-success' : 'bg-gradient-secondary'}`}>{user.isActive ? 'activo' : 'inactivo'}</span>
                          </td>
                          <td className="w-15 align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{user.address ? user.address : 'sin dirección'}</span>
                          </td>
                          <td className="w-15 align-middle">
                            <button 
                                onClick={() => navigate('/editUser', { state: user })}
                                className="badge badge-sm bg-gradient-success border-0" data-toggle="tooltip" data-original-title="Edit product"
                              >
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
