export const MONTHS = {
  1: "janvier", // 1.4. commencer à partir de 1 au lieu de 0
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// 1.5 corriger la fonction getMonth pour qu'elle retourne le bon mois avec + 1
// 1.6 ajouter des tests unitaires pour getMonth
/* export const getMonth = (date) => MONTHS[date.getMonth()]; */
export const getMonth = (date) => MONTHS[date.getMonth() + 1];
