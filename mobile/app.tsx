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
