import React from 'react';
import Project from "./project/Project";
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'


const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'ToDoList'} description={'WOWOWOWOWO'}/>
                    <Project title={'Social Network'} description={'WOWOWOWOOW'}/>
                    <Project title={'Counter'} description={'WWKWWOWOWOWOWO'}/>
                </div>

            </div>
        </div>
    );
};

export default Projects;