// Função que converte uma quantidade de minutos em uma string no formato "HH:MM".
export function convertMinutesToHourString(minutesAmount: number) {
  // Calcula a quantidade de horas dividindo o total de minutos por 60 e arredondando para baixo.
  const hour = Math.floor(minutesAmount / 60);

  // Calcula os minutos restantes usando o operador de módulo (%), que retorna o resto da divisão.
  const minutes = minutesAmount % 60;

  // Converte as horas e minutos para string e usa "padStart" para garantir que tenham sempre 2 dígitos.
  // Exemplo: se a hora for 1, será transformada em "01".
  return `${String(hour).padStart(2, "0")}:${String(minutes).padStar(2, "0")}`;

}
