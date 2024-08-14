import './Skills.scss';

export const Skills = ({title, skills}) => {
    return (
        <div className="skills-container">
            <h2 className="skills-title">{title}</h2>
            <div className="skills-grid">
                {
                    skills.map((skill) => (
                        <div key={skill.name} className="skill-card">
                            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon"/>
                            <p className="skill-name">{skill.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

