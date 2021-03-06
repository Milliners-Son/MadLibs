const ac2o = require("alternating-case-to-object");
const { replaceEl, getLongStateName } = require("./_utils");


//Replaces a single element on the page with a span containing the target word
const replaceSingleWord = (target, word) => {
  try {
    let el = replaceEl(target, "span", 'madlib-word');
    el.innerHTML = word;
  } catch (e) {
    console.error(e);
  }
};

//Get the word from the MadLibs option according to the anchor options
const getNestedWord = (options, data) => {
  let { state, rank, value, type } = options;
  let { array } = data;
  let word;

  //Finde the condition to fetch (state,rank,type)
  if (state) {
    row = array.filter(d => d.state == state.toUpperCase())[0];
  } else if (rank) {
    let index = rank - 1;
    row = array[index];
  } else if (type) {
    row = array.filter(d => d.type.toLowerCase() == type.toLowerCase())[0];
  }

  //Fetch the word from the array
  word = row[value];
  if (value == "state") word = getLongStateName(word);

  return word;
};

const getAnchorOptions = (target)=>{

  if(target.title) return target.title;

  if(target.getAttribute('href')){
    let href = target.getAttribute('href');
    if(href.indexOf('#')<0 || href.length<=1) return false;
    return href.substring(1);
  }
  return false;
}

//Constructor
const MadLibs = options => {
  //Get words on page
  let targets = [...document.querySelectorAll('a[title^="WORD"], a[href^="#WORD"]')];

  targets.forEach(target => {
   
    try {
    
      let wordHash = getAnchorOptions(target);

      if(!wordHash) throw 'No valid hash found';

      let wordOpt = ac2o(wordHash);
      let wordData = options[wordOpt.word];
      let word;

      switch (wordData.type) {
        case "single":
          word = wordData.word;
          break;

        case "variable":
          word = wordData[wordOpt.value];
          break;

        case "nested":
          word = getNestedWord(wordOpt, wordData);
          break;
      }
      replaceSingleWord(target, word);
    } catch (err) {
      console.error('[MadLibs]',target,err);
      //Remove the el anyway;
      replaceEl(target, "span");
    }
  });
};

module.exports = MadLibs;
