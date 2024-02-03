import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // adds user to data base 
  // const apartment = await prisma.apartment.create({
  //   data: {
  //     name: 'Terrace View',
  //     location: '413 Hunt Club Rd, Blacksburg, VA 24060',
  //   },
  // })
  // console.log(apartment)

  //gets all of the current users
  // const apartments = await prisma.apartment.findMany() 
  // console.log(apartments)


  //creates both apartment and post at once
  // const apartment = await prisma.apartment.create({
  //   data: {
  //     name: 'Vue',
  //     location: '1902 Research Center Dr, Blacksburg, VA',
  //     posts: {
  //       create: {
  //         title: 'Good Apartment',
  //         user: "lovingthevue",
  //         overall: 4.5,
  //         content: "Liked living there",
  //         published: true
  //       },
  //     },
  //   },
  // })
  // console.log(apartment)

  //gets users and posts 
  const usersWithPosts = await prisma.apartment.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })