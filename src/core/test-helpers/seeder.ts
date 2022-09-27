// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { PrismaClient, Prisma } from "@prisma/client";
import fs from "fs";
import ProgressBar from "progress";
import pAll from "p-all";
import UserGenerator from "../../nouns/User/resolvers/test-helpers/generator";
import { init, printTrace } from "./mockerInit";

const seed = 123;
const startTime = 0;
export const initializers = init({ seed, startTime });

const prisma = new PrismaClient();

export default async function main({
  count,
  concurrency = 10,
  maxDepth,
  relCount,
  saveData,
  showTrace,
}: {
  count: number;
  concurrency?: number;
  maxDepth: number;
  relCount: number;
  saveData: boolean;
  showTrace: boolean;
}) {
  fs.mkdirSync(".tmp", { recursive: true });
  console.log("Generating seed data:\n");
  {
    const trace: [] = [];
    let userData: Prisma.UserUncheckedCreateInput[] = [];
    try {
      userData = (await UserGenerator<Prisma.UserUncheckedCreateInput>({
        count,
        relCount,
        initializers,
        mode: "create",
        depth: maxDepth,
        trace,
      })) as Array<Prisma.UserUncheckedCreateInput>;
      if (saveData || process.env.NV_SAVE_DATA) {
        fs.writeFileSync(
          ".tmp/User.seed-data.json",
          JSON.stringify(userData, null, 2)
        );
        console.log("  seed-data written to .tmp/User.seed-data.json");
      }
      if (showTrace) {
        fs.writeFileSync(
          ".tmp/User.seed-trace.yaml",
          printTrace(trace, `User (${userData.length})`)
        );
        console.log("  seed-trace written to .tmp/User.seed-trace.yaml");
      }
      const bar = new ProgressBar(
        `  seeding User [:bar] :current/:total (:rate rps) :elapsed secs`,
        { total: count, curr: 0, width: 20 }
      );
      if (userData) {
        await pAll(
          userData?.map(
            (data) => () => prisma.user.create({ data }).then(() => bar.tick())
          ),
          { concurrency }
        );
      }
    } catch (err) {
      fs.writeFileSync(
        ".tmp/User.seed-trace.yaml",
        printTrace(trace, `User (${userData.length})`)
      );
      fs.writeFileSync(
        ".tmp/User.seed-data.json",
        JSON.stringify(userData || [], null, 2)
      );

      if (
        (err as unknown as any).message.match(
          /.*Timed out during query execution.*/
        )
      ) {
        throw new Error(
          "Connection timed out. Reduce count or increase timeout (https://github.com/prisma/prisma/issues/2955) and retry "
        );
      }
      throw err;
    } finally {
      if (showTrace || saveData || process.env.NV_SAVE_DATA) {
        console.log("");
      }
    }
  }

  await prisma.$disconnect();
}
