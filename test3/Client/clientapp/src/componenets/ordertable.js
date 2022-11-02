import React from "react";

import { useAppSelector } from "../features/redux-hooks";




function Ordertable(){

    const orders = useAppSelector((state) =>state.orders.value);

    

const data = orders.searchtext? orders.data.filter(s=>s.price==orders.searchtext) :orders.data ;
   

    return(
        <div class="containerT container">
            
            <table class="table table-bordered  table-striped">
                <thead class="datatable-header">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        orders.data && orders.data.length>0?
                        
                                    data.map( d=>
                                        <tr>
                                            <td >{d.id}</td>
                                            <td>{d.name}</td>
                                            <td>{d.price}</td>
                                        </tr>
                                        )
                                    :
                                    <tr><td>No data</td></tr>

                        
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Ordertable