/*
  Warnings:

  - Added the required column `distance_in_km` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drivers_id` to the `Ride` table without a default value. This is not possible if the table is not empty.
  - Added the required column `users_id` to the `Ride` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ride" ADD COLUMN     "distance_in_km" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "drivers_id" INTEGER NOT NULL,
ADD COLUMN     "users_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_drivers_id_fkey" FOREIGN KEY ("drivers_id") REFERENCES "Drivers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
