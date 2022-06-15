import {
  makeObservable,
  observable,
  action,
  configure,
} from "mobx";
import axiosInstance from "../Services/Axios";
configure({ enforceActions: "always",useProxies: "never",
});
class CountriesStore {
  relevantData: {} = {};
  constructor() {
    makeObservable(this, {
      relevantData: observable,
      setRelevantData: action,
    });
  }

  getRelevantData = async () => {    
    await axiosInstance.get("/v1/cases").then((res) => {                  
      if (res?.data) {        
       this.setRelevantData(res.data)
      }
    });
  };
  setRelevantData = (data: any) => {    
    this.relevantData = data;
  }
}

const countriesStore = new CountriesStore();

export default countriesStore;
