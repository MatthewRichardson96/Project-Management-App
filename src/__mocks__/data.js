import { faker } from "@faker-js/faker";

export default dashboardPopulated = () => {
  return {
    tasks: {
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
    },
    selectedTask: true,
  };
};
