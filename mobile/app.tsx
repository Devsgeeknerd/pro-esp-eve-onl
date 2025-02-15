// Importa os hooks e módulos necessários do React e outras bibliotecas.
// useEffect para gerenciar efeitos colaterais e useRef para persistir valores entre renderizações.
import { useEffect, useRef } from "react";

// StatusBar para controlar a barra de status do dispositivo.
import { StatusBar } from "react-native";

// Biblioteca para usar fontes do Google Fonts no Expo.
import {
  // Hook para carregar fontes personalizadas.
  useFonts,
  // Fontes específicas que estão sendo carregadas.
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

// Tipo para gerenciar a assinatura de notificações.
import { Subscription } from "expo-modules-core";

// Para trabalhar com notificações push no Expo.
import * as Notifications from "expo-notifications";

// Importa a definição das rotas da aplicação.
import { Routes } from "./src/routes";

// Componente de fundo da aplicação.
import { Background } from "./src/components/Background";

// Configurações de notificação.
import "./src/service/notificationConfigs";

// Função para pegar o token de notificações push.
import { getPushNotificationToken } from "./src/service/getPushNotificationToken";

function App() {
  // Definindo refs para armazenar as assinaturas das notificações.
  // Para ouvir notificações recebidas.
  const getNotificationListener = useRef<Subscription>();

  // Para ouvir respostas de notificações (quando o usuário interage).
  const responseNotificationListener = useRef<Subscription>();

  // Efeito para pegar o token de notificação quando o componente for montado.
  useEffect(() => {
    // Chama a função que pega o token para enviar notificações.
    getNotificationListener();

    // A lista vazia significa que essa função será chamada apenas uma vez, quando o componente for montado.
  }, []);

  // Efeito para adicionar listeners para as nominações.
  useEffect(() => { });
}

export default App();
