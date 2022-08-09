import React from 'react';

import styles from './Skills.module.scss'
import SkillCircle from "../SkillCircle/SkillCircle";
import useMatchMedia from "../../hooks/useMatchMedia";
import Title from "../../ui/Title/Title";
import Section from "../Section/Section";
import { Page } from "../../data";

const useThrottleStr = `const useThrottle = < T >(
 defaultValue: T,
 timeout: number
 ): [T, (newValue: T) => void] => {
  const[finish, setFinish] = useState(true);
  const [value, setValue] = useState< T />(defaultValue);

  const throttleFunction = (newValue: T) => {
    if (!finish) {
      return;
    }

    setValue(newValue);
    setFinish(false);

    setTimeout(() => setFinish(true), timeout);
  }

  return [value, throttleFunction];
}`;

const usePopupStr = `const usePopup = (
eventName: typeOfSettings,
 openCb?: () => void,
  closeCb?: () => void
  W): [boolean, Dispatch< boolean  >, string] => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.emitter.on(\`\${eventName}-popup:open\`, () => {
            openCb && openCb();
            setActive(true);
        });
        window.emitter.on(\`\${eventName}-popup:hide\`, () => {
            closeCb && closeCb();
            setActive(false)
        });
        return () => {
            window.emitter.un(\`\${eventName}-popup:open\`);
            window.emitter.un(\`\${eventName}-popup:hide\`);
        };
    }, []);

    return [active, setActive, \`\${eventName}-popup:hide\`];
}`;

const SkillsSection = () => {

  const isPhone = useMatchMedia('max-width: 1000px');

  return (
    <Section sectionName={Page.SKILLS} className={styles.skillsContainer}>
      <Title title='Skills'/>
      {!isPhone && <SkillCircle/>}
      <div/>
    </Section>
  );
};

export default SkillsSection;
