let allParts = [];

let motherboards = [];
motherboards.push(new motherboard(2,"ASUS TUF B660M-E D4",46000,"","LGA1700","DDR4",4,"","Images/Parts/mb1.png","intel"))
motherboards.push(new motherboard(2,"ASUS TUF B450M-Plus II",33500,"","AM4","DDR4",4,"","Images/Parts/mb2.png","amd"))
motherboards.push(new motherboard(3,"ASUS TUF B760M-Plus D4",64500,"","LGA1700","DDR4",4,"","Images/Parts/mb3.png","intel"))
motherboards.push(new motherboard(4,"GIGABYTE Z790 AORUS Elite",101800,"","LGA1700","DDR5",4,"RGB","Images/Parts/mb4.png","intel"))
motherboards.push(new motherboard(1,"ASUS Prime H510M-K R2.0",25600,"","LGA1200","DDR4",2,"","Images/Parts/mb5.png","intel"))
motherboards.push(new motherboard(4,"MSI MAG B650 TOMAHAWK",84000,"","AM5","DDR5",4,"","Images/Parts/mb6.png","amd"))
motherboards.push(new motherboard(1,"ASUS Prime A320M-K/CSM",21400,"","AM4","DDR4",2,"","Images/Parts/mb7.png","amd"))
motherboards.push(new motherboard(3,"MSI MPG B550 Plus",51000,"","AM4","DDR4",4,"RGB","Images/Parts/mb8.png","amd"))
motherboards.push(new motherboard(2,"GIGABYTE H510M S2H V3",30500,"","LGA1200","DDR4",2,"","Images/Parts/mb9.png","intel"))
motherboards.push(new motherboard(4,"ASUS ROG Strix B650-A",105500,"","AM5","DDR5",4,"RGB","Images/Parts/mb10.png","amd"))
motherboards.push(new motherboard(3,"ASUS Prime B650M-K",48500,"","AM5","DDR5",2,"","Images/Parts/mb11.png","amd"))
motherboards.push(new motherboard(3,"GIGABYTE S1200 Z590 AORUS PRO",78500,"","LGA1200","DDR4",4,"RGB","Images/Parts/mb12.png","amd"))

let processors = []
processors.push(new processor(2, "Intel Core i5-11600K", 76700, "", "LGA1200", 75, 6, "3.9 GHz", "GPU", 55, "Images/Parts/cpu1.png","intel"));
processors.push(new processor(4, "AMD Ryzen 9 5950X", 155000, "", "AM4", 150, 16, "4.9 GHz", "GPU", 80, "Images/Parts/cpu2.png","amd"));
processors.push(new processor(4, "Intel Core i9-11900K", 138000, "", "LGA1200", 150, 8, "5.3 GHz", "", 75, "Images/Parts/cpu3.png","intel"));
processors.push(new processor(3, "AMD Ryzen 7 5800X", 105000, "", "AM4", 105, 8, "4.7 GHz", "GPU", 70, "Images/Parts/cpu4.png","amd"));
processors.push(new processor(2, "Intel Core i5-12600K", 82000, "", "LGA1700", 75, 10, "4.9 GHz", "", 65, "Images/Parts/cpu5.png","intel"));
processors.push(new processor(2, "AMD Ryzen 5 5600X", 66000, "", "AM4", 65, 6, "4.6 GHz", "GPU", 60, "Images/Parts/cpu6.png","amd"));
processors.push(new processor(3, "Intel Core i7-11700K", 127000, "", "LGA1200", 125, 8, "5.0 GHz", "", 70, "Images/Parts/cpu7.png","intel"));
processors.push(new processor(1, "AMD Ryzen 3 3300X", 41000, "", "AM4", 65, 4, "3.8 GHz", "GPU", 40, "Images/Parts/cpu8.png","amd"));
processors.push(new processor(1, "Intel Core i3-10100", 32000, "", "LGA1200", 65, 4, "3.6 GHz", "GPU", 40, "Images/Parts/cpu9.png","intel"));
processors.push(new processor(1,"Intel Core i3-12100F", 39000, "", "LGA1700", 60, 4, "4.3 GHz", "GPU", 50, "Images/Parts/cpu10.png","intel"));
processors.push(new processor(4,"Intel Core i9-14900K", 252000, "", "LGA1700", 125, 24, "6 GHz", "", 95, "Images/Parts/cpu11.png","intel"));
processors.push(new processor(4,"AMD Ryzen 7 7800X3D", 161000, "", "AM5", 125, 8, "5.3 GHz", "GPU", 90, "Images/Parts/cpu12.png","amd"));
processors.push(new processor(2,"AMD Ryzen 5 7600", 82500, "", "AM5", 75, 6, "5.1 GHz","GPU", 70, "Images/Parts/cpu13.png","amd"));
processors.push(new processor(4,"AMD Ryzen 9 7950X3D", 262000, "", "AM5", 150, 16, "5.7 GHz","GPU", 95, "Images/Parts/cpu14.png","amd"));
processors.push(new processor(2,"Intel Core i5-13500", 108000, "", "LGA1700", 75, 12, "4.8 GHz","GPU", 70, "Images/Parts/cpu15.png","intel"));
processors.push(new processor(4,"Intel Core i7-14700K", 192000, "", "LGA1700", 125, 20, "5.6 GHz","", 90, "Images/Parts/cpu16.png","intel"));
processors.push(new processor(4,"Intel Core i9-12900K", 162500, "", "LGA1700", 125, 16, "5.1 GHz","", 85, "Images/Parts/cpu17.png","intel"));
processors.push(new processor(2,"Intel Core i5-10400F", 50000, "", "LGA1200", 65, 6, "4.3 GHz","", 50, "Images/Parts/cpu18.png","intel"));
processors.push(new processor(1,"Intel Pentium Gold G6400", 29800, "", "LGA1200", 60, 2, "4.0 GHz","GPU", 35, "Images/Parts/cpu19.png","intel"));
processors.push(new processor(3,"Intel Core i7-10700", 109800, "", "LGA1200", 65, 8, "4.8 GHz","", 65, "Images/Parts/cpu20.png","intel"));
processors.push(new processor(2, "AMD Ryzen 5 3600", 34000, "", "AM4", 65, 6, "4.2 GHz", "", 45, "Images/Parts/cpu21.png","amd"));
processors.push(new processor(3, "AMD Ryzen 7 3700X", 74000, "", "AM4", 75, 8, "3.6 GHz", "", 60, "Images/Parts/cpu22.png","amd"));
processors.push(new processor(1, "AMD Ryzen 3 4300G", 36000, "", "AM4", 65, 4, "4.0 GHz", "GPU", 40, "Images/Parts/cpu23.png","amd"));
processors.push(new processor(4, "AMD Ryzen 9 7900", 172000, "", "AM5", 125, 12, "5.4 GHz", "GPU", 90, "Images/Parts/cpu24.png","amd"));
processors.push(new processor(3, "AMD Ryzen 7 7700", 131500, "", "AM5", 105, 8, "5.3 GHz", "GPU", 85, "Images/Parts/cpu25.png","amd"));
processors.push(new processor(2, "AMD Ryzen 5 7600X", 98000, "", "AM5", 85, 6, "5.3 GHz", "GPU", 75, "Images/Parts/cpu26.png","amd"));




let videocards = []
videocards.push(new videocard(4,"MSI RTX 4080 Ventus 3X 16GB",533000,"",16,2550,256,"GDDR6X",250,"",85,"Images/Parts/gpu1.png","nvidia"))
videocards.push(new videocard(3,"ASUS Dual RTX 4070 White OC 12GB",261000,"",12,2520,192,"GDDR6X",200,"",75,"Images/Parts/gpu2.png","nvidia"))
videocards.push(new videocard(2,"ASRock RX 7600 Challenger 8GB OC",120000,"",8,2590,128,"GDDR6",160,"",65,"Images/Parts/gpu14.png","amd"))
videocards.push(new videocard(1,"GIGABYTE GT 1030 2GB DDR4",31000,"",2,1420,64,"GDDR4",30,"",35,"Images/Parts/gpu3.png","nvidia"))
videocards.push(new videocard(3,"GIGABYTE RX 7700 XT OC 12GB",206500,"",12,2600,192,"GDDR6",200,"RGB",70,"Images/Parts/gpu4.png","amd"))
videocards.push(new videocard(4,"ASUS ROG Strix RTX 4090 24GB",986000,"",24,2610,384,"GDDR6X",450,"RGB",95,"Images/Parts/gpu5.png","nvidia"))
videocards.push(new videocard(2,"ASUS Dual RTX 4060 8GB OC",139000,"",8,2540,128,"GDDR6",115,"",65,"Images/Parts/gpu6.png","nvidia"))
videocards.push(new videocard(4,"Sapphire RX 7800 XT 16GB OC",275500,"",16,2475,256,"GDDR6",265,"",80,"Images/Parts/gpu15.png","amd"))
videocards.push(new videocard(4,"Sapphire Pulse RX 7900 XTX 24GB",444000,"",24,2525,384,"GDDR6",370,"",90,"Images/Parts/gpu16.png","amd"))
videocards.push(new videocard(2,"GIGABYTE RTX 3060 OC 12GB",132600,"",12,1840,192,"GDDR6",170,"RGB",65,"Images/Parts/gpu7.png","nvidia"))
videocards.push(new videocard(1,"ASUS ROG Strix RX 560 4GB",46000,"",4,1200,128,"GDDR5",75,"",40,"Images/Parts/gpu8.png","amd"))
videocards.push(new videocard(2,"Zotac GTX 1650 4GB AMP Core",72000,"",4,1650,128,"GDDR6",75,"",50,"Images/Parts/gpu9.png","nvidia"))
videocards.push(new videocard(2,"ASUS RX 6600 Dual V2 8GB",102000,"",8,2490,128,"GDDR6",130,"",60,"Images/Parts/gpu10.png","amd"))
videocards.push(new videocard(4,"ASUS TUF RX 6900 XT 16GB",241500,"",16,2135,256,"GDDR6",300,"RGB",70,"Images/Parts/gpu11.png","amd"))
videocards.push(new videocard(1,"ASRock Intel Arc A380 6GB OC",47000,"",6,1825,96,"GDDR6",75,"",45,"Images/Parts/gpu12.png","intel"))
videocards.push(new videocard(2,"ASRock Intel Arc A750 8GB OC",106500,"",8,2200,256,"GDDR6",225,"",65,"Images/Parts/gpu13.png","intel"))
videocards.push(new videocard(3,"Sparkle Intel ARC A770 16GB",165000,"",16,2300,256,"GDDR6",225,"",70,"Images/Parts/gpu17.png","intel"))

let memorys = []
memorys.push(new memory(2,"Kingston FURY Beast 2x8GB",16500,"",16,3200,"DDR4",2,"",55,"Images/Parts/ram1.png"))
memorys.push(new memory(1,"Silicon Power 16GB",13500,"",16,2666,"DDR4",1,"",45,"Images/Parts/ram2.png"))
memorys.push(new memory(3,"Corsair Vengeance LP 2x16GB",31000,"",32,3200,"DDR4",2,"",65,"Images/Parts/ram3.png"))
memorys.push(new memory(3,"Kingston FURY Renegade 4x8GB",48000,"",32,3600,"DDR4",4,"RGB",70,"Images/Parts/ram4.png"))
memorys.push(new memory(2,"G.Skill Trident Z 2x8GB",26500,"",16,3600,"DDR4",2,"RGB",60,"Images/Parts/ram5.png"))
memorys.push(new memory(1,"Silicon Power 8GB",7500,"",8,2400,"DDR4",1,"",40,"Images/Parts/ram6.png"))
memorys.push(new memory(3,"Kingston FURY Renegade 2x16GB",52000,"",32,6000,"DDR5",2,"",75,"Images/Parts/ram7.png"))
memorys.push(new memory(3,"Corsair Vengeance 2x16GB",48000,"",32,6200,"DDR5",2,"",80,"Images/Parts/ram8.png"))
memorys.push(new memory(4,"KINGSTON FURY 2x32GB",95500,"",64,6000,"DDR5",2,"RGB",85,"Images/Parts/ram9.png"))
memorys.push(new memory(4,"Corsair Dominator Titanium 4x16GB",152500,"",64,6000,"DDR5",4,"RGB",85,"Images/Parts/ram10.png"))
memorys.push(new memory(4,"G.Skill Trident Z5 2x48GB",181500,"",96,6400,"DDR5",2,"RGB",95,"Images/Parts/ram11.png"))
memorys.push(new memory(4,"Corsair Vengeance PRO SL 2x32GB",67500,"",64,3600,"DDR4",2,"RGB",75,"Images/Parts/ram12.png"))

let cases = []
cases.push(new pccase(3,"Kolink Observatory Lite Mesh",20500,"",4,3,"fekete","RGB","Images/Parts/case1.png"));
cases.push(new pccase(2,"Zalman S2",15000,"",3,3,"fekete","","Images/Parts/case2.png"));
cases.push(new pccase(2,"Kolink Stronghold White",18000,"",3,2,"fehér","","Images/Parts/case3.png"));
cases.push(new pccase(4,"ASUS ROG Strix Helios",120000,"",6,4,"fekete-fehér","RGB","Images/Parts/case4.png"));
cases.push(new pccase(3,"ASUS TUF Gaming GT501",52000,"",4,4,"fekete","RGB","Images/Parts/case5.png"));
cases.push(new pccase(1,"Aigo B350",8500,"",1,3,"szürke","","Images/Parts/case6.png"));
cases.push(new pccase(3,"Kolink Void Rift",36000,"",4,4,"fekete","RGB","Images/Parts/case7.png"));
cases.push(new pccase(1,"Modecom Logic K3",9000,"",1,4,"fekete","","Images/Parts/case8.png"));
cases.push(new pccase(4,"Lancool III White",82500,"",4,4,"fehér","RGB","Images/Parts/case9.png"));

let storages = []
storages.push(new storage("WESTERN DIGITAL Purple 2TB HDD",27000,"","2TB",`3.5"`,"Images/Parts/str1.png","HDD"))
storages.push(new storage("Seagate BarraCuda 500GB HDD",29000,"","500GB",`2.5"`,"Images/Parts/str2.png","HDD"))
storages.push(new storage("WESTERN DIGITAL Gold 14TB HDD",140000,"","14TB",`3.5"`,"Images/Parts/str3.png","HDD"))
storages.push(new storage("Western Digital Blue 1TB HDD",25000,"","1TB",`2.5"`,"Images/Parts/str4.png","HDD"))
storages.push(new storage("Kingston A400 240GB SSD",13000,"","240GB",`2.5"`,"Images/Parts/str5.png","SSD"))
storages.push(new storage("Samsung 870 EVO 1TB SSD",37000,"","1TB",`2.5"`,"Images/Parts/str6.png","SSD"))
storages.push(new storage("Silicon Power Ace A55 2TB SSD",40000,"","2TB",`2.5"`,"Images/Parts/str7.png","SSD"))
storages.push(new storage("Samsung 870 QVO 4TB SSD",109500,"","4TB",`2.5"`,"Images/Parts/str8.png","SSD"))

let coolers = []
coolers.push(new cooler("Be quiet! Pure Rock 2",18000,"",180,"27 dB","","Images/Parts/clr1.png"))
coolers.push(new cooler("Be Quiet! Dark Rock Elite",44000,"",	280,"26 dB","RGB","Images/Parts/clr2.png"))
coolers.push(new cooler("Cooler Master Hyper 212",20000,"",200,"30 dB","RGB","Images/Parts/clr3.png"))
coolers.push(new cooler("ID-Cooling SE-226-XT ARGB",18000,"",220,"30 dB","RGB","Images/Parts/clr4.png"))
coolers.push(new cooler("DeepCool AK620 Digital",32000,"",260,"28 dB","RGB","Images/Parts/clr5.png"))
coolers.push(new cooler("Be quiet! Dark Rock 4",29500,"",240,"22 dB","","Images/Parts/clr6.png"))
coolers.push(new cooler("DeepCool Assassin IV",41000,"",280,"22 dB","","Images/Parts/clr7.png"))
coolers.push(new cooler("Be quiet! Pure Rock Slim 2",11000,"",140,"25 dB","","Images/Parts/clr11.png"))
coolers.push(new cooler("Cooler Master Hyper H410R",6000,"",100,"29 dB","RGB","Images/Parts/clr12.png"))
coolers.push(new cooler("Zalman CNPS4X BLACK",6500,"",120,"28 dB","","Images/Parts/clr13.png"))

let powersupplies = []
powersupplies.push(new powersupply("Be quiet! SFX Power 3",12500,"",300,"80 PLUS Bronze","","Images/Parts/psu12.png"))
powersupplies.push(new powersupply("Cooler Master - Elite V4",15000,"",400,"80 PLUS White","","Images/Parts/psu13.png"))
powersupplies.push(new powersupply("GIGABYTE P450B",16500,"",450,"80 PLUS Bronze","","Images/Parts/psu14.png"))
powersupplies.push(new powersupply("Cooler Master Elite NEX",20000,"",500,"80 PLUS White","","Images/Parts/psu1.png"))
powersupplies.push(new powersupply("Seasonic B12",24500,"",550,"80 PLUS Bronze","","Images/Parts/psu2.png"))
powersupplies.push(new powersupply("FSP Hydro K Pro",29000,"",600,"80 PLUS Bronze","","Images/Parts/psu3.png"))
powersupplies.push(new powersupply("GIGABYTE P650B",26000,"",650,"80 PLUS Bronze","","Images/Parts/psu4.png"))
powersupplies.push(new powersupply("Be quiet! Pure Power 11",40500,"",700,"80 PLUS Gold","","Images/Parts/psu5.png"))
powersupplies.push(new powersupply("BE QUIET System Power 10",36500,"",750,"80 PLUS Bronze","","Images/Parts/psu6.png"))
powersupplies.push(new powersupply("Kolink Regulator",44000,"",850,"80 PLUS Gold","","Images/Parts/psu7.png"))
powersupplies.push(new powersupply("ASUS ROG Strix",79000,"",1000,"80 PLUS Gold","","Images/Parts/psu8.png"))
powersupplies.push(new powersupply("ASUS ROG-THOR-1200P2",195000,"",1200,"80 PLUS Platinum","RGB","Images/Parts/psu9.png"))
powersupplies.push(new powersupply("Seasonic Prime SSR-1300GD",112500,"",1300,"80 PLUS Gold","","Images/Parts/psu10.png"))
powersupplies.push(new powersupply("Seasonic Prime TX-1600",224000,"",1600,"80 PLUS Platinum","","Images/Parts/psu11.png"))


function motherboard(type, name, price, discount, socket, ram, ramslots, rgb, img, brand)
{
  this.type = type;
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.socket = socket;
  this.ram = ram;
  this.ramslots = ramslots;
  this.rgb = rgb;
  this.img = img;
  this.brand = brand;
}
function processor(type, name, price, discount, socket, power, cores, speed, integrated, score, img, brand) 
{
  this.type = type;
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.socket = socket;
  this.power = power;
  this.cores = cores;
  this.speed = speed;
  this.integrated = integrated;
  this.score = score;
  this.img = img;
  this.brand = brand;
}

function videocard(type, name, price, discount, gpumemory, gpuspeed, bit, gpumemorytype, power, rgb, score, img, brand) 
{
  this.type = type;
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.gpumemory = gpumemory;
  this.gpuspeed = gpuspeed;
  this.bit = bit;
  this.gpumemorytype = gpumemorytype;
  this.power = power;
  this.rgb = rgb;
  this.score = score;
  this.img = img;
  this.brand = brand;
}

function memory(type, name, price, discount, memory, speed, gen, sticks, rgb, score, img) 
{
  this.type = type;
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.memory = memory;
  this.speed = speed;
  this.gen = gen;
  this.sticks = sticks;
  this.rgb = rgb;
  this.score = score;
  this.img = img;
}

function pccase(type, name, price, discount, fans, storageSlots, color, rgb, img) 
{
  this.type = type;
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.fans = fans;
  this.storageSlots = storageSlots;
  this.color = color;
  this.rgb = rgb;
  this.img = img;
}

function storage(name, price, discount, size, col, img, brand) {
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.size = size;
  this.col = col;
  this.img = img;
  this.brand = brand;
}

function cooler(name, price, discount, power, noise, rgb, img) {
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.power = power;
  this.noise = noise;
  this.rgb = rgb;
  this.img = img;
}

function powersupply(name, price, discount, power, efficency, rgb, img) {
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.power = power;
  this.efficency = efficency;
  this.rgb = rgb;
  this.img = img;
}

allParts.push(cases)
allParts.push(motherboards)
allParts.push(processors)
allParts.push(videocards)
allParts.push(memorys)
allParts.push(coolers)
allParts.push(powersupplies)
allParts.push(storages)



let count = localStorage.getItem('loadCount');
if (count === null) {
  count = 1;
} else {
  count = parseInt(count, 10) + 1;
}
localStorage.setItem('loadCount', count.toString());

if (count == 1) {
  localStorage.setItem("currentBuild", JSON.stringify(new pcBuild("","","","","")));
  localStorage.setItem("stage",0)
}

if (count == 1) {
  let casesDiscount = [];
  let motherboardsDiscount = [];
  let processorsDiscount = [];
  let videocardsDiscount = [];
  let memorysDiscount = [];
  let coolersDiscount = [];
  let powersuppliesDiscount = [];
  let storagesDiscount = [];

  for (let i = 0; i < cases.length; i++) {
    if (Math.floor(Math.random() * 5) + 1 == 1) {
      casesDiscount.push(true)
    }
    else{
      casesDiscount.push(false)
    }
  }

  for (let i = 0; i < motherboards.length; i++) {
    if (Math.floor(Math.random() * 5) + 1 == 1) {
      motherboardsDiscount.push(true)
    }
    else{
      motherboardsDiscount.push(false)
    }
  }

  for (let i = 0; i < processors.length; i++) {
    if (Math.floor(Math.random() * 5) + 1 == 1) {
      processorsDiscount.push(true)
    }
    else{
      processorsDiscount.push(false)
    }
  }

  for (let i = 0; i < videocards.length; i++) {
    if (Math.floor(Math.random() * 5) + 1 == 1) {
      videocardsDiscount.push(true)
    }
    else{
      videocardsDiscount.push(false)
    }
  }

  for (let i = 0; i < memorys.length; i++) {
    if (Math.floor(Math.random() * 5) + 1 == 1) {
      memorysDiscount.push(true)
    }
    else{
      memorysDiscount.push(false)
    }
  }

  for (let i = 0; i < coolers.length; i++) {
    if (Math.floor(Math.random() * 5) + 1 == 1) {
      coolersDiscount.push(true)
    }
    else{
      coolersDiscount.push(false)
    }
  }

  for (let i = 0; i < powersupplies.length; i++) {
    if (Math.floor(Math.random() * 5) + 1 == 1) {
      powersuppliesDiscount.push(true)
    }
    else{
      powersuppliesDiscount.push(false)
    }
  }

  for (let i = 0; i < storages.length; i++) {
    if (Math.floor(Math.random() * 5) + 1 == 1) {
      storagesDiscount.push(true)
    }
    else{
      storagesDiscount.push(false)
    }
  }

  localStorage.setItem("casesDiscount",casesDiscount)
  localStorage.setItem("motherboardsDiscount",motherboardsDiscount)
  localStorage.setItem("processorsDiscount",processorsDiscount)
  localStorage.setItem("videocardsDiscount",videocardsDiscount)
  localStorage.setItem("memorysDiscount",memorysDiscount)
  localStorage.setItem("coolersDiscount",coolersDiscount)
  localStorage.setItem("powersuppliesDiscount",powersuppliesDiscount)
  localStorage.setItem("storagesDiscount",storagesDiscount)
}


let casesDiscount = localStorage.getItem("casesDiscount");
let motherboardsDiscount = localStorage.getItem("motherboardsDiscount");
let processorsDiscount = localStorage.getItem("processorsDiscount");
let videocardsDiscount = localStorage.getItem("videocardsDiscount");
let memorysDiscount = localStorage.getItem("memorysDiscount");
let coolersDiscount = localStorage.getItem("coolersDiscount");
let powersuppliesDiscount = localStorage.getItem("powersuppliesDiscount");
let storagesDiscount = localStorage.getItem("storagesDiscount");


let Discounts = [];
Discounts.push(casesDiscount.split(","))
Discounts.push(motherboardsDiscount.split(","))
Discounts.push(processorsDiscount.split(","))
Discounts.push(videocardsDiscount.split(","))
Discounts.push(memorysDiscount.split(","))
Discounts.push(coolersDiscount.split(","))
Discounts.push(powersuppliesDiscount.split(","))
Discounts.push(storagesDiscount.split(","))

let i1 = 0;
let i2 = 0;
Discounts.forEach(x => {
  x.forEach(y => {
    if (y == "true") {
      allParts[i1][i2].discount = "-10%";
      allParts[i1][i2].price = allParts[i1][i2].price * 0.9;
    }
    i2++;
  });
  i2 = 0;
  i1++;
});



function discountList(){
  document.getElementById("akcioList").innerHTML = "";
  allParts.forEach(x => {
    x.forEach(y => {
      if (y.discount == "-10%") {
        document.getElementById("akcioList").innerHTML +=
        `
          <td>
            <div class="btn btn-outline-light p-0" style="width: 250px; height: 200px">
                <div class="row" style="width: 100%;">
                    <div class="col-12 part-img-bg" style="border-top-right-radius: 8px;border-top-left-radius: 8px">
                        <img class="part-img" src="${y.img}" alt="${y.name}">                                                                            <!-- Kép -->
                    </div>
                    <div class="col-12" style="overflow-x: clip; white-space: nowrap; margin-left: 10px;">
                        <h5 style="text-align: center;" data-bs-toggle="tooltip" data-bs-placement="top" title="${y.name}">${y.name}</h5>
                        <table style="margin: auto; vertical-align: baseline; bottom:0px;">
                          <tr>
                            <td><h5 data-bs-toggle="tooltip" data-bs-placement="top" title="Eredeti ár: ${y.price / 90 * 100} Ft">${y.price} Ft</h5></td>
                            <td><button type="button" class="btn btn-success mb-2 ms-2" style="height:40px;" onclick="addToCart('${y.name}', '${y.img}', ${y.price})">Vásárlás</button></td>
                          </tr>
                        </table>
                        
                    </div>
                </div>
            </div>
          </td>
        `

      }
    });
  });
}


let currentBuild = new pcBuild("","","","","","","","","","","");
function pcBuild(pccase,motherboard,processor,videocard,memory,cooler,powersupply,storage1,storage2,storage3,storage4) {
  this.pccase = pccase
  this.motherboard = motherboard
  this.processor = processor
  this.videocard =  videocard
  this.memory = memory
  this.cooler = cooler
  this.powersupply = powersupply;
  this.storage1 = storage1;
  this.storage2 = storage2;
  this.storage3 = storage3;
  this.storage4 = storage4;
}



for (var key in currentBuild) {
  if (JSON.parse(localStorage.getItem("currentBuild"))[key] !== undefined) {
    currentBuild[key] = JSON.parse(localStorage.getItem("currentBuild"))[key];
  }
}


let partSelect = document.getElementsByClassName("part-options");
let selectedOption = "";
let buttonImg = document.getElementsByClassName("buttonImg");
let activeFilters = ["amd","intel","nvidia","HDD","SSD"];
let categoryIds = ["cases","motherboards","processors","videocards","memorys","coolers","powersupplies","storages"]
let categoryNames = ["Gépházak","Alaplapok","Processzorok","Vidókártyák","Memóriák","Processzor Hűtők","Tápegységek","Háttértárak"]


let cart = [];
function item(name,img,price,amount) {
  this.name = name;
  this.img = img;
  this.price = price;
  this.amount = amount;
}

if (localStorage.getItem("cart") != undefined) {
  items = JSON.parse(localStorage.getItem("cart"));
  items.forEach(x => {
    cart.push(new item(x.name,x.img,x.price,x.amount))
  });
}

let completedBuilds = [];

if (localStorage.getItem("completed") != undefined) {
  items = JSON.parse(localStorage.getItem("completed"));
  i = 1
  items.forEach(x => {
    completedBuilds.push(new item(x.name,x.img,x.price,x.amount))
    i++;
  });
}

function loadSavedPC() {
  let i = 0;
  for (const key in currentBuild) {
    if (currentBuild[key] != "") {
      buttonImg[i].src = currentBuild[key].img;
      document.getElementById(key+"Select").style.color = "black";
      document.getElementById(key+"Select").style.backgroundColor = "white";
    }
    i++;
}
}



function addToBuild() 
{
  for (let i = 0; i < partSelect.length; i++) 
  {
      if (partSelect[i].checked) {
          selectedOption = partSelect[i].value;
          break;
  }}


  let selectedPart = "";
  let listedParts = document.getElementsByClassName("listedParts-button");
  for (let i = 0; i < listedParts.length; i++) 
  {
      if (listedParts[i].checked) {
          selectedPart = listedParts[i].value;
          break;
  }}

  switch (selectedOption) 
  {
    case "cases":
      cases.forEach(x => {
        if (x.name == selectedPart) {
          currentBuild.pccase = x;
          buttonImg[0].src = currentBuild.pccase.img;
          document.getElementById("pccaseSelect").style.color = "black"
          document.getElementById("pccaseSelect").style.backgroundColor = "white"
        }
      });
      break;

    case "motherboards":
      motherboards.forEach(x => {
        if (x.name == selectedPart) {
          currentBuild.motherboard = x;
          buttonImg[1].src = currentBuild.motherboard.img;
          document.getElementById("motherboardSelect").style.color = "black"
          document.getElementById("motherboardSelect").style.backgroundColor = "white"
        }
      });
      break;

    case "processors":
      processors.forEach(x => {
        if (x.name == selectedPart) {
          currentBuild.processor = x;
          buttonImg[2].src = currentBuild.processor.img;
          document.getElementById("processorSelect").style.color = "black"
          document.getElementById("processorSelect").style.backgroundColor = "white"
        }
      });
      break;

    case "videocards":
      videocards.forEach(x => {
        if (x.name == selectedPart) {
          currentBuild.videocard = x;
          buttonImg[3].src = currentBuild.videocard.img;
          document.getElementById("videocardSelect").style.color = "black"
          document.getElementById("videocardSelect").style.backgroundColor = "white"
        }
      });
      break;

    case "memorys":
      memorys.forEach(x => {
        if (x.name == selectedPart) {
          currentBuild.memory = x;
          buttonImg[4].src = currentBuild.memory.img;
          document.getElementById("memorySelect").style.color = "black"
          document.getElementById("memorySelect").style.backgroundColor = "white"
        }
      });
      break;

    case "coolers":
      coolers.forEach(x => {
        if (x.name == selectedPart) {
          currentBuild.cooler = x;
          buttonImg[5].src = currentBuild.cooler.img;
          document.getElementById("coolerSelect").style.color = "black"
          document.getElementById("coolerSelect").style.backgroundColor = "white"
        }
      });
      break;

      case "powersupplies":
        powersupplies.forEach(x => {
          if (x.name == selectedPart) {
            currentBuild.powersupply = x;
            buttonImg[6].src = currentBuild.powersupply.img;
            document.getElementById("powersupplySelect").style.color = "black"
            document.getElementById("powersupplySelect").style.backgroundColor = "white"
          }
        });
        break;

    case "storage":
      storages.forEach(x => {
        if (x.name == selectedPart)
        {
          for (let i = 1; i < 5; i++)
          {
            console.log(document.getElementById(`storage${i}`));
            if (document.getElementById(`storage${i}`).checked)
            {
              let storageKey = "storage" + i;
              currentBuild[storageKey] = x;
              buttonImg[6+i].src = currentBuild.storage1.img;
              document.getElementById(`storage${i}Select`).style.color = "black"
              document.getElementById(`storage${i}Select`).style.backgroundColor = "white"
            }
          }
        }
      });
      break;

    default:
      break;
  }
  Build()
  bottleneck()
  addToStorage()
  loadSavedPC()
}

function addToStorage() {
  if (currentBuild[0] != "") {
    let currentBuildString = JSON.stringify(currentBuild);
    localStorage.setItem("currentBuild", currentBuildString);
  }
}

function Build() {
  let price = 0;
  let score = 0;

  for (let key in currentBuild) {
    if (currentBuild[key] && currentBuild[key].price !== null && !isNaN(parseFloat(currentBuild[key].price))) {
      let priceValue = parseFloat(currentBuild[key].price);
      price += priceValue;
    }

    if (currentBuild[key] && currentBuild[key].score !== null && !isNaN(parseFloat(currentBuild[key].score))) {
      let scoreValue = parseFloat(currentBuild[key].score);
      score += scoreValue;
    }
  }

  price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  document.getElementById("buildPrice").innerHTML = price + " Ft";
  document.getElementById("PCscore").innerHTML = score + ` <img src="Images/Assembly/score.png" style="height: 15px; width: auto;" alt="">`;

  if 
  (
    (
    currentBuild.pccase != "" &&
    currentBuild.motherboard != "" &&
    currentBuild.processor != "" &&
    currentBuild.videocard != "" &&
    currentBuild.memory != "" &&
    currentBuild.cooler != "" &&
    currentBuild.powersupply != ""
    ) &&
    currentBuild.storage1 != "" ||
    currentBuild.storage2 != "" ||
    currentBuild.storage3 != "" ||
    currentBuild.storage4 != ""
  )
  {
    document.getElementById("feedback2").innerHTML =
    `
      <div class="alert alert-success" role="alert">
          A számítógépet hozzá lehet adni a kosárhoz!
      </div>
    `
  }
}


function bottleneck() {
  let cpuPerformance = document.getElementById("cpuPerformance");
  let gpuPerformance = document.getElementById("gpuPerformance");
  let ramPerformance = document.getElementById("ramPerformance");

  if (currentBuild.processor.score != undefined) {
    cpuPerformance.innerHTML = currentBuild.processor.score;
    cpuPerformance.style.width = currentBuild.processor.score+"%";
  }

  if (currentBuild.videocard.score != undefined) {
    gpuPerformance.innerHTML = currentBuild.videocard.score;
    gpuPerformance.style.width = currentBuild.videocard.score+"%";
  }

  if (currentBuild.memory.score != undefined) {
    ramPerformance.innerHTML = currentBuild.memory.score;
    ramPerformance.style.width = currentBuild.memory.score+"%";
  }

  if (currentBuild.videocard.price == 0 && currentBuild.videocard != "") 
  {
    avgPerformance = (currentBuild.processor.score + currentBuild.memory.score) / 2;

    document.getElementById("feedback3").innerHTML =
      `
        <div class="alert alert-warning" role="alert">
            Az integrált grafikus egységek limitált teljesítményt nyújtanak, <br>
            különösen nagy erőforrást igénylő grafikai feladatok vagy játékok esetén!
        </div>
      `
  }
  else
  {
    avgPerformance = (currentBuild.processor.score + currentBuild.videocard.score + currentBuild.memory.score) / 3;
    
    document.getElementById("feedback3").innerHTML = ""
  }

  if (avgPerformance > 50) {
    if (avgPerformance * 0.85 > currentBuild.processor.score) 
    {
      cpuPerformance.style.backgroundColor = "red";
      document.getElementById("feedback").innerHTML =
      `
        <div class="alert alert-danger" role="alert">
            A processzor teljesítmény rendkívül lacsony a többi alkatrészhez képest! <br>
            Ez a többi alkatrész teljesítményét is negatívan befojásolhatja!
        </div>
      `
    }
    else
    {
      cpuPerformance.style.backgroundColor = "rgb(0, 153, 255)";
      document.getElementById("feedback").innerHTML = ""
    }
  
    if (avgPerformance * 0.85 > currentBuild.videocard.score) 
    {
      gpuPerformance.style.backgroundColor = "red";
      document.getElementById("feedback").innerHTML =
      `
        <div class="alert alert-danger" role="alert">
            A videókártya teljesítmény rendkívül lacsony a többi alkatrészhez képest! <br>
            Ez a többi alkatrész teljesítményét is negatívan befojásolhatja!
        </div>
      `
    }
    else
    {
      gpuPerformance.style.backgroundColor = "rgb(0, 153, 255)";
      document.getElementById("feedback").innerHTML = ""
    }
  
    if (avgPerformance * 0.85 > currentBuild.memory.score) 
    {
      ramPerformance.style.backgroundColor = "red";
      document.getElementById("feedback").innerHTML =
      `
        <div class="alert alert-danger" role="alert">
            A memória teljesítmény rendkívül lacsony a többi alkatrészhez képest! <br>
            Ez a többi alkatrész teljesítményét is negatívan befojásolhatja!
        </div>
      `
    }
    else
    {
      ramPerformance.style.backgroundColor = "rgb(0, 153, 255)";
      document.getElementById("feedback").innerHTML = ""
    }
  }
}


function nextStage(nav) {
  let stagecounter = localStorage.getItem("stage")
  let stage0 = document.getElementsByClassName("stage0");
  let stage1 = document.getElementsByClassName("stage1");
  let stage2 = document.getElementsByClassName("stage2");
  let stage3 = document.getElementsByClassName("stage3");
  console.log(localStorage.getItem("stage"));
  console.log("nav: ",nav);

  if (stagecounter >= 0)
  {
    if(currentBuild.motherboard != "" && currentBuild.pccase != "")
    {
      for (let i = 0; i < stage1.length; i++) {
        stage1[i].removeAttribute("disabled")
      }
      for (let i = 0; i < stage0.length; i++) {
        stage0[i].setAttribute("disabled", "disabled")  
      }
      localStorage.setItem("stage",1)
      document.getElementById("feedback2").innerHTML = ""
    }
    else
    {
      document.getElementById("feedback2").innerHTML = "";
     
      if (nav == 0) {
        document.getElementById("feedback2").innerHTML =
        `
        <div class="alert alert-danger" role="alert">
            Nincs megadva az összes alkatrész ebből a sorból!
        </div>
        `
        nav = 1
        }
    }
  }

  if (stagecounter >= 1)
  {
    if(currentBuild.memory != "" && currentBuild.processor != "" && currentBuild.videocard != "")
    {
      for (let i = 0; i < stage2.length; i++) {
        stage2[i].removeAttribute("disabled")
      }
      for (let i = 0; i < stage1.length; i++) {
        stage1[i].setAttribute("disabled", "disabled")  
      }
      for (let i = 0; i < stage0.length; i++) {
        stage0[i].setAttribute("disabled", "disabled")  
      }
      localStorage.setItem("stage",2)
      document.getElementById("feedback2").innerHTML = ""
    }
    else
    {
      document.getElementById("feedback2").innerHTML = "";
     
      if (nav == 0) {
        document.getElementById("feedback2").innerHTML =
        `
        <div class="alert alert-danger" role="alert">
            Nincs megadva az összes alkatrész ebből a sorból!
        </div>
        `
        nav = 1
      }
    }
  }

  if (stagecounter >= 2)
  {
    if(currentBuild.cooler != "" && currentBuild.powersupply != "")
    {
      for (let i = 0; i < currentBuild.pccase.storageSlots; i++) {
        stage3[i].removeAttribute("disabled")
      }
      for (let i = 0; i < stage2.length; i++) {
        stage2[i].setAttribute("disabled", "disabled")  
      }
      for (let i = 0; i < stage1.length; i++) {
        stage1[i].setAttribute("disabled", "disabled")  
      }
      for (let i = 0; i < stage0.length; i++) {
        stage0[i].setAttribute("disabled", "disabled")  
      }
      localStorage.setItem("stage",3)
      document.getElementById("feedback2").innerHTML = ""
    }
    else
    {
      document.getElementById("feedback2").innerHTML = "";
     
      if (nav == 0) {
        document.getElementById("feedback2").innerHTML =
        `
        <div class="alert alert-danger" role="alert">
            Nincs megadva az összes alkatrész ebből a sorból!
        </div>
        `
        nav = 1
      }
    }
  }
}

function Reset() {
  currentBuild = new pcBuild("", "", "", "");
  let currentBuildString = JSON.stringify(currentBuild);
  localStorage.setItem("currentBuild", currentBuildString);
  localStorage.setItem("Type",null)
  location.replace("Home-page.html?");
}


function listParts() 
{
  createFilters()

  document.getElementById("partsList").innerHTML = "";
  for (let i = 0; i < partSelect.length; i++) {
      if (partSelect[i].checked) {
          selectedOption = partSelect[i].value;
          break;
      }
  }
  let i = 0;

  
  switch (selectedOption) 
  {

    case "cases":
      cases.forEach(x => {
        if (localStorage.getItem("Type") == x.type ||  parseInt(localStorage.getItem("Type"))+1 == x.type) { //szűrő
          document.getElementById("partsList").innerHTML += 
          `<input type="radio" class="btn-check listedParts-button" name="listedParts" id="listedParts${i}" autocomplete="off" value="${x.name}" onchange="">
          <label class="btn btn-outline-light p-0 listedParts" for="listedParts${i}">
            <div class="row" style="width: 100%;">
                <div class="col-sm-3 part-img-bg">
                    <img class="part-img" src="${x.img}" alt="${x.name}">                                                                      <!-- Kép -->
                </div>
                <div class="col-sm-8">
                    <h5 style="text-align: start; width: 100%;" class="part-name">${x.name} <span class="badge bg-primary rgb">${x.rgb}</span></h5>         <!-- Alkatrész neve -->
                    <table style="width: 100%;">
                        <tr> <td class="price"><span class="badge bg-light price">${x.price} Ft</span> <span class="badge bg-danger">${x.discount}</span></td></tr>         <!-- ár (bootstrap badge-ben vannak) -->
                    </table>
                    <table style="width: 100%;">
                        <tr><td>color: ${x.color}</td><td>fans: ${x.fans}</td><td>storage slots:${x.storageSlots}</td></tr> 
                    </table>
                </div>
            </div>
        </label><br>`
        i++;
        }
      });
      break;

    case "motherboards":
      motherboards.forEach(x => {
        if ((localStorage.getItem("Type") == x.type ||  parseInt(localStorage.getItem("Type"))+1 == x.type) && activeFilters.includes(x.brand)) { //szűrő
          document.getElementById("partsList").innerHTML += 
          `<input type="radio" class="btn-check listedParts-button" name="listedParts" id="listedParts${i}" autocomplete="off" value="${x.name}" onchange="">
          <label class="btn btn-outline-light p-0 listedParts" for="listedParts${i}">
            <div class="row" style="width: 100%;">
                <div class="col-sm-3 part-img-bg">
                    <img class="part-img" src="${x.img}" alt="${x.name}">                                                                      <!-- Kép -->
                </div>
                <div class="col-sm-8">
                    <h5 style="text-align: start; width: 100%;" class="part-name">${x.name} <span class="badge bg-primary rgb">${x.rgb}</span></h5>         <!-- Alkatrész neve -->
                    <table style="width: 100%;">
                        <tr> <td class="price"><span class="badge bg-light price">${x.price} Ft</span> <span class="badge bg-danger">${x.discount}</span></td></tr>         <!-- ár (bootstrap badge-ben vannak) -->
                    </table>
                    <table style="width: 100%;">
                        <tr><td>socket: ${x.socket}</td><td>${x.ram}</td><td>${x.ramslots} ram slots</td></tr> 
                    </table>
                </div>
            </div>
        </label><br>`
        i++;
        }
      });
      break;

    case "processors":
      processors.forEach(x => {
        if (x.socket == currentBuild.motherboard.socket && (localStorage.getItem("Type") == x.type || parseInt(localStorage.getItem("Type"))+1 == x.type)) { //szűrő
          document.getElementById("partsList").innerHTML += 
          `<input type="radio" class="btn-check listedParts-button" name="listedParts" id="listedParts${i}" autocomplete="off" value="${x.name}" onchange="">
          <label class="btn btn-outline-light p-0 listedParts" for="listedParts${i}">
              <div class="row" style="width: 100%;">
                  <div class="col-sm-3 part-img-bg">
                      <img class="part-img" src="${x.img}" alt="${x.name}">                                                                            <!-- Kép -->
                  </div>
                  <div class="col-sm-8">
                      <h5 style="text-align: start; width: 100%;" class="part-name">${x.name} <span class="badge bg-primary">${x.integrated}</span></h5>             <!-- Alkatrész neve -->
                      <table style="width: 100%;">
                        <tr><td><span class="badge bg-light  price">Performance score: ${x.score}</span></td> <td class="price"><span class="badge bg-light price">${x.price} Ft</span> <span class="badge bg-danger">${x.discount}</span></td></tr>   <!-- performance score és ár (bootstrap badge-ben vannak) -->
                      </table>
                      <table style="width: 100%;">
                        <tr><td>${x.cores} cores</td><td>${x.speed}</td><td>${x.socket}</td><td>${x.power}W</td></tr> 
                      </table>
                  </div>
              </div>
          </label><br>`
          i++;
        }
      });
      break;
  
    case "videocards":
      if (currentBuild.processor.integrated == "GPU") 
      {
        if (videocards[0].price != 0) 
        {
          switch (currentBuild.processor.socket[0]) 
          {
              case "L":
                  videocards.unshift(new videocard(2,"Intel HD Graphics",0,"",0,0,0,"",0,"","Integrated GPU","Images/Parts/intelgraphics.png","intel"));
                break;
              case "A":
                  videocards.unshift(new videocard(2,"AMD Radeon Graphics",0,"",0,0,0,"",0,"","Integrated GPU","Images/Parts/radeongraphics.png","amd"));
                break;
            
              default:
                break;
          }
        }
      }
      if (currentBuild.processor.integrated != "GPU" && videocards[0].price == 0) 
      {
        videocards.shift();
      }

      videocards.forEach(x => {
        if ((localStorage.getItem("Type") == x.type || parseInt(localStorage.getItem("Type"))+1 == x.type) && activeFilters.includes(x.brand)) //szűrő
        {
          document.getElementById("partsList").innerHTML += 
          `<input type="radio" class="btn-check listedParts-button" name="listedParts" id="listedParts${i}" autocomplete="off" value="${x.name}" onchange="">
          <label class="btn btn-outline-light p-0 listedParts" for="listedParts${i}">
              <div class="row" style="width: 100%;">
                  <div class="col-sm-3 part-img-bg">
                      <img class="part-img" src="${x.img}" alt="${x.name}">                                                                            <!-- Kép -->
                  </div>
                  <div class="col-sm-8">
                      <h5 style="text-align: start; width: 100%;" class="part-name">${x.name} <span class="badge bg-primary rgb">${x.rgb}</span></h5>             <!-- Alkatrész neve -->
                      <table style="width: 100%;">
                        <tr><td><span class="badge bg-light  price">${x.gpumemory} GB</span></td> <td><span class="badge bg-light  price">Performance score: ${x.score}</span></td> <td class="price"><span class="badge bg-light price">${x.price} Ft</span> <span class="badge bg-danger">${x.discount}</span></td></tr>   <!-- performance score és ár (bootstrap badge-ben vannak) -->
                      </table>
                      <table style="width: 100%;">
                        <tr><td>${x.gpumemorytype}</td><td>${x.gpuspeed} MHz</td><td>${x.bit} bit</td><td>${x.power}W</td></tr> 
                      </table>
                  </div>
              </div>
          </label><br>`
          i++;
        }
      }
      );
      break;

      case "memorys":
        memorys.forEach(x => {
          if (x.gen == currentBuild.motherboard.ram && x.sticks <= currentBuild.motherboard.ramslots && (localStorage.getItem("Type") == x.type || parseInt(localStorage.getItem("Type"))+1 == x.type))  //szűrő
          {
            document.getElementById("partsList").innerHTML += 
            `<input type="radio" class="btn-check listedParts-button" name="listedParts" id="listedParts${i}" autocomplete="off" value="${x.name}" onchange="">
            <label class="btn btn-outline-light p-0 listedParts" for="listedParts${i}">
                <div class="row" style="width: 100%;">
                    <div class="col-sm-3 part-img-bg">
                        <img class="part-img" src="${x.img}" alt="${x.name}">                                                                            <!-- Kép -->
                    </div>
                    <div class="col-sm-8">
                        <h5 style="text-align: start; width: 100%;" class="part-name">${x.name} <span class="badge bg-primary rgb">${x.rgb}</span></h5>             <!-- Alkatrész neve -->
                        <table style="width: 100%;">
                          <tr><td><span class="badge bg-light  price">${x.memory} GB</span></td> <td><span class="badge bg-light  price">Performance score: ${x.score}</span></td> <td class="price"><span class="badge bg-light price">${x.price} Ft</span> <span class="badge bg-danger">${x.discount}</span></td></tr>   <!-- performance score és ár (bootstrap badge-ben vannak) -->
                        </table>
                        <table style="width: 100%;">
                          <tr><td>${x.sticks}x${x.memory/x.sticks} GB</td><td>${x.speed} MHz</td><td>${x.gen}</td></tr> 
                        </table>
                    </div>
                </div>
            </label><br>`
            i++;
          }
        });
        break;

        case "storage":
          storages.forEach(x => {
            if (activeFilters.includes(x.brand))  //szűrő
            {
              document.getElementById("partsList").innerHTML += 
              `<input type="radio" class="btn-check listedParts-button" name="listedParts" id="listedParts${i}" autocomplete="off" value="${x.name}" onchange="">
              <label class="btn btn-outline-light p-0 listedParts" for="listedParts${i}">
                  <div class="row" style="width: 100%;">
                      <div class="col-sm-3 part-img-bg">
                          <img class="part-img" src="${x.img}" alt="${x.name}">                                                                            <!-- Kép -->
                      </div>
                      <div class="col-sm-8">
                          <h5 style="text-align: start; width: 100%;" class="part-name">${x.name}</h5>             <!-- Alkatrész neve -->
                          <table style="width: 100%;">
                            <tr><td>${x.size}</td><td>${x.col}</td><td class="price"><span class="badge bg-light price">${x.price} Ft</span> <span class="badge bg-danger">${x.discount}</span></td></tr>   <!-- performance score és ár (bootstrap badge-ben vannak) -->
                          </table>
                      </div>
                  </div>
              </label><br>`
              i++;
            }
          });
          break;

        case "coolers":

          if (coolers[0].power == 65) 
          {
            coolers.shift();
          }

          if (currentBuild.processor.power <= 65)
          {
            if (currentBuild.processor.socket == "AM4" || currentBuild.processor.socket == "AM5") 
            {
              coolers.unshift(new cooler("AMD 712-000071 Wraith Stealth",4000,"",65,"20db","","Images/Parts/clr8.png",""));
            }
            if (currentBuild.processor.socket == "LGA1200") 
            {
              coolers.unshift(new cooler("Intel LGA115X/LGA1200",4000,"",65,"20db","","Images/Parts/clr9.png",""));
            }
            if (currentBuild.processor.socket == "LGA1700") 
            {
              coolers.unshift(new cooler("VT-STAR Intel M23901-001",4000,"",65,"20db","","Images/Parts/clr10.png",""));
            }
          }
    
          coolers.forEach(x => {
            if (currentBuild.processor.power * 2 - 80 <= x.power && currentBuild.processor.power * 2 + 20 >= x.power) //szűrő
            {
              document.getElementById("partsList").innerHTML += 
              `<input type="radio" class="btn-check listedParts-button" name="listedParts" id="listedParts${i}" autocomplete="off" value="${x.name}" onchange="">
              <label class="btn btn-outline-light p-0 listedParts" for="listedParts${i}">
                  <div class="row" style="width: 100%;">
                      <div class="col-sm-3 part-img-bg">
                          <img class="part-img" src="${x.img}" alt="${x.name}">                                                                            <!-- Kép -->
                      </div>
                      <div class="col-sm-8">
                      <h5 style="text-align: start; width: 100%;" class="part-name">${x.name} <span class="badge bg-primary rgb">${x.rgb}</span></h5>             <!-- Alkatrész neve -->
                          <table style="width: 100%;">
                            <tr><td>${x.power} W tdp</td><td>${x.noise}</td><td class="price"><span class="badge bg-light price">${x.price} Ft</span> <span class="badge bg-danger">${x.discount}</span></td></tr>   <!-- performance score és ár (bootstrap badge-ben vannak) -->
                          </table>
                      </div>
                  </div>
              </label><br>`
              i++;
            }
          }
          );
          break;

        case "powersupplies":
          powersupplies.forEach(x => {
            if ((x.power > (currentBuild.processor.power * 2 + currentBuild.videocard.power + currentBuild.pccase.fans * 10) * 1.25 && x.power < (currentBuild.processor.power * 2 + currentBuild.videocard.power + currentBuild.pccase.fans * 10) * 2) || ((currentBuild.processor.power * 2 + currentBuild.videocard.power + currentBuild.pccase.fans * 10) * 1.25 <= 400 && x.power <= 600))  //szűrő
            {
              document.getElementById("partsList").innerHTML += 
              `<input type="radio" class="btn-check listedParts-button" name="listedParts" id="listedParts${i}" autocomplete="off" value="${x.name}" onchange="">
              <label class="btn btn-outline-light p-0 listedParts" for="listedParts${i}">
                  <div class="row" style="width: 100%;">
                      <div class="col-sm-3 part-img-bg">
                          <img class="part-img" src="${x.img}" alt="${x.name}">                                                                            <!-- Kép -->
                      </div>
                      <div class="col-sm-8">
                          <h5 style="text-align: start; width: 100%;" class="part-name">${x.name} <span class="badge bg-primary rgb">${x.rgb}</span></h5>             <!-- Alkatrész neve -->
                          <table style="width: 100%;">
                            <tr><td>${x.power} W</td><td>${x.efficency}</td><td class="price"><span class="badge bg-light price">${x.price} Ft</span> <span class="badge bg-danger">${x.discount}</span></td></tr>   <!-- performance score és ár (bootstrap badge-ben vannak) -->
                          </table>
                      </div>
                  </div>
              </label><br>`
              i++;
            }
          });
          break;

    default:
      break;
  }
  if (document.getElementById("partsList").innerHTML == "") {
    document.getElementById("partsList").innerHTML = `<h3 style="color: rgb(27, 27, 27); font-weight: bolder; text-align: center; margin-top: 200px; margin-left: auto; margin-right: auto;">NEM TALÁLHATÓ AT<br>MEGADOTT PARAMÉTEREKNEK<br>MEGFELELŐ TERMÉK</h3>`
  }
}



function typeOffice()
{
  if (!currentBuild.motherboard.hasOwnProperty('name') && !currentBuild.pccase.hasOwnProperty('name')) 
  {
    localStorage.setItem("Type",1)
    localStorage.setItem("stage",0)
    location.replace("assembly.html")
  }
  else
  {
    document.getElementById("home-error").innerHTML =
    `
    <div class="card text-bg-dark" style="background-color: rgb(36, 36, 36);">
      <div class="card-body">
        <h5 class="card-title">Már van egy megkezdett számítógéped!</h5>
        <p class="card-text">A <span class="badge bg-danger">Tovább</span> gombra kattintva a jelenlegi számítógéped törlésre kerül, és újat tudsz kezdeni.</p>
        <a href="#" class="btn btn-danger" onclick="forceOffice()">Tovább</a>
        <a href="#" class="btn btn-secondary" onclick="cancelForce()">Mégse</a>
      </div>
    </div>
    `
  }
}

function typeHome()
{
  if (!currentBuild.motherboard.hasOwnProperty('name') && !currentBuild.pccase.hasOwnProperty('name')) 
  {
    localStorage.setItem("Type",2)
    localStorage.setItem("stage",0)
    location.replace("assembly.html")
  }
  else
  {
    document.getElementById("home-error").innerHTML =
    `
    <div class="card text-bg-dark" style="background-color: rgb(36, 36, 36);">
      <div class="card-body">
        <h5 class="card-title">Már van egy megkezdett számítógéped!</h5>
        <p class="card-text">A <span class="badge bg-danger">Tovább</span> gombra kattintva a jelenlegi számítógéped törlésre kerül, és újat tudsz kezdeni.</p>
        <a href="#" class="btn btn-danger" onclick="forceHome()">Tovább</a>
        <a href="#" class="btn btn-secondary" onclick="cancelForce()">Mégse</a>
      </div>
    </div>
    `
  }
}
function typeGaming()
{
  if (!currentBuild.motherboard.hasOwnProperty('name') && !currentBuild.pccase.hasOwnProperty('name')) 
  {
    localStorage.setItem("Type",3)
    localStorage.setItem("stage",0)
    location.replace("assembly.html")
  }
  else
  {
    document.getElementById("home-error").innerHTML =
    `
    <div class="card text-bg-dark" style="background-color: rgb(36, 36, 36);">
      <div class="card-body">
        <h5 class="card-title">Már van egy megkezdett számítógéped!</h5>
        <p class="card-text">A <span class="badge bg-danger">Tovább</span> gombra kattintva a jelenlegi számítógéped törlésre kerül, és újat tudsz kezdeni.</p>
        <a href="#" class="btn btn-danger" onclick="forceGaming()">Tovább</a>
        <a href="#" class="btn btn-secondary" onclick="cancelForce()">Mégse</a>
      </div>
    </div>
    `
  }
}

function cancelForce() {
  document.getElementById("home-error").innerHTML = ""
}

function forceOffice() 
{
  Reset()
  localStorage.setItem("Type",1)
  localStorage.setItem("stage",0)
  location.replace("assembly.html")
}

function forceHome() 
{
  Reset()
  localStorage.setItem("Type",2)
  localStorage.setItem("stage",0)
  location.replace("assembly.html")
}

function forceGaming() 
{
  Reset()
  localStorage.setItem("Type",3)
  localStorage.setItem("stage",0)
  location.replace("assembly.html")
}

function enableAssembly() {
  if (currentBuild.motherboard.hasOwnProperty('name') || currentBuild.pccase.hasOwnProperty('name')) 
  {
    document.getElementById("navbar-assembly").classList.remove("disabled")
    document.getElementById("navbar-assembly").classList.add("active")
  }
}


function createFilters() 
{
  let filters = [];
  document.getElementById("partsList").innerHTML = " ";
  for (let i = 0; i < partSelect.length; i++) 
  {
      if (partSelect[i].checked) {
          selectedOption = partSelect[i].value;
          break;
      }
  }
  switch (selectedOption) 
  {
    case"motherboards":
      document.getElementById("partFilters").innerHTML =
      `
      <td>
        <input type="checkbox" class="btn-check filter-btn" id="btn-check-2" value="intel" onclick="applyFilters()" checked>
        <label class="btn btn-outline-light mx-1" for="btn-check-2"><img src="Images/Assembly/intelcpu.png" alt="" style="width: 40px;"></label>
      </td>
      <td>
        <input type="checkbox" class="btn-check filter-btn" id="btn-check-3" value="amd" onclick="applyFilters()" checked>
        <label class="btn btn-outline-light mx-1" for="btn-check-3"><img src="Images/Assembly/ryzen.png" alt="" style="width: 40px;"></label>
      </td>
      `
        filters = document.getElementsByClassName("filter-btn");
        for (let i = 0; i < filters.length; i++)
        {
          if (!activeFilters.includes(filters[i].value)) {
            filters[i].checked = false;
          }
        }
      break;

    case "videocards":
      document.getElementById("partFilters").innerHTML =
      `
        <td>
          <input type="checkbox" class="btn-check filter-btn" id="btn-check-4" value="intel" onclick="applyFilters()" checked>
          <label class="btn btn-outline-light mx-1" for="btn-check-4"><img src="Images/Assembly/intelarc.png" alt="" style="width: 30px;"></label>
        </td>

        <td>
          <input type="checkbox" class="btn-check filter-btn" id="btn-check-5" value="nvidia" onclick="applyFilters()" checked>
          <label class="btn btn-outline-light mx-1" for="btn-check-5"><img src="Images/Assembly/nvidia.png" alt="" style="width: 30px;"></label>
        </td>

        <td>
          <input type="checkbox" class="btn-check filter-btn" id="btn-check-6" value="amd" onclick="applyFilters()" checked>
          <label class="btn btn-outline-light mx-1" for="btn-check-6"><img src="Images/Assembly/radeon.png" alt="" style="width: 30px;"></label>
        </td>
      `
      filters = document.getElementsByClassName("filter-btn");
      for (let i = 0; i < filters.length; i++)
      {
        if (!activeFilters.includes(filters[i].value)) {
          filters[i].checked = false;
        }
      }
      break;

      case "storage":
        document.getElementById("partFilters").innerHTML =
        `
          <td>
            <input type="checkbox" class="btn-check filter-btn" id="btn-check-7" value="HDD" onclick="applyFilters()" checked>
            <label class="btn btn-outline-light mx-1 fw-bold" for="btn-check-7">HDD</label>
          </td>
  
          <td>
            <input type="checkbox" class="btn-check filter-btn" id="btn-check-8" value="SSD" onclick="applyFilters()" checked>
            <label class="btn btn-outline-light mx-1 fw-bold" for="btn-check-8">SSD</label>
          </td>
        `
        filters = document.getElementsByClassName("filter-btn");
        for (let i = 0; i < filters.length; i++)
        {
          if (!activeFilters.includes(filters[i].value)) {
            filters[i].checked = false;
          }
        }
        break;

    default:
      document.getElementById("partFilters").innerHTML = ""
      break;
  }
}


function applyFilters()
{
  activeFilters = []
  let filters = document.getElementsByClassName("filter-btn");
  for (let i = 0; i < filters.length; i++)
  {
    if (filters[i].checked) {
      activeFilters.push(filters[i].value)
    }
  }
  listParts()
}


function addToCart(name,img,price) 
{
  let duplicate = false;
  if (cart.length > 0) {
    cart.forEach(x => {
      if (x.name == name) {
        x.amount++
        duplicate = true;
      }
    });
  }
  if (!duplicate) {
    cart.push(new item(name,img,price,1))
  }
  CloseNotification()
  document.getElementById("cartNotification").innerHTML =
  `
  <div class="card notification" style="width: fit-content; position: fixed;">
    <div class="row">
      <div class="col-4" style="width: fit-content">
        <img src="${img}" class="img-fluid rounded-start part-img position-relative top-50 start-50 translate-middle part-img-bg" alt="...">
      </div>
      <div class="col-8"  style="width: 360px">
        <div class="card-body"  data-bs-theme="dark" style="background-color: rgb(26, 26, 26); border-top-right-radius: 5px; border-bottom-right-radius: 5px; color: white;">
          <button type="button" class="btn-close" aria-label="Close" style="position: fixed; bottom: 87px; right: 1px; background-color: white; border-top-left-radius: 0px; border-bottom-right-radius: 0px; opacity: 1" onclick="CloseNotification()"></button>
          <h5 class="card-title">Termék Hozzáadava a kosárhoz</h5>
          <h6 class="card-text">${name}</h6>
          <h6 class="card-text text-danger">${price} Ft</h6>
        </div>
      </div>
    </div>
  </div>
  `
  let cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);

  countAmount()
}

function CloseNotification() {
  document.getElementById("cartNotification").innerHTML = ""
}

function emptyCart() {
  cart = [];
  let cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
  completedBuilds = [];
  let completedString = JSON.stringify(completedBuilds);
  localStorage.setItem("completed",completedString)
  openCart()
  console.log(cart);
  document.getElementById("itemsInCart").innerHTML = 0
}

function openCart() {
  document.getElementById("cartList").innerHTML = "";
  if (document.getElementById("cartBuilds").checked) 
  {
    if (completedBuilds.length > 0) {
      completedBuilds.forEach(x => 
        {
        document.getElementById("cartList").innerHTML +=
          `
            <div class="card my-1" style="width: 100%;">
              <div class="row">
                <div class="col-3" style="width: 25%">
                  <img src="${x.img}" class="img-fluid rounded-start part-img position-relative top-50 start-50 translate-middle part-img-bg" alt="..." style="height: auto; width: auto;">
                </div>
                <div class="col-9"  style="width: 75%;">
                  <div class="card-body"  data-bs-theme="dark" style="background-color: rgb(26, 26, 26); border-top-right-radius: 5px; border-bottom-right-radius: 5px; color: white;">
                    <h6 class="card-text">${x.name}</h6>
                    <h6 class="card-text text-danger">${x.price} Ft</h6>
                  </div>
                </div>
              </div>
            </div>
          `
        }
      )
    }
  }
  else
  {
    if (cart.length > 0) {
      cart.forEach(x => 
        {
        document.getElementById("cartList").innerHTML +=
          `
            <div class="card my-1" style="width: 100%;">
              <div class="row">
                <div class="col-3" style="width: 25%">
                  <img src="${x.img}" class="img-fluid rounded-start part-img position-relative top-50 start-50 translate-middle part-img-bg" alt="..." style="height: auto; width: auto;">
                </div>
                <div class="col-9"  style="width: 75%;">
                  <div class="card-body"  data-bs-theme="dark" style="background-color: rgb(26, 26, 26); border-top-right-radius: 5px; border-bottom-right-radius: 5px; color: white;">
                    <h6 class="card-text">${x.name} <span style="float: right;">${x.amount}x</span></h6>
                    <h6 class="card-text text-danger">${x.price} Ft</h6>
                  </div>
                </div>
              </div>
            </div>
          `
        }
      )
    }
  }

  let totalPrice = 0;
  cart.forEach(x => {
    totalPrice += x.price * x.amount;
  });
  completedBuilds.forEach(x => {
    totalPrice += x.price;
  });

  totalPrice = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  document.getElementById("finalPrice").innerHTML = totalPrice + " Ft"
}

function finishBuild() 
{
  if 
  (
    (
    currentBuild.pccase != "" &&
    currentBuild.motherboard != "" &&
    currentBuild.processor != "" &&
    currentBuild.videocard != "" &&
    currentBuild.memory != "" &&
    currentBuild.cooler != "" &&
    currentBuild.powersupply != ""
    ) &&
    currentBuild.storage1 != "" ||
    currentBuild.storage2 != "" ||
    currentBuild.storage3 != "" ||
    currentBuild.storage4 != ""
  ) 
  {
    price = countPrice()
    console.log(completedBuilds);
    completedBuilds.push(new item(`számítógép ${parseInt(completedBuilds.length + 1)}`, currentBuild.pccase.img, price, 1))
    let completedString = JSON.stringify(completedBuilds);
    localStorage.setItem("completed",completedString)
    Reset()
  }
  else
  {
    document.getElementById("feedback2").innerHTML =
    `
    <div class="alert alert-danger" role="alert">
        Nincs elegendő alkatrész kiválasztva hogy a kosárhoz lehessen adni a gépet!
    </div>
    `
  }
  
}

function countPrice() {
  price = 0
  for (let key in currentBuild) {
    if (currentBuild[key] && currentBuild[key].price !== null && !isNaN(parseFloat(currentBuild[key].price))) {
      let priceValue = parseFloat(currentBuild[key].price);
      price += priceValue;
    }
  }
  console.log(price);
  return price
}

function countAmount() {
  let totalAmount = 0;
  cart.forEach(x => {
    totalAmount += x.amount;
  });
  completedBuilds.forEach(x => {
    totalAmount += x.amount;
  });

  document.getElementById("itemsInCart").innerHTML = totalAmount
}



function listCategories() 
{
  document.getElementById("product-scroller").innerHTML = ""
  document.getElementById("product-categories").innerHTML = ""
  for (let i = 0; i < allParts.length; i++) 
  {

    document.getElementById("product-categories").innerHTML +=
    `
    <a class="nav-link product-type" href="${`#`+categoryIds[i]}"><h5>${categoryNames[i]}</h5></a>
    `
  }
  listProducts()
}

function listProducts() {

  document.getElementById("product-scroller").innerHTML = ""
  for (let i = 0; i < allParts.length; i++) 
  {
    document.getElementById("product-scroller").innerHTML +=
    `
      <div id="${categoryIds[i]}">
        <h4>${categoryNames[i]}</h4>
        <p id="${"product-"+categoryIds[i]}" class="product-list row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4"></p>
      </div>
    `
  }

  for (let i = 0; i < allParts.length; i++) 
  {
    allParts[i].forEach(x => 
      {
      if (range1.value < x.price && range2.value > x.price && (productFilters.includes(x.type) || x.type == undefined))
      {
      document.getElementById("product-"+categoryIds[i]).innerHTML +=
        `
        <div class="col mt-3">
        <div class="btn btn-outline-light p-0" style="position: relative; width: 100%; height: 200px">
          <div class="row" style="width: 100%;">
            <div class="col-12 part-img-bg" style="border-top-right-radius: 4px; border-top-left-radius: 4px">
              <img class="part-img" src="${x.img}" alt="${x.name}">
              <!-- Kép -->
            </div>
            <div>
              <h5><span class="badge bg-danger" style="position: absolute; top: 10px; right: 10px;">${x.discount}</span></h5>
            </div>
            <div class="col-12" style="overflow-x: clip; white-space: nowrap; margin-left: 10px;">
              <h5 style="text-align: center;" data-bs-toggle="tooltip" data-bs-placement="top" title="${x.name}">${x.name}</h5>
              <table style="margin: auto; vertical-align: baseline; bottom: 0px;">
                <tr>
                  <td><h5>${x.price} Ft</h5></td>
                  <td><button type="button" class="btn btn-success mb-2 ms-2 fw-medium" style="height: 40px;" onclick="addToCart('${x.name}', '${x.img}', ${x.price})">Kosárba</button></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      `
        }
      }
    );
  }
}


let range1;
let range2;
function createRange() {
  range1 = document.getElementById("range1");
  range2 = document.getElementById("range2");

  range1.addEventListener("input", updateValues);
  range2.addEventListener("input", updateValues);
  updateValues()
}

function updateValues() {
  const buffer = 20000;

  if (parseInt(range1.value) > parseInt(range2.value) - buffer) {
    range1.value = parseInt(range2.value) - buffer;
  }

  if (parseInt(range2.value) < parseInt(range1.value) + buffer) {
    range2.value = parseInt(range2.value) + buffer;
  }

  document.getElementById("range1text").innerHTML = "Minimum Ár: " + range1.value + " Ft"
  document.getElementById("range2text").innerHTML = "Maximum Ár: " + range2.value + " Ft"
}

function findMostExpensive() 
{
  maxPrice = 0;
  allParts.forEach(x => {
    x.forEach(y => {
      if (y.price > maxPrice) {
        maxPrice = y.price + 10000
      }
    });
  });
  document.getElementById("range2").value = maxPrice 
  document.getElementById("range1").max = maxPrice
  document.getElementById("range2").max = maxPrice
}

let productFilters = []
function applyProductFilters() {
  productFilters = []
  officeFilter = document.getElementById("filter-office")
  homeFilter = document.getElementById("filter-home")
  gamingFilter = document.getElementById("filter-gaming")
  let filters = [officeFilter, homeFilter, gamingFilter]

  filters.forEach(x => {
    if (x.checked) {
      productFilters.push(parseInt(x.value))
      productFilters.push(parseInt(x.value)+1)
    }
  });
  console.log(productFilters);
}



function productPageFunctions()
{
  findMostExpensive()
  createRange()
  applyProductFilters()
  listCategories()
}



countAmount()
enableAssembly()