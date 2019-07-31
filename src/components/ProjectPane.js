import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageSlider from './ImageSlider';


export default class ProjectPane extends Component {
    render() {
        let {title, images, description} = this.props.projectInfo;
        
        return (
            <section className = "project-pane">
                <h1>{title}</h1>

                <section className="project-content">
                    <ImageSlider images = { images }/>
                    <p className = "project-description">{description} </p>
                </section>
                {/* <h2>Link:</h2> */}
                {/* <a href=""></a> */}

            </section>
        );
    }
}

ProjectPane.propTypes = {
    projectInfo: PropTypes.shape({
        title: PropTypes.string,
        images: PropTypes.array,
        description: PropTypes.string
    }),
    projectIndex: PropTypes.number
}

