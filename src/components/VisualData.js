import React, { Component } from 'react';
import WorldPopulationData from './datas/worldpopulation.json';

export default class VisualData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: [],
            population: []
        }
    }

    componentDidMount() {

        let arrCountry = []
        let arrPopulation = []

        WorldPopulationData.map(value => {

            // first pushing the value into a new arr

            arrCountry.push(value.country)
            arrPopulation.push(value.population)

        })

        this.setState({

            //then using spread syntax to set state of country array

            country: [...this.state.country, ...arrCountry],
            population: [...this.state.population, ...arrPopulation]

        }, () => {
            console.log(this.state.country)
            console.log(this.state.population)
        })

    }

    render() {
        return (
            <div>
                <canvas width="400" height="400"></canvas>
            </div>
        )
    }
}