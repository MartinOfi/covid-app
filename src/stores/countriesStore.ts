import { makeObservable, observable, action, configure } from "mobx";
import axiosInstance from "../Services/Axios";
import { ContryDetails, GlobalData } from "../types/models";
configure({ enforceActions: "always", useProxies: "never" });

class CountriesStore {
  relevantData:GlobalData = {
    countries: [],
    Global: {}
      
  };
  countryDetails: ContryDetails = {
    countryData: {},
    confirmed: {},
    recovered: {},
    deaths: {},
    vaccines: {},
  };
  constructor() {
    makeObservable(this, {
      relevantData: observable,
      countryDetails: observable,
      setRelevantData: action,
      setCountryDetails: action,
    });
  }
  clearData = () => {
    this.countryDetails = {
      countryData: {},
      confirmed: {},
      recovered: {},
      deaths: {},
      vaccines: {},
    };
  };
  getCountryDetails = async (country: string) => {
    this.clearData();
    await axiosInstance
      .get(`/v1/history?country=${country}&status=confirmed`)
      .then((res) => {
        if (res?.data) {
          this.setCountryDetails(res.data, "confirmed");
        }
      });
    await axiosInstance
      .get(`/v1/history?country=${country}&status=deaths`)
      .then((res) => {
        if (res?.data) {
          this.setCountryDetails(res.data, "deaths");
        }
      });
    await axiosInstance
      .get(`/v1/history?country=${country}&status=recovered`)
      .then((res) => {
        if (res?.data) {
          this.setCountryDetails(res.data, "recovered");
        }
      });
    await axiosInstance.get(`/v1/vaccines?country=${country}`).then((res) => {
      if (res?.data) {
        this.setCountryDetails(res.data, "vaccines");
      }
    });
    await axiosInstance.get(`/v1/cases?country=${country}`).then((res) => {
      if (res?.data) {
        this.setCountryDetails(res.data, "countryData");
      }
    });
  };
  setCountryDetails = (data: any, propery: string) => {
    this.countryDetails[propery] = data;
  };

  getRelevantData = async () => {
    await axiosInstance.get("/v1/cases").then((res) => {
      if (res?.data) {
        this.setRelevantData(res.data,"countries");
      }
    });
    await axiosInstance.get("/v1/vaccines").then((res) => {
      if (res?.data) {
        this.setRelevantData(res.data.Global,"Global");
      
      }
    });
  };
  setRelevantData = (data: any,propery: string) => {
    this.relevantData[propery] = data;
  };
}

const countriesStore = new CountriesStore();

export default countriesStore;
