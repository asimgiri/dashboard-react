import React, { Fragment } from 'react';
import VisualData from '../components/VisualData';
import Card from '../components/Card';
import Bgcol from '../components/Bgcol';

export default function Dashboard() {
    return (
        <section className="dashboard">
            <h1 className="title is-4">Spotlight <a href=""> <small className="is-pulled-right is-link">See More</small></a></h1>
            <div className="columns">
                <div className="column">
                    <Bgcol />
                </div>
                <div className="column">
                    <Bgcol />
                </div>
                <div className="column">
                    <Bgcol />
                </div>
            </div>
            <h1 className="title is-4">Trending <a href=""> <small className="is-pulled-right is-link">See More</small></a></h1>
            <div className="columns">
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
            </div>
        </section>
    )
}