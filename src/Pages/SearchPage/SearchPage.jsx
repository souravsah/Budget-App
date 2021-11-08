import React, { Fragment } from 'react'
import ExpenseFilterForm from '../../components/Homepage/ExpenseFilterForm'
import Searchlist from '../../components/Search/Searchlist'
const SearchPage = () => {
    return (
        <Fragment>
            <ExpenseFilterForm/>
            <Searchlist/>
        </Fragment>
    )
}

export default SearchPage
