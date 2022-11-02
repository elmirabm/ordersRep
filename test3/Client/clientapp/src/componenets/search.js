import React from 'react'
import {useState} from 'react';

import {updatesearch } from '../features/orders.js';
import {useAppDIspatch } from '../features/redux-hooks';

function Search() {
const[searchtext , setsearchtext] = useState('');

const dispatch = useAppDIspatch();

const docalldispatch =(val)=>{
    dispatch(updatesearch(val));
}

const dochange=(event)=>{
setsearchtext(event.target.value);

}

const dosearch = ()=>{
docalldispatch({searchtext});
}

const doclear = ()=>{
setsearchtext('');
docalldispatch('');
}

  return (
    <div data-testid="test1" class="container">
        <input class="form-control" name="searchtxt" type="number" value={searchtext} onChange={dochange}></input>
        <button class="btn btn-sm " onClick={dosearch} >Search</button>
        <button class="btn btn-sm " onClick={doclear}>Clear</button>
    </div>
  )
}
export default Search