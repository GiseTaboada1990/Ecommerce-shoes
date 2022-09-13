import React from 'react'
import { GiReceiveMoney } from 'react-icons/gi'
import { HiUsers } from 'react-icons/hi'

export default function HomeDashboard() {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                <i className="material-icons opacity-10"><GiReceiveMoney /></i>
                            </div>
                            <div className="text-end pt-1">
                                <p className="text-sm mb-0 text-capitalize">Total ingresos</p>
                                <h4 className="mb-0">$53k</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than last week</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-3 pt-2">
                            <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                <i className="material-icons opacity-10"><HiUsers /></i>
                            </div>
                            <div className="text-end pt-1">
                                <p className="text-sm mb-0 text-capitalize">Total usuarios</p>
                                <h4 className="mb-0">2,300</h4>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-3">
                            <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last week</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4 col-md-6 mt-4 mb-4">
                    <div className="card z-index-2  ">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                            <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                                <div className="chart">
                                    <canvas id="chart-line" className="chart-canvas" height="170"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="mb-0 "> Daily Sales </h6>
                            <p className="text-sm "> (<span className="font-weight-bolder">+15%</span>) increase in today sales. </p>
                            <hr className="dark horizontal" />
                            <div className="d-flex ">
                                <i className="material-icons text-sm my-auto me-1">schedule</i>
                                <p className="mb-0 text-sm"> updated 4 min ago </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4 mb-3">
                    <div className="card z-index-2 ">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                            <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                                <div className="chart">
                                    <canvas id="chart-line-tasks" className="chart-canvas" height="170"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="mb-0 ">Completed Tasks</h6>
                            <p className="text-sm ">Last Campaign Performance</p>
                            <hr className="dark horizontal" />
                            <div className="d-flex ">
                                <i className="material-icons text-sm my-auto me-1">schedule</i>
                                <p className="mb-0 text-sm">just updated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
