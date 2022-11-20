/*
  Warnings:

  - You are about to drop the column `drivers_id` on the `Ride` table. All the data in the column will be lost.
  - You are about to drop the column `users_id` on the `Ride` table. All the data in the column will be lost.
  - Added the required column `driver_id` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Ride` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ride" DROP CONSTRAINT "Ride_drivers_id_fkey";

-- DropForeignKey
ALTER TABLE "Ride" DROP CONSTRAINT "Ride_users_id_fkey";

-- AlterTable
ALTER TABLE "Ride" DROP COLUMN "drivers_id",
DROP COLUMN "users_id",
ADD COLUMN     "driver_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "Drivers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
