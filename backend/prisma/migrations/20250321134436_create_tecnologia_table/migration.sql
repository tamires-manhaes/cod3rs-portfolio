-- CreateTable
CREATE TABLE "tecnologias" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "principal" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tecnologias_pkey" PRIMARY KEY ("id")
);
