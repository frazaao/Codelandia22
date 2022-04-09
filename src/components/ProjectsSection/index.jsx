import { Project } from '../Project';
import styles from './styles.module.css';
import { projects } from '../../assets/projects.json'

export function ProjectsSection(){
    return(
        <main className={styles.projectsContainer}>
            <div className={styles.projectsContent}>
                {
                    projects.map( (item) => {
                        return(
                            <Project 
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                github={item.github}
                                demo={item.demo}
                            />
                        )
                    } )
                }
            </div>
        </main>
    )
}