import * as fs from 'fs';
import * as path from 'path';
import { PrismaClient } from '@prisma/client';
import { parse } from 'csv-parse/sync';

const prisma = new PrismaClient();

async function seedMissions() {
  await prisma.mission.createMany({
    data: [
      {
        missionName: 'Use a personal water bottle',
        missionIcon:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200972/mission-icon-tumbler_pklfpd.png',
        thumbnail:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200956/mission-thumbnail-tunbler_dbreh2.png',
        description:
          'Bring your own water bottle instead of disposable plastic.',
        question1:
          'Did you bring a reusable water bottle for your trip instead of buying a plastic one?',
        question2:
          'Did you actively look for refill stations during your trip?',
        question3:
          'Did you save money and reduce waste by refilling your water bottle instead of purchasing drinks?',
      },
      {
        missionName: 'Carry a reusable shopping bag',
        missionIcon:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200967/mission-icon-bag_b9zlgl.png',
        thumbnail:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200952/mission-thumbnail-bag_izqj6b.png',
        description:
          'Use a reusable bag instead of plastic bags when shopping.',
        question1:
          'Did you prepare and pack a reusable bag before leaving for your trip?',
        question2:
          'Did you refuse plastic bags at stores and use your own bag instead?',
        question3:
          'Did you find your reusable bag convenient for carrying multiple items?',
      },
      {
        missionName: 'Turn off unnecessary electricity',
        missionIcon:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200973/mission-icon-turned-off_cfz3mt.png',
        thumbnail:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200957/mission-thumbnail-turned-off_dpcgaf.png',
        description: 'Turn off lights and electronics when you leave the room.',
        question1:
          'Did you check and turn off all lights before leaving your accommodation?',
        question2: 'Did you unplug chargers or devices that were not in use?',
        question3:
          'Did you ensure air conditioners, fans, or heaters were turned off when not needed?',
      },
      {
        missionName: 'Don’t waste food',
        missionIcon:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200967/mission-icon-done_re6htn.png',
        thumbnail:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200953/mission-thumbnail-done_gly5nu.png',
        description: 'Order only what you need and avoid leaving leftovers.',
        question1: 'Did you order smaller portions if you weren’t very hungry?',
        question2:
          'Did you bring reusable containers for leftovers from restaurants?',
        question3:
          'Did you share surplus food with your travel group or others to prevent waste?',
      },
      {
        missionName: 'Travel on foot or by bicycle',
        missionIcon:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200969/mission-icon-foot_l0msek.png',
        thumbnail:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200953/mission-thumbnail-foot_tfym0x.png',
        description: 'Walk or bike whenever possible.',
        question1:
          'Did you plan your route to make walking or cycling more practical?',
        question2:
          'Did you discover interesting local spots or scenery by walking or cycling?',
        question3:
          'Did you avoid renting or using vehicles with high carbon emissions for short distances?',
      },
      {
        missionName: 'Pick up small litter',
        missionIcon:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200970/mission-icon-pick-up_jbl1ab.png',
        thumbnail:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200956/mission-thumbnail-pick-up_vmrywr.png',
        description:
          'Collect small pieces of trash while walking or sightseeing.',
        question1:
          'Did you bring a small bag or gloves to safely pick up litter?',
        question2:
          'Did you find and dispose of litter in appropriate recycling or trash bins?',
        question3:
          'Did you feel a sense of accomplishment by contributing to cleaner public spaces?',
      },
      {
        missionName: 'Reuse hotel towels',
        missionIcon:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200971/mission-icon-towel_nskaol.png',
        thumbnail:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200955/mission-thumbnail-towel_x5kbug.png',
        description: 'Avoid having your towels laundered every day.',
        question1:
          'Did you clearly communicate with hotel staff about reusing your towels?',
        question2:
          'Did you hang up your towel properly to indicate it doesn’t need replacing?',
        question3:
          'Did you extend this practice to other items like sheets, if possible?',
      },
      {
        missionName: 'Buy eco-friendly souvenirs',
        missionIcon:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200971/mission-icon-purchase_n7sfp3.png',
        thumbnail:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200955/mission-thumbnail-purchase_h4dw1r.png',
        description:
          'Purchase environmentally friendly products at the destination.',
        question1:
          'Did you ask about the origins of souvenirs to ensure they were sustainably made?',
        question2:
          'Did you choose products without unnecessary plastic or harmful packaging?',
        question3:
          'Did you support small, local businesses by purchasing handmade or eco-friendly items?',
      },
      {
        missionName: 'Go paperless',
        missionIcon:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200969/mission-icon-paperless_rswim4.png',
        thumbnail:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749200953/mission-thumbnail-paperless_dxpb59.png',
        description:
          'Use electronic tickets and documents instead of printing them.',
        question1:
          'Did you use digital tickets for your flights, trains, or buses instead of printing them?',
        question2:
          'Did you store and access your travel itinerary and important documents on your electronic device?',
        question3:
          'Did you avoid requesting printed receipts or brochures when digital options were available?',
      },
    ],
  });
}

async function seedAnimals() {
  await prisma.animal.createMany({
    data: [
      {
        aniImage:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749189165/vu-content-polar_bear_rgt0wn.png',
        aniName: 'Polar Bear',
        aniLevel: 'VU',
      },
      {
        aniImage:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749189165/vu-content-giant_panda_xxz1bu.png',
        aniName: 'Giant Panda',
        aniLevel: 'VU',
      },
      {
        aniImage:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749189165/vu-content-koala_g1l5kl.png',
        aniName: 'Koala',
        aniLevel: 'VU',
      },
      {
        aniImage:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749189164/en-content-weasel_leukr0.png',
        aniName: 'Weasel',
        aniLevel: 'EN',
      },
      {
        aniImage:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749189164/en-content-sumatra_elephant_hc08tg.png',
        aniName: 'Sumatra Elephant',
        aniLevel: 'EN',
      },
      {
        aniImage:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749189164/en-content-okapi_et7trb.png',
        aniName: 'Okapi',
        aniLevel: 'EN',
      },
      {
        aniImage:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749189164/ce-content-rhino_ejx0mc.png',
        aniName: 'Rhino',
        aniLevel: 'CE',
      },
      {
        aniImage:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749189164/ce-content-seal_wbcbws.png',
        aniName: 'Seal',
        aniLevel: 'CE',
      },
      {
        aniImage:
          'https://res.cloudinary.com/daaoim1wt/image/upload/v1749189164/ce-content-brown_bear_bu94yr.png',
        aniName: 'Brown Bear',
        aniLevel: 'CE',
      },
    ],
  });
}

async function seedAirports() {
  const filePath = path.join(__dirname, 'data', 'airports.csv');
  const fileContent = fs.readFileSync(filePath);

  type RecodeData = {
    airport_name: string;
    country: string;
    city: string;
    code: string;
  };

  // 타입 단언 주의
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  }) as RecodeData[];

  const airportData = records.map((row) => ({
    airportName: row.airport_name,
    country: row.country,
    city: row.city,
    code: row.code,
  }));

  await prisma.airport.createMany({
    data: airportData,
    skipDuplicates: true, // 데이터 중복 방지
  });
}

async function main() {
  console.log('Seeding data...');
  await seedMissions();
  console.log('Mission 완료');
  await seedAnimals();
  console.log('Animal 완료');
  await seedAirports();
  console.log('Airport 완료');
  console.log('전체 Seed 완료!');
}

main()
  .catch((e) => {
    console.error('Seed 실패:', e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
