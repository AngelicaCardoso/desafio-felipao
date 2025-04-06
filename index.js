// Lista com os nome e xp dos heróis 
const herois = [
    { nome: "Moon", xp: 800 },
    { nome: "Violet", xp: 1500 },
    { nome: "Tamed", xp: 3500 },
    { nome: "Ocean", xp: 6000 },
    { nome: "Golden", xp: 7500 },
    { nome: "Aquiline", xp: 8500 },
    { nome: "Rogue", xp: 9500 },
    { nome: "Diamond", xp: 12000 }
  ];
  
  // Função para classificar o nível do herói
  function classificarHeroi(nome, xp) {
    let nivel = "";
  
    if (xp < 1000) {
      nivel = "Ferro";
    } else if (xp <= 2000) {
      nivel = "Bronze";
    } else if (xp <= 5000) {
      nivel = "Prata";
    } else if (xp <= 7000) {
      nivel = "Ouro";
    } else if (xp <= 8000) {
      nivel = "Platina";
    } else if (xp <= 9000) {
      nivel = "Ascendente";
    } else if (xp <= 10000) {
      nivel = "Imortal";
    } else {
      nivel = "Radiante";
    }
  
    // Mensagem do console
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
  }
  
  // Laço para classificar 9s heróis da lista
  for (let i = 0; i < herois.length; i++) {
    const { nome, xp } = herois[i];
    classificarHeroi(nome, xp);
  }