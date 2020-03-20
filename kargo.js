'use strict';
function main(s1, s2){
  if (s1.length !== s2.length) { return false; }
  s1 = s1.toString();
  s2 = s2.toString();
  const map1 = new Map();
  const map2 = new Map();

  return [...s1].every((s, i) => {
    if (!map1.has(s)) {
      map2.set(s2[i], s);
      map1.set(s, s2[i]);
    }
    return map1.get(s) === s2[i]  && map2.get(s2[i]) === s;
  });
};
const args = process.argv;
console.log(main(args[2], args[3]));

# kg_shwethacr_2020
