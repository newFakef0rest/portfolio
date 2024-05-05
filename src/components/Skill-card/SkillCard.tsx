import styles from './SkillCard.module.scss';

type SkillProps = {
    title: string,
    skills: string[]
}

export const SkillCard = ({title, skills} : SkillProps) => {
    return (
        <li className={styles.skill}>
            <div className={styles.skill__title}>
                <h4>
                    {title}
                </h4>
            </div>
            <div className={styles.skill__box}>
                {skills.map(skill => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>
        </li>
    )
}