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

// Rota POST para criar um novo anúncio associado a um jogo.
app.post("/games/:id/ads", async (request, response) => {
  // Pega o ID do jogo a partir da  URL.
  const gameId = request.params.id;

  // Extrai os dados enviados no corpo da requisição;
  const body: any = request.body;

  // Cria um novo anúncio no banco de dados associado ao jogo especificado.
  const ad = await prisma.ad.create({
    data: {
      // Associa o anúncio ao jogo pelo ID.
      gameId,
      // Nome do jogador.
      name: body.name,
      // Anos jogando.
      yearsPlaying: body.yearsPlaying,
      // Discord do jogador.
      discord: body.discord,
      // Dias da semana como string separada por virgula.
      weekDays: body.weekDays.join(","),
      // Converte a hora de inicio para minutos.
      hourStart: convertHourStringToMinutes(body.hourStart),
      // Converte a hora de fim para minutos.
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      // Se o jogador vai usar canal de voz.
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  // Retorna a resposta com o anúncio criado, com status 201 (criado).
  return response.status(201).json(ad);
});
