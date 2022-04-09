import styles from './styles.module.css';
import projectImage from '../../assets/images/project.svg'

export function Project(props){
    return(
        <div className={styles.projectCard}>
            <div className={styles.projectTopSide}>
                <div className={styles.imageBackground}>
                    <img src={projectImage} alt="Imagem do projeto" />
                </div>
            </div>
            <div className={styles.projectBottomSide}>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className={styles.bottomButtons}>
                    <a href={props.demo}>Demo</a>
                    <a href={props.github}>Github</a>
                </div>
            </div>
        </div>
    )
}