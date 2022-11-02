
import { createSlice } from '@reduxjs/toolkit';

const initialSatteValue = {

    data:[],
    searchtext :0,
    errormsg:""
};

export const orderslice = createSlice({
    name:"orderslice",
    initialState:{value:initialSatteValue},
    reducers:{
        "updatedata":(state,action)=>{
        var existeddata = state.value.data;
            action.payload.data.forEach(element => {
                
                const existedindex = state.value.data.findIndex(o=>{
                    return o.id == element.id
                }) ;
                if(existedindex>-1)
                {
                    state.value.data[existedindex] = element;
                }
                else
                {
                    state.value.data.push(element);
                }
            });
        },
        "updatesearch":(state,action)=>{

            state.value.searchtext = parseInt(action.payload.searchtext);
            console.log(action.payload.searchtext);

        }
    }
});

export  default orderslice;
export const {updatesearch , updatedata} = orderslice.actions;

