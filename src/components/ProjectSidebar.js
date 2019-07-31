import React from 'react';

const ProjectSidebar = ({changeIndex, projectInfo}) => {
    return(
        <aside className = "projects-sidebar">
            {
                projectInfo.map(({title}, i)=>{
                    return <a href={`#project-${i}`} key={i}>{title}</a>
                })
            }
        </aside>
    );
}

export default ProjectSidebar;

// onClick = {() => changeIndex(i)}