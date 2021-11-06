import React, { Fragment,useContext } from "react";
import { GlobalContext } from '../../context/EXpencecontext/Expencecontext';
import ExpenseListItem from '../Homepage/ExpenseListItem';
const Searchlist = () => {
    let {filterData}=useContext(GlobalContext);
    console.log(filterData)
    return (
        <Fragment>
        <div className="container">
          <ul className="ExpenseItemList">
          {!filterData.length ? (
          <h1>Sorry, No filterData</h1>
        ) : (
          filterData.map((item, idx) => <ExpenseListItem item={item} idx={idx} />)
        )}
          </ul>
        </div>
      </Fragment>
      )
}
export default Searchlist
