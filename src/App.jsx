import React from 'react'
import Table from './components/Table/Table'
import Select from './components/Select/Select'
import useHttp from './components/customHooks/useHttp'
import {dataFormat} from './utils/utils'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import classes from './App.module.css'

const App = () => {
  const {leads,sendRequest} = useHttp()
  console.log(leads)
  const [filteredLead,setFilteredLead] = React.useState(11)
  React.useEffect(()=>{
   sendRequest()
  },[sendRequest])
  let trData =[]
  if(leads.length > 0){
    trData = leads.map(item=>{
      return {...item,key:item.id,created_at:dataFormat(item.created_at),updated_at:dataFormat(item.updated_at)}
    })
  }else{
    return <div><LoadingSpinner/></div>
  }
  
  return (
    <div className={classes.app}>
      <Select filterPage={setFilteredLead}/>
      <Table leads={trData} page={filteredLead}/>
    </div>
  )
}

export default App
