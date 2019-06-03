import {prisma, AuthorizationCreateInput} from './generated/prisma-client';
import * as faker from 'faker';

async function main() {
  await prisma.createUser({
    email: 'nsmall@devoted.com',
    name: 'Nick Small',
  });

  const adjudicator = await prisma.createUser({
    email: faker.internet.email(),
    name: 'Devoted Adjudicator',
  });

  const providers = [];
  for (let i = 0; i < 80; i++) {
    const provider = await prisma.createProvider({
      name: faker.name.findName(),
      status: faker.random.arrayElement(['PRACTICING', 'ACTIVE', 'RETIRED', 'DECEASED']),
    });
    providers.push(provider);
  }

  const members = [];
  for (let i = 0; i < 135; i++) {
    const member = await prisma.createMember({
      name: faker.name.findName(),
      birthDate: faker.date.past(),
      deathDate: faker.random.boolean() ? faker.date.recent() : null,
      status: faker.random.arrayElement(['ENROLLED', 'NEW', 'PENDING', 'DISENROLLED']),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      addresses: {
        create: {
          type: faker.random.arrayElement(['PRIMARY', 'MAIL', 'PERMANENT']),
          effectiveStartDate: faker.date.past(),
          effectiveEndDate: faker.random.boolean() ? faker.date.soon() : null,
          address1: faker.address.streetAddress(),
          address2: faker.address.secondaryAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          country: 'US',
        }
      },
      pcp: faker.random.boolean() ? {connect: {id: faker.random.arrayElement(providers).id}} : null,
    });
    members.push(member);
  }

  const diagnoses = [];
  for (let i = 0; i < 10; i++) {
    const diag = await prisma.createDiagnosisCode({
      code: `Z${faker.random.number({min: 101, max: 999})}`,
      name: faker.name.jobTitle(),
      description: faker.name.jobDescriptor(),
    });
    diagnoses.push(diag);
  }

  for (let i = 0; i < 32; i++) {
    const auth: AuthorizationCreateInput = {
      type: faker.random.arrayElement(['INPATIENT', 'OUTPATIENT', 'REFERRAL']),
      status: faker.random.arrayElement(['PENDING', 'APPROVED', 'REQUESTED_MORE_INFORMATION', 'DENIED']),
      member: {connect: {id: faker.random.arrayElement(members).id}},
      servicingProvider: {connect: {id: faker.random.arrayElement(providers).id}},
    };

    if (auth.type !== 'INPATIENT') {
      auth.requestingProvider = {connect: {id: faker.random.arrayElement(providers).id}};
    }

    const diags = [];
    for (let j = 0; j <= faker.random.number(2); j++) {
      diags.push({id: faker.random.arrayElement(diagnoses).id});
    }
    auth.diagnoses = {connect: diags};

    if (faker.random.boolean()) {
      auth.decisions = {
        create: {
          decidingUser: {connect: {id: adjudicator.id}},
          status: auth.status,
          notes: faker.lorem.paragraph(),
        }
      }
    }

    await prisma.createAuthorization(auth);
  }
}

main().catch(e => console.error(e));
