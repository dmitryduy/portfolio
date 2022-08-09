import React, { FC } from 'react';
import styles from "./SkillList.module.scss";

interface ISkillListProps {
  skills: string[]
}

const SkillList: FC<ISkillListProps> = ({skills}) => {
  return (
    <ul className={styles.list}>
      {skills.map(skill => <li className={styles.listItem} key={skill}>{skill}</li>)}
    </ul>
  );
};

export default SkillList;
