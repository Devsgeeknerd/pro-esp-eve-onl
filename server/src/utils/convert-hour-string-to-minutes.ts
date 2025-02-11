// Função que converte uma string representando uma hora no formato "hh:mm" para o total de minutos.
export function convertHourStringToMinutes(hourString: string) {
  // A função 'split' separa a string 'hourString' pelo caractere ':'.
  // O método 'map(Number)' converte cada parte da string (hora e minutos) para um número.
  const [hour, minutes] = hourString.split(":").map(Number);

  // Calcula o total de minutos: a hora é multiplicada por 60 e somamos os minutos.
  const minutesAmount = hour * 60 + minutes;

  // Retorna o total de minutos.
  return minutesAmount;
}
