import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const SubDetailPage = () => {
    const location = useLocation()
    const patternLoc = location.pathname
    const pattern = /subdetail/
    const newLoc: any = patternLoc.replace(pattern, "")

    return (
        <div>
            <p>This is Page {newLoc}</p>
        </div>
    )
}

export default SubDetailPage