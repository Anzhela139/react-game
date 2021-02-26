const get = (name, subst = null) => JSON.parse(window.localStorage.getItem(name) || subst);
const set =  (name, value) => window.localStorage.setItem(name, JSON.stringify(value));
const randomArr = (arr) => arr.slice(0).sort( (a,b)=> 0.5-Math.random()); 

export { get, set, randomArr };