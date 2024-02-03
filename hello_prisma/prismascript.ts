import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // adds user to data base 
    // const user = await prisma.user.create({
    //     data: {
    //       name: 'Alice',
    //       email: 'alice@prisma.io',
    //     },
    //   })
    //   console.log(user)

    //gets all of the current users
    const users = await prisma.user.findMany() 
    console.log(users)


    //creates both user and post at once
    // const user = await prisma.user.create({
    //     data: {
    //       name: 'Bob',
    //       email: 'bob@prisma.io',
    //       posts: {
    //         create: {
    //           title: 'Hello World',
    //         },
    //       },
    //     },
    //   })
    //   console.log(user)

    //gets users and posts 
    // const usersWithPosts = await prisma.user.findMany({
    //     include: {
    //       posts: true,
    //     },
    //   })
    //   console.dir(usersWithPosts, { depth: null })
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