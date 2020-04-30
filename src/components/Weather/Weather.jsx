import React, {Component} from "react";
import styles from "./Weather.module.scss";
import WeatherCard from "./WeatherCard/WeatherCard";

export default class Weather extends Component {
    state = {
        city: ["2643744","4749005","4219762"],
        cities: {
            london: "2643744",
            bristol: "4749005",
            rome: "4219762"
        }
    }

    render(){
        // either way of the below is good but Object.entries is beast mode
        return(
           <section className={styles.weathercards} >
               {
                   Object.entries(this.state.cities).map((city) => {
                    return (<WeatherCard city={city[1]} />)
                   })
               }
               {/* {
                   this.state.city.map((city) => {
                       return (<WeatherCard city={city} />)
                   })
               } */}
           </section>
        );
    }
}