import React from 'react'

const products = [
  { 
    title: 'Mocasín Mujer Cuero Briganti Zapato Chatita - Mcmo03587',
    image: 'http://http2.mlstatic.com/D_867116-MLA49797017553_042022-O.jpg', 
    isActive: true, 
    brand: 'Nike' 
  },
  { 
    title: 'Mocasín Mujer Cuero Briganti Zapato Chatita - Mcmo03587',
    image: 'http://http2.mlstatic.com/D_867116-MLA49797017553_042022-O.jpg', 
    isActive: true, 
    brand: 'Nike' 
  },
  { 
    title: 'Mocasín Mujer Cuero Briganti Zapato Chatita - Mcmo03587',
    image: 'http://http2.mlstatic.com/D_867116-MLA49797017553_042022-O.jpg', 
    isActive: false, 
    brand: 'Nike' 
  },
]

export default function ProductsDashboard() {

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Tabla de productos</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombre</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Marca</th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      products.map(product => (
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img src={product.image} className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">{product.title}</h6>
                                <p className="text-xs text-secondary mb-0">cualquier cosa</p>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className={`badge badge-sm ${product.isActive ? 'bg-gradient-success' : 'bg-gradient-secondary'}`}>{product.isActive ? 'activo' : 'inactivo'}</span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{product.brand}</span>
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
