module.exports = function makeCallMeAnimalNames(cb) {
  return animalNames => cb(animalNames);
};
