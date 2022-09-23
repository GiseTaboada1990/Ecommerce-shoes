import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getAllBrands, getAllCategories, getAllShoes, getAllSizes } from '../../redux/actions'

export default function ProductsDashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllSizes())
    dispatch(getAllBrands())
    dispatch(getAllCategories())
    dispatch(getAllShoes())
  }, [])

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="d-flex justify-content-between align-items-center bg-gradient-primary shadow-primary border-radius-lg pt-3 pb-3">
                <h6 className="text-white text-capitalize m-0 ps-3">Tabla de productos</h6>
                <Link className="badge badge-sm me-2 text-dark" to="/post" style={{ backgroundColor: '#fff' }}>
                  Crear producto
                </Link>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0 w-100">
                  <thead className='container-fluid p-0 position-fixed' style={{ backgroundColor: '#fcfcfc' }}>
                    <tr className='d-flex'>
                      <th className="w-35 text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombre</th>
                      <th className="w-10 text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Estado</th>
                      <th className="w-35 text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Marca</th>
                      <th className="w-10 text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody className='d-block mt-5 w-100' style={{ height: '65vh' }}>
                    {
                      products && products.map(product => (
                        <tr key={product.id}>
                          <td className='w-20'>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img src={product.image} className="avatar avatar-sm me-3 border-radius-lg" alt={`product-${product.id}`} />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm text-wrap">{product.title}</h6>
                                <p className="text-xs text-secondary mb-0">cualquier cosa</p>
                              </div>
                            </div>
                          </td>
                          <td className="w-10 align-middle text-center text-sm">
                            <span className={`badge badge-sm ${product.isActive ? 'bg-gradient-success' : 'bg-gradient-secondary'}`}>{product.isActive ? 'activo' : 'inactivo'}</span>
                          </td>
                          <td className="w-10 align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{product.brands && product.brands.length ? product.brands.map(b => b.name) : 'Sin marca'}</span>
                          </td>
                          <td className="w-10 align-middle">
                            <button 
                              onClick={() => navigate('/post', { state: product })}
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
