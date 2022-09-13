import React from 'react'

const users = [
  {
    address: 'Direccion donde vive',
    date_of_Birth: null,
    email: "correo@gmail.com",
    id: 1,
    image: "urldeimagen",
    isActive: true,
    isAdmin: false,
    isBanned: false,
    name: "Usuario 1",
    orders: [],
    password: null,
    phone_number: null,
    surname: "Apellidos usuarios",
    username: "username",
  },
  {
    address: 'Direccion donde vive',
    date_of_Birth: null,
    email: "correo@gmail.com",
    id: 1,
    image: "urldeimagen",
    isActive: false,
    isAdmin: false,
    isBanned: false,
    name: "Usuario 1",
    orders: [],
    password: null,
    phone_number: null,
    surname: "Apellidos usuarios",
    username: "username",
  },
  {
    address: 'Direccion donde vive',
    date_of_Birth: null,
    email: "correo@gmail.com",
    id: 1,
    image: "urldeimagen",
    isActive: true,
    isAdmin: false,
    isBanned: false,
    name: "Usuario 1",
    orders: [],
    password: null,
    phone_number: null,
    surname: "Apellidos usuarios",
    username: "username",
  },
  {
    address: 'Direccion donde vive',
    date_of_Birth: null,
    email: "correo@gmail.com",
    id: 1,
    image: "urldeimagen",
    isActive: true,
    isAdmin: false,
    isBanned: false,
    name: "Usuario 1",
    orders: [],
    password: null,
    phone_number: null,
    surname: "Apellidos usuarios",
    username: "username",
  },
  {
    address: 'Direccion donde vive',
    date_of_Birth: null,
    email: "correo@gmail.com",
    id: 1,
    image: "urldeimagen",
    isActive: true,
    isAdmin: false,
    isBanned: false,
    name: "Usuario 1",
    orders: [],
    password: null,
    phone_number: null,
    surname: "Apellidos usuarios",
    username: "username",
  },
]

export default function UsersDashboard() {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Tabla usuarios</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombres</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Apellidos</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Dirección</th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users.map(user => (
                        <tr>
                          <td>
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
                          <td>
                            <p className="text-xs font-weight-bold mb-0">{user.surname}</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className={`badge badge-sm ${user.isActive ? 'bg-gradient-success' : 'bg-gradient-secondary'}`}>{user.isActive ? 'activo' : 'inactivo'}</span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{user.address}</span>
                          </td>
                          <td className="align-middle">
                            <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                              Edit
                            </a>
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
