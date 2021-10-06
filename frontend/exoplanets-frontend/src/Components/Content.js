import React from 'react';

function Content(props) {

    const {planet, system, close} = props;

    return (
        <div>
            <div className="close" onClick={close}>
                &times;
            </div>
            <div className="header"><h1>{planet.hostname} System</h1></div>
            <div className="content">
                <ul>
                {
                    system.map((planet, index) => 
                        <li key={index}>{planet.pl_name}</li>
                    )
                }
                </ul>
            </div>
        </div>
    );

};

export default Content;