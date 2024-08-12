import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

const NigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta',
  'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
  'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba',
  'Yobe', 'Zamfara', 'FCT'
];

export const users = [...Array(24)].map(() => ({
  id: faker.string.uuid(),
  avatarUrl: faker.image.avatar(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  city: faker.address.city(),
  state: sample(NigerianStates),
  number: faker.phone.number(),
  status: sample(['Active', 'Pending']),
  created: faker.date.past().toLocaleString(), // Includes both date and time
}));
