const replaceEl = (el,type,className)=>{
  let root = document.createElement(type);
  el.parentNode.insertBefore(root, el.nextSibling);
  el.parentNode.removeChild(el);
  if(className) root.className = className;
  return root;
}


const getLongStateName = (name)=>{
  let names = {
  'NSW': 'NSW',
  'VIC': 'Victoria',
  'QLD': 'Queensland',
  'SA': 'SA',
  'WA': 'WA',
  'TAS': 'Tasmania',
  'NT': 'NT',
  'ACT': 'ACT',
  }
  return names[name.toUpperCase()] ? names[name.toUpperCase()]:'';
}


module.exports = {
    replaceEl,
    getLongStateName
}

