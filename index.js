const gender = () => {
  for (let n = 1; n <= 20; n++) {
    if (n % 5 === 0 && n % 3 === 0) {
      console.log("GarçonFille");
    } else if (n % 3 === 0) {
      console.log("Garçon");
    } else if (n % 5 === 0) {
      console.log("Fille");
    } else {
      console.log(n);
    }
  }
};

gender();
