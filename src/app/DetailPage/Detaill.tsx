import React from 'react'
import { useLocation, useParams, Link, useHistory } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core'

interface IState {
    dataFilter?: any;
}

const DetailPage = () => {
    const params = useParams()
    const location = useLocation()
    const history = useHistory()
    const dataFilter = (location.state as IState).dataFilter
    const destination = dataFilter.map(items => items.destination)
    const test = dataFilter.map(items => items.middlewares.map(sub => sub))
    const stringDestination = destination.toString()
    const newObj = [...test[0], stringDestination]


    const handleButton = (val) => {
        if (newObj[newObj.length - 1] === val) {
            return history.push({
                pathname: `/destination/${val}`
            })
        } else {
            return history.push({
                pathname: `/subdetail/${val}`
            })
        }
    }

    const renderButton = newObj.map(item => {
        console.log('test', item[item.length - 1] === item)
        return (
            <>
                <BreadcrumbItem >{item}</BreadcrumbItem>
                <button onClick={() => handleButton(item)}>click</button>
            </>
        )
    })

    return (
        <div>
            <p>This is Detail Page</p>
            <Breadcrumb>{renderButton}</Breadcrumb>
        </div>
    )
}

export default DetailPage