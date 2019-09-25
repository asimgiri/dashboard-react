import React from 'react';

export default function Card() {
    return (
        <div className="card has-radius">
            <div className="card-image">
                <figure className="image">
                    <img src="https://picsum.photos/1280/1000" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                </div>
                <ul>
                    <li><span className="tag is-primary">new</span></li>
                    <li><span className="tag is-danger">hot</span></li>
                </ul>
            </div>
        </div>
    )
}