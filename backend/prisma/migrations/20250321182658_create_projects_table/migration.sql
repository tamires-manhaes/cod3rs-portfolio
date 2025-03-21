-- CreateTable
CREATE TABLE "projetos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT[],
    "level" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "repository" TEXT NOT NULL,

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id")
);
