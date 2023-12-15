import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NestedKeysView from '../components/NestedKeysView'
import QueriesView from './QueriesView';


const SchemaQueriesView = () => {
  const customers = useSelector((state) => state.customers);
  const [expandSchema, setExpandSchema] = useState(true);
  const [expandQueries, setExpandQueries] = useState(false);

  return (
    <div className='schema-queries-view'>
      <div>
        <button 
          onClick={()=>{
            setExpandSchema(true);
            setExpandQueries(false);
          }}
        >
          Schema
        </button>

        <button 
          onClick={()=>{
            setExpandSchema(false);
            setExpandQueries(true);
          }}
        >
          Queries
        </button>

      </div>
      {expandSchema && <NestedKeysView data={customers[0]}/>}
      {expandQueries && <QueriesView/>}

    </div>
  )
}

export default SchemaQueriesView