let Sheet_ID = "1slG4RNH--nLJWxIRnfHOVknp39T43mujNjsDrKNc9Z4";
let Sheet_Title = "rawdatabase";
let Sheet_Range = "B2:E500";

let Sheet_URL = "https://docs.google.com/spreadsheets/d/" + Sheet_ID + "/gviz/tq?sheet=" + Sheet_Title + "&range=" + Sheet_Range;

fetch(Sheet_URL)
  .then((res) => res.text())
  .then((rep) => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));

    let Game_Card = document.getElementById("Game_Card");
    let Game_Count = data.table.rows.length;

    for (let i = 0; i < Game_Count; i++) {
      let New_Card = document.createElement("a");
      New_Card.style = "opacity: 1; ";
      New_Card.id = "Game_URL";
      New_Card.className =
        "relative cardhoveran w-full h-48 shadow-lg shadow-gray-600 dark:shadow-gray-900 rounded-xl overflow-hidden hover:translate-y-[-0.125rem] transition ease-linear cursor-pointer";
      Game_Card.append(New_Card);
      New_Card.href = data.table.rows[i].c[2].v;

      let Card_Hover = document.createElement("div");
      Card_Hover.className =
        "relative w-full h-48 shadow-lg shadow-gray-600 dark:shadow-gray-900 rounded-xl overflow-hidden hover:translate-y-[-0.125rem] transition ease-linear cursor-pointer";
      Card_Hover.style = "opacity: 1; transform: none";
      New_Card.append(Card_Hover);

      let Image_Background = document.createElement("div");
      Image_Background.className = "w-full h-full bg-gray-400 rounded-2xl animate-pulse";
      Card_Hover.append(Image_Background);

      let Image_URL = document.createElement("img");
      Image_URL.className = "absolute top-0 left-0 w-full h-full object-cover object-center dr";
      Image_URL.style = "opacity: 1; transform: none";
      Image_URL.draggable = "false";
      Image_URL.src = "https://drive.google.com/uc?id=" + data.table.rows[i].c[1].v;
      Card_Hover.append(Image_URL);

      let Image_Gradient = document.createElement("div");
      Image_Gradient.className = "bg-gradient-to-b from-transparent to-gray-900 absolute inset-0";
      Card_Hover.append(Image_Gradient);

      let Title_Container = document.createElement("div");
      Title_Container.className = "absolute bottom-0 p-4";
      Image_Gradient.append(Title_Container);

      let Title = document.createElement("h1");
      Title.className = "text-lg text-white md:text-xl 2xl:text-2xl font-extrabold tracking-tight";
      Title.id = "Gamename";
      Title.innerHTML = data.table.rows[i].c[0].v;
      Title_Container.append(Title);

      let Hover_Effect = document.createElement("div");
      Hover_Effect.className =
        "absolute inset-0 w-full h-full border-transparent border-[3px] hover:border-primary rounded-xl ease-linear transition";
      Card_Hover.append(Hover_Effect);
    }
  });
