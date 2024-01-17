import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

// モデル投入用のデータ定義
const mstFeatureTypeData: Prisma.MstFeatureTypeCreateManyInput[] = [
  {
    id: 1,
    name: 'point',
  },
  {
    id: 2,
    name: 'line',
  },
  {
    id: 3,
    name: 'polygon',
  },
];
const featureData: Prisma.FeatureCreateManyInput[] = [
  {
    id: 1,
    name: 'point1',
    featureTypeId: 1,
  },
  {
    id: 2,
    name: 'point2',
    featureTypeId: 1,
  },
  {
    id: 3,
    name: 'point3',
    featureTypeId: 1,
  },
  {
    id: 4,
    name: 'line1',
    featureTypeId: 2,
  },
  {
    id: 5,
    name: 'polygon1',
    featureTypeId: 3,
  },
];
const coordinateData: Prisma.CoordinateCreateManyInput[] = [
  {
    featureId: 1,
    lon: 1.0,
    lat: 2.0,
  },
];

// データ登録
const transfer = async () => {
  return Promise.all([
    await prisma.mstFeatureType.createMany({ data: mstFeatureTypeData }),
    await prisma.feature.createMany({ data: featureData }),
    await prisma.coordinate.createMany({ data: coordinateData }),
  ]);
};

// データ削除
const deleteData = async () => {
  await prisma.coordinate.deleteMany();
  await prisma.feature.deleteMany();
  await prisma.mstFeatureType.deleteMany();
};

// 定義されたデータを実際のモデルへ登録する処理
const main = async () => {
  console.log(`Start seeding ...`);

  await deleteData();
  await transfer();

  console.log(`Seeding finished.`);
};

// 処理開始
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
