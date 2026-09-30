import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');
  console.log('Cleaning existing data...');
  await prisma.user.deleteMany();
  await prisma.tenant.deleteMany();
  console.log('Users deleted');
  console.log('Tenants deleted');

  console.log('Creating tenants...');
  await prisma.tenant.create({ data: { name: 'Tech Solutions' } });
  await prisma.tenant.create({ data: { name: 'Marketing Pro' } });
  await prisma.tenant.create({ data: { name: 'Consulting Exp' } });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });