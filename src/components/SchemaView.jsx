import React from 'react'
import { useSelector } from 'react-redux'
  
const SchemaView = () => {
    const customers = useSelector((state) => state.customers)

    //recursive function for rendering schema
    const schema = (data) =>{
        return Object.keys(data).map((key)=>{
            if(typeof data[key]=='string')return (
                <div key={key}>
                    {key}
                </div>
            )           
            return(
                <div key={key}>
                    {key}
                    {schema(data[key])}
                </div>
            )
        })
    }
    return (
    <div>
        {schema(customers[0])}
    </div>  
    )
}
export default SchemaView