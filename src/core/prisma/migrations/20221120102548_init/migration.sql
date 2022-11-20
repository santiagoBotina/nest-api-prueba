-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "wompi_payment_source_id" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Drivers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "vehicle_model" TEXT NOT NULL,

    CONSTRAINT "Drivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ride" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "init_lat" TEXT NOT NULL,
    "init_long" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "final_lat" TEXT NOT NULL,
    "final_long" TEXT NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("id")
);
