// O objeto THEME define as configurações de estilo (cores, fontes e tamanhos)
// que serão usadas em toda a aplicação para garantir consistência visual.

// O objeto COLORS armazena as cores utilizadas no tema, incluindo 
// cores para o fundo, texto, título, etc.
export const THEME = {
  COLORS: {
    // Cores de fundo, sendo o BACKGROUND_900 a cor mais escura e o BACKGROUND_800
    // uma cor um pouco mais clara. São usadas para definir o fundo de áreas
    // principais do aplicativo.
    
    // Cor de fundo mais escura.
    BACKGROUND_900: "#121214",  
    
    // Cor de fundo um pouco mais clara.
    BACKGROUND_800: "#18181B",  

    // Cor do texto principal da aplicação.
    TEXT: "#FFFFFF",  
    // Cor branca para o texto.

    // Cores de legenda, para textos menores e menos destacados. 
    // CAPTION_500 é a cor mais escura, CAPTION_400 é um pouco mais clara e CAPTION_300 
    // é a cor mais clara dessas três.
    
    // Cor de texto para títulos e legendas importantes.
    CAPTION_500: "#71717A",  
    
    // Cor de texto para informações secundárias.
    CAPTION_400: "#A1A1AA",  
    
    // Cor de texto para informações menos destacadas.
    CAPTION_300: "#D4D4D8",  

    // Cores para formas e elementos que não são texto ou fundo, como bordas e ícones.
    // Cor de formas e elementos estruturais.
    SHAPE: "#2A2634",  

    // Cores para destaque de elementos principais, como botões ou áreas importantes.
    // Cor de destaque principal, usada para botões e links.
    PRIMARY: "#8B5CF6",  

    // Cores para status de sucesso, como confirmação de ações ou status positivos.
    // Cor verde para indicar sucesso.
    SUCCESS: "#34D399",  

    // Cores para alertas ou mensagens de erro.
    // Cor vermelha para alertas ou erros.
    ALERT: "#F87171",  

    // O FOOTER é uma área com um fundo gradiente, que passa de transparente para preto. 
    // Isso é útil para criar um efeito de desfoque ou profundidade no rodapé da aplicação.
    
    // Gradiente de transparente para preto.
    FOOTER: ["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"],  

    // A cor OVERLAY é usada para criar um efeito de sobreposição, geralmente em áreas
    // que precisam de um desfoque ou destaque.
    
    // Cor de sobreposição, um tom escuro semi-transparente.
    OVERLAY: "rgba(0,0,0,0.6)",  
  },

  // O objeto FONT_FAMILY armazena as fontes que serão utilizadas na aplicação.
  FONT_FAMILY: {
    // Tipos de fontes com diferentes pesos e estilos. 'Regular', 'SemiBold', 'Bold' e 'Black'
    // correspondem aos estilos da fonte "Inter", usada para garantir que o texto tenha 
    // diferentes pesos dependendo da necessidade (títulos, ênfases, etc.).
    
    // Fonte regular (peso normal).
    REGULAR: "Inter_400Regular",  
    
    // Fonte semi negrito (para ênfase).
    SEMI_BOLD: "Inter_600SemiBold",  
    
    // Fonte negrito (para títulos ou destaques).
    BOLD: "Inter_700Bold",  
    
    // Fonte muito negrito (para áreas de grande destaque).
    BLACK: "Inter_900Black",  
  },

  // O objeto FONT_SIZE define os tamanhos de fonte, usados para garantir que o texto
  // tenha a hierarquia certa (tamanho maior para títulos e menor para textos).
  FONT_SIZE: {
    // Tamanho pequeno para textos menores.
    SM: 15,  
    
    // Tamanho médio para textos normais.
    MD: 18,  
    
    // Tamanho grande para títulos e textos de destaque.
    LG: 24,  
  },
};
