import React from 'react'
import './assets/css/material-dashboard.css'
import { GiReceiveMoney } from 'react-icons/gi'

export default function Card({ classNameMain ,classNameIcon, textIcon, title, value, percentage, lapseOftime }) {
    return (
        <div className={classNameMain}>
            <div className="card">
                <div className="card-header p-3 pt-2">
                    <div className={classNameIcon}>
                        <i className="material-icons opacity-10"><GiReceiveMoney/></i>
                    </div>
                    <div className="text-end pt-1">
                        <p className="text-sm mb-0 text-capitalize">{title}</p>
                        <h4 className="mb-0">{value}</h4>
                    </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                    <p className="mb-0"><span className="text-success text-sm font-weight-bolder">{percentage} </span>{lapseOftime}</p>
                </div>
            </div>
        </div>
    )
}
