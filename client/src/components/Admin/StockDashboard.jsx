import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URL } from '../../redux/actions'

export default function StockDashboard() {
    const [stock, setStock] = useState([])

    useEffect(() => {
      axios(`${URL}/inactives/tallessinstock`)
        .then(res => {
            setStock(res.data)
            console.log(res.data)
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
                <h6 className="text-white text-capitalize ps-3">Tabla stock</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center justify-content-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Producto</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Tallas</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        stock && stock.map(elem => (
                            <tr key={elem.id}>
                            <td>
                                <div className="d-flex px-2">
                                <div className="my-auto">
                                    <h6 className="mb-0 text-sm">{elem.id}</h6>
                                </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-sm font-weight-bold mb-0">{elem.title}</p>
                            </td>
                            <td>
                                <span className="text-xs font-weight-bold">{elem.sizes.map(s => (<span key={s.id}>{s.number+ ' - '}</span>))}</span>
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
