import React from 'react';

import styles from './Skills.module.scss'
import SkillCircle from "../SkillCircle/SkillCircle";
import Coder from "../Coder/Coder";

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
  W): [boolean, Dispatch<boolean>, string] => {
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
  return (
    <section className={styles.skillsContainer}>
      <div className='code-background'>
        <Coder code={useThrottleStr} rotation={30}/>
        <Coder code={usePopupStr} rotation={30}/>
      </div>
      <SkillCircle/>
    </section>
  );
};

export default SkillsSection;
