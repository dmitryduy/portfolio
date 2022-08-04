
const objectCn = (obj: {[key: string]: boolean}): string => {
  const classes = [];
  for (let item in obj) {
    if (obj.hasOwnProperty(item) && obj[item]) {
      classes.push(item);
    }
  }

  return classes.join(' ');
}

const cn = (...obj: [{[key: string]: boolean}] | string[]) => {
  const classes: string[] = [];

  for (let item of obj) {
    if (typeof item === 'string') {
      classes.push(item);
    }
    if (typeof item === 'object') {
      classes.push(objectCn(item));
    }
  }


  return classes.join(' ');
}

export default cn;