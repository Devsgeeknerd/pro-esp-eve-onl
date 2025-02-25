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
  useEffect(() => {
    // Adiciona um listener para quando um notificação for recebida.
    getNotificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      // Exibe a notificação no console.
      console.log(notification);
    });

    // Adiciona um listener para quando o usuário interagir com a notificação.
    responseNotificationListener.current = Notifications.addNotificationReceivedListener((response) => {
      // Exibe a resposta no console.
      console.log(response);
    });

    // Função de limpeza para remover os listeners quando o componente for desmontado.
    return () => {
      if (
        // Se o listener de notificação e o de notificação de resposta estiver presente.
        getNotificationListener.current && responseNotificationListener.current
      ) {
        // Remove os listeners de notificações.
        Notifications.removeNotificationSubscription(
          getNotificationListener.current
        );
        Notifications.removeNotificationSubscription(
          responseNotificationListener.current
        );
      }
    };
    // Lista vazia para rodar esse efeito apenas uma vez, quando o componente for montado.
  }, []);

  // Carrega as fontes personalizadas.
  const [fontsLoaded] = useFonts({
    // Fonte normal.
    Inter_400Regular,
    // Fonte semibold.
    Inter_600SemiBold,
    // Fonte bold.
    Inter_700Bold,
    // Fonte black.
    Inter_900Black,
  });

  // Renderiza o componente principal da aplicação.
  return (
    // Componente de fundo.
    <Background>
      <StatusBar
        // Estilo da barra de status (cor texto).
        barStyle="light-content"
        // Cor do fundo da barra de status (transparente).
        backgroundColor="transparent"
        // Faz com que a barra de status seja translúcida.
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}

export default App();
