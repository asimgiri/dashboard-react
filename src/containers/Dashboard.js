import React, { Fragment } from 'react';
import VisualData from '../components/VisualData';

export default function Dashboard() {
    return (
        <section className="dashboard">
            <h1 className="title is-4">Spotlight <a href=""> <small className="is-pulled-right">See More</small></a></h1>
            <div className="columns">
                <div className="column">
                    <div className="bgcol">
                        <h1 className="title has-text-white is-5">Running your way to a healthier you</h1>
                        <h2 className="subtitle has-text-white is-6 has-text-justified">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda similique dolore vero dolorem minima voluptates obcaecati alias temporibus accusantium?</h2>
                    </div>
                </div>
                <div className="column">
                    <div className="bgcol">
                        <h1 className="title has-text-white is-5">Running your way to a healthier you</h1>
                        <h2 className="subtitle has-text-white is-6 has-text-justified">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda similique dolore vero dolorem minima voluptates obcaecati alias temporibus accusantium?</h2>
                    </div>
                </div>
                <div className="column">
                    <div className="bgcol">
                        <h1 className="title has-text-white is-5">Running your way to a healthier you</h1>
                        <h2 className="subtitle has-text-white is-6 has-text-justified">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda similique dolore vero dolorem minima voluptates obcaecati alias temporibus accusantium?</h2>
                    </div>
                </div>
            </div>

            <VisualData />

        </section>
    )
}