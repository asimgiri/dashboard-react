import React from 'react';

export default function User() {
    return (
        <div className="user">
                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                <h1 className="title is-5 has-text-primary">Walter Smith</h1>
                <h2 className="subtitle is-7">@walter_smith09</h2>
                <ul>
                    <li><i className="fab fa-facebook has-text-primary"></i></li>
                    <li><i className="fab fa-twitter has-text-primary"></i></li>
                    <li><i className="fab fa-linkedin has-text-primary"></i></li>
                </ul>
        </div>
    )
}