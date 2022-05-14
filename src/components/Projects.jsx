import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// Uses properties to link slides and display them.  This contains an Overlay Trigger, which is a tool tip next to the button" 
export default function Projects(props) {
    const renderTooltip = (props) => (
        <Tooltip id='button-tooltip' {...props}>
            Click Here!
        </Tooltip>
    );
    return (
        <>
            <container className='portfolio-main-card m-3 p-3 text-info' style={{ width: '16rem', color: '#1371ac' }} id={props.id}>
                <a data-click={props.name} href={props.link} target='_blank' rel='noopener noreferrer'>
                    <img src={props.img} className='card-img-top' alt={props.name}></img>
                </a>
                <div className='card-title mt-3 mb-0 text-dark'>
                    <h5>{props.name}</h5>
                </div>
                <hr />
                <container className='card-body mt-0 pt-0'>
                    <p className='card-text mb-3 text-dark'>{props.description}</p>
                    <p className='card-text text-dark'><strong>Technologies: </strong>{props.tech}</p>
                </container>
                <div className='btn-group-portfolio'>
                    <OverlayTrigger
                        placement='right'
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                        data-click={props.name}
                    >
                        <a data-click={props.name} href={props.repo} className='btn btn-info m-1' target='_blank' rel='noopener noreferrer'>Repo</a>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement='right'
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                        data-click={props.name}
                        href={props.repo}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <a data-click={props.name} href={props.link} className='btn btn-info m-1' target='_blank' rel='noopener noreferrer'>Website</a>
                    </OverlayTrigger>
                </div>
            </container>
        </>
    );
}
