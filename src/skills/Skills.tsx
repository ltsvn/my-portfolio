import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'JS'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}/>
                    <Skill title={'React'} description={'Lorem Ipsum'}/>
                    <Skill title={'HTML'} description={'Lorem Ipsum'}/>
                    <Skill title={'CSS'} description={'Lorem Ipsum'}/>
                    <Skill title={'Redux'} description={'Lorem Ipsum'}/>
                    <Skill title={'TS'} description={'Lorem Ipsum'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;