const { PrismaClient } = require("./src/generated/prisma");
const prisma = new PrismaClient();
const app = require("./src/app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Dictionary API online :) \nlistening on ${port}`);
});

async function startSever() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected!");
  } catch (error) {
    console.error("❌ Database connection failed:", err);
  }
}

startSever();startSever

