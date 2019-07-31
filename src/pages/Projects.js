import React, { Component } from 'react';
import ProjectPane from '../components/ProjectPane';
import ProjectSidebar from '../components/ProjectSidebar';
import projectPaneMeta from '../assets/json/project-pane-meta';


export default class Projects extends Component {
    state = {
        projectIndex : 0,
    }

    render() {
        let menuStat = this.props.menuToggled ? "project-transform" : "";
        return (
            <div className = {`project ${menuStat}`}>
                <ProjectSidebar projectInfo = {projectPaneMeta}/>
                <section className="projects-list">
                    {
                        projectPaneMeta.map((project, i)=>{
                            return(
                                <React.Fragment>
                                    <div id={`project-${i}`} className="spacer"/>
                                    <ProjectPane 
                                    projectInfo = {project} 
                                    projectIndex = {i} 
                                    key = {i}
                                    />
                                </React.Fragment>
                            );
                        })
                    }
                </section>
            </div>
        );
    }
}

