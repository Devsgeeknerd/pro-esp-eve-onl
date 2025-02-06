// importa o módulo express para criar um servidor web.
import express from "express";

// Importa o módulo cors para permitir requisições de diferentes origens.
import cors from "cors";

// Importa o PrismaClient para interagir com o banco de dados através do Prisma ORM.
import { PrismaClient } from "@prisma/client";

// Funções utilitárias para converter horários.
import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hour-string";

// Cria uma instância do express para configurar o servidor.
const app = express();

// Usamos o middleware do express para interpretar JSON no corpo das requisições.
app.use(express.json());

// Ativa o CORS para permitir requisições de diferentes origens.
app.use(cors());

// Cria uma instância do PrismaClient, que vai nos permitir fazer consultas ao banco de dados.
const prisma = new PrismaClient({
  // Faz log de todas as queries que forem executadas.
  log: ["query"],
});

// Rota GET para listar todos os jogos no banco de dados.
app.get("/games", async (request, response) => {
  // Envia uma consulta ao prisma para buscar todos os jogos e contar quantos anúncios tem.
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          // Conta o número de anúncios para cada jogo.
          ads: true,
        },
      },
    },
  });

  // Retorna a lista de jogos em formato JSON.
  return response.json(games);
});
