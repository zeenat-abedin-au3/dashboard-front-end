const createSteps = (num) => {
  const steps = [];

  for (let i = 0; i < num; i++) {
    steps.push({
      name: `Multiple Choice ${i + 1}`,
    });
  }
  return steps;
};

export const slugify = (string) => string.toLowerCase().split(" ").join("-");

export default createSteps;
