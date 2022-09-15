import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { URL } from '../../redux/actions'

export default function SoldsDashboard() {

    const [ solds, setSolds ] = useState([])

    useEffect(() => {
        axios(`${URL}/solds`)
            .then(res => {
                console.log(res.data)
                setSolds(res.data)
            })
            .catch(error => console.log(error))
    }, [])

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Tabla ventas</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center justify-content-center mb-0">
                  <thead className=' position-absolute'>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Producto</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Talles</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Fecha</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Acciones</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        solds.map(sold => (
                            <tr key={sold.id}>
                                <td>
                                    <div className="d-flex px-2">
                                        <div className="my-auto">
                                            <h6 className="mb-0 text-sm">{sold.id}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="text-sm font-weight-bold mb-0">{sold.title}</p>
                                </td>
                                <td>
                                    <ul className="text-xs font-weight-bold">
                                        {
                                            sold.sizes.map(s => (
                                                <li >{s.number} | {s.solds}</li>
                                            ))
                                        }
                                    </ul>
                                </td>
                                <td className="align-middle text-center">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <span className="me-2 text-xs font-weight-bold">{sold.date}</span>
                                    </div>
                                </td>
                                <td className="align-middle">
                                    <button className="btn btn-link text-secondary mb-0">
                                        <i className="fa fa-ellipsis-v text-xs"></i>
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
