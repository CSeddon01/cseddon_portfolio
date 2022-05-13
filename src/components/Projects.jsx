import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';


export default function Projects(props) {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click Here!
        </Tooltip>
    );
    return (
        <>
            <div className="portfolio-main-card m-3 p-3" style={{ width: "16rem", color: "#b9b9b9" }} id={props.id}>
                <a data-click={props.name} href={props.link} target="_blank" rel="noopener noreferrer">
                    <img src={props.img} className="card-img-top" alt={props.name}></img>
                </a>
                <div className="card-title mt-3 mb-0" style={{ color: "#var(--primary)" }}>
                    <h5>{props.name}</h5>
                </div>
                <hr />
                <div className="card-body mt-0 pt-0">
                    <p className="card-text mb-3" style={{ color: "#b9b9b9" }}>{props.description}</p>
                    <p className="card-text" style={{ color: "#b9b9b9" }}><strong>Technologies: </strong>{props.tech}</p>
                </div>
                <div className="btn-group-portfolio">
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                            data-click={props.name}
                            href={props.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="btn btn-info" variant="success">View Repo</Button>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                            data-click={props.name}
                            href={props.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="btn btn-info" variant="success">View Site</Button>
                        </OverlayTrigger>
                </div>
            </div>
        </>
    );
}
