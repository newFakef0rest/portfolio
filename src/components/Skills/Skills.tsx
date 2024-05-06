import styles from './Skills.module.scss';
import Skill from '../../images/skills.svg';
import { Title } from '../Title/Title';
import { SkillCard } from '../Skill-card/SkillCard';

export const Skills = () => {
    const webDev = ['HTML', 'CSS', 'SCSS', 'Webpack', 'Babel', 'TypeScript', 'Material UI', 'Bootstrap', 'Axios']
    const frameworks = ['React'];
    const stores = ['MobX', 'Redux Toolkits']
    const programmingLanguages = ['JavaScript', 'Python', 'TypeScript']
    const versionControl = ['GitHub']
    return (
        <div id='skills' className={styles.skills}>
            <div className="container">
                <div className="row">
                    <div className="col__12">
                        <div className="skills__title">
                            <Title title="Skills" image={Skill} />
                        </div>
                        <ul className="skills__items">
                            <SkillCard title="Web Development" skills={webDev}/>
                            <SkillCard title="Frameworks" skills={frameworks}/>
                            <SkillCard title="Store Management" skills={stores}/>
                            <SkillCard title="Programming Languages" skills={programmingLanguages} />
                            <SkillCard title="Version Control" skills={versionControl}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}