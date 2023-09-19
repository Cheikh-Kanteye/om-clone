export type Transaction = {
  date: string;
  recipient: {
    name: string;
    profilePhoto?: string | null;
    profilePhotoText?: string | undefined;
    color?: string;
    phoneNumber: string;
  };
  transactionType: string;
  reference: string;
  amount: string;
  newBalance: string;
};

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getInitials = (name: string) => {
  let initials;
  const nameSplit = name.split(" ");
  const nameLength = nameSplit.length;
  if (nameLength > 1) {
    initials =
      nameSplit[0].substring(0, 1) + nameSplit[nameLength - 1].substring(0, 1);
  } else if (nameLength === 1) {
    initials = nameSplit[0].substring(0, 1);
  } else return;

  return initials.toUpperCase();
};

const generateRandomPhoneNumber = () => {
  const prefix = "+221";
  const randomNumber = Math.floor(770000000 + Math.random() * 100000000); // Génère un numéro de téléphone sénégalais aléatoire
  return `${prefix} ${randomNumber}`;
};

const generateRandomName = () => {
  const names = [
    "Aminata Diop",
    "Mamadou Sow",
    "Fatoumata Ba",
    "Ibrahim Camara",
    "Khady Fall",
    "Modou Ndiaye",
    "Kadiatou Diallo",
    "Abdoulaye Seck",
    "Ndeye Thiaw",
    "Oumar Gueye",
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const transactions: Transaction[] = [];

for (let i = 0; i < 50; i++) {
  const date = `23/09/20${i % 10} ${(i % 24).toString().padStart(2, "0")}:${(
    i % 60
  )
    .toString()
    .padStart(2, "0")}`;
  const recipientName = generateRandomName();
  const recipientPhoneNumber = generateRandomPhoneNumber();
  const transactionType =
    i % 4 === 0
      ? "Achat de pass"
      : i % 4 === 1
      ? "Recharge de crédit"
      : i % 4 === 2
      ? "Transfert d'argent"
      : "Réception d'argent";
  const reference = `RC230917.1556.B${i.toString().padStart(5, "0")}`;
  const amount = ((i % 4) + 1) * 1000;
  const newBalance = (i + 1) * 5000;

  transactions.push({
    date,
    recipient: {
      name: recipientName,
      profilePhoto: null,
      profilePhotoText: getInitials(recipientName),
      phoneNumber: recipientPhoneNumber,
      color: getRandomColor(),
    },
    transactionType,
    reference,
    amount: amount.toString(),
    newBalance: newBalance.toString(),
  });
}
export default transactions;
