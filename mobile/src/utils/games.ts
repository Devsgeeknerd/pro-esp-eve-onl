// Definindo um array constante de jogos com informações sobre cada um.
export const GAMES = [
  // Primeiro objeto do array, representando o jogo "League of Legends".
  {
    // ID único para o jogo.
    id: "1",
    // Nome do jogo.
    name: "League of Legends",
    // Número de anúncios relacionados ao jogo (em formato string).
    ads: "4", 
    // Imagem de capa do jogo, importada de um arquivo local.
    cover: require("../assets/games/game-1.png"),
  },
  // Segundo objeto do array, representando o jogo "Dota 2".
  {
    // ID único para o jogo.
    id: "2", 
    // Nome do jogo.
    name: "Dota 2", 
    // Número de anúncios relacionados ao jogo.
    ads: "3", 
    // Imagem de capa do jogo.
    cover: require("../assets/games/game-2.png"), 
  },
  // Terceiro objeto do array, representando o jogo "CS-GO".
  {
    // ID único para o jogo.
    id: "3", 
    // Nome do jogo.
    name: "CS-GO", 
    // Número de anúncios relacionados ao jogo.
    ads: "3", 
    // Imagem de capa do jogo.
    cover: require("../assets/games/game-3.png"), 
  },
  // Quarto objeto do array, representando o jogo "Apex".
  {
    // ID único para o jogo.
    id: "4", 
    // Nome do jogo.
    name: "Apex", 
    // Número de anúncios relacionados ao jogo.
    ads: "2", 
    // Imagem de capa do jogo.
    cover: require("../assets/games/game-4.png"), 
  },
  // Quinto objeto do array, representando o jogo "Fortnite".
  {
    // ID único para o jogo.
    id: "5", 
    // Nome do jogo.
    name: "Fortnite", 
    // Número de anúncios relacionados ao jogo.
    ads: "5", 
    // Imagem de capa do jogo.
    cover: require("../assets/games/game-5.png"), 
  },
  // Sexto objeto do array, representando o jogo "World of Warcraft".
  {
    // ID único para o jogo.
    id: "6", 
    // Nome do jogo.
    name: "World of Warcraft", 
    // Número de anúncios relacionados ao jogo (não foi informado, está vazio).
    ads: "", 
    // Imagem de capa do jogo.
    cover: require("../assets/games/game-6.png"), 
  },
];
