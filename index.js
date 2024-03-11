// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

const distanceFromHqInFeet = (street) => {
  const blocks = distanceFromHqInBlocks(street);
  return blocks * 264;
};

const distanceTravelledInFeet = (start, destination) => {
  const blocks = Math.abs(destination - start);
  return blocks * 264;
};
const calculatesFarePrice = (start, destination) => {
  const feet = distanceTravelledInFeet(start, destination);

  if (feet < 400) {
    return 0;
  }

  if (feet < 2000) {
    return (feet - 400) * 0.02;
  }

  if (feet < 2500) {
    return 25;
  }
  return "cannot travel that far";
};
