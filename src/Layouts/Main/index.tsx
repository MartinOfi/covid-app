import { toJS } from "mobx";
import { inject, observer } from "mobx-react"
import { useState,useEffect } from "react";

const Home = (props:any) => {
  const [data,setData]=useState<any>()
  const {CountriesStore } = props
  useEffect(()=>{
    CountriesStore.getRelevantData()
  },[])

  useEffect(()=>{
    if(CountriesStore.relevantData?.Armenia){
      setData({...CountriesStore.relevantData})
      
      const array = (Object.keys(toJS(CountriesStore.relevantData))
      .map(function(key) {
          return toJS(CountriesStore.relevantData)[key]
      }));
    }
  },[CountriesStore.relevantData])
 
console.log(toJS(CountriesStore.relevantData));

  
 
return(
  <div>
    <h1>home</h1>
  </div>
)
}
export default inject("CountriesStore")(observer(Home))