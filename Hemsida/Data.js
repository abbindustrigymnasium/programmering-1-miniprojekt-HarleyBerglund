//The Json food data

let livsmedel = `[
    {
        "namn": "Nöt talg",
        "livsmedelsnummer": 1,
        "kolhydrater": 0,
        "fett": 71,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris späck",
        "livsmedelsnummer": 2,
        "kolhydrater": 0,
        "fett": 85,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris ister",
        "livsmedelsnummer": 3,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kokosfett",
        "livsmedelsnummer": 4,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Matfettsblandning havssaltat fett 80% berikad typ Bregott",
        "livsmedelsnummer": 5,
        "kolhydrater": 0.5,
        "fett": 80,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Matfettsblandning fett 60% berikad typ Bregott mellan",
        "livsmedelsnummer": 6,
        "kolhydrater": 0.5,
        "fett": 60,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Flytande margarin fett 82% berikad typ Milda culinesse",
        "livsmedelsnummer": 10,
        "kolhydrater": 0,
        "fett": 82,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hushållsmargarin fett 80% berikad typ Melba",
        "livsmedelsnummer": 12,
        "kolhydrater": 0.4,
        "fett": 80,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hushållsmargarin fett 80% berikad typ Milda",
        "livsmedelsnummer": 13,
        "kolhydrater": 0.5,
        "fett": 80,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lättmargarin fett 38% berikad typ Becel",
        "livsmedelsnummer": 17,
        "kolhydrater": 3,
        "fett": 38,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lättmargarin m. växtsterol 7,5% fett 35% berikad typ Becel proactiv",
        "livsmedelsnummer": 18,
        "kolhydrater": 2.5,
        "fett": 35,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lättmargarin fett 40% berikad typ Lätt & lagom",
        "livsmedelsnummer": 20,
        "kolhydrater": 6.2,
        "fett": 40,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Majonnäs fett 90% hemlagad",
        "livsmedelsnummer": 21,
        "kolhydrater": 0.41,
        "fett": 87.81,
        "fibrer": 0.07,
        "alkohol": 0
    },
    {
        "namn": "Sesamsås m. grädde",
        "livsmedelsnummer": 22,
        "kolhydrater": 3.78,
        "fett": 40.31,
        "fibrer": 0.61,
        "alkohol": 0.14
    },
    {
        "namn": "Gravlaxsås hovmästarsås hemlagad",
        "livsmedelsnummer": 23,
        "kolhydrater": 13.28,
        "fett": 42.35,
        "fibrer": 0.44,
        "alkohol": 0
    },
    {
        "namn": "Gravlaxsås kylvara",
        "livsmedelsnummer": 24,
        "kolhydrater": 13.1,
        "fett": 56,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Remouladsås",
        "livsmedelsnummer": 25,
        "kolhydrater": 1.07,
        "fett": 78.81,
        "fibrer": 0.27,
        "alkohol": 0
    },
    {
        "namn": "Dressing vinägrett fett 45%",
        "livsmedelsnummer": 26,
        "kolhydrater": 3.08,
        "fett": 44.23,
        "fibrer": 0.16,
        "alkohol": 0
    },
    {
        "namn": "Matfettsblandning fett 40% berikad typ Lätt & lagom omega-3",
        "livsmedelsnummer": 28,
        "kolhydrater": 5.5,
        "fett": 40,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Smör fett 80%",
        "livsmedelsnummer": 29,
        "kolhydrater": 0.5,
        "fett": 82,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Smör extrasaltat fett 80%",
        "livsmedelsnummer": 30,
        "kolhydrater": 0.48,
        "fett": 81.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Smör osaltat fett 80%",
        "livsmedelsnummer": 31,
        "kolhydrater": 0.48,
        "fett": 81.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Druvkärnolja",
        "livsmedelsnummer": 33,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Majsolja",
        "livsmedelsnummer": 34,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Olivolja",
        "livsmedelsnummer": 35,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Tistelolja",
        "livsmedelsnummer": 37,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sesamolja",
        "livsmedelsnummer": 38,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sojaolja",
        "livsmedelsnummer": 39,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Solrosolja",
        "livsmedelsnummer": 40,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vetegroddsolja",
        "livsmedelsnummer": 41,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Dressing konserv. fett ca 25%",
        "livsmedelsnummer": 42,
        "kolhydrater": 9.7,
        "fett": 25,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Dressing till sallad m. majonnäs fett ca 25% kylvara",
        "livsmedelsnummer": 45,
        "kolhydrater": 19.7,
        "fett": 25,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Dressing fett 0%",
        "livsmedelsnummer": 49,
        "kolhydrater": 13.1,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Majonnäs fett 80%",
        "livsmedelsnummer": 50,
        "kolhydrater": 5,
        "fett": 72.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gurkmajonnäs gurksallad gatukök",
        "livsmedelsnummer": 51,
        "kolhydrater": 10.9,
        "fett": 32,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Räkmajonnäs räksallad gatukök",
        "livsmedelsnummer": 52,
        "kolhydrater": 2.9,
        "fett": 48,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Majonnäs lätt fett 30%",
        "livsmedelsnummer": 53,
        "kolhydrater": 10.7,
        "fett": 30.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mimosasallad",
        "livsmedelsnummer": 55,
        "kolhydrater": 9.09,
        "fett": 11.75,
        "fibrer": 1.38,
        "alkohol": 0
    },
    {
        "namn": "Rödbetssallad m. gräddfil",
        "livsmedelsnummer": 56,
        "kolhydrater": 10.05,
        "fett": 2.02,
        "fibrer": 1.48,
        "alkohol": 0
    },
    {
        "namn": "Sallad m. skaldjur majonnäsdressing",
        "livsmedelsnummer": 57,
        "kolhydrater": 2.45,
        "fett": 8.54,
        "fibrer": 0.97,
        "alkohol": 0
    },
    {
        "namn": "Bearnaisesås hemlagad",
        "livsmedelsnummer": 58,
        "kolhydrater": 1.18,
        "fett": 54.44,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Hollandaisesås hemlagad",
        "livsmedelsnummer": 59,
        "kolhydrater": 0.71,
        "fett": 54.89,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rhode Islandsås hemlagad",
        "livsmedelsnummer": 60,
        "kolhydrater": 6.39,
        "fett": 36.73,
        "fibrer": 0.36,
        "alkohol": 0
    },
    {
        "namn": "Dressing vinägrett fett 65%",
        "livsmedelsnummer": 62,
        "kolhydrater": 2.2,
        "fett": 65,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Bearnaisesås tillagad frysvara el. pulver",
        "livsmedelsnummer": 63,
        "kolhydrater": 6.7,
        "fett": 21,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hollandaisesås tillagad frysvara el. pulver",
        "livsmedelsnummer": 64,
        "kolhydrater": 6.6,
        "fett": 22,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mesost fett ca 30% berikad",
        "livsmedelsnummer": 66,
        "kolhydrater": 39,
        "fett": 29,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Messmör fett 5% berikad",
        "livsmedelsnummer": 68,
        "kolhydrater": 46,
        "fett": 5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Messmör fett 2% berikad",
        "livsmedelsnummer": 69,
        "kolhydrater": 49,
        "fett": 2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Färskost cottage cheese naturell fett 4%",
        "livsmedelsnummer": 70,
        "kolhydrater": 1.9,
        "fett": 4.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Färskost cottage cheese m. frukt fett 3%",
        "livsmedelsnummer": 71,
        "kolhydrater": 9.1,
        "fett": 2.77,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Färskost cottage cheese m. grönsaker fett 3,5-5%",
        "livsmedelsnummer": 72,
        "kolhydrater": 0.9,
        "fett": 4.21,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Färskost m. filmjölk fett ca 8%",
        "livsmedelsnummer": 73,
        "kolhydrater": 2.9,
        "fett": 8.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Färskost m. filmjölk gräddfil fett ca 14% hemlagad",
        "livsmedelsnummer": 74,
        "kolhydrater": 3.1,
        "fett": 14.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kvarg färskost fett 1%",
        "livsmedelsnummer": 75,
        "kolhydrater": 3.6,
        "fett": 1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kvarg färskost fett 10%",
        "livsmedelsnummer": 76,
        "kolhydrater": 2.9,
        "fett": 10,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost hårdost fett 10%",
        "livsmedelsnummer": 77,
        "kolhydrater": 1.5,
        "fett": 10,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost hårdost fett 23%",
        "livsmedelsnummer": 78,
        "kolhydrater": 0.8,
        "fett": 23,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost hårdost fett 26%",
        "livsmedelsnummer": 79,
        "kolhydrater": 1.4,
        "fett": 26,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost hårdost fett 38%",
        "livsmedelsnummer": 80,
        "kolhydrater": 1.2,
        "fett": 38,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Camembert vitmögelost fett 23%",
        "livsmedelsnummer": 81,
        "kolhydrater": 0,
        "fett": 22.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ädelost grönmögelost fett 30%",
        "livsmedelsnummer": 82,
        "kolhydrater": 1.5,
        "fett": 30.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mjukost smältost fett 8%",
        "livsmedelsnummer": 83,
        "kolhydrater": 0.5,
        "fett": 8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mjukost smältost fett 10%",
        "livsmedelsnummer": 84,
        "kolhydrater": 0.3,
        "fett": 10.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mjukost smältost fett 20%",
        "livsmedelsnummer": 85,
        "kolhydrater": 0.1,
        "fett": 20.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mjukost smältost fett ca 16%",
        "livsmedelsnummer": 86,
        "kolhydrater": 1.5,
        "fett": 15.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mjukost smältost fett 4%",
        "livsmedelsnummer": 87,
        "kolhydrater": 2,
        "fett": 4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Brieost vitmögelost fett 34%",
        "livsmedelsnummer": 92,
        "kolhydrater": 2.1,
        "fett": 34,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ädelost grönmögelost fett 17%",
        "livsmedelsnummer": 93,
        "kolhydrater": 0.9,
        "fett": 20.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Salladsost fett 22%",
        "livsmedelsnummer": 94,
        "kolhydrater": 2.1,
        "fett": 22.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost hårdost fett 17%",
        "livsmedelsnummer": 95,
        "kolhydrater": 1.5,
        "fett": 17,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost hårdost fett 28%",
        "livsmedelsnummer": 96,
        "kolhydrater": 3,
        "fett": 27.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost hårdost fett 31%",
        "livsmedelsnummer": 97,
        "kolhydrater": 3.3,
        "fett": 31.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Brieost vitmögelost fett 30%",
        "livsmedelsnummer": 98,
        "kolhydrater": 2.8,
        "fett": 30.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost halloumi rå fett 22%",
        "livsmedelsnummer": 100,
        "kolhydrater": 1.9,
        "fett": 21.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Färskost fett 33%",
        "livsmedelsnummer": 101,
        "kolhydrater": 2.4,
        "fett": 33,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Grönmögelost fett 43%",
        "livsmedelsnummer": 102,
        "kolhydrater": 2.5,
        "fett": 43,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost hårdost parmesan fett 30%",
        "livsmedelsnummer": 103,
        "kolhydrater": 3.8,
        "fett": 30,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Färskost m. vitlök fett 35%",
        "livsmedelsnummer": 104,
        "kolhydrater": 3.5,
        "fett": 35,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Camembert vitmögelost fett 11%",
        "livsmedelsnummer": 105,
        "kolhydrater": 0.2,
        "fett": 11,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mjukost smältost fett ca 22%",
        "livsmedelsnummer": 106,
        "kolhydrater": 8.2,
        "fett": 22.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Färskost cream cheese fett 27%",
        "livsmedelsnummer": 107,
        "kolhydrater": 2.4,
        "fett": 27.34,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Färskost cream cheese lätt fett 15%",
        "livsmedelsnummer": 108,
        "kolhydrater": 3.4,
        "fett": 16,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Färskost cream cheese extra light fett 5%",
        "livsmedelsnummer": 109,
        "kolhydrater": 4.7,
        "fett": 5.29,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Camembert vitmögelost friterad",
        "livsmedelsnummer": 110,
        "kolhydrater": 15.85,
        "fett": 21.01,
        "fibrer": 0.96,
        "alkohol": 0
    },
    {
        "namn": "Getost chèvre vitmögelost fett 25%",
        "livsmedelsnummer": 111,
        "kolhydrater": 1.4,
        "fett": 28.95,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Bröstmjölk humanmjölk",
        "livsmedelsnummer": 113,
        "kolhydrater": 8.68,
        "fett": 3.13,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Filmjölk fett 3% berikad",
        "livsmedelsnummer": 114,
        "kolhydrater": 4.6,
        "fett": 2.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kondenserad mjölk konserv. fett ca 8%",
        "livsmedelsnummer": 115,
        "kolhydrater": 10,
        "fett": 7.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kondenserad mjölk konserv. konc. sockrad fett ca 9%",
        "livsmedelsnummer": 116,
        "kolhydrater": 54.6,
        "fett": 8.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mjölkpulver fett 1%",
        "livsmedelsnummer": 118,
        "kolhydrater": 51.98,
        "fett": 0.77,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Filmjölk långfil fett 3%",
        "livsmedelsnummer": 119,
        "kolhydrater": 4.84,
        "fett": 3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lättfil fett 0,5%",
        "livsmedelsnummer": 120,
        "kolhydrater": 5.03,
        "fett": 0.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Milkshake choklad jordgubb",
        "livsmedelsnummer": 122,
        "kolhydrater": 10.9,
        "fett": 3.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mjölk fett 3% berikad",
        "livsmedelsnummer": 123,
        "kolhydrater": 4.7,
        "fett": 3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Yoghurt naturell fett 3%",
        "livsmedelsnummer": 124,
        "kolhydrater": 4.5,
        "fett": 2.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktyoghurt fett 2,5%",
        "livsmedelsnummer": 125,
        "kolhydrater": 15,
        "fett": 2.5,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Fruktyoghurt lätt fett 0,5%",
        "livsmedelsnummer": 126,
        "kolhydrater": 14.3,
        "fett": 0.5,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Mjölk fett 4,2% typ lantmjölk",
        "livsmedelsnummer": 127,
        "kolhydrater": 4.8,
        "fett": 4.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Filmjölk A-fil fett 3%",
        "livsmedelsnummer": 128,
        "kolhydrater": 4.84,
        "fett": 3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mellanfil fett 1,5%",
        "livsmedelsnummer": 130,
        "kolhydrater": 4.98,
        "fett": 1.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mjölkdryck jordgubb fett 1,5% berikad",
        "livsmedelsnummer": 133,
        "kolhydrater": 5.2,
        "fett": 1.72,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Yoghurt naturell lätt fett 0,5%",
        "livsmedelsnummer": 135,
        "kolhydrater": 5.5,
        "fett": 0.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktyoghurt fett 2%",
        "livsmedelsnummer": 136,
        "kolhydrater": 15,
        "fett": 2,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Fruktyoghurt delikatessyoghurt fett 7%",
        "livsmedelsnummer": 137,
        "kolhydrater": 14,
        "fett": 7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktyoghurt lätt fett<0,05%",
        "livsmedelsnummer": 138,
        "kolhydrater": 8.8,
        "fett": 0.05,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktyoghurt fett 5%",
        "livsmedelsnummer": 139,
        "kolhydrater": 14.6,
        "fett": 5.07,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktyoghurt fett 1,3%",
        "livsmedelsnummer": 140,
        "kolhydrater": 13,
        "fett": 1.35,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kefir fett 3%",
        "livsmedelsnummer": 142,
        "kolhydrater": 4.84,
        "fett": 3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Yoghurt mild vanilj lätt fett 0,5%  ",
        "livsmedelsnummer": 147,
        "kolhydrater": 9.92,
        "fett": 0.48,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mellanmjölk fett 1,5% berikad",
        "livsmedelsnummer": 150,
        "kolhydrater": 4.8,
        "fett": 1.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lättmjölk fett 0,5% berikad",
        "livsmedelsnummer": 151,
        "kolhydrater": 4.8,
        "fett": 0.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vassle flytande",
        "livsmedelsnummer": 152,
        "kolhydrater": 5.12,
        "fett": 0.09,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Filbunke m. grädde",
        "livsmedelsnummer": 154,
        "kolhydrater": 4.85,
        "fett": 3.55,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Varm choklad m. mjölk fett 3%",
        "livsmedelsnummer": 156,
        "kolhydrater": 10.38,
        "fett": 3.12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Varm choklad m. mjölk fett 1,5%",
        "livsmedelsnummer": 157,
        "kolhydrater": 10.48,
        "fett": 1.66,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Varm choklad m. mjölk fett 0,5%",
        "livsmedelsnummer": 158,
        "kolhydrater": 10.49,
        "fett": 0.68,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer 15,5% typ Husman",
        "livsmedelsnummer": 162,
        "kolhydrater": 64.4,
        "fett": 2.5,
        "fibrer": 15.5,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer ca 18% typ Ryvita mörkt",
        "livsmedelsnummer": 163,
        "kolhydrater": 57.6,
        "fett": 2.5,
        "fibrer": 17.6,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn vete m. vallmofrö fibrer 5,5%",
        "livsmedelsnummer": 164,
        "kolhydrater": 68.9,
        "fett": 7.1,
        "fibrer": 5.5,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer 14,5% typ Vika",
        "livsmedelsnummer": 165,
        "kolhydrater": 63.3,
        "fett": 2.4,
        "fibrer": 14.5,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer 16% typ Finn crisp",
        "livsmedelsnummer": 166,
        "kolhydrater": 62.8,
        "fett": 2,
        "fibrer": 16,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer ca 15% typ flatbröd",
        "livsmedelsnummer": 167,
        "kolhydrater": 68,
        "fett": 2,
        "fibrer": 15.4,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd glutenfritt fibrer ca 7%",
        "livsmedelsnummer": 168,
        "kolhydrater": 71.1,
        "fett": 2,
        "fibrer": 7,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer ca 13%",
        "livsmedelsnummer": 169,
        "kolhydrater": 65.7,
        "fett": 2.6,
        "fibrer": 13.2,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg kli fibrer ca 15%",
        "livsmedelsnummer": 170,
        "kolhydrater": 63.9,
        "fett": 2.5,
        "fibrer": 15.1,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer ca 14% typ råg-rut",
        "livsmedelsnummer": 171,
        "kolhydrater": 65.3,
        "fett": 2.57,
        "fibrer": 14.2,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer 15,5% typ brungräddat",
        "livsmedelsnummer": 172,
        "kolhydrater": 63.5,
        "fett": 2.4,
        "fibrer": 15.5,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer ca 16% typ sport",
        "livsmedelsnummer": 173,
        "kolhydrater": 62.1,
        "fett": 1.9,
        "fibrer": 16.3,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg m. sesamfrö vetekli vetegroddar fibrer 24%",
        "livsmedelsnummer": 174,
        "kolhydrater": 45.3,
        "fett": 8.2,
        "fibrer": 24,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer 15,5% typ delikatess",
        "livsmedelsnummer": 175,
        "kolhydrater": 64.7,
        "fett": 2,
        "fibrer": 15.5,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn havre vete råg m. mjölk fibrer 8%",
        "livsmedelsnummer": 178,
        "kolhydrater": 61.7,
        "fett": 6.8,
        "fibrer": 8,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd vete m. vallmofrö fibrer 6% typ frukost",
        "livsmedelsnummer": 180,
        "kolhydrater": 67.7,
        "fett": 8.5,
        "fibrer": 6,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd vete m. socker kanel fibrer ca 7%",
        "livsmedelsnummer": 181,
        "kolhydrater": 67.7,
        "fett": 7.8,
        "fibrer": 6.7,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd glutenfritt fibrer ca 3%",
        "livsmedelsnummer": 182,
        "kolhydrater": 69.1,
        "fett": 6.5,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn vete havre kli m. socker örtkryddor fibrer 10,5%",
        "livsmedelsnummer": 183,
        "kolhydrater": 60.9,
        "fett": 8.4,
        "fibrer": 10.5,
        "alkohol": 0
    },
    {
        "namn": "Bröd fullkorn korn fibrer 3%",
        "livsmedelsnummer": 185,
        "kolhydrater": 40.17,
        "fett": 4.99,
        "fibrer": 3.13,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt fullkorn graham typ scones",
        "livsmedelsnummer": 186,
        "kolhydrater": 37.99,
        "fett": 10.88,
        "fibrer": 3.98,
        "alkohol": 0
    },
    {
        "namn": "Bröd fullkorn råg fibrer ca 10% typ pumpernickel",
        "livsmedelsnummer": 187,
        "kolhydrater": 40.8,
        "fett": 1.6,
        "fibrer": 9.9,
        "alkohol": 0
    },
    {
        "namn": "Ströbröd malt hårt bröd fullkorn vete råg socker fibrer ca 5%",
        "livsmedelsnummer": 188,
        "kolhydrater": 72.6,
        "fett": 6,
        "fibrer": 4.9,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer ca 14% typ normalgräddat",
        "livsmedelsnummer": 190,
        "kolhydrater": 66,
        "fett": 2,
        "fibrer": 13.9,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg vete majs m. surdeg fibrer 15% typ spisbröd",
        "livsmedelsnummer": 191,
        "kolhydrater": 63.4,
        "fett": 1.76,
        "fibrer": 14.9,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt vete vatten fibrer ca 3,5% typ pitabröd",
        "livsmedelsnummer": 193,
        "kolhydrater": 53.64,
        "fett": 1.58,
        "fibrer": 3.4,
        "alkohol": 0
    },
    {
        "namn": "Korvbröd",
        "livsmedelsnummer": 194,
        "kolhydrater": 51.15,
        "fett": 4.14,
        "fibrer": 4.19,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer ca 14% typ brungräddat",
        "livsmedelsnummer": 195,
        "kolhydrater": 65.5,
        "fett": 2.6,
        "fibrer": 14.4,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt osötat fibrer ca 2,5% typ italienskt",
        "livsmedelsnummer": 198,
        "kolhydrater": 50.16,
        "fett": 1.4,
        "fibrer": 2.45,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt vete fibrer ca 2,5% typ baguette",
        "livsmedelsnummer": 200,
        "kolhydrater": 53.2,
        "fett": 1.66,
        "fibrer": 2.59,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt fullkorn surdeg fibrer 4,4% bakad i butik typ grov baguette",
        "livsmedelsnummer": 201,
        "kolhydrater": 51.7,
        "fett": 1.22,
        "fibrer": 4.4,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt fibrer 3,5%",
        "livsmedelsnummer": 202,
        "kolhydrater": 47.7,
        "fett": 3.61,
        "fibrer": 3.5,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt mjölk fibrer ca 3% typ Hönökaka",
        "livsmedelsnummer": 204,
        "kolhydrater": 56.67,
        "fett": 3.11,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt vete typ scones",
        "livsmedelsnummer": 205,
        "kolhydrater": 38.12,
        "fett": 11.15,
        "fibrer": 3.5,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt vete ojäst fibrer 3% typ chapati",
        "livsmedelsnummer": 206,
        "kolhydrater": 44.06,
        "fett": 5.45,
        "fibrer": 3.31,
        "alkohol": 0
    },
    {
        "namn": "Bröd fullkorn rågsikt fibrer ca 7% typ kavring",
        "livsmedelsnummer": 207,
        "kolhydrater": 47.27,
        "fett": 4.74,
        "fibrer": 7.04,
        "alkohol": 0
    },
    {
        "namn": "Bröd osötat rågsikt fibrer ca 3,5%",
        "livsmedelsnummer": 208,
        "kolhydrater": 47.33,
        "fett": 3.15,
        "fibrer": 3.39,
        "alkohol": 0
    },
    {
        "namn": "Bröd rågsikt fibrer ca 4%",
        "livsmedelsnummer": 209,
        "kolhydrater": 51.41,
        "fett": 2.34,
        "fibrer": 3.8,
        "alkohol": 0
    },
    {
        "namn": "Bröd fullkorn graham m. mjölk fibrer ca 5%",
        "livsmedelsnummer": 210,
        "kolhydrater": 46.1,
        "fett": 5.2,
        "fibrer": 4.9,
        "alkohol": 0
    },
    {
        "namn": "Bröd fullkorn råg typ rallarhalvor",
        "livsmedelsnummer": 213,
        "kolhydrater": 46.1,
        "fett": 2.09,
        "fibrer": 8.46,
        "alkohol": 0
    },
    {
        "namn": "Bröd fullkorn råg osötat fibrer ca 5%",
        "livsmedelsnummer": 214,
        "kolhydrater": 46.11,
        "fett": 1.55,
        "fibrer": 5.03,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd tunnbröd fullkorn vete råg korn havre",
        "livsmedelsnummer": 216,
        "kolhydrater": 68.9,
        "fett": 3.5,
        "fibrer": 5.1,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt mjukt m. mjölk fibrer ca 4% typ tunnbröd",
        "livsmedelsnummer": 217,
        "kolhydrater": 52.43,
        "fett": 3.13,
        "fibrer": 3.83,
        "alkohol": 0
    },
    {
        "namn": "Bröd fullkorn råg m. potatis fibrer ca 5% ",
        "livsmedelsnummer": 219,
        "kolhydrater": 52.41,
        "fett": 1.44,
        "fibrer": 5.01,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt vatten fibrer ca 3% typ ostfralla",
        "livsmedelsnummer": 222,
        "kolhydrater": 47.21,
        "fett": 3.4,
        "fibrer": 3.11,
        "alkohol": 0
    },
    {
        "namn": "Riskaka fullkorn solrosfrön majs fett 4% ",
        "livsmedelsnummer": 224,
        "kolhydrater": 77.4,
        "fett": 4.37,
        "fibrer": 4.8,
        "alkohol": 0
    },
    {
        "namn": "Riskaka fullkorn smaksatt fett 18% ",
        "livsmedelsnummer": 225,
        "kolhydrater": 65.8,
        "fett": 18.08,
        "fibrer": 2.9,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt glutenfritt",
        "livsmedelsnummer": 226,
        "kolhydrater": 47.3,
        "fett": 3.62,
        "fibrer": 3.2,
        "alkohol": 0
    },
    {
        "namn": "Bröd mörkt glutenfritt",
        "livsmedelsnummer": 227,
        "kolhydrater": 46.2,
        "fett": 6.83,
        "fibrer": 5.52,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt typ croissant fransk giffel",
        "livsmedelsnummer": 229,
        "kolhydrater": 36.46,
        "fett": 21.61,
        "fibrer": 1.53,
        "alkohol": 0
    },
    {
        "namn": "Potatis höst rå",
        "livsmedelsnummer": 230,
        "kolhydrater": 16.8,
        "fett": 0.1,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Potatis höst kokt m. salt",
        "livsmedelsnummer": 231,
        "kolhydrater": 17.81,
        "fett": 0.1,
        "fibrer": 2.12,
        "alkohol": 0
    },
    {
        "namn": "Potatis m. skal bakad u. salt",
        "livsmedelsnummer": 233,
        "kolhydrater": 19.4,
        "fett": 0.1,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Potatis m. skal bakad u. salt i aluminiumfolie ",
        "livsmedelsnummer": 234,
        "kolhydrater": 18.1,
        "fett": 0.6,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Potatis tärnad frysvara",
        "livsmedelsnummer": 235,
        "kolhydrater": 17.3,
        "fett": 0.1,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Potatis konserv. u. lag",
        "livsmedelsnummer": 237,
        "kolhydrater": 12.2,
        "fett": 0.1,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Klyftpotatis u. skal ugnsstekt m. rapsolja",
        "livsmedelsnummer": 238,
        "kolhydrater": 23.1,
        "fett": 1.6,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Potatis råstekt",
        "livsmedelsnummer": 241,
        "kolhydrater": 20.68,
        "fett": 4.6,
        "fibrer": 2.71,
        "alkohol": 0
    },
    {
        "namn": "Potatis kokt stekt m. salt",
        "livsmedelsnummer": 242,
        "kolhydrater": 21.85,
        "fett": 4.59,
        "fibrer": 2.6,
        "alkohol": 0
    },
    {
        "namn": "Pommes frites friterad potatis värmd i ugn fett ca 7% frysvara",
        "livsmedelsnummer": 244,
        "kolhydrater": 31.99,
        "fett": 7.61,
        "fibrer": 3.2,
        "alkohol": 0
    },
    {
        "namn": "Pommes frites friterad potatis fett ca 11% frysvara",
        "livsmedelsnummer": 245,
        "kolhydrater": 30.6,
        "fett": 11.4,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Pommes frites friterad potatis fett ca 17% tillagad på restaurang",
        "livsmedelsnummer": 246,
        "kolhydrater": 32.6,
        "fett": 17.5,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Kroppkakor el. potatispalt m. fläsk",
        "livsmedelsnummer": 248,
        "kolhydrater": 22.8,
        "fett": 5.7,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Sjömansbiff hemlagad",
        "livsmedelsnummer": 250,
        "kolhydrater": 9.2,
        "fett": 2.6,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Lapskojs",
        "livsmedelsnummer": 252,
        "kolhydrater": 12.5,
        "fett": 4.11,
        "fibrer": 1.49,
        "alkohol": 0
    },
    {
        "namn": "Pitepalt",
        "livsmedelsnummer": 253,
        "kolhydrater": 25.14,
        "fett": 6.04,
        "fibrer": 2.62,
        "alkohol": 0
    },
    {
        "namn": "Bakad potatis m. kycklingcurryröra sallad",
        "livsmedelsnummer": 254,
        "kolhydrater": 7.1,
        "fett": 12.2,
        "fibrer": 2.98,
        "alkohol": 0
    },
    {
        "namn": "Pytt i panna tillagad frysvara",
        "livsmedelsnummer": 255,
        "kolhydrater": 23.3,
        "fett": 8.8,
        "fibrer": 2.9,
        "alkohol": 0
    },
    {
        "namn": "Sjömansbiff frysvara",
        "livsmedelsnummer": 256,
        "kolhydrater": 8.6,
        "fett": 2.3,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Janssons frestelse",
        "livsmedelsnummer": 257,
        "kolhydrater": 14.15,
        "fett": 10.68,
        "fibrer": 1.65,
        "alkohol": 0
    },
    {
        "namn": "Laxpudding",
        "livsmedelsnummer": 258,
        "kolhydrater": 9.55,
        "fett": 4.15,
        "fibrer": 1.13,
        "alkohol": 0
    },
    {
        "namn": "Sillpudding",
        "livsmedelsnummer": 259,
        "kolhydrater": 9.13,
        "fett": 6.2,
        "fibrer": 1.13,
        "alkohol": 0
    },
    {
        "namn": "Bakad potatis m. skagenröra sallad",
        "livsmedelsnummer": 260,
        "kolhydrater": 11.2,
        "fett": 10.84,
        "fibrer": 2.74,
        "alkohol": 0
    },
    {
        "namn": "Potatissallad m. gräddfil majonnäs",
        "livsmedelsnummer": 261,
        "kolhydrater": 14.18,
        "fett": 9.76,
        "fibrer": 1.69,
        "alkohol": 0
    },
    {
        "namn": "Potatissoppa m. purjolök",
        "livsmedelsnummer": 262,
        "kolhydrater": 6.58,
        "fett": 1.83,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Pytt i panna m. rotfrukt svamp veg.",
        "livsmedelsnummer": 263,
        "kolhydrater": 10.02,
        "fett": 3.06,
        "fibrer": 3.18,
        "alkohol": 0
    },
    {
        "namn": "Potatissallad m. vinägrettsås",
        "livsmedelsnummer": 264,
        "kolhydrater": 14.52,
        "fett": 4.8,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Potatismospulver berikad",
        "livsmedelsnummer": 265,
        "kolhydrater": 68.2,
        "fett": 4.3,
        "fibrer": 6.9,
        "alkohol": 0
    },
    {
        "namn": "Potatispalt",
        "livsmedelsnummer": 266,
        "kolhydrater": 23.8,
        "fett": 1.7,
        "fibrer": 5,
        "alkohol": 0
    },
    {
        "namn": "Potatis råstuvad hemlagad",
        "livsmedelsnummer": 268,
        "kolhydrater": 14,
        "fett": 1.2,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Potatisgratäng m. mjölk kaffegrädde ost hemlagad",
        "livsmedelsnummer": 270,
        "kolhydrater": 14.99,
        "fett": 5.88,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Raggmunk potatisplätt potatispannkaka hemlagad",
        "livsmedelsnummer": 271,
        "kolhydrater": 20,
        "fett": 5.5,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Potatis stuvad",
        "livsmedelsnummer": 272,
        "kolhydrater": 14.41,
        "fett": 2.49,
        "fibrer": 1.44,
        "alkohol": 0
    },
    {
        "namn": "Potatisbullar stekta",
        "livsmedelsnummer": 273,
        "kolhydrater": 22.52,
        "fett": 6.04,
        "fibrer": 2.45,
        "alkohol": 0
    },
    {
        "namn": "Potatismos hemlagad",
        "livsmedelsnummer": 274,
        "kolhydrater": 14.08,
        "fett": 2.2,
        "fibrer": 1.52,
        "alkohol": 0
    },
    {
        "namn": "Potatisgratäng m. mjölk ost hemlagad",
        "livsmedelsnummer": 275,
        "kolhydrater": 13.53,
        "fett": 3.11,
        "fibrer": 1.69,
        "alkohol": 0
    },
    {
        "namn": "Potatisgratäng m. vispgrädde ost",
        "livsmedelsnummer": 277,
        "kolhydrater": 12.94,
        "fett": 15.88,
        "fibrer": 1.69,
        "alkohol": 0
    },
    {
        "namn": "Potatismos m. lättmjölk",
        "livsmedelsnummer": 278,
        "kolhydrater": 14.07,
        "fett": 1.87,
        "fibrer": 1.52,
        "alkohol": 0
    },
    {
        "namn": "Potatisgratäng m. lättmjölk ost mager hemlagad",
        "livsmedelsnummer": 279,
        "kolhydrater": 13.46,
        "fett": 1.83,
        "fibrer": 1.68,
        "alkohol": 0
    },
    {
        "namn": "Bakad potatis m. färskoströra paprika veg.",
        "livsmedelsnummer": 280,
        "kolhydrater": 15.8,
        "fett": 0.94,
        "fibrer": 2.39,
        "alkohol": 0
    },
    {
        "namn": "Schweizisk potatiskaka rösti värmd frysvara",
        "livsmedelsnummer": 281,
        "kolhydrater": 23.4,
        "fett": 11.4,
        "fibrer": 4.2,
        "alkohol": 0
    },
    {
        "namn": "Potatiskrokett värmd frysvara",
        "livsmedelsnummer": 282,
        "kolhydrater": 23.9,
        "fett": 7,
        "fibrer": 3.6,
        "alkohol": 0
    },
    {
        "namn": "Potatismos pulver tillagat berikad",
        "livsmedelsnummer": 283,
        "kolhydrater": 12.5,
        "fett": 0.8,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Potatisgratäng m. grädde ost värmd frysvara",
        "livsmedelsnummer": 284,
        "kolhydrater": 13.16,
        "fett": 9.39,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksblandning m. morot palsternacka purjolök rotselleri frysvara",
        "livsmedelsnummer": 286,
        "kolhydrater": 5.3,
        "fett": 0.5,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Jordärtskocka",
        "livsmedelsnummer": 287,
        "kolhydrater": 12.9,
        "fett": 0,
        "fibrer": 4.5,
        "alkohol": 0
    },
    {
        "namn": "Kålrot",
        "livsmedelsnummer": 288,
        "kolhydrater": 6.1,
        "fett": 0.06,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Morot",
        "livsmedelsnummer": 289,
        "kolhydrater": 6.6,
        "fett": 0.24,
        "fibrer": 2.42,
        "alkohol": 0
    },
    {
        "namn": "Palsternacka",
        "livsmedelsnummer": 290,
        "kolhydrater": 12.6,
        "fett": 0.6,
        "fibrer": 3.76,
        "alkohol": 0
    },
    {
        "namn": "Pepparrot",
        "livsmedelsnummer": 291,
        "kolhydrater": 10.8,
        "fett": 0.6,
        "fibrer": 7.3,
        "alkohol": 0
    },
    {
        "namn": "Rotselleri",
        "livsmedelsnummer": 292,
        "kolhydrater": 4.4,
        "fett": 0.5,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Rädisa",
        "livsmedelsnummer": 293,
        "kolhydrater": 0.7,
        "fett": 0.4,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Rödbeta",
        "livsmedelsnummer": 294,
        "kolhydrater": 9.8,
        "fett": 0.1,
        "fibrer": 2.64,
        "alkohol": 0
    },
    {
        "namn": "Rättika",
        "livsmedelsnummer": 295,
        "kolhydrater": 2.5,
        "fett": 0.1,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Rotpersilja",
        "livsmedelsnummer": 296,
        "kolhydrater": 10.7,
        "fett": 0.6,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Majrova",
        "livsmedelsnummer": 297,
        "kolhydrater": 6,
        "fett": 0.3,
        "fibrer": 1.9,
        "alkohol": 0
    },
    {
        "namn": "Svartrot",
        "livsmedelsnummer": 298,
        "kolhydrater": 14.2,
        "fett": 0.4,
        "fibrer": 4,
        "alkohol": 0
    },
    {
        "namn": "Morot konserv. m. lag",
        "livsmedelsnummer": 299,
        "kolhydrater": 3.9,
        "fett": 0.2,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Morot konserv. u. lag",
        "livsmedelsnummer": 300,
        "kolhydrater": 4,
        "fett": 0.2,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Morotsjuice",
        "livsmedelsnummer": 301,
        "kolhydrater": 6.3,
        "fett": 0.4,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Rotmos hemlagad",
        "livsmedelsnummer": 302,
        "kolhydrater": 8.2,
        "fett": 1.3,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Jordärtskockssoppa veg. ",
        "livsmedelsnummer": 304,
        "kolhydrater": 4.97,
        "fett": 5.43,
        "fibrer": 1.42,
        "alkohol": 0.38
    },
    {
        "namn": "Morot kokt m. salt",
        "livsmedelsnummer": 305,
        "kolhydrater": 6.57,
        "fett": 0.24,
        "fibrer": 2.41,
        "alkohol": 0
    },
    {
        "namn": "Morot stuvad",
        "livsmedelsnummer": 306,
        "kolhydrater": 7.13,
        "fett": 4.75,
        "fibrer": 1.62,
        "alkohol": 0
    },
    {
        "namn": "Morotssoppa veg. ",
        "livsmedelsnummer": 307,
        "kolhydrater": 4.12,
        "fett": 1.78,
        "fibrer": 0.97,
        "alkohol": 0
    },
    {
        "namn": "Ärtsoppa m. morot veg. ",
        "livsmedelsnummer": 308,
        "kolhydrater": 10.79,
        "fett": 0.28,
        "fibrer": 2.45,
        "alkohol": 0
    },
    {
        "namn": "Jordärtskocka kokt m. salt",
        "livsmedelsnummer": 310,
        "kolhydrater": 12.85,
        "fett": 0,
        "fibrer": 4.48,
        "alkohol": 0
    },
    {
        "namn": "Rotfrukter stekta glacerade m. honung",
        "livsmedelsnummer": 314,
        "kolhydrater": 10.43,
        "fett": 4.7,
        "fibrer": 2.74,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbiff rotfruktsbiff stekt veg.",
        "livsmedelsnummer": 315,
        "kolhydrater": 5.05,
        "fett": 7.38,
        "fibrer": 2.01,
        "alkohol": 0
    },
    {
        "namn": "Rödbeta kokt u. salt",
        "livsmedelsnummer": 316,
        "kolhydrater": 9.8,
        "fett": 0.1,
        "fibrer": 2.64,
        "alkohol": 0
    },
    {
        "namn": "Borsjtj rödbetssoppa",
        "livsmedelsnummer": 317,
        "kolhydrater": 4.02,
        "fett": 0.96,
        "fibrer": 1.14,
        "alkohol": 0
    },
    {
        "namn": "Rödbeta inlagd u. lag",
        "livsmedelsnummer": 319,
        "kolhydrater": 12,
        "fett": 0.1,
        "fibrer": 1.68,
        "alkohol": 0
    },
    {
        "namn": "Avokado",
        "livsmedelsnummer": 320,
        "kolhydrater": 1.7,
        "fett": 19.6,
        "fibrer": 4.75,
        "alkohol": 0
    },
    {
        "namn": "Stjälkselleri",
        "livsmedelsnummer": 321,
        "kolhydrater": 1.5,
        "fett": 0.1,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Blomkål",
        "livsmedelsnummer": 322,
        "kolhydrater": 2.6,
        "fett": 0.17,
        "fibrer": 2.33,
        "alkohol": 0
    },
    {
        "namn": "Blomkål frysvara",
        "livsmedelsnummer": 323,
        "kolhydrater": 2.3,
        "fett": 0.3,
        "fibrer": 1.9,
        "alkohol": 0
    },
    {
        "namn": "Bondbönor färska kokta u. salt",
        "livsmedelsnummer": 324,
        "kolhydrater": 9.7,
        "fett": 1,
        "fibrer": 9,
        "alkohol": 0
    },
    {
        "namn": "Broccoli",
        "livsmedelsnummer": 325,
        "kolhydrater": 2.3,
        "fett": 0.6,
        "fibrer": 4,
        "alkohol": 0
    },
    {
        "namn": "Broccoli frysvara",
        "livsmedelsnummer": 326,
        "kolhydrater": 1.8,
        "fett": 0.3,
        "fibrer": 2.28,
        "alkohol": 0
    },
    {
        "namn": "Brysselkål",
        "livsmedelsnummer": 327,
        "kolhydrater": 4.7,
        "fett": 0.3,
        "fibrer": 4.2,
        "alkohol": 0
    },
    {
        "namn": "Brysselkål frysvara",
        "livsmedelsnummer": 328,
        "kolhydrater": 3.4,
        "fett": 0.4,
        "fibrer": 4.5,
        "alkohol": 0
    },
    {
        "namn": "Mungbönsgroddar",
        "livsmedelsnummer": 329,
        "kolhydrater": 3.2,
        "fett": 0.4,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Sojabönsgroddar",
        "livsmedelsnummer": 330,
        "kolhydrater": 7,
        "fett": 6.7,
        "fibrer": 2.6,
        "alkohol": 0
    },
    {
        "namn": "Gröna bönor",
        "livsmedelsnummer": 331,
        "kolhydrater": 2.1,
        "fett": 0.4,
        "fibrer": 3.4,
        "alkohol": 0
    },
    {
        "namn": "Gröna bönor frysvara",
        "livsmedelsnummer": 332,
        "kolhydrater": 4.5,
        "fett": 0.2,
        "fibrer": 2.92,
        "alkohol": 0
    },
    {
        "namn": "Champinjon färsk",
        "livsmedelsnummer": 333,
        "kolhydrater": 2.7,
        "fett": 0.23,
        "fibrer": 2.4,
        "alkohol": 0
    },
    {
        "namn": "Friséesallat",
        "livsmedelsnummer": 334,
        "kolhydrater": 1,
        "fett": 0.2,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Endivesallat",
        "livsmedelsnummer": 335,
        "kolhydrater": 1.1,
        "fett": 0.1,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Fänkål",
        "livsmedelsnummer": 336,
        "kolhydrater": 1.8,
        "fett": 0.4,
        "fibrer": 3.3,
        "alkohol": 0
    },
    {
        "namn": "Grönkål",
        "livsmedelsnummer": 337,
        "kolhydrater": 3.2,
        "fett": 0.7,
        "fibrer": 3.7,
        "alkohol": 0
    },
    {
        "namn": "Grönkål frysvara",
        "livsmedelsnummer": 338,
        "kolhydrater": 2.3,
        "fett": 0.5,
        "fibrer": 2.6,
        "alkohol": 0
    },
    {
        "namn": "Gurka",
        "livsmedelsnummer": 339,
        "kolhydrater": 2.3,
        "fett": 0.05,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Isbergssallat",
        "livsmedelsnummer": 340,
        "kolhydrater": 2.5,
        "fett": 0.12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kronärtskocka",
        "livsmedelsnummer": 342,
        "kolhydrater": 7.3,
        "fett": 0.2,
        "fibrer": 5,
        "alkohol": 0
    },
    {
        "namn": "Kålrabbi",
        "livsmedelsnummer": 343,
        "kolhydrater": 4.4,
        "fett": 0.1,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Lök gul",
        "livsmedelsnummer": 344,
        "kolhydrater": 7.3,
        "fett": 0.1,
        "fibrer": 1.88,
        "alkohol": 0
    },
    {
        "namn": "Majskolv",
        "livsmedelsnummer": 345,
        "kolhydrater": 22.07,
        "fett": 1.61,
        "fibrer": 2.88,
        "alkohol": 0
    },
    {
        "namn": "Majskolv frysvara",
        "livsmedelsnummer": 346,
        "kolhydrater": 21.5,
        "fett": 0.8,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Majskorn frysvara",
        "livsmedelsnummer": 347,
        "kolhydrater": 15.6,
        "fett": 1.5,
        "fibrer": 5.2,
        "alkohol": 0
    },
    {
        "namn": "Mangold",
        "livsmedelsnummer": 348,
        "kolhydrater": 2.6,
        "fett": 0.2,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Nässlor förvällda",
        "livsmedelsnummer": 349,
        "kolhydrater": 0.6,
        "fett": 0.7,
        "fibrer": 2.68,
        "alkohol": 0
    },
    {
        "namn": "Paprika grön",
        "livsmedelsnummer": 350,
        "kolhydrater": 3,
        "fett": 0.06,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Paprika röd",
        "livsmedelsnummer": 351,
        "kolhydrater": 4.1,
        "fett": 0.23,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Persilja blad",
        "livsmedelsnummer": 352,
        "kolhydrater": 4.4,
        "fett": 0.3,
        "fibrer": 2.9,
        "alkohol": 0
    },
    {
        "namn": "Pumpa",
        "livsmedelsnummer": 353,
        "kolhydrater": 4.4,
        "fett": 0.1,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Purjolök",
        "livsmedelsnummer": 354,
        "kolhydrater": 4.1,
        "fett": 0.15,
        "fibrer": 2.71,
        "alkohol": 0
    },
    {
        "namn": "Rödkål",
        "livsmedelsnummer": 355,
        "kolhydrater": 4.7,
        "fett": 0.3,
        "fibrer": 2.64,
        "alkohol": 0
    },
    {
        "namn": "Huvudsallat",
        "livsmedelsnummer": 356,
        "kolhydrater": 1.1,
        "fett": 0.2,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Savojkål",
        "livsmedelsnummer": 357,
        "kolhydrater": 3.6,
        "fett": 0.1,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Salladskål",
        "livsmedelsnummer": 358,
        "kolhydrater": 2.68,
        "fett": 0.14,
        "fibrer": 1.62,
        "alkohol": 0
    },
    {
        "namn": "Sockerärtor",
        "livsmedelsnummer": 359,
        "kolhydrater": 4.3,
        "fett": 0.2,
        "fibrer": 2.19,
        "alkohol": 0
    },
    {
        "namn": "Spenat frysvara",
        "livsmedelsnummer": 361,
        "kolhydrater": 0.5,
        "fett": 0.57,
        "fibrer": 2.02,
        "alkohol": 0
    },
    {
        "namn": "Squash",
        "livsmedelsnummer": 362,
        "kolhydrater": 2.5,
        "fett": 0.1,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Tomat",
        "livsmedelsnummer": 364,
        "kolhydrater": 2.6,
        "fett": 0.13,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Tomat torkad m. olja",
        "livsmedelsnummer": 365,
        "kolhydrater": 8.7,
        "fett": 12.5,
        "fibrer": 12.7,
        "alkohol": 0
    },
    {
        "namn": "Trädgårdskrasse",
        "livsmedelsnummer": 366,
        "kolhydrater": 4.3,
        "fett": 0.7,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Vattenkrasse",
        "livsmedelsnummer": 367,
        "kolhydrater": 0.5,
        "fett": 0.3,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Vaxbönor",
        "livsmedelsnummer": 368,
        "kolhydrater": 4.7,
        "fett": 0.1,
        "fibrer": 2.7,
        "alkohol": 0
    },
    {
        "namn": "Vaxbönor frysvara",
        "livsmedelsnummer": 369,
        "kolhydrater": 3.8,
        "fett": 0.1,
        "fibrer": 2.7,
        "alkohol": 0
    },
    {
        "namn": "Vitkål",
        "livsmedelsnummer": 370,
        "kolhydrater": 4.7,
        "fett": 0.1,
        "fibrer": 2.58,
        "alkohol": 0
    },
    {
        "namn": "Vitlök",
        "livsmedelsnummer": 371,
        "kolhydrater": 31.1,
        "fett": 0.5,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Aubergine",
        "livsmedelsnummer": 372,
        "kolhydrater": 2.2,
        "fett": 0.1,
        "fibrer": 2.35,
        "alkohol": 0
    },
    {
        "namn": "Gröna ärtor frysvara",
        "livsmedelsnummer": 374,
        "kolhydrater": 8.9,
        "fett": 0.4,
        "fibrer": 4.43,
        "alkohol": 0
    },
    {
        "namn": "Sparris grön el. vit",
        "livsmedelsnummer": 375,
        "kolhydrater": 2.4,
        "fett": 0.2,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Alfalfagroddar",
        "livsmedelsnummer": 376,
        "kolhydrater": 0.9,
        "fett": 0.7,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Dill färsk",
        "livsmedelsnummer": 377,
        "kolhydrater": 7.4,
        "fett": 0.8,
        "fibrer": 2.8,
        "alkohol": 0
    },
    {
        "namn": "Gräslök",
        "livsmedelsnummer": 378,
        "kolhydrater": 1.7,
        "fett": 0.6,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Basilika färsk",
        "livsmedelsnummer": 379,
        "kolhydrater": 0.44,
        "fett": 0.61,
        "fibrer": 3.9,
        "alkohol": 0
    },
    {
        "namn": "Chilipeppar färsk",
        "livsmedelsnummer": 380,
        "kolhydrater": 9.2,
        "fett": 0.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Paprika gul",
        "livsmedelsnummer": 381,
        "kolhydrater": 4.3,
        "fett": 0.15,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Paprika grön röd frysvara",
        "livsmedelsnummer": 382,
        "kolhydrater": 3,
        "fett": 0.4,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Champinjon skivad frysvara",
        "livsmedelsnummer": 383,
        "kolhydrater": 0.8,
        "fett": 0.4,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Linsgroddar",
        "livsmedelsnummer": 384,
        "kolhydrater": 19.1,
        "fett": 0.6,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Lök gul frysvara",
        "livsmedelsnummer": 385,
        "kolhydrater": 4.1,
        "fett": 0,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksblandning m. ärtor bönor majs morot typ amerikansk frysvara",
        "livsmedelsnummer": 386,
        "kolhydrater": 11.1,
        "fett": 0.5,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksblandning m. ärtor bönor morot blomkål typ sommargrönsaker frysvara",
        "livsmedelsnummer": 387,
        "kolhydrater": 4.5,
        "fett": 0.5,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksblandning m. ärtor morot frysvara",
        "livsmedelsnummer": 388,
        "kolhydrater": 9,
        "fett": 0.5,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksblandning m. ärtor majs paprika frysvara",
        "livsmedelsnummer": 389,
        "kolhydrater": 8.7,
        "fett": 0.5,
        "fibrer": 5,
        "alkohol": 0
    },
    {
        "namn": "Sallad m. grönsallat gurka tomat u. dressing",
        "livsmedelsnummer": 390,
        "kolhydrater": 2.36,
        "fett": 0.1,
        "fibrer": 0.76,
        "alkohol": 0
    },
    {
        "namn": "Paprika grön gul röd",
        "livsmedelsnummer": 392,
        "kolhydrater": 3.96,
        "fett": 0.16,
        "fibrer": 1.32,
        "alkohol": 0
    },
    {
        "namn": "Bambuskott konserv. u. lag",
        "livsmedelsnummer": 393,
        "kolhydrater": 3.1,
        "fett": 0.4,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Gröna bönor konserv. u. lag",
        "livsmedelsnummer": 395,
        "kolhydrater": 3,
        "fett": 0.1,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Champinjon konserv. m. lag",
        "livsmedelsnummer": 397,
        "kolhydrater": 0.9,
        "fett": 0.1,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Majskorn konserv. u. lag",
        "livsmedelsnummer": 400,
        "kolhydrater": 12.9,
        "fett": 1.5,
        "fibrer": 2.9,
        "alkohol": 0
    },
    {
        "namn": "Oliver gröna m. paprikafyllning avrunna",
        "livsmedelsnummer": 401,
        "kolhydrater": 1.1,
        "fett": 13.1,
        "fibrer": 2.6,
        "alkohol": 0
    },
    {
        "namn": "Oliver svarta m. olja avrunna",
        "livsmedelsnummer": 402,
        "kolhydrater": 1.8,
        "fett": 14.1,
        "fibrer": 3.5,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksblandning el. pickels sockrad inlagd u. lag",
        "livsmedelsnummer": 403,
        "kolhydrater": 26.1,
        "fett": 0.1,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Sparris vit konserv. u. lag",
        "livsmedelsnummer": 404,
        "kolhydrater": 0.5,
        "fett": 0.7,
        "fibrer": 1.9,
        "alkohol": 0
    },
    {
        "namn": "Sparrissoppa tillagad redd konserv. veg.",
        "livsmedelsnummer": 405,
        "kolhydrater": 3.7,
        "fett": 1.7,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Surkål konserv. m. lag",
        "livsmedelsnummer": 406,
        "kolhydrater": 2,
        "fett": 0.2,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Tomat hel konserv. m. lag",
        "livsmedelsnummer": 407,
        "kolhydrater": 4.4,
        "fett": 0.1,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Tomatjuice konserv. drickf.",
        "livsmedelsnummer": 408,
        "kolhydrater": 2.7,
        "fett": 0.1,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Tomatpuré konc. konserv.",
        "livsmedelsnummer": 410,
        "kolhydrater": 13.5,
        "fett": 0.2,
        "fibrer": 4.7,
        "alkohol": 0
    },
    {
        "namn": "Vaxbönor konserv. u. lag",
        "livsmedelsnummer": 411,
        "kolhydrater": 2.5,
        "fett": 0.3,
        "fibrer": 2.7,
        "alkohol": 0
    },
    {
        "namn": "Gröna ärtor konserv. m. lag",
        "livsmedelsnummer": 412,
        "kolhydrater": 10.5,
        "fett": 0.3,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Gröna ärtor konserv. u. lag",
        "livsmedelsnummer": 413,
        "kolhydrater": 7.3,
        "fett": 0.4,
        "fibrer": 4.9,
        "alkohol": 0
    },
    {
        "namn": "Mungbönsgroddar konserv. u. lag",
        "livsmedelsnummer": 414,
        "kolhydrater": 0.8,
        "fett": 0.1,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Sojabönsgroddar konserv. u. lag",
        "livsmedelsnummer": 415,
        "kolhydrater": 0.6,
        "fett": 0.2,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Paprikasallad inlagd u. lag",
        "livsmedelsnummer": 416,
        "kolhydrater": 4.3,
        "fett": 0.4,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Ajvar relish",
        "livsmedelsnummer": 417,
        "kolhydrater": 6.9,
        "fett": 3.52,
        "fibrer": 3.2,
        "alkohol": 0
    },
    {
        "namn": "Svamp konserv. u. lag",
        "livsmedelsnummer": 418,
        "kolhydrater": 0.9,
        "fett": 0.5,
        "fibrer": 2.3,
        "alkohol": 0
    },
    {
        "namn": "Kantarell konserv. u. lag",
        "livsmedelsnummer": 419,
        "kolhydrater": 4.8,
        "fett": 0.7,
        "fibrer": 2.3,
        "alkohol": 0
    },
    {
        "namn": "Syltlök inlagd",
        "livsmedelsnummer": 420,
        "kolhydrater": 18.7,
        "fett": 0.1,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Tomater gröna syltade",
        "livsmedelsnummer": 421,
        "kolhydrater": 18.6,
        "fett": 0.2,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Tomat krossad konserv. m. lag",
        "livsmedelsnummer": 422,
        "kolhydrater": 3.7,
        "fett": 0.2,
        "fibrer": 1.23,
        "alkohol": 0
    },
    {
        "namn": "Fefferoni konserv. inlagd",
        "livsmedelsnummer": 423,
        "kolhydrater": 1.7,
        "fett": 0.1,
        "fibrer": 4.5,
        "alkohol": 0
    },
    {
        "namn": "Wokgrönsaker Asiatiska wokade m. rapsolja",
        "livsmedelsnummer": 424,
        "kolhydrater": 5.7,
        "fett": 1.3,
        "fibrer": 4.3,
        "alkohol": 0
    },
    {
        "namn": "Wokgrönsaker Classic wokade m. rapsolja",
        "livsmedelsnummer": 425,
        "kolhydrater": 4.9,
        "fett": 1.6,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksblandning ärtor morot konserv. m. lag",
        "livsmedelsnummer": 426,
        "kolhydrater": 6.1,
        "fett": 0.3,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksjuice konserv. el. pastöriserad drickf.",
        "livsmedelsnummer": 427,
        "kolhydrater": 3.7,
        "fett": 0.1,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Champinjon konserv. u. lag",
        "livsmedelsnummer": 428,
        "kolhydrater": 0.3,
        "fett": 0.3,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Pumpasallad m. paprika inlagd sockrad u. lag",
        "livsmedelsnummer": 429,
        "kolhydrater": 13.5,
        "fett": 0.2,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Grönsakssoppa klar veg. ",
        "livsmedelsnummer": 430,
        "kolhydrater": 3.87,
        "fett": 0.23,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Spenatsoppa veg. hemlagad",
        "livsmedelsnummer": 431,
        "kolhydrater": 2.2,
        "fett": 2,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Vitkål stuvad hemlagad",
        "livsmedelsnummer": 432,
        "kolhydrater": 6.8,
        "fett": 3.3,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Blomkål gratinerad",
        "livsmedelsnummer": 433,
        "kolhydrater": 6.23,
        "fett": 4.86,
        "fibrer": 1.58,
        "alkohol": 0
    },
    {
        "namn": "Blomkål kokt m. salt",
        "livsmedelsnummer": 434,
        "kolhydrater": 2.59,
        "fett": 0.17,
        "fibrer": 2.32,
        "alkohol": 0
    },
    {
        "namn": "Blomkål stuvad",
        "livsmedelsnummer": 435,
        "kolhydrater": 5.47,
        "fett": 2.64,
        "fibrer": 1.54,
        "alkohol": 0
    },
    {
        "namn": "Gröna bönor stuvade",
        "livsmedelsnummer": 436,
        "kolhydrater": 5.82,
        "fett": 2.1,
        "fibrer": 1.93,
        "alkohol": 0
    },
    {
        "namn": "Grönkålssoppa",
        "livsmedelsnummer": 437,
        "kolhydrater": 2.1,
        "fett": 1.88,
        "fibrer": 0.89,
        "alkohol": 0
    },
    {
        "namn": "Grönsakssoppa redd ängamat veg. ",
        "livsmedelsnummer": 438,
        "kolhydrater": 2.85,
        "fett": 3.26,
        "fibrer": 1.07,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbiff stekt veg.",
        "livsmedelsnummer": 439,
        "kolhydrater": 10.51,
        "fett": 5.28,
        "fibrer": 3.9,
        "alkohol": 0
    },
    {
        "namn": "Grönsallat m. vinägrettsås",
        "livsmedelsnummer": 440,
        "kolhydrater": 2.55,
        "fett": 12.91,
        "fibrer": 0.74,
        "alkohol": 0
    },
    {
        "namn": "Sallad m. grönsallat gurka tomat vinägrettsås",
        "livsmedelsnummer": 441,
        "kolhydrater": 2.58,
        "fett": 11.03,
        "fibrer": 0.59,
        "alkohol": 0
    },
    {
        "namn": "Grönsallat m. gräddfilsås",
        "livsmedelsnummer": 442,
        "kolhydrater": 4.06,
        "fett": 17.09,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Sallad m. grönsallat gurka tomat gräddfilsås",
        "livsmedelsnummer": 443,
        "kolhydrater": 3.93,
        "fett": 15.33,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Sallad m. grönsallat gurka tomat paprika u. dressing",
        "livsmedelsnummer": 444,
        "kolhydrater": 2.65,
        "fett": 0.12,
        "fibrer": 0.86,
        "alkohol": 0
    },
    {
        "namn": "Gurka inlagd hemlagad",
        "livsmedelsnummer": 445,
        "kolhydrater": 9.55,
        "fett": 0.05,
        "fibrer": 0.01,
        "alkohol": 0
    },
    {
        "namn": "Lök stekt m. olja el. flytande margarin salt",
        "livsmedelsnummer": 446,
        "kolhydrater": 8.23,
        "fett": 1.14,
        "fibrer": 2.12,
        "alkohol": 0
    },
    {
        "namn": "Löksås",
        "livsmedelsnummer": 447,
        "kolhydrater": 10.98,
        "fett": 7.65,
        "fibrer": 0.67,
        "alkohol": 0
    },
    {
        "namn": "Lök gul kokt m. salt",
        "livsmedelsnummer": 448,
        "kolhydrater": 7.27,
        "fett": 0.1,
        "fibrer": 1.87,
        "alkohol": 0
    },
    {
        "namn": "Nässelsoppa",
        "livsmedelsnummer": 450,
        "kolhydrater": 1.69,
        "fett": 2.68,
        "fibrer": 0.65,
        "alkohol": 0
    },
    {
        "namn": "Paprika förvälld",
        "livsmedelsnummer": 451,
        "kolhydrater": 5.02,
        "fett": 0.21,
        "fibrer": 1.67,
        "alkohol": 0
    },
    {
        "namn": "Purjolök kokt m. salt",
        "livsmedelsnummer": 452,
        "kolhydrater": 4.08,
        "fett": 0.15,
        "fibrer": 2.7,
        "alkohol": 0
    },
    {
        "namn": "Rödkål tillagad",
        "livsmedelsnummer": 453,
        "kolhydrater": 8.26,
        "fett": 2.13,
        "fibrer": 2.37,
        "alkohol": 0.08
    },
    {
        "namn": "Sparris stuvad",
        "livsmedelsnummer": 454,
        "kolhydrater": 5.35,
        "fett": 2.66,
        "fibrer": 1.03,
        "alkohol": 0
    },
    {
        "namn": "Spenat fräst m. olja el. flytande margarin salt",
        "livsmedelsnummer": 455,
        "kolhydrater": 0.63,
        "fett": 1,
        "fibrer": 2.53,
        "alkohol": 0
    },
    {
        "namn": "Spenat stuvad",
        "livsmedelsnummer": 456,
        "kolhydrater": 2.23,
        "fett": 4.03,
        "fibrer": 1.69,
        "alkohol": 0
    },
    {
        "namn": "Champinjon stekt",
        "livsmedelsnummer": 457,
        "kolhydrater": 3.41,
        "fett": 1.44,
        "fibrer": 3.03,
        "alkohol": 0
    },
    {
        "namn": "Champinjon stuvad",
        "livsmedelsnummer": 458,
        "kolhydrater": 5.83,
        "fett": 15.09,
        "fibrer": 1.13,
        "alkohol": 0
    },
    {
        "namn": "Champinjonsås hemlagad",
        "livsmedelsnummer": 459,
        "kolhydrater": 4.63,
        "fett": 12.11,
        "fibrer": 1.23,
        "alkohol": 0
    },
    {
        "namn": "Tomatsallad m. vinägrett",
        "livsmedelsnummer": 460,
        "kolhydrater": 2.73,
        "fett": 4.2,
        "fibrer": 1.19,
        "alkohol": 0
    },
    {
        "namn": "Tomatsås italiensk",
        "livsmedelsnummer": 461,
        "kolhydrater": 4.94,
        "fett": 7.37,
        "fibrer": 1.4,
        "alkohol": 0.13
    },
    {
        "namn": "Tomatsalsa kall",
        "livsmedelsnummer": 462,
        "kolhydrater": 3.43,
        "fett": 0.14,
        "fibrer": 1.46,
        "alkohol": 0
    },
    {
        "namn": "Vitkålssoppa tillagad veg.",
        "livsmedelsnummer": 464,
        "kolhydrater": 2.57,
        "fett": 1.75,
        "fibrer": 1.21,
        "alkohol": 0
    },
    {
        "namn": "Vitkål kokt m. salt",
        "livsmedelsnummer": 465,
        "kolhydrater": 4.68,
        "fett": 0.1,
        "fibrer": 2.57,
        "alkohol": 0
    },
    {
        "namn": "Brunkål",
        "livsmedelsnummer": 466,
        "kolhydrater": 6.99,
        "fett": 1.01,
        "fibrer": 2.44,
        "alkohol": 0
    },
    {
        "namn": "Vitkålssallad pizzasallad",
        "livsmedelsnummer": 467,
        "kolhydrater": 4.08,
        "fett": 7.23,
        "fibrer": 2.03,
        "alkohol": 0
    },
    {
        "namn": "Vitkålssallad m. lingonsylt",
        "livsmedelsnummer": 468,
        "kolhydrater": 12.75,
        "fett": 0.13,
        "fibrer": 2.16,
        "alkohol": 0
    },
    {
        "namn": "Aubergine kokt m. salt",
        "livsmedelsnummer": 469,
        "kolhydrater": 2.79,
        "fett": 0.13,
        "fibrer": 2.98,
        "alkohol": 0
    },
    {
        "namn": "Aubergine stekt m. olja el. flytande margarin salt",
        "livsmedelsnummer": 470,
        "kolhydrater": 2.59,
        "fett": 5.78,
        "fibrer": 2.76,
        "alkohol": 0
    },
    {
        "namn": "Ärtor morot kokta m. salt",
        "livsmedelsnummer": 471,
        "kolhydrater": 7.72,
        "fett": 0.32,
        "fibrer": 3.41,
        "alkohol": 0
    },
    {
        "namn": "Ärtor morot stuvade",
        "livsmedelsnummer": 472,
        "kolhydrater": 7.83,
        "fett": 2.18,
        "fibrer": 2.23,
        "alkohol": 0
    },
    {
        "namn": "Ärtpurésoppa gröna ärtor tillagad veg. ",
        "livsmedelsnummer": 473,
        "kolhydrater": 3.1,
        "fett": 2.94,
        "fibrer": 1.16,
        "alkohol": 0.54
    },
    {
        "namn": "Gryta kikärtsgryta grönsaksgryta veg. ",
        "livsmedelsnummer": 478,
        "kolhydrater": 6.64,
        "fett": 1.87,
        "fibrer": 3.82,
        "alkohol": 0
    },
    {
        "namn": "Gratäng m. grönsaker rotfrukter veg.",
        "livsmedelsnummer": 479,
        "kolhydrater": 8.79,
        "fett": 4.45,
        "fibrer": 1.86,
        "alkohol": 0
    },
    {
        "namn": "Grönsakssoppa m. pasta tillagad pulver",
        "livsmedelsnummer": 480,
        "kolhydrater": 4.2,
        "fett": 0.8,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Löksoppa fransk tillagad pulver m. vatten",
        "livsmedelsnummer": 481,
        "kolhydrater": 5.22,
        "fett": 0.2,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Grönsakssoppa tillagad klar konserv.",
        "livsmedelsnummer": 482,
        "kolhydrater": 2.27,
        "fett": 0.06,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Grönsakssoppa tillagad redd pulver m. vatten mjölk",
        "livsmedelsnummer": 484,
        "kolhydrater": 5.07,
        "fett": 2.18,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Grönsakssoppa tillagad redd pulver",
        "livsmedelsnummer": 486,
        "kolhydrater": 5.29,
        "fett": 2.15,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Gurka inlagd",
        "livsmedelsnummer": 487,
        "kolhydrater": 11.4,
        "fett": 0.7,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Bostongurka",
        "livsmedelsnummer": 488,
        "kolhydrater": 16.6,
        "fett": 0.4,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Gurka fermenterad u. lag",
        "livsmedelsnummer": 489,
        "kolhydrater": 1,
        "fett": 0,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Saltgurka u. lag",
        "livsmedelsnummer": 490,
        "kolhydrater": 1.4,
        "fett": 0.2,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Ättiksgurka u. lag",
        "livsmedelsnummer": 491,
        "kolhydrater": 8.2,
        "fett": 0.3,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Kronärtskocka kokt",
        "livsmedelsnummer": 492,
        "kolhydrater": 9.4,
        "fett": 0.2,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Champinjonsoppa tillagad pulver m. vatten mjölk",
        "livsmedelsnummer": 493,
        "kolhydrater": 6.52,
        "fett": 2.59,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Champinjonsoppa tillagad redd m. mjölk konserv.",
        "livsmedelsnummer": 494,
        "kolhydrater": 5.52,
        "fett": 3.66,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Majskolv kokt",
        "livsmedelsnummer": 495,
        "kolhydrater": 17.3,
        "fett": 1,
        "fibrer": 3.7,
        "alkohol": 0
    },
    {
        "namn": "Blomkålssoppa tillagad pulver m. vatten mjölk",
        "livsmedelsnummer": 496,
        "kolhydrater": 5.93,
        "fett": 2.24,
        "fibrer": 0.31,
        "alkohol": 0
    },
    {
        "namn": "Tomatsoppa tillagad pulver m. vatten",
        "livsmedelsnummer": 497,
        "kolhydrater": 4.6,
        "fett": 0.8,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Tomatsoppa tillagad konserv. m. vatten mjölk",
        "livsmedelsnummer": 498,
        "kolhydrater": 6.29,
        "fett": 1.44,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Sparrissoppa tillagad pulver m. vatten mjölk veg.",
        "livsmedelsnummer": 499,
        "kolhydrater": 5.93,
        "fett": 2.28,
        "fibrer": 0.22,
        "alkohol": 0
    },
    {
        "namn": "Rödkål konserv.",
        "livsmedelsnummer": 500,
        "kolhydrater": 15,
        "fett": 0.2,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Champinjonsås tillagad pulver m. mjölk smör",
        "livsmedelsnummer": 501,
        "kolhydrater": 7.57,
        "fett": 7.49,
        "fibrer": 0.76,
        "alkohol": 0
    },
    {
        "namn": "Grönsaker blandade fermenterade",
        "livsmedelsnummer": 502,
        "kolhydrater": 1.1,
        "fett": 0.1,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksjuice fermenterad",
        "livsmedelsnummer": 503,
        "kolhydrater": 3.5,
        "fett": 0.1,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Kåldolmar råa u. sås frysvara",
        "livsmedelsnummer": 504,
        "kolhydrater": 5.2,
        "fett": 5,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Vitkålssoppa m. fläskkorv hemlagad",
        "livsmedelsnummer": 505,
        "kolhydrater": 1.6,
        "fett": 3.4,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Minestronesoppa",
        "livsmedelsnummer": 506,
        "kolhydrater": 5.28,
        "fett": 2.07,
        "fibrer": 1.38,
        "alkohol": 0
    },
    {
        "namn": "Vitkålssoppa m. frikadeller",
        "livsmedelsnummer": 508,
        "kolhydrater": 2.78,
        "fett": 3.5,
        "fibrer": 0.97,
        "alkohol": 0
    },
    {
        "namn": "Gryta får i kål",
        "livsmedelsnummer": 510,
        "kolhydrater": 2.1,
        "fett": 1.85,
        "fibrer": 1.16,
        "alkohol": 0
    },
    {
        "namn": "Kåldolmar stekta hemlagade",
        "livsmedelsnummer": 511,
        "kolhydrater": 8.05,
        "fett": 5.04,
        "fibrer": 1.41,
        "alkohol": 0
    },
    {
        "namn": "Kålpudding",
        "livsmedelsnummer": 512,
        "kolhydrater": 9.55,
        "fett": 4.47,
        "fibrer": 1.35,
        "alkohol": 0
    },
    {
        "namn": "Caesarsallad el. kycklingsallad m. dressing",
        "livsmedelsnummer": 513,
        "kolhydrater": 9.26,
        "fett": 24.02,
        "fibrer": 1.28,
        "alkohol": 0
    },
    {
        "namn": "Moussaka ugnsstekt",
        "livsmedelsnummer": 515,
        "kolhydrater": 4.7,
        "fett": 7.6,
        "fibrer": 1.38,
        "alkohol": 0
    },
    {
        "namn": "Wokgrönsaker m. nudlar kyckling",
        "livsmedelsnummer": 518,
        "kolhydrater": 8.6,
        "fett": 4.64,
        "fibrer": 1.18,
        "alkohol": 0
    },
    {
        "namn": "Kycklingsallad m. ananas paprika vitlöksdressing",
        "livsmedelsnummer": 519,
        "kolhydrater": 2.4,
        "fett": 5.17,
        "fibrer": 0.78,
        "alkohol": 0
    },
    {
        "namn": "Granatäpple",
        "livsmedelsnummer": 520,
        "kolhydrater": 7,
        "fett": 0.6,
        "fibrer": 10,
        "alkohol": 0
    },
    {
        "namn": "Grapefrukt",
        "livsmedelsnummer": 521,
        "kolhydrater": 8.3,
        "fett": 0.5,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Guava",
        "livsmedelsnummer": 522,
        "kolhydrater": 10,
        "fett": 0.6,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Hallon",
        "livsmedelsnummer": 523,
        "kolhydrater": 4.1,
        "fett": 0.6,
        "fibrer": 3.7,
        "alkohol": 0
    },
    {
        "namn": "Hallon sockrade frysvara",
        "livsmedelsnummer": 524,
        "kolhydrater": 17.6,
        "fett": 0.2,
        "fibrer": 3.3,
        "alkohol": 0
    },
    {
        "namn": "Hjortron",
        "livsmedelsnummer": 525,
        "kolhydrater": 7,
        "fett": 0.9,
        "fibrer": 6.3,
        "alkohol": 0
    },
    {
        "namn": "Jordgubbar",
        "livsmedelsnummer": 526,
        "kolhydrater": 8.29,
        "fett": 0.21,
        "fibrer": 1.9,
        "alkohol": 0
    },
    {
        "namn": "Jordgubbar hela sockrade frysvara",
        "livsmedelsnummer": 527,
        "kolhydrater": 19.7,
        "fett": 0.1,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Gratäng broccoligratäng veg. ",
        "livsmedelsnummer": 528,
        "kolhydrater": 3.39,
        "fett": 6.51,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Grekisk sallad m. salladsost",
        "livsmedelsnummer": 529,
        "kolhydrater": 3.24,
        "fett": 6.84,
        "fibrer": 1.21,
        "alkohol": 0
    },
    {
        "namn": "Grönsakssufflé",
        "livsmedelsnummer": 530,
        "kolhydrater": 6.64,
        "fett": 6.6,
        "fibrer": 1.68,
        "alkohol": 0
    },
    {
        "namn": "Gratäng grönsaksgratäng veg.",
        "livsmedelsnummer": 531,
        "kolhydrater": 5.88,
        "fett": 5.07,
        "fibrer": 1.62,
        "alkohol": 0
    },
    {
        "namn": "Grekisk sallad m. fetaost",
        "livsmedelsnummer": 532,
        "kolhydrater": 2,
        "fett": 6.12,
        "fibrer": 1.43,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbuljong pasta el. pulver storhushåll",
        "livsmedelsnummer": 535,
        "kolhydrater": 24.61,
        "fett": 8.81,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Agar torkad",
        "livsmedelsnummer": 537,
        "kolhydrater": 74.3,
        "fett": 0.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Quorn svampprotein färs bitar filé",
        "livsmedelsnummer": 538,
        "kolhydrater": 5,
        "fett": 2.1,
        "fibrer": 4.8,
        "alkohol": 0
    },
    {
        "namn": "Gratäng broccoligratäng m. skinka",
        "livsmedelsnummer": 539,
        "kolhydrater": 3.64,
        "fett": 4.53,
        "fibrer": 1.49,
        "alkohol": 0
    },
    {
        "namn": "Wokgrönsaker m. nudlar veg.",
        "livsmedelsnummer": 543,
        "kolhydrater": 8.1,
        "fett": 4.13,
        "fibrer": 2.47,
        "alkohol": 0
    },
    {
        "namn": "Pastej veg.",
        "livsmedelsnummer": 544,
        "kolhydrater": 9.1,
        "fett": 20,
        "fibrer": 2.4,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbuljong ätf.",
        "livsmedelsnummer": 545,
        "kolhydrater": 0.4,
        "fett": 0.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Honungsmelon",
        "livsmedelsnummer": 546,
        "kolhydrater": 7,
        "fett": 0.1,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Nätmelon",
        "livsmedelsnummer": 547,
        "kolhydrater": 7.1,
        "fett": 0.3,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Rabarber tillagad u. socker",
        "livsmedelsnummer": 548,
        "kolhydrater": 0.4,
        "fett": 0.2,
        "fibrer": 3.8,
        "alkohol": 0
    },
    {
        "namn": "Vattenmelon",
        "livsmedelsnummer": 549,
        "kolhydrater": 7.5,
        "fett": 0,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Ananas",
        "livsmedelsnummer": 550,
        "kolhydrater": 11.5,
        "fett": 0.1,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Apelsin",
        "livsmedelsnummer": 551,
        "kolhydrater": 10.4,
        "fett": 0.2,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Aprikos",
        "livsmedelsnummer": 552,
        "kolhydrater": 9.3,
        "fett": 0.4,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Banan",
        "livsmedelsnummer": 553,
        "kolhydrater": 21.3,
        "fett": 0.1,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Björnbär",
        "livsmedelsnummer": 554,
        "kolhydrater": 7.5,
        "fett": 0.2,
        "fibrer": 3.4,
        "alkohol": 0
    },
    {
        "namn": "Blåbär",
        "livsmedelsnummer": 555,
        "kolhydrater": 9.1,
        "fett": 0.8,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Blåbär frysvara",
        "livsmedelsnummer": 556,
        "kolhydrater": 7.6,
        "fett": 0.5,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Blåbär sockrade frysvara",
        "livsmedelsnummer": 557,
        "kolhydrater": 18.3,
        "fett": 0.1,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Cherimoya",
        "livsmedelsnummer": 558,
        "kolhydrater": 21.1,
        "fett": 0.4,
        "fibrer": 2.4,
        "alkohol": 0
    },
    {
        "namn": "Citron",
        "livsmedelsnummer": 559,
        "kolhydrater": 7.3,
        "fett": 0.3,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Småcitrus clementin mandarin tangerin satsumas",
        "livsmedelsnummer": 560,
        "kolhydrater": 11.4,
        "fett": 0.2,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Fikon",
        "livsmedelsnummer": 561,
        "kolhydrater": 11.7,
        "fett": 0.3,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Fläderbär",
        "livsmedelsnummer": 562,
        "kolhydrater": 11.4,
        "fett": 0.5,
        "fibrer": 6.8,
        "alkohol": 0
    },
    {
        "namn": "Jordgubbar skivade sockrade frysvara",
        "livsmedelsnummer": 563,
        "kolhydrater": 23.8,
        "fett": 0.1,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Kaktusfikon",
        "livsmedelsnummer": 564,
        "kolhydrater": 6.7,
        "fett": 0.5,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Kiwi grön",
        "livsmedelsnummer": 565,
        "kolhydrater": 9.6,
        "fett": 0.9,
        "fibrer": 2.7,
        "alkohol": 0
    },
    {
        "namn": "Krusbär",
        "livsmedelsnummer": 566,
        "kolhydrater": 5.7,
        "fett": 0.6,
        "fibrer": 3.4,
        "alkohol": 0
    },
    {
        "namn": "Physalis",
        "livsmedelsnummer": 567,
        "kolhydrater": 8.9,
        "fett": 0.63,
        "fibrer": 4.2,
        "alkohol": 0
    },
    {
        "namn": "Kumquat",
        "livsmedelsnummer": 568,
        "kolhydrater": 14.2,
        "fett": 0.1,
        "fibrer": 1.9,
        "alkohol": 0
    },
    {
        "namn": "Kvitten",
        "livsmedelsnummer": 569,
        "kolhydrater": 13.1,
        "fett": 0.1,
        "fibrer": 4,
        "alkohol": 0
    },
    {
        "namn": "Surkörsbär",
        "livsmedelsnummer": 570,
        "kolhydrater": 13.34,
        "fett": 0.08,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Sötkörsbär",
        "livsmedelsnummer": 571,
        "kolhydrater": 14.68,
        "fett": 0.1,
        "fibrer": 1.87,
        "alkohol": 0
    },
    {
        "namn": "Lime",
        "livsmedelsnummer": 572,
        "kolhydrater": 10.3,
        "fett": 0.2,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Lingon",
        "livsmedelsnummer": 573,
        "kolhydrater": 11,
        "fett": 0.5,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Mango",
        "livsmedelsnummer": 574,
        "kolhydrater": 11.3,
        "fett": 0.6,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Banan kokbanan",
        "livsmedelsnummer": 575,
        "kolhydrater": 30.4,
        "fett": 0.4,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Nektarin",
        "livsmedelsnummer": 576,
        "kolhydrater": 10.9,
        "fett": 0.3,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Papaya",
        "livsmedelsnummer": 577,
        "kolhydrater": 8.9,
        "fett": 0.6,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Paradisäpple",
        "livsmedelsnummer": 578,
        "kolhydrater": 17.9,
        "fett": 0.3,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Passionsfrukt",
        "livsmedelsnummer": 579,
        "kolhydrater": 7.4,
        "fett": 0.7,
        "fibrer": 15.9,
        "alkohol": 0
    },
    {
        "namn": "Persika nektarin",
        "livsmedelsnummer": 580,
        "kolhydrater": 8.6,
        "fett": 0.1,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Sharon",
        "livsmedelsnummer": 581,
        "kolhydrater": 16.9,
        "fett": 0.2,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Plommon",
        "livsmedelsnummer": 582,
        "kolhydrater": 10.18,
        "fett": 0.05,
        "fibrer": 1.84,
        "alkohol": 0
    },
    {
        "namn": "Päron",
        "livsmedelsnummer": 583,
        "kolhydrater": 11.5,
        "fett": 0.1,
        "fibrer": 2.7,
        "alkohol": 0
    },
    {
        "namn": "Tranbär",
        "livsmedelsnummer": 584,
        "kolhydrater": 8.9,
        "fett": 0.2,
        "fibrer": 3.3,
        "alkohol": 0
    },
    {
        "namn": "Vinbär röda",
        "livsmedelsnummer": 585,
        "kolhydrater": 8.7,
        "fett": 0.2,
        "fibrer": 3.4,
        "alkohol": 0
    },
    {
        "namn": "Vinbär svarta",
        "livsmedelsnummer": 586,
        "kolhydrater": 11.47,
        "fett": 1.28,
        "fibrer": 7.07,
        "alkohol": 0
    },
    {
        "namn": "Vindruvor",
        "livsmedelsnummer": 587,
        "kolhydrater": 15.6,
        "fett": 0.15,
        "fibrer": 1.25,
        "alkohol": 0
    },
    {
        "namn": "Äpple m. skal",
        "livsmedelsnummer": 588,
        "kolhydrater": 10.58,
        "fett": 0.05,
        "fibrer": 2.32,
        "alkohol": 0
    },
    {
        "namn": "Äpple u. skal ",
        "livsmedelsnummer": 589,
        "kolhydrater": 13.4,
        "fett": 0.1,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Hallon frysvara",
        "livsmedelsnummer": 590,
        "kolhydrater": 5.4,
        "fett": 0.5,
        "fibrer": 3.7,
        "alkohol": 0
    },
    {
        "namn": "Björnbär frysvara",
        "livsmedelsnummer": 591,
        "kolhydrater": 8.8,
        "fett": 0.5,
        "fibrer": 7.2,
        "alkohol": 0
    },
    {
        "namn": "Björnbär sockrade frysvara",
        "livsmedelsnummer": 592,
        "kolhydrater": 12,
        "fett": 0.5,
        "fibrer": 6,
        "alkohol": 0
    },
    {
        "namn": "Jordgubbar frysvara",
        "livsmedelsnummer": 593,
        "kolhydrater": 6.4,
        "fett": 0.3,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Hallon blåbär frysvara",
        "livsmedelsnummer": 597,
        "kolhydrater": 6.6,
        "fett": 0.7,
        "fibrer": 3.4,
        "alkohol": 0
    },
    {
        "namn": "Apelsinskal",
        "livsmedelsnummer": 598,
        "kolhydrater": 21.8,
        "fett": 0.2,
        "fibrer": 3.7,
        "alkohol": 0
    },
    {
        "namn": "Aprikos torkad",
        "livsmedelsnummer": 599,
        "kolhydrater": 41,
        "fett": 0.5,
        "fibrer": 5.3,
        "alkohol": 0
    },
    {
        "namn": "Banan torkad",
        "livsmedelsnummer": 600,
        "kolhydrater": 80.8,
        "fett": 1.8,
        "fibrer": 7.5,
        "alkohol": 0
    },
    {
        "namn": "Blåbär torkade",
        "livsmedelsnummer": 601,
        "kolhydrater": 69.8,
        "fett": 1,
        "fibrer": 10,
        "alkohol": 0
    },
    {
        "namn": "Citronskal",
        "livsmedelsnummer": 602,
        "kolhydrater": 11.9,
        "fett": 0.3,
        "fibrer": 3.7,
        "alkohol": 0
    },
    {
        "namn": "Dadlar torkade",
        "livsmedelsnummer": 603,
        "kolhydrater": 71.9,
        "fett": 0.6,
        "fibrer": 7.5,
        "alkohol": 0
    },
    {
        "namn": "Fikon torkade",
        "livsmedelsnummer": 604,
        "kolhydrater": 55.9,
        "fett": 1.2,
        "fibrer": 10,
        "alkohol": 0
    },
    {
        "namn": "Katrinplommon torkade",
        "livsmedelsnummer": 605,
        "kolhydrater": 48.6,
        "fett": 0.3,
        "fibrer": 5.2,
        "alkohol": 0
    },
    {
        "namn": "Nypon torkat u. frön",
        "livsmedelsnummer": 606,
        "kolhydrater": 68.4,
        "fett": 1.4,
        "fibrer": 12,
        "alkohol": 0
    },
    {
        "namn": "Nyponsoppapulver berikad",
        "livsmedelsnummer": 607,
        "kolhydrater": 91.1,
        "fett": 0.2,
        "fibrer": 5,
        "alkohol": 0
    },
    {
        "namn": "Persika torkad",
        "livsmedelsnummer": 608,
        "kolhydrater": 52.9,
        "fett": 0.8,
        "fibrer": 8.2,
        "alkohol": 0
    },
    {
        "namn": "Päron torkade",
        "livsmedelsnummer": 609,
        "kolhydrater": 63.4,
        "fett": 0.6,
        "fibrer": 6,
        "alkohol": 0
    },
    {
        "namn": "Russin",
        "livsmedelsnummer": 610,
        "kolhydrater": 64.4,
        "fett": 0.5,
        "fibrer": 6.1,
        "alkohol": 0
    },
    {
        "namn": "Äpple torkat",
        "livsmedelsnummer": 611,
        "kolhydrater": 57.2,
        "fett": 0.3,
        "fibrer": 9.5,
        "alkohol": 0
    },
    {
        "namn": "Frukt torkad",
        "livsmedelsnummer": 612,
        "kolhydrater": 56.8,
        "fett": 0.5,
        "fibrer": 9,
        "alkohol": 0
    },
    {
        "namn": "Papaya torkad",
        "livsmedelsnummer": 613,
        "kolhydrater": 57.6,
        "fett": 0.6,
        "fibrer": 5,
        "alkohol": 0
    },
    {
        "namn": "Ananas konserv. m. juice",
        "livsmedelsnummer": 614,
        "kolhydrater": 14.2,
        "fett": 0.1,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Ananas konserv. m. sockerlag",
        "livsmedelsnummer": 617,
        "kolhydrater": 20.2,
        "fett": 0.1,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Aprikos konserv. m. juice",
        "livsmedelsnummer": 618,
        "kolhydrater": 11.4,
        "fett": 0,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Aprikos konserv. m. sockerlag",
        "livsmedelsnummer": 619,
        "kolhydrater": 27.7,
        "fett": 0.1,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Körsbär surkörsbär konserv. m. sockerlag",
        "livsmedelsnummer": 624,
        "kolhydrater": 21.5,
        "fett": 0.1,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Persika konserv. m. sockerlag",
        "livsmedelsnummer": 625,
        "kolhydrater": 19.5,
        "fett": 0.1,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Plommon konserv. m. sockerlag",
        "livsmedelsnummer": 626,
        "kolhydrater": 21.8,
        "fett": 0.1,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Päron konserv. m. lättsockrad lag",
        "livsmedelsnummer": 627,
        "kolhydrater": 13.8,
        "fett": 0,
        "fibrer": 1.9,
        "alkohol": 0
    },
    {
        "namn": "Päron konserv. m. sockerlag",
        "livsmedelsnummer": 628,
        "kolhydrater": 17.6,
        "fett": 0.1,
        "fibrer": 1.9,
        "alkohol": 0
    },
    {
        "namn": "Äpple konserv.",
        "livsmedelsnummer": 629,
        "kolhydrater": 14.9,
        "fett": 0.5,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Grapefrukt konserv. m. lättsockrad lag",
        "livsmedelsnummer": 630,
        "kolhydrater": 14.6,
        "fett": 0.1,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Fruktcocktail konserv. m. sockerlag",
        "livsmedelsnummer": 632,
        "kolhydrater": 18.9,
        "fett": 0,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Mandarin konserv. m. lättsockrad lag",
        "livsmedelsnummer": 633,
        "kolhydrater": 14.6,
        "fett": 0.1,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Mango konserv. m. sockerlag",
        "livsmedelsnummer": 634,
        "kolhydrater": 23.3,
        "fett": 0.1,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Apelsinsallad",
        "livsmedelsnummer": 635,
        "kolhydrater": 14.32,
        "fett": 4.72,
        "fibrer": 1.36,
        "alkohol": 0
    },
    {
        "namn": "Frukt bär konserv. osötad el. sötningsm.",
        "livsmedelsnummer": 637,
        "kolhydrater": 7.6,
        "fett": 0.1,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Fruktsallad",
        "livsmedelsnummer": 638,
        "kolhydrater": 11.8,
        "fett": 0.26,
        "fibrer": 1.89,
        "alkohol": 0
    },
    {
        "namn": "Apelsinjuice färskpressad",
        "livsmedelsnummer": 641,
        "kolhydrater": 10.6,
        "fett": 0.2,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Apelsinjuice konc. frysvara",
        "livsmedelsnummer": 642,
        "kolhydrater": 37.5,
        "fett": 0.2,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Apelsinjuice drickf.",
        "livsmedelsnummer": 643,
        "kolhydrater": 8.6,
        "fett": 0.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Citronjuice färskpressad",
        "livsmedelsnummer": 645,
        "kolhydrater": 6.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Citronjuice konc. konserv.",
        "livsmedelsnummer": 646,
        "kolhydrater": 6.8,
        "fett": 0.3,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Småcitrusjuice färskpressad",
        "livsmedelsnummer": 647,
        "kolhydrater": 9.9,
        "fett": 0.2,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Grapefruktjuice färskpressad",
        "livsmedelsnummer": 649,
        "kolhydrater": 8.8,
        "fett": 0.1,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Limejuice färskpressad",
        "livsmedelsnummer": 652,
        "kolhydrater": 9.2,
        "fett": 0.1,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Risgrynsgröt lättmjölk fett ca 1%",
        "livsmedelsnummer": 654,
        "kolhydrater": 13.3,
        "fett": 1.27,
        "fibrer": 0.14,
        "alkohol": 0
    },
    {
        "namn": "Risgrynsgröt",
        "livsmedelsnummer": 655,
        "kolhydrater": 13.32,
        "fett": 2.08,
        "fibrer": 0.14,
        "alkohol": 0
    },
    {
        "namn": "Limejuice konc. konserv.",
        "livsmedelsnummer": 657,
        "kolhydrater": 6.2,
        "fett": 0.2,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Druvjuice konserv. drickf.",
        "livsmedelsnummer": 658,
        "kolhydrater": 14.6,
        "fett": 0,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Äppeljuice drickf.",
        "livsmedelsnummer": 659,
        "kolhydrater": 9.7,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ananasjuice konserv. drickf.",
        "livsmedelsnummer": 660,
        "kolhydrater": 12.8,
        "fett": 0.1,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Apelsinjuice pastöriserad drickf.",
        "livsmedelsnummer": 661,
        "kolhydrater": 9.8,
        "fett": 0.1,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Juice",
        "livsmedelsnummer": 662,
        "kolhydrater": 8.95,
        "fett": 0.08,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Aprikosnektar pastöriserad drickf.",
        "livsmedelsnummer": 664,
        "kolhydrater": 13.1,
        "fett": 0.1,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Persikonektar pastöriserad drickf.",
        "livsmedelsnummer": 665,
        "kolhydrater": 13,
        "fett": 0,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Apelsinnektar pastöriserad osötad drickf. berikad",
        "livsmedelsnummer": 668,
        "kolhydrater": 7.2,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Katrinplommondryck konserv. drickf.",
        "livsmedelsnummer": 670,
        "kolhydrater": 15.5,
        "fett": 0,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Havredryck choklad berikad",
        "livsmedelsnummer": 672,
        "kolhydrater": 10.4,
        "fett": 1.3,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Bovetegröt m. russin",
        "livsmedelsnummer": 675,
        "kolhydrater": 20.28,
        "fett": 0.47,
        "fibrer": 1.65,
        "alkohol": 0
    },
    {
        "namn": "Grahamsgröt",
        "livsmedelsnummer": 676,
        "kolhydrater": 11.2,
        "fett": 0.46,
        "fibrer": 2.09,
        "alkohol": 0
    },
    {
        "namn": "Havregrynsgröt fullkorn",
        "livsmedelsnummer": 677,
        "kolhydrater": 11.34,
        "fett": 1.23,
        "fibrer": 1.33,
        "alkohol": 0
    },
    {
        "namn": "Molinogröt grahamsmjöl m. torkad frukt linfrö",
        "livsmedelsnummer": 678,
        "kolhydrater": 11.3,
        "fett": 2.3,
        "fibrer": 3.24,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor ris puffat rostat osötat",
        "livsmedelsnummer": 679,
        "kolhydrater": 86,
        "fett": 0.9,
        "fibrer": 0.75,
        "alkohol": 0
    },
    {
        "namn": "Rågkross ångprep. fullkorn",
        "livsmedelsnummer": 680,
        "kolhydrater": 61.1,
        "fett": 1.5,
        "fibrer": 12.7,
        "alkohol": 0
    },
    {
        "namn": "Kornmjölsgröt",
        "livsmedelsnummer": 681,
        "kolhydrater": 11.94,
        "fett": 0.55,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Mannagrynsgröt",
        "livsmedelsnummer": 682,
        "kolhydrater": 11.12,
        "fett": 1.74,
        "fibrer": 0.26,
        "alkohol": 0
    },
    {
        "namn": "Kruskagröt fullkorn m. havregryn vetekli russin",
        "livsmedelsnummer": 683,
        "kolhydrater": 11.7,
        "fett": 0.8,
        "fibrer": 2.76,
        "alkohol": 0
    },
    {
        "namn": "Rågmjölsgröt",
        "livsmedelsnummer": 684,
        "kolhydrater": 11.11,
        "fett": 0.46,
        "fibrer": 2.51,
        "alkohol": 0
    },
    {
        "namn": "Stuvning vit",
        "livsmedelsnummer": 685,
        "kolhydrater": 8.29,
        "fett": 5.45,
        "fibrer": 0.15,
        "alkohol": 0
    },
    {
        "namn": "Välling fullkorn berikad",
        "livsmedelsnummer": 694,
        "kolhydrater": 9.2,
        "fett": 1.9,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Havrevälling hemlagad",
        "livsmedelsnummer": 695,
        "kolhydrater": 12.74,
        "fett": 1.47,
        "fibrer": 0.84,
        "alkohol": 0
    },
    {
        "namn": "Mannagrynsvälling hemlagad",
        "livsmedelsnummer": 696,
        "kolhydrater": 9.19,
        "fett": 1.66,
        "fibrer": 0.12,
        "alkohol": 0
    },
    {
        "namn": "Välling berikad",
        "livsmedelsnummer": 699,
        "kolhydrater": 8.6,
        "fett": 1.7,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Havredryck berikad",
        "livsmedelsnummer": 700,
        "kolhydrater": 7.1,
        "fett": 1.1,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Havregryn fullkorn",
        "livsmedelsnummer": 702,
        "kolhydrater": 64.1,
        "fett": 6.98,
        "fibrer": 7.5,
        "alkohol": 0
    },
    {
        "namn": "Fiberhavregryn fullkorn havre m. vetekli",
        "livsmedelsnummer": 703,
        "kolhydrater": 60.5,
        "fett": 7.3,
        "fibrer": 10.5,
        "alkohol": 0
    },
    {
        "namn": "Havrekli",
        "livsmedelsnummer": 704,
        "kolhydrater": 45,
        "fett": 7,
        "fibrer": 18,
        "alkohol": 0
    },
    {
        "namn": "Korngryn ångprep. fullkorn",
        "livsmedelsnummer": 705,
        "kolhydrater": 65.4,
        "fett": 3.1,
        "fibrer": 10.7,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor majs osötad berikad typ corn flakes",
        "livsmedelsnummer": 706,
        "kolhydrater": 82.5,
        "fett": 0.88,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Vetekross ångprep. fullkorn",
        "livsmedelsnummer": 707,
        "kolhydrater": 60.98,
        "fett": 2,
        "fibrer": 11.32,
        "alkohol": 0
    },
    {
        "namn": "Vetegroddar",
        "livsmedelsnummer": 708,
        "kolhydrater": 31.4,
        "fett": 9.4,
        "fibrer": 14,
        "alkohol": 0
    },
    {
        "namn": "Vetekli",
        "livsmedelsnummer": 709,
        "kolhydrater": 30.4,
        "fett": 5,
        "fibrer": 30.5,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor vete fullkorn typ Weetabix",
        "livsmedelsnummer": 710,
        "kolhydrater": 68.4,
        "fett": 2.52,
        "fibrer": 10.5,
        "alkohol": 0
    },
    {
        "namn": "Kruskakli grovt vetekli",
        "livsmedelsnummer": 711,
        "kolhydrater": 24.9,
        "fett": 5,
        "fibrer": 37.5,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor flingblandning fullkorn typ basmüsli",
        "livsmedelsnummer": 712,
        "kolhydrater": 67.6,
        "fett": 4.09,
        "fibrer": 9.65,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor ris puffat sockrade berikad",
        "livsmedelsnummer": 713,
        "kolhydrater": 86.3,
        "fett": 1.16,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor vetekli rostat m. kornmalt",
        "livsmedelsnummer": 714,
        "kolhydrater": 65.5,
        "fett": 3.6,
        "fibrer": 14,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor havre fullkorn berikad typ Havrefras",
        "livsmedelsnummer": 715,
        "kolhydrater": 68.9,
        "fett": 6.44,
        "fibrer": 7.8,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor ris puffat rostat m. socker kakao",
        "livsmedelsnummer": 716,
        "kolhydrater": 85.2,
        "fett": 2.64,
        "fibrer": 2.38,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor müsli fullkorn m. frukt bär",
        "livsmedelsnummer": 719,
        "kolhydrater": 64.8,
        "fett": 6.62,
        "fibrer": 7.7,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor müsli flingblandning fullkorn m. frukt nötter socker el. honung",
        "livsmedelsnummer": 721,
        "kolhydrater": 70.6,
        "fett": 3.8,
        "fibrer": 8.17,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor flingblandning soja sockrad m. frukt glutenfri",
        "livsmedelsnummer": 723,
        "kolhydrater": 73.2,
        "fett": 3.66,
        "fibrer": 4.34,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor vetekli fullkorn berikad",
        "livsmedelsnummer": 724,
        "kolhydrater": 66.8,
        "fett": 2.76,
        "fibrer": 14.7,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor fullkorn typ Specialflingor",
        "livsmedelsnummer": 725,
        "kolhydrater": 78.9,
        "fett": 2.17,
        "fibrer": 3.7,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor vetepuffar m. honung berikad",
        "livsmedelsnummer": 726,
        "kolhydrater": 86.4,
        "fett": 1.5,
        "fibrer": 3.96,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor majsflingor sockrade berikad",
        "livsmedelsnummer": 727,
        "kolhydrater": 87.5,
        "fett": 0.92,
        "fibrer": 1.75,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor fullkorn sockrade berikad typ ringar",
        "livsmedelsnummer": 728,
        "kolhydrater": 75.5,
        "fett": 3.2,
        "fibrer": 6.8,
        "alkohol": 0
    },
    {
        "namn": "Pannkaka tunn hemlagad",
        "livsmedelsnummer": 731,
        "kolhydrater": 25.9,
        "fett": 5.8,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Fattiga riddare",
        "livsmedelsnummer": 732,
        "kolhydrater": 29.81,
        "fett": 13.26,
        "fibrer": 2.42,
        "alkohol": 0
    },
    {
        "namn": "Pannkaka tunn lättmjölk",
        "livsmedelsnummer": 733,
        "kolhydrater": 17.45,
        "fett": 6.29,
        "fibrer": 0.98,
        "alkohol": 0
    },
    {
        "namn": "Ugnspannkaka lättmjölk",
        "livsmedelsnummer": 734,
        "kolhydrater": 15.19,
        "fett": 7.04,
        "fibrer": 0.85,
        "alkohol": 0
    },
    {
        "namn": "Ugnspannkaka mellanmjölk",
        "livsmedelsnummer": 735,
        "kolhydrater": 15.22,
        "fett": 7.86,
        "fibrer": 0.86,
        "alkohol": 0
    },
    {
        "namn": "Våfflor m. ägg",
        "livsmedelsnummer": 736,
        "kolhydrater": 21.81,
        "fett": 19.04,
        "fibrer": 0.94,
        "alkohol": 0
    },
    {
        "namn": "Våfflor u. ägg",
        "livsmedelsnummer": 737,
        "kolhydrater": 21.42,
        "fett": 24.84,
        "fibrer": 0.99,
        "alkohol": 0
    },
    {
        "namn": "Fläskpannkaka",
        "livsmedelsnummer": 739,
        "kolhydrater": 12.51,
        "fett": 12.77,
        "fibrer": 0.71,
        "alkohol": 0
    },
    {
        "namn": "Räkcrêpe m. mellanmjölk vispgrädde fyllning 44% hemlagad",
        "livsmedelsnummer": 740,
        "kolhydrater": 11.26,
        "fett": 7.85,
        "fibrer": 0.52,
        "alkohol": 0
    },
    {
        "namn": "Räkcrêpe värmd fyllning 37% frysvara",
        "livsmedelsnummer": 741,
        "kolhydrater": 18.94,
        "fett": 7.96,
        "fibrer": 0.56,
        "alkohol": 0
    },
    {
        "namn": "Champinjoncrêpe m. mellanmjölk vispgrädde veg. hemlagad",
        "livsmedelsnummer": 742,
        "kolhydrater": 12.44,
        "fett": 9.93,
        "fibrer": 0.75,
        "alkohol": 0
    },
    {
        "namn": "Baguette m. salami brieost soltorkad tomat sallad",
        "livsmedelsnummer": 743,
        "kolhydrater": 19.7,
        "fett": 13.44,
        "fibrer": 1.93,
        "alkohol": 0
    },
    {
        "namn": "Ciabatta m. mozzarella soltorkad tomat sallad",
        "livsmedelsnummer": 744,
        "kolhydrater": 25.1,
        "fett": 5.9,
        "fibrer": 2.46,
        "alkohol": 0
    },
    {
        "namn": "Bagel m. rökt lax färskost sallad",
        "livsmedelsnummer": 745,
        "kolhydrater": 26.8,
        "fett": 6.97,
        "fibrer": 2.45,
        "alkohol": 0
    },
    {
        "namn": "Champinjoncrêpe värmd veg. frysvara",
        "livsmedelsnummer": 746,
        "kolhydrater": 18.97,
        "fett": 6.77,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Crêpefyllning m. spenat färskost fetaost skinka",
        "livsmedelsnummer": 747,
        "kolhydrater": 1.66,
        "fett": 9.58,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Crêpes pannkaka tunn fylld",
        "livsmedelsnummer": 748,
        "kolhydrater": 14.91,
        "fett": 8.94,
        "fibrer": 0.99,
        "alkohol": 0.06
    },
    {
        "namn": "Vårrulle värmd frysvara",
        "livsmedelsnummer": 750,
        "kolhydrater": 22.4,
        "fett": 10.8,
        "fibrer": 1.14,
        "alkohol": 0
    },
    {
        "namn": "Vårrulle värmd tillagad på restaurang",
        "livsmedelsnummer": 751,
        "kolhydrater": 18.7,
        "fett": 23.8,
        "fibrer": 1.14,
        "alkohol": 0
    },
    {
        "namn": "Deg matpaj gräddad",
        "livsmedelsnummer": 752,
        "kolhydrater": 38.04,
        "fett": 30.3,
        "fibrer": 1.88,
        "alkohol": 0
    },
    {
        "namn": "Pirog u. fyllning gräddad",
        "livsmedelsnummer": 754,
        "kolhydrater": 37.74,
        "fett": 30.7,
        "fibrer": 1.86,
        "alkohol": 0
    },
    {
        "namn": "Deg smulpaj gräddad",
        "livsmedelsnummer": 755,
        "kolhydrater": 52.19,
        "fett": 27.78,
        "fibrer": 2.23,
        "alkohol": 0
    },
    {
        "namn": "Paj m. köttfärs",
        "livsmedelsnummer": 756,
        "kolhydrater": 12.29,
        "fett": 15.58,
        "fibrer": 1.28,
        "alkohol": 0
    },
    {
        "namn": "Paj m. kyckling bacon",
        "livsmedelsnummer": 757,
        "kolhydrater": 12.1,
        "fett": 15.31,
        "fibrer": 1.31,
        "alkohol": 0.1
    },
    {
        "namn": "Pirog m. köttfärs",
        "livsmedelsnummer": 758,
        "kolhydrater": 20.03,
        "fett": 13.17,
        "fibrer": 3.39,
        "alkohol": 0
    },
    {
        "namn": "Pizza m. skinka champinjoner lök sardeller",
        "livsmedelsnummer": 759,
        "kolhydrater": 18.71,
        "fett": 8.74,
        "fibrer": 1.97,
        "alkohol": 0
    },
    {
        "namn": "Paj m. köttfärs värmd frysvara",
        "livsmedelsnummer": 760,
        "kolhydrater": 26.08,
        "fett": 22.1,
        "fibrer": 1.22,
        "alkohol": 0
    },
    {
        "namn": "Pirog m. kött värmd frysvara",
        "livsmedelsnummer": 761,
        "kolhydrater": 33.5,
        "fett": 13.6,
        "fibrer": 1.32,
        "alkohol": 0
    },
    {
        "namn": "Pizza Capricciosa m. rökt skinka värmd kylvara el. frysvara",
        "livsmedelsnummer": 762,
        "kolhydrater": 27.02,
        "fett": 10.1,
        "fibrer": 1.37,
        "alkohol": 0
    },
    {
        "namn": "Pizza Capricciosa m. rökt skinka champinjon tillagad på restaurang",
        "livsmedelsnummer": 763,
        "kolhydrater": 24.97,
        "fett": 13.4,
        "fibrer": 1.37,
        "alkohol": 0
    },
    {
        "namn": "Pizza Pepperoni m. rökt korv värmd frysvara",
        "livsmedelsnummer": 764,
        "kolhydrater": 30.5,
        "fett": 7.8,
        "fibrer": 2.9,
        "alkohol": 0
    },
    {
        "namn": "Pizza pan pizza m. rökt griskött värmd frysvara",
        "livsmedelsnummer": 765,
        "kolhydrater": 26.51,
        "fett": 13.2,
        "fibrer": 1.37,
        "alkohol": 0
    },
    {
        "namn": "Pizza pan pizza m. rökt griskött tillagad på restaurang",
        "livsmedelsnummer": 766,
        "kolhydrater": 26.32,
        "fett": 9.22,
        "fibrer": 1.37,
        "alkohol": 0
    },
    {
        "namn": "Paj m. ost skinka värmd frysvara",
        "livsmedelsnummer": 767,
        "kolhydrater": 20.31,
        "fett": 21.4,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Paj m. lax spenat",
        "livsmedelsnummer": 768,
        "kolhydrater": 13.54,
        "fett": 9.79,
        "fibrer": 1.23,
        "alkohol": 0
    },
    {
        "namn": "Pizza m. räkor musslor",
        "livsmedelsnummer": 769,
        "kolhydrater": 19.17,
        "fett": 11.2,
        "fibrer": 1.21,
        "alkohol": 0
    },
    {
        "namn": "Vol-au-vent m. räkstuvning",
        "livsmedelsnummer": 770,
        "kolhydrater": 24.06,
        "fett": 14.44,
        "fibrer": 0.84,
        "alkohol": 0
    },
    {
        "namn": "Paj m. skaldjur värmd frysvara",
        "livsmedelsnummer": 771,
        "kolhydrater": 22.01,
        "fett": 19.6,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Pizza Marinara m. skaldjur tillagad på restaurang",
        "livsmedelsnummer": 772,
        "kolhydrater": 22.19,
        "fett": 12.7,
        "fibrer": 1.44,
        "alkohol": 0
    },
    {
        "namn": "Pizza veg.",
        "livsmedelsnummer": 773,
        "kolhydrater": 16.43,
        "fett": 8.05,
        "fibrer": 1.77,
        "alkohol": 0
    },
    {
        "namn": "Pizza Margherita m. ost tomatsås",
        "livsmedelsnummer": 774,
        "kolhydrater": 23.09,
        "fett": 10.54,
        "fibrer": 2.07,
        "alkohol": 0
    },
    {
        "namn": "Kycklingburgare m. bröd tillbehör",
        "livsmedelsnummer": 775,
        "kolhydrater": 22.8,
        "fett": 10.08,
        "fibrer": 1.67,
        "alkohol": 0
    },
    {
        "namn": "Fiskburgare m. bröd tillbehör",
        "livsmedelsnummer": 776,
        "kolhydrater": 27.3,
        "fett": 13.06,
        "fibrer": 1.89,
        "alkohol": 0
    },
    {
        "namn": "Baguette m. rostbiff potatissallad sallad",
        "livsmedelsnummer": 777,
        "kolhydrater": 28.4,
        "fett": 5.65,
        "fibrer": 2.53,
        "alkohol": 0
    },
    {
        "namn": "Baguette grov m. skaldjur tonfisk smögenröra sallad",
        "livsmedelsnummer": 778,
        "kolhydrater": 26.2,
        "fett": 6.09,
        "fibrer": 2.92,
        "alkohol": 0
    },
    {
        "namn": "Baguette grov m. ost skinka sallad lättmajonnäs",
        "livsmedelsnummer": 779,
        "kolhydrater": 25.9,
        "fett": 4.57,
        "fibrer": 3.51,
        "alkohol": 0
    },
    {
        "namn": "Bagel m. salami färskost sallad oliv",
        "livsmedelsnummer": 780,
        "kolhydrater": 17.2,
        "fett": 7.53,
        "fibrer": 2.92,
        "alkohol": 0
    },
    {
        "namn": "Sandwich m. räkor ägg sallad majonnäs",
        "livsmedelsnummer": 781,
        "kolhydrater": 21.6,
        "fett": 19.7,
        "fibrer": 1.64,
        "alkohol": 0
    },
    {
        "namn": "Sandwich m. rökt kalkon färskost soltorkad tomat sallad",
        "livsmedelsnummer": 782,
        "kolhydrater": 21.2,
        "fett": 5.32,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Sandwich m. salami färskost sallad",
        "livsmedelsnummer": 783,
        "kolhydrater": 16.2,
        "fett": 6.35,
        "fibrer": 2.68,
        "alkohol": 0
    },
    {
        "namn": "Tunnbrödsrulle m. pastrami potatis sallad majonnäs",
        "livsmedelsnummer": 784,
        "kolhydrater": 15.6,
        "fett": 7.82,
        "fibrer": 2.12,
        "alkohol": 0
    },
    {
        "namn": "Wrap vetetortilla m. ris köttfärs majs ost",
        "livsmedelsnummer": 785,
        "kolhydrater": 19.3,
        "fett": 3.34,
        "fibrer": 1.26,
        "alkohol": 0
    },
    {
        "namn": "Wrap vetetortilla fajitas m. kyckling gräddfil sallad",
        "livsmedelsnummer": 786,
        "kolhydrater": 11.1,
        "fett": 7.08,
        "fibrer": 2.61,
        "alkohol": 0
    },
    {
        "namn": "Wrap vetetortilla enchilada m. köttfärs majschips ost sallad paprika tomat tomatsås",
        "livsmedelsnummer": 787,
        "kolhydrater": 11.7,
        "fett": 10.17,
        "fibrer": 2.69,
        "alkohol": 0
    },
    {
        "namn": "Falafel m. pitabröd sallad sesamsås pepperoni",
        "livsmedelsnummer": 788,
        "kolhydrater": 17.3,
        "fett": 5.73,
        "fibrer": 4.17,
        "alkohol": 0
    },
    {
        "namn": "Paj m. ost skinka mellanmjölk matlagningsgrädde hemlagad",
        "livsmedelsnummer": 789,
        "kolhydrater": 14.98,
        "fett": 19.8,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Wrap vetetortilla m. fetaost oliver sallad vitlöksdressing",
        "livsmedelsnummer": 792,
        "kolhydrater": 20.1,
        "fett": 7.54,
        "fibrer": 2.94,
        "alkohol": 0
    },
    {
        "namn": "Matmuffins grov fullkorn m. getost fårost broccoli spenat soltorkade tomater",
        "livsmedelsnummer": 793,
        "kolhydrater": 26,
        "fett": 15.99,
        "fibrer": 3.45,
        "alkohol": 0
    },
    {
        "namn": "Pizzapålägg m. tomatsås skinka champinjoner hårdost",
        "livsmedelsnummer": 795,
        "kolhydrater": 5.32,
        "fett": 9.52,
        "fibrer": 1.59,
        "alkohol": 0
    },
    {
        "namn": "Paj m. ost skinka mellanmjölk hemlagad",
        "livsmedelsnummer": 796,
        "kolhydrater": 13.31,
        "fett": 15.56,
        "fibrer": 1.03,
        "alkohol": 0
    },
    {
        "namn": "Smörgåstårta el. landgång",
        "livsmedelsnummer": 797,
        "kolhydrater": 14.49,
        "fett": 15.9,
        "fibrer": 1.89,
        "alkohol": 0
    },
    {
        "namn": "Råris kokt m salt",
        "livsmedelsnummer": 804,
        "kolhydrater": 21.3,
        "fett": 0.9,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Rismjöl vitt",
        "livsmedelsnummer": 810,
        "kolhydrater": 75.32,
        "fett": 1.42,
        "fibrer": 2.4,
        "alkohol": 0
    },
    {
        "namn": "Risdiet flingor",
        "livsmedelsnummer": 811,
        "kolhydrater": 80.9,
        "fett": 1.1,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Ris kinesiskt asiatiskt kokt u. salt tillagad på restaurang",
        "livsmedelsnummer": 814,
        "kolhydrater": 30.1,
        "fett": 1.16,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ris vildris okokt",
        "livsmedelsnummer": 817,
        "kolhydrater": 68.7,
        "fett": 1.08,
        "fibrer": 6.2,
        "alkohol": 0
    },
    {
        "namn": "Ris vildris kokt m. salt",
        "livsmedelsnummer": 818,
        "kolhydrater": 19.54,
        "fett": 0.34,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Nudlar glasnudlar okokta",
        "livsmedelsnummer": 819,
        "kolhydrater": 85.59,
        "fett": 0.06,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Vinbladsdolma m. ris konserv. veg.",
        "livsmedelsnummer": 824,
        "kolhydrater": 11.5,
        "fett": 11.31,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Bovete hela el. krossade korn",
        "livsmedelsnummer": 825,
        "kolhydrater": 65.3,
        "fett": 2,
        "fibrer": 5.8,
        "alkohol": 0
    },
    {
        "namn": "Durra el. andra sorghumarter fullkorn",
        "livsmedelsnummer": 826,
        "kolhydrater": 69.8,
        "fett": 3.3,
        "fibrer": 3.2,
        "alkohol": 0
    },
    {
        "namn": "Hirs hela el. krossade korn fullkorn",
        "livsmedelsnummer": 827,
        "kolhydrater": 68.4,
        "fett": 2.9,
        "fibrer": 3.2,
        "alkohol": 0
    },
    {
        "namn": "Mannagryn",
        "livsmedelsnummer": 828,
        "kolhydrater": 72.1,
        "fett": 1.3,
        "fibrer": 2.8,
        "alkohol": 0
    },
    {
        "namn": "Bulgur",
        "livsmedelsnummer": 829,
        "kolhydrater": 68.17,
        "fett": 1.33,
        "fibrer": 7.7,
        "alkohol": 0
    },
    {
        "namn": "Couscous",
        "livsmedelsnummer": 831,
        "kolhydrater": 72.42,
        "fett": 0.64,
        "fibrer": 5,
        "alkohol": 0
    },
    {
        "namn": "Couscous tillagad",
        "livsmedelsnummer": 832,
        "kolhydrater": 21.82,
        "fett": 0.16,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Korngryn ångprep. fullkorn kokt m. salt",
        "livsmedelsnummer": 833,
        "kolhydrater": 13.6,
        "fett": 0.35,
        "fibrer": 7.58,
        "alkohol": 0
    },
    {
        "namn": "Hirs kokt m. salt fullkorn",
        "livsmedelsnummer": 834,
        "kolhydrater": 14.99,
        "fett": 0.64,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Majsgryn polenta kokt m. salt",
        "livsmedelsnummer": 835,
        "kolhydrater": 9.06,
        "fett": 0.15,
        "fibrer": 0.62,
        "alkohol": 0
    },
    {
        "namn": "Apelsinris",
        "livsmedelsnummer": 836,
        "kolhydrater": 12.88,
        "fett": 3.69,
        "fibrer": 0.59,
        "alkohol": 0
    },
    {
        "namn": "Ris à la Malta m. grädde fett 40%",
        "livsmedelsnummer": 838,
        "kolhydrater": 15.67,
        "fett": 6.29,
        "fibrer": 0.12,
        "alkohol": 0
    },
    {
        "namn": "Risgrynskaka risgrynspudding",
        "livsmedelsnummer": 839,
        "kolhydrater": 14.52,
        "fett": 7.97,
        "fibrer": 0.11,
        "alkohol": 0
    },
    {
        "namn": "Rismål fett 6%",
        "livsmedelsnummer": 840,
        "kolhydrater": 20.8,
        "fett": 6.37,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Rismål lätt fett 1,5%",
        "livsmedelsnummer": 841,
        "kolhydrater": 19.9,
        "fett": 1.52,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Paella",
        "livsmedelsnummer": 842,
        "kolhydrater": 11.86,
        "fett": 6.02,
        "fibrer": 0.37,
        "alkohol": 0
    },
    {
        "namn": "Nudelsoppa m. risnudlar curry sesamolja",
        "livsmedelsnummer": 844,
        "kolhydrater": 10.3,
        "fett": 0.68,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Pasta okokt",
        "livsmedelsnummer": 845,
        "kolhydrater": 71.9,
        "fett": 1.2,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Pasta kokt u. salt",
        "livsmedelsnummer": 846,
        "kolhydrater": 25.8,
        "fett": 0.5,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Pasta fullkorn okokt",
        "livsmedelsnummer": 848,
        "kolhydrater": 66.6,
        "fett": 1.5,
        "fibrer": 8.8,
        "alkohol": 0
    },
    {
        "namn": "Pasta färsk m. ägg",
        "livsmedelsnummer": 852,
        "kolhydrater": 22.8,
        "fett": 1.62,
        "fibrer": 1.74,
        "alkohol": 0
    },
    {
        "namn": "Stuvade makaroner",
        "livsmedelsnummer": 853,
        "kolhydrater": 18.77,
        "fett": 2.73,
        "fibrer": 1.09,
        "alkohol": 0
    },
    {
        "namn": "Pastagratäng makaronipudding",
        "livsmedelsnummer": 856,
        "kolhydrater": 13.34,
        "fett": 4.74,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Spagetti m. köttfärssås",
        "livsmedelsnummer": 858,
        "kolhydrater": 16.95,
        "fett": 3.26,
        "fibrer": 1.55,
        "alkohol": 0
    },
    {
        "namn": "Ravioli m. sås frysvara el. konserv.",
        "livsmedelsnummer": 861,
        "kolhydrater": 14.7,
        "fett": 3.5,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Tortellini m. kött",
        "livsmedelsnummer": 862,
        "kolhydrater": 22.2,
        "fett": 4.34,
        "fibrer": 3.02,
        "alkohol": 0
    },
    {
        "namn": "Lasagne m. spenat chèvre veg. ",
        "livsmedelsnummer": 866,
        "kolhydrater": 12.17,
        "fett": 7.12,
        "fibrer": 2.12,
        "alkohol": 0
    },
    {
        "namn": "Pastagratäng makaronipudding veg.",
        "livsmedelsnummer": 867,
        "kolhydrater": 15.03,
        "fett": 3.87,
        "fibrer": 1.14,
        "alkohol": 0
    },
    {
        "namn": "Lasagne värmd frysvara",
        "livsmedelsnummer": 869,
        "kolhydrater": 13.2,
        "fett": 5.07,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Nudlar äggnudlar okokta",
        "livsmedelsnummer": 870,
        "kolhydrater": 68.2,
        "fett": 4.2,
        "fibrer": 2.9,
        "alkohol": 0
    },
    {
        "namn": "Tortellini m. ostfyllning veg.",
        "livsmedelsnummer": 872,
        "kolhydrater": 25.7,
        "fett": 5.33,
        "fibrer": 2.56,
        "alkohol": 0
    },
    {
        "namn": "Nudelsoppa olika smaker kryddad",
        "livsmedelsnummer": 873,
        "kolhydrater": 9.4,
        "fett": 3.45,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Bondbönor torkade",
        "livsmedelsnummer": 874,
        "kolhydrater": 41.9,
        "fett": 1.7,
        "fibrer": 16.4,
        "alkohol": 0
    },
    {
        "namn": "Bruna bönor torkade",
        "livsmedelsnummer": 875,
        "kolhydrater": 45.1,
        "fett": 1.5,
        "fibrer": 16.4,
        "alkohol": 0
    },
    {
        "namn": "Röda bönor torkade",
        "livsmedelsnummer": 877,
        "kolhydrater": 48,
        "fett": 1.5,
        "fibrer": 14,
        "alkohol": 0
    },
    {
        "namn": "Röda bönor torkade kokta u. salt",
        "livsmedelsnummer": 878,
        "kolhydrater": 14.5,
        "fett": 0.5,
        "fibrer": 6.9,
        "alkohol": 0
    },
    {
        "namn": "Vita bönor torkade",
        "livsmedelsnummer": 879,
        "kolhydrater": 45.7,
        "fett": 1.6,
        "fibrer": 15.8,
        "alkohol": 0
    },
    {
        "namn": "Vita bönor torkade kokta u. salt",
        "livsmedelsnummer": 880,
        "kolhydrater": 14.2,
        "fett": 0.6,
        "fibrer": 7,
        "alkohol": 0
    },
    {
        "namn": "Kikärtor torkade",
        "livsmedelsnummer": 881,
        "kolhydrater": 51,
        "fett": 4.8,
        "fibrer": 10,
        "alkohol": 0
    },
    {
        "namn": "Mungbönor torkade kokta u. salt",
        "livsmedelsnummer": 883,
        "kolhydrater": 14.5,
        "fett": 0.7,
        "fibrer": 6.1,
        "alkohol": 0
    },
    {
        "namn": "Mungbönor torkade",
        "livsmedelsnummer": 886,
        "kolhydrater": 44.5,
        "fett": 1.3,
        "fibrer": 16,
        "alkohol": 0
    },
    {
        "namn": "Sojabönor torkade",
        "livsmedelsnummer": 887,
        "kolhydrater": 18.3,
        "fett": 17.7,
        "fibrer": 15.3,
        "alkohol": 0
    },
    {
        "namn": "Sojabönor torkade kokta u. salt",
        "livsmedelsnummer": 888,
        "kolhydrater": 5.8,
        "fett": 5.7,
        "fibrer": 5,
        "alkohol": 0
    },
    {
        "namn": "Vignabönor svartögda bönor torkade",
        "livsmedelsnummer": 889,
        "kolhydrater": 52.1,
        "fett": 1.5,
        "fibrer": 9.4,
        "alkohol": 0
    },
    {
        "namn": "Vignabönor svartögda bönor torkade kokta u. salt",
        "livsmedelsnummer": 890,
        "kolhydrater": 9.1,
        "fett": 0.3,
        "fibrer": 4.7,
        "alkohol": 0
    },
    {
        "namn": "Gröna el. gula ärtor torkade",
        "livsmedelsnummer": 891,
        "kolhydrater": 49.2,
        "fett": 1,
        "fibrer": 10.7,
        "alkohol": 0
    },
    {
        "namn": "Ärtsoppa m. fläsk hemlagad",
        "livsmedelsnummer": 897,
        "kolhydrater": 8.9,
        "fett": 2.1,
        "fibrer": 2.3,
        "alkohol": 0
    },
    {
        "namn": "Gryta chili con carne",
        "livsmedelsnummer": 898,
        "kolhydrater": 7.79,
        "fett": 3.88,
        "fibrer": 3.28,
        "alkohol": 0
    },
    {
        "namn": "Ärtsoppa fläsk tillagad konserv. m. vatten",
        "livsmedelsnummer": 900,
        "kolhydrater": 7.14,
        "fett": 2.31,
        "fibrer": 5.5,
        "alkohol": 0
    },
    {
        "namn": "Vita bönor m. tomatsås konserv.",
        "livsmedelsnummer": 901,
        "kolhydrater": 15,
        "fett": 0.5,
        "fibrer": 4.9,
        "alkohol": 0
    },
    {
        "namn": "Bönsoppa vita bönor m. tomat veg. ",
        "livsmedelsnummer": 902,
        "kolhydrater": 4.96,
        "fett": 1.67,
        "fibrer": 3.32,
        "alkohol": 0
    },
    {
        "namn": "Linssoppa veg. ",
        "livsmedelsnummer": 903,
        "kolhydrater": 8.18,
        "fett": 0.94,
        "fibrer": 3.26,
        "alkohol": 0
    },
    {
        "namn": "Ärtsoppa veg.",
        "livsmedelsnummer": 904,
        "kolhydrater": 12.04,
        "fett": 0.32,
        "fibrer": 2.67,
        "alkohol": 0
    },
    {
        "namn": "Tofu sojabönsost",
        "livsmedelsnummer": 905,
        "kolhydrater": 0,
        "fett": 4.2,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Sojamjöl fett ca 20%",
        "livsmedelsnummer": 906,
        "kolhydrater": 16,
        "fett": 23.5,
        "fibrer": 11.9,
        "alkohol": 0
    },
    {
        "namn": "Sojadryck",
        "livsmedelsnummer": 907,
        "kolhydrater": 3.2,
        "fett": 1.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Miso sojabönspasta fermenterad",
        "livsmedelsnummer": 908,
        "kolhydrater": 21,
        "fett": 4.6,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Sojasås",
        "livsmedelsnummer": 909,
        "kolhydrater": 6.6,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sojasås söt",
        "livsmedelsnummer": 910,
        "kolhydrater": 38.5,
        "fett": 2.14,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv veg. sojakorv konserv. fett 15%",
        "livsmedelsnummer": 911,
        "kolhydrater": 3.5,
        "fett": 15,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Glass sojaglass mjölkfri fett 11%",
        "livsmedelsnummer": 912,
        "kolhydrater": 27,
        "fett": 11,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sojabönsbiff stekt",
        "livsmedelsnummer": 915,
        "kolhydrater": 15.58,
        "fett": 9.04,
        "fibrer": 3.35,
        "alkohol": 0
    },
    {
        "namn": "Korv veg. sojakorv stekt",
        "livsmedelsnummer": 916,
        "kolhydrater": 0.84,
        "fett": 16.83,
        "fibrer": 8.11,
        "alkohol": 0
    },
    {
        "namn": "Falafel kikärtsbiff friterad hemlagad",
        "livsmedelsnummer": 919,
        "kolhydrater": 11.56,
        "fett": 7.22,
        "fibrer": 10.13,
        "alkohol": 0
    },
    {
        "namn": "Lamm bog rå",
        "livsmedelsnummer": 920,
        "kolhydrater": 0,
        "fett": 5.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm kotlett rå",
        "livsmedelsnummer": 921,
        "kolhydrater": 0,
        "fett": 17.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm lägg rå",
        "livsmedelsnummer": 922,
        "kolhydrater": 0,
        "fett": 4.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm rygg el. hals rå",
        "livsmedelsnummer": 923,
        "kolhydrater": 0,
        "fett": 11.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm stek rå",
        "livsmedelsnummer": 924,
        "kolhydrater": 0,
        "fett": 2.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm färs rå fett 20%",
        "livsmedelsnummer": 925,
        "kolhydrater": 0,
        "fett": 19.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm tunnbringa rå",
        "livsmedelsnummer": 926,
        "kolhydrater": 0,
        "fett": 12.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm kotlett rå fett bortskuret",
        "livsmedelsnummer": 927,
        "kolhydrater": 0,
        "fett": 2.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hare kött rå",
        "livsmedelsnummer": 928,
        "kolhydrater": 0,
        "fett": 3.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hjort dovhjort bog rå",
        "livsmedelsnummer": 930,
        "kolhydrater": 0,
        "fett": 1.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hjort dovhjort stek rå",
        "livsmedelsnummer": 931,
        "kolhydrater": 0,
        "fett": 1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hjort ryggbiff rå",
        "livsmedelsnummer": 932,
        "kolhydrater": 0,
        "fett": 1.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Häst kött rå",
        "livsmedelsnummer": 933,
        "kolhydrater": 0,
        "fett": 10,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv bog rå",
        "livsmedelsnummer": 934,
        "kolhydrater": 0,
        "fett": 2.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv bringa rå",
        "livsmedelsnummer": 935,
        "kolhydrater": 0,
        "fett": 12.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv filé rå",
        "livsmedelsnummer": 936,
        "kolhydrater": 0,
        "fett": 2.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv fransyska rå",
        "livsmedelsnummer": 937,
        "kolhydrater": 0,
        "fett": 3.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv innanlår rå",
        "livsmedelsnummer": 938,
        "kolhydrater": 0,
        "fett": 2.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv kotlett rå",
        "livsmedelsnummer": 939,
        "kolhydrater": 0,
        "fett": 4.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv lägg rå",
        "livsmedelsnummer": 940,
        "kolhydrater": 0,
        "fett": 1.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv ytterlår rå",
        "livsmedelsnummer": 941,
        "kolhydrater": 0,
        "fett": 3.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv tunnbringa rå",
        "livsmedelsnummer": 942,
        "kolhydrater": 0,
        "fett": 11,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv högrev rå",
        "livsmedelsnummer": 943,
        "kolhydrater": 0,
        "fett": 6.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kanin kött rå",
        "livsmedelsnummer": 944,
        "kolhydrater": 0,
        "fett": 4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt clubstek biff rå m. ben",
        "livsmedelsnummer": 945,
        "kolhydrater": 0,
        "fett": 9.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt ryggbiff rå",
        "livsmedelsnummer": 946,
        "kolhydrater": 0,
        "fett": 3.85,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt oxbringa rå",
        "livsmedelsnummer": 947,
        "kolhydrater": 0,
        "fett": 15.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt oxbringa rimmad rå",
        "livsmedelsnummer": 948,
        "kolhydrater": 0,
        "fett": 15.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt oxfilé rå",
        "livsmedelsnummer": 949,
        "kolhydrater": 0,
        "fett": 4.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt fransyska rå",
        "livsmedelsnummer": 950,
        "kolhydrater": 0,
        "fett": 3.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt färs rå fett 10%",
        "livsmedelsnummer": 951,
        "kolhydrater": 0,
        "fett": 11.34,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt högrev rå fett bortskuret",
        "livsmedelsnummer": 953,
        "kolhydrater": 0,
        "fett": 6.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt innanlår rå",
        "livsmedelsnummer": 954,
        "kolhydrater": 0,
        "fett": 1.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt lägg rå",
        "livsmedelsnummer": 955,
        "kolhydrater": 0,
        "fett": 2.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt bog el. märgpipa rå",
        "livsmedelsnummer": 956,
        "kolhydrater": 0,
        "fett": 3.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt rostbiff rå",
        "livsmedelsnummer": 957,
        "kolhydrater": 0,
        "fett": 3.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt rulle rimmad rå",
        "livsmedelsnummer": 958,
        "kolhydrater": 0,
        "fett": 1.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt ytterlår rå",
        "livsmedelsnummer": 959,
        "kolhydrater": 0,
        "fett": 2.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt entrecôte rå",
        "livsmedelsnummer": 960,
        "kolhydrater": 0,
        "fett": 6.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt grytbitar rå",
        "livsmedelsnummer": 961,
        "kolhydrater": 0,
        "fett": 6.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt kött hackebiff rå frysvara",
        "livsmedelsnummer": 962,
        "kolhydrater": 0,
        "fett": 8.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt färs rå fett 15%",
        "livsmedelsnummer": 963,
        "kolhydrater": 0,
        "fett": 15,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ren stek rå",
        "livsmedelsnummer": 965,
        "kolhydrater": 0,
        "fett": 1.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ren bog rå",
        "livsmedelsnummer": 966,
        "kolhydrater": 0,
        "fett": 1.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ren skav rå frysvara",
        "livsmedelsnummer": 967,
        "kolhydrater": 0,
        "fett": 4.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rådjur kött rå",
        "livsmedelsnummer": 968,
        "kolhydrater": 0,
        "fett": 1.25,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris bog rå",
        "livsmedelsnummer": 969,
        "kolhydrater": 0,
        "fett": 7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskfilé rå",
        "livsmedelsnummer": 970,
        "kolhydrater": 0,
        "fett": 2.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskkotlett rå fettkant 5 mm",
        "livsmedelsnummer": 971,
        "kolhydrater": 0,
        "fett": 12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris revbensspjäll rå",
        "livsmedelsnummer": 972,
        "kolhydrater": 0,
        "fett": 13.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fötter rå",
        "livsmedelsnummer": 973,
        "kolhydrater": 0,
        "fett": 12.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris skinka julskinka rimmad rå fett ca 3%",
        "livsmedelsnummer": 974,
        "kolhydrater": 0,
        "fett": 3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskben rå",
        "livsmedelsnummer": 975,
        "kolhydrater": 0,
        "fett": 13.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris picnicbog rå",
        "livsmedelsnummer": 976,
        "kolhydrater": 0,
        "fett": 4.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris grytbitar rå",
        "livsmedelsnummer": 977,
        "kolhydrater": 0,
        "fett": 9.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskkarré rå",
        "livsmedelsnummer": 978,
        "kolhydrater": 0,
        "fett": 11.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris färs rå fett 20%",
        "livsmedelsnummer": 980,
        "kolhydrater": 0,
        "fett": 20,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris bogbladsstek rå",
        "livsmedelsnummer": 981,
        "kolhydrater": 0,
        "fett": 7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskkotlett rå fett bortskuret",
        "livsmedelsnummer": 982,
        "kolhydrater": 0,
        "fett": 1.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskkotlett rå fettkant 2 mm",
        "livsmedelsnummer": 983,
        "kolhydrater": 0,
        "fett": 6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris lägg putsad rå u. svål",
        "livsmedelsnummer": 984,
        "kolhydrater": 0,
        "fett": 5.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris sidfläsk bit rå m. svål",
        "livsmedelsnummer": 985,
        "kolhydrater": 0,
        "fett": 22.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris stekfläsk sida skiva rå m. svål",
        "livsmedelsnummer": 986,
        "kolhydrater": 0,
        "fett": 20.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris flintastek rå m. svål",
        "livsmedelsnummer": 987,
        "kolhydrater": 0,
        "fett": 13,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris skinka innanlår rå",
        "livsmedelsnummer": 988,
        "kolhydrater": 0,
        "fett": 1.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris skinka fransyska rå",
        "livsmedelsnummer": 989,
        "kolhydrater": 0,
        "fett": 2.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris skinka ytterlår rå",
        "livsmedelsnummer": 990,
        "kolhydrater": 0,
        "fett": 4.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris sidfläsk el. stekfläsk skivor rimmat rå",
        "livsmedelsnummer": 991,
        "kolhydrater": 0,
        "fett": 34.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris färs rå fett 8%",
        "livsmedelsnummer": 992,
        "kolhydrater": 0,
        "fett": 8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Älg skav rå frysvara",
        "livsmedelsnummer": 995,
        "kolhydrater": 0,
        "fett": 4.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt oxsvans rå fett bortskuret",
        "livsmedelsnummer": 996,
        "kolhydrater": 0,
        "fett": 10.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris svål rå",
        "livsmedelsnummer": 997,
        "kolhydrater": 0,
        "fett": 20.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Häst hamburgerkött rökt",
        "livsmedelsnummer": 998,
        "kolhydrater": 0,
        "fett": 1.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt saltkött rimmat kokt",
        "livsmedelsnummer": 999,
        "kolhydrater": 0,
        "fett": 2.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt kött rökt",
        "livsmedelsnummer": 1000,
        "kolhydrater": 0,
        "fett": 2.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ren stek varmrökt",
        "livsmedelsnummer": 1001,
        "kolhydrater": 0.1,
        "fett": 3.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ren kött torkat",
        "livsmedelsnummer": 1002,
        "kolhydrater": 3,
        "fett": 17.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris bacon rå",
        "livsmedelsnummer": 1003,
        "kolhydrater": 0,
        "fett": 32.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris bacon stekt",
        "livsmedelsnummer": 1004,
        "kolhydrater": 0,
        "fett": 38.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris bog konserv. gelé 6-8%",
        "livsmedelsnummer": 1005,
        "kolhydrater": 0.2,
        "fett": 5.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris kassler kotlettrad rökt",
        "livsmedelsnummer": 1006,
        "kolhydrater": 0.5,
        "fett": 2.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris skinka konserv. gelé 8-11%",
        "livsmedelsnummer": 1007,
        "kolhydrater": 0,
        "fett": 3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris skinka lufttorkad italiensk",
        "livsmedelsnummer": 1008,
        "kolhydrater": 1.5,
        "fett": 12.38,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris skinka rökt fett 6%",
        "livsmedelsnummer": 1009,
        "kolhydrater": 0,
        "fett": 6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris skinka skivad rökt fett 1-3%",
        "livsmedelsnummer": 1010,
        "kolhydrater": 1.3,
        "fett": 2.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris sidfläsk rökt",
        "livsmedelsnummer": 1011,
        "kolhydrater": 0,
        "fett": 37.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt kött konserv.",
        "livsmedelsnummer": 1012,
        "kolhydrater": 0.4,
        "fett": 12.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt flankstek rå",
        "livsmedelsnummer": 1013,
        "kolhydrater": 0,
        "fett": 5.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt ryggbiff stekt",
        "livsmedelsnummer": 1014,
        "kolhydrater": 0,
        "fett": 4.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt entrecôte stekt",
        "livsmedelsnummer": 1017,
        "kolhydrater": 0,
        "fett": 7.09,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris bog stekt",
        "livsmedelsnummer": 1018,
        "kolhydrater": 0,
        "fett": 8.33,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris kött kokt m. salt",
        "livsmedelsnummer": 1019,
        "kolhydrater": 0,
        "fett": 10.23,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskben kokt m. salt",
        "livsmedelsnummer": 1022,
        "kolhydrater": 0,
        "fett": 15.94,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskfilé skiva stekt",
        "livsmedelsnummer": 1023,
        "kolhydrater": 0,
        "fett": 3.11,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskkarré skiva stekt",
        "livsmedelsnummer": 1024,
        "kolhydrater": 0,
        "fett": 13.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskkotlett stekt",
        "livsmedelsnummer": 1025,
        "kolhydrater": 0,
        "fett": 14.06,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris lägg kokt m. salt u. svål",
        "livsmedelsnummer": 1027,
        "kolhydrater": 0,
        "fett": 6.15,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris kött grillat",
        "livsmedelsnummer": 1028,
        "kolhydrater": 0,
        "fett": 10.25,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rullsylta",
        "livsmedelsnummer": 1029,
        "kolhydrater": 0,
        "fett": 19.03,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fötter kokta m. salt",
        "livsmedelsnummer": 1030,
        "kolhydrater": 0,
        "fett": 14.49,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hare stek stekt",
        "livsmedelsnummer": 1031,
        "kolhydrater": 0,
        "fett": 3.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv filé stekt",
        "livsmedelsnummer": 1032,
        "kolhydrater": 0,
        "fett": 3.17,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv kotlett stekt",
        "livsmedelsnummer": 1033,
        "kolhydrater": 0,
        "fett": 5.15,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv kött kokt m. salt",
        "livsmedelsnummer": 1034,
        "kolhydrater": 0,
        "fett": 9.85,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv stek stekt",
        "livsmedelsnummer": 1035,
        "kolhydrater": 0,
        "fett": 2.93,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm kotlett stekt",
        "livsmedelsnummer": 1036,
        "kolhydrater": 0,
        "fett": 16.07,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm stek stekt",
        "livsmedelsnummer": 1037,
        "kolhydrater": 0,
        "fett": 2.39,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt högrev kokt m. salt",
        "livsmedelsnummer": 1038,
        "kolhydrater": 0,
        "fett": 8.76,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt stek el. grytstek kokt m. salt",
        "livsmedelsnummer": 1039,
        "kolhydrater": 0,
        "fett": 4.49,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt oxbringa rimmad kokt u. salt",
        "livsmedelsnummer": 1042,
        "kolhydrater": 0,
        "fett": 18.57,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Oxrullad nöt stekt",
        "livsmedelsnummer": 1043,
        "kolhydrater": 0.9,
        "fett": 3.81,
        "fibrer": 0.11,
        "alkohol": 0
    },
    {
        "namn": "Nöt rostbiff ugnsstekt",
        "livsmedelsnummer": 1044,
        "kolhydrater": 0,
        "fett": 3.73,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris revbensspjäll ugnsstekt grillat",
        "livsmedelsnummer": 1045,
        "kolhydrater": 2.18,
        "fett": 24.43,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rådjur kött ugnsstekt",
        "livsmedelsnummer": 1047,
        "kolhydrater": 0,
        "fett": 1.53,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ren kött kokt m. salt",
        "livsmedelsnummer": 1048,
        "kolhydrater": 0,
        "fett": 2.08,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ren kött ugnsstekt",
        "livsmedelsnummer": 1049,
        "kolhydrater": 0,
        "fett": 2.21,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Älg stek ugnsstekt el. grillad",
        "livsmedelsnummer": 1050,
        "kolhydrater": 1.84,
        "fett": 1.61,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskkarré tillagad u. sky",
        "livsmedelsnummer": 1055,
        "kolhydrater": 0,
        "fett": 17.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris skinkstek stekt u. sky frysvara",
        "livsmedelsnummer": 1056,
        "kolhydrater": 0,
        "fett": 6.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt stek stekt u. sky frysvara",
        "livsmedelsnummer": 1057,
        "kolhydrater": 0,
        "fett": 3.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt rostbiff tillagad ugnsrostad u. salt",
        "livsmedelsnummer": 1058,
        "kolhydrater": 0,
        "fett": 3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris revbensspjäll tillagad u. sky",
        "livsmedelsnummer": 1059,
        "kolhydrater": 0,
        "fett": 23.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gryta dillkött nöt m. sås",
        "livsmedelsnummer": 1060,
        "kolhydrater": 4.9,
        "fett": 6.8,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Biff stroganoff nöt",
        "livsmedelsnummer": 1062,
        "kolhydrater": 2.1,
        "fett": 10.02,
        "fibrer": 0.46,
        "alkohol": 0.05
    },
    {
        "namn": "Rimmat sidfläsk el. stekfläsk stekt m. löksås",
        "livsmedelsnummer": 1063,
        "kolhydrater": 7.15,
        "fett": 16.34,
        "fibrer": 0.43,
        "alkohol": 0
    },
    {
        "namn": "Rimmat sidfläsk panerat stekt",
        "livsmedelsnummer": 1064,
        "kolhydrater": 8.34,
        "fett": 31.59,
        "fibrer": 0.52,
        "alkohol": 0
    },
    {
        "namn": "Fläskkotlett panerad stekt",
        "livsmedelsnummer": 1065,
        "kolhydrater": 7.23,
        "fett": 17.77,
        "fibrer": 0.45,
        "alkohol": 0
    },
    {
        "namn": "Schnitzel gris stekt",
        "livsmedelsnummer": 1066,
        "kolhydrater": 7.35,
        "fett": 9.95,
        "fibrer": 0.46,
        "alkohol": 0
    },
    {
        "namn": "Gryta gulasch nöt",
        "livsmedelsnummer": 1068,
        "kolhydrater": 3.61,
        "fett": 2.79,
        "fibrer": 0.87,
        "alkohol": 0
    },
    {
        "namn": "Gryta osso buco kalvläggsgryta ",
        "livsmedelsnummer": 1072,
        "kolhydrater": 4.06,
        "fett": 3.62,
        "fibrer": 0.92,
        "alkohol": 0.42
    },
    {
        "namn": "Köttsoppa nöt",
        "livsmedelsnummer": 1073,
        "kolhydrater": 2.26,
        "fett": 1.09,
        "fibrer": 1.12,
        "alkohol": 0
    },
    {
        "namn": "Gryta lamm m. lök tomat",
        "livsmedelsnummer": 1075,
        "kolhydrater": 3.59,
        "fett": 4.81,
        "fibrer": 0.79,
        "alkohol": 0.85
    },
    {
        "namn": "Pepparrotskött nöt m. lök morot sås",
        "livsmedelsnummer": 1078,
        "kolhydrater": 2.05,
        "fett": 8.04,
        "fibrer": 0.47,
        "alkohol": 0
    },
    {
        "namn": "Renskav brynt m. matfett salt",
        "livsmedelsnummer": 1080,
        "kolhydrater": 0.03,
        "fett": 13.65,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gryta renskavsgryta",
        "livsmedelsnummer": 1081,
        "kolhydrater": 8.7,
        "fett": 7.89,
        "fibrer": 0.82,
        "alkohol": 0
    },
    {
        "namn": "Skinksås",
        "livsmedelsnummer": 1082,
        "kolhydrater": 6.38,
        "fett": 6.75,
        "fibrer": 0.12,
        "alkohol": 0
    },
    {
        "namn": "Gryta kalops nöt hemlagad",
        "livsmedelsnummer": 1083,
        "kolhydrater": 3.03,
        "fett": 3.77,
        "fibrer": 0.83,
        "alkohol": 0
    },
    {
        "namn": "Biff stroganoff nöt frysvara",
        "livsmedelsnummer": 1087,
        "kolhydrater": 4.8,
        "fett": 4.4,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Gryta dillkött nöt m. sås frysvara",
        "livsmedelsnummer": 1088,
        "kolhydrater": 2.7,
        "fett": 5,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Kinesisk rätt gris friterat m. grönsaker",
        "livsmedelsnummer": 1089,
        "kolhydrater": 17.95,
        "fett": 9.45,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Gryta chop suey fläskfilé tillagad på restaurang",
        "livsmedelsnummer": 1090,
        "kolhydrater": 3.1,
        "fett": 5.72,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Nasi Goreng gris tillagad på restaurang",
        "livsmedelsnummer": 1091,
        "kolhydrater": 18.8,
        "fett": 7.24,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Frikassé kalv frysvara",
        "livsmedelsnummer": 1094,
        "kolhydrater": 2.5,
        "fett": 6.2,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Gryta kalops nöt frysvara",
        "livsmedelsnummer": 1095,
        "kolhydrater": 2.8,
        "fett": 6,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Köttsoppa nöt tillagad konserv. m. vatten",
        "livsmedelsnummer": 1096,
        "kolhydrater": 0.98,
        "fett": 0.35,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Kycklingburgare rå fett ca 7% frysvara",
        "livsmedelsnummer": 1099,
        "kolhydrater": 11,
        "fett": 7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Köttbullar kyckling stekta fett 12% frysvara",
        "livsmedelsnummer": 1100,
        "kolhydrater": 13,
        "fett": 12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hamburgare nöt rå frysvara",
        "livsmedelsnummer": 1101,
        "kolhydrater": 2,
        "fett": 17.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Köttbullar råa frysvara",
        "livsmedelsnummer": 1102,
        "kolhydrater": 6.5,
        "fett": 14.9,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Pannbiff rå frysvara",
        "livsmedelsnummer": 1103,
        "kolhydrater": 5.6,
        "fett": 14.4,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Soja- och veteprotein burgare tillagad",
        "livsmedelsnummer": 1104,
        "kolhydrater": 6.7,
        "fett": 7.7,
        "fibrer": 5.3,
        "alkohol": 0
    },
    {
        "namn": "Biff à la Lindström stekt hemlagad",
        "livsmedelsnummer": 1105,
        "kolhydrater": 6.1,
        "fett": 8.1,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Köttbullar blandfärs stekta hemlagade",
        "livsmedelsnummer": 1106,
        "kolhydrater": 5.8,
        "fett": 10,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Köttfärslimpa ugnsstekt hemlagad",
        "livsmedelsnummer": 1107,
        "kolhydrater": 4,
        "fett": 7.7,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Köttfärssås i gjutjärn hemlagad",
        "livsmedelsnummer": 1108,
        "kolhydrater": 4.7,
        "fett": 5.1,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Pannbiff gris stekt",
        "livsmedelsnummer": 1109,
        "kolhydrater": 4.75,
        "fett": 12.48,
        "fibrer": 0.31,
        "alkohol": 0
    },
    {
        "namn": "Hamburgare nöt stekt fett 10%",
        "livsmedelsnummer": 1110,
        "kolhydrater": 0,
        "fett": 13.98,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hamburgare nöt stekt fett 15%",
        "livsmedelsnummer": 1111,
        "kolhydrater": 0,
        "fett": 17.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Järpar blandfärs stekta",
        "livsmedelsnummer": 1112,
        "kolhydrater": 5.2,
        "fett": 11.9,
        "fibrer": 0.69,
        "alkohol": 0
    },
    {
        "namn": "Frikadeller kalv",
        "livsmedelsnummer": 1113,
        "kolhydrater": 4.83,
        "fett": 6.88,
        "fibrer": 0.23,
        "alkohol": 0
    },
    {
        "namn": "Wallenbergare kalv stekt",
        "livsmedelsnummer": 1114,
        "kolhydrater": 7.41,
        "fett": 17.87,
        "fibrer": 0.43,
        "alkohol": 0
    },
    {
        "namn": "Köttfärssås nöt",
        "livsmedelsnummer": 1115,
        "kolhydrater": 4.65,
        "fett": 6.36,
        "fibrer": 1.03,
        "alkohol": 0
    },
    {
        "namn": "Köttfärssoppa",
        "livsmedelsnummer": 1116,
        "kolhydrater": 2.26,
        "fett": 2.19,
        "fibrer": 1.11,
        "alkohol": 0
    },
    {
        "namn": "Köttbullar nöt stekta",
        "livsmedelsnummer": 1119,
        "kolhydrater": 4.23,
        "fett": 9.53,
        "fibrer": 0.35,
        "alkohol": 0
    },
    {
        "namn": "Köttbullar gris stekta",
        "livsmedelsnummer": 1120,
        "kolhydrater": 6.23,
        "fett": 11.75,
        "fibrer": 0.29,
        "alkohol": 0
    },
    {
        "namn": "Köttfärssås gris",
        "livsmedelsnummer": 1121,
        "kolhydrater": 4.65,
        "fett": 7.73,
        "fibrer": 1.03,
        "alkohol": 0
    },
    {
        "namn": "Nöt färs stekt tacokryddad",
        "livsmedelsnummer": 1124,
        "kolhydrater": 0.54,
        "fett": 16.52,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lammfärsbiff stekt",
        "livsmedelsnummer": 1125,
        "kolhydrater": 4.67,
        "fett": 15.23,
        "fibrer": 0.31,
        "alkohol": 0
    },
    {
        "namn": "Köttfärslimpa gris ugnsstekt hemlagad",
        "livsmedelsnummer": 1126,
        "kolhydrater": 4.55,
        "fett": 11.96,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Köttfärslimpa blandfärs ugnsstekt hemlagad",
        "livsmedelsnummer": 1127,
        "kolhydrater": 4.55,
        "fett": 10.72,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Pannbiff nöt stekt",
        "livsmedelsnummer": 1128,
        "kolhydrater": 4.75,
        "fett": 9.88,
        "fibrer": 0.31,
        "alkohol": 0
    },
    {
        "namn": "Pannbiff blandfärs stekt",
        "livsmedelsnummer": 1129,
        "kolhydrater": 4.75,
        "fett": 11.18,
        "fibrer": 0.31,
        "alkohol": 0
    },
    {
        "namn": "Parisersmörgås",
        "livsmedelsnummer": 1130,
        "kolhydrater": 12.35,
        "fett": 8.81,
        "fibrer": 1.51,
        "alkohol": 0
    },
    {
        "namn": "Pannbiff älg stekt",
        "livsmedelsnummer": 1131,
        "kolhydrater": 4.45,
        "fett": 2.47,
        "fibrer": 0.29,
        "alkohol": 0
    },
    {
        "namn": "Köttfärssås älg",
        "livsmedelsnummer": 1132,
        "kolhydrater": 4.49,
        "fett": 2.45,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Taco tacoskal m. köttfärs grönsaker ost",
        "livsmedelsnummer": 1135,
        "kolhydrater": 6.72,
        "fett": 9.74,
        "fibrer": 0.73,
        "alkohol": 0
    },
    {
        "namn": "Biff à la Lindström stekt frysvara",
        "livsmedelsnummer": 1136,
        "kolhydrater": 5.8,
        "fett": 12.7,
        "fibrer": 2.4,
        "alkohol": 0
    },
    {
        "namn": "Gyta biff m. bambuskott tillagad på restaurang",
        "livsmedelsnummer": 1137,
        "kolhydrater": 2.4,
        "fett": 5.83,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Hamburgare nöt stekt frysvara",
        "livsmedelsnummer": 1138,
        "kolhydrater": 5.4,
        "fett": 20.3,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Kålpudding m. vitkål köttfärs",
        "livsmedelsnummer": 1142,
        "kolhydrater": 5.7,
        "fett": 5,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Köttbullar stekta fett ca 15% frysvara",
        "livsmedelsnummer": 1143,
        "kolhydrater": 7.4,
        "fett": 14.9,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Köttfärssås frysvara el. konserv.",
        "livsmedelsnummer": 1145,
        "kolhydrater": 5.7,
        "fett": 5.8,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Kåldolmar stekta u. sås frysvara",
        "livsmedelsnummer": 1146,
        "kolhydrater": 4.6,
        "fett": 5.9,
        "fibrer": 1.9,
        "alkohol": 0
    },
    {
        "namn": "Kåldolmar stekta värmda m. sås frysvara",
        "livsmedelsnummer": 1147,
        "kolhydrater": 6.4,
        "fett": 5.1,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Köttbullar stekta m. sås frysvara",
        "livsmedelsnummer": 1148,
        "kolhydrater": 5.9,
        "fett": 10,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Pannbiff stekt frysvara",
        "livsmedelsnummer": 1149,
        "kolhydrater": 7.6,
        "fett": 14.1,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Anka bröst rå",
        "livsmedelsnummer": 1151,
        "kolhydrater": 0,
        "fett": 4.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Anka rå m. skinn",
        "livsmedelsnummer": 1153,
        "kolhydrater": 0,
        "fett": 39.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Duva rå",
        "livsmedelsnummer": 1154,
        "kolhydrater": 0,
        "fett": 7.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Duva rå m. skinn",
        "livsmedelsnummer": 1155,
        "kolhydrater": 0,
        "fett": 24,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fasan rå",
        "livsmedelsnummer": 1156,
        "kolhydrater": 0,
        "fett": 3.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fasan rå m. skinn",
        "livsmedelsnummer": 1157,
        "kolhydrater": 0,
        "fett": 9.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gås rå",
        "livsmedelsnummer": 1158,
        "kolhydrater": 0,
        "fett": 7.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gås rå m. skinn",
        "livsmedelsnummer": 1159,
        "kolhydrater": 0,
        "fett": 33.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Höna rå",
        "livsmedelsnummer": 1160,
        "kolhydrater": 0,
        "fett": 6.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Höna rå m. skinn",
        "livsmedelsnummer": 1161,
        "kolhydrater": 0,
        "fett": 21,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalkon filé rå",
        "livsmedelsnummer": 1162,
        "kolhydrater": 0,
        "fett": 0.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalkon rå m. skinn",
        "livsmedelsnummer": 1163,
        "kolhydrater": 0,
        "fett": 4.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling kött rå u. skinn",
        "livsmedelsnummer": 1164,
        "kolhydrater": 0,
        "fett": 3.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling kött rå m. skinn",
        "livsmedelsnummer": 1165,
        "kolhydrater": 0,
        "fett": 11,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling bröstfilé rå m. skinn",
        "livsmedelsnummer": 1166,
        "kolhydrater": 0,
        "fett": 6.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling lår rå m. skinn",
        "livsmedelsnummer": 1167,
        "kolhydrater": 0,
        "fett": 13.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling vinge rå m. skinn",
        "livsmedelsnummer": 1168,
        "kolhydrater": 0,
        "fett": 12.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ripa rå",
        "livsmedelsnummer": 1169,
        "kolhydrater": 0,
        "fett": 2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling bröstfilé färsk stekt u. skinn",
        "livsmedelsnummer": 1170,
        "kolhydrater": 0,
        "fett": 2.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling ben rå m. skinn",
        "livsmedelsnummer": 1171,
        "kolhydrater": 0,
        "fett": 13.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling bröstfilé strimlad wokad u. skinn m. rapsolja",
        "livsmedelsnummer": 1172,
        "kolhydrater": 0,
        "fett": 5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling bröstfilé rå u. skinn",
        "livsmedelsnummer": 1173,
        "kolhydrater": 0,
        "fett": 1.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling lår rå u. skinn",
        "livsmedelsnummer": 1174,
        "kolhydrater": 0,
        "fett": 3.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling delar marinerade m. skinn",
        "livsmedelsnummer": 1175,
        "kolhydrater": 0,
        "fett": 12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Struts filé rå",
        "livsmedelsnummer": 1176,
        "kolhydrater": 0,
        "fett": 1.74,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Struts filé stekt",
        "livsmedelsnummer": 1177,
        "kolhydrater": 0.6,
        "fett": 5.11,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalkon kokt",
        "livsmedelsnummer": 1178,
        "kolhydrater": 0,
        "fett": 5.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Duva stekt m. skinn",
        "livsmedelsnummer": 1180,
        "kolhydrater": 0,
        "fett": 28.74,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling kokt m. salt",
        "livsmedelsnummer": 1181,
        "kolhydrater": 0,
        "fett": 4.62,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling grillad m. skinn",
        "livsmedelsnummer": 1182,
        "kolhydrater": 0,
        "fett": 13.82,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fasan stekt m. skinn",
        "livsmedelsnummer": 1183,
        "kolhydrater": 0,
        "fett": 8.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gås stekt m. skinn",
        "livsmedelsnummer": 1184,
        "kolhydrater": 0,
        "fett": 24.67,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Höna kokt m. salt",
        "livsmedelsnummer": 1185,
        "kolhydrater": 0,
        "fett": 9.22,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalkon stekt m. skinn",
        "livsmedelsnummer": 1186,
        "kolhydrater": 0,
        "fett": 5.87,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling bröstfilé stekt m. skinn",
        "livsmedelsnummer": 1188,
        "kolhydrater": 0,
        "fett": 8.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ripa stekt",
        "livsmedelsnummer": 1189,
        "kolhydrater": 0,
        "fett": 2.55,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling kött kokt stekt grillat",
        "livsmedelsnummer": 1190,
        "kolhydrater": 0,
        "fett": 7.75,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalkon rökt",
        "livsmedelsnummer": 1191,
        "kolhydrater": 0,
        "fett": 4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling marinerad grillad m. skinn",
        "livsmedelsnummer": 1192,
        "kolhydrater": 0,
        "fett": 9.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling friterad m. frityrsmet",
        "livsmedelsnummer": 1193,
        "kolhydrater": 5.8,
        "fett": 21.9,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Ostsufflé",
        "livsmedelsnummer": 1198,
        "kolhydrater": 6.72,
        "fett": 11.06,
        "fibrer": 0.15,
        "alkohol": 0
    },
    {
        "namn": "Bondomelett",
        "livsmedelsnummer": 1199,
        "kolhydrater": 8.69,
        "fett": 6.6,
        "fibrer": 1.14,
        "alkohol": 0
    },
    {
        "namn": "Braxen rå",
        "livsmedelsnummer": 1200,
        "kolhydrater": 0,
        "fett": 4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Regnbågslax rå",
        "livsmedelsnummer": 1201,
        "kolhydrater": 0,
        "fett": 9.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sej rå",
        "livsmedelsnummer": 1202,
        "kolhydrater": 0,
        "fett": 0.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hälleflundra vild rå",
        "livsmedelsnummer": 1203,
        "kolhydrater": 0,
        "fett": 8.55,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kycklingsoppa thailändsk",
        "livsmedelsnummer": 1206,
        "kolhydrater": 1.55,
        "fett": 3.5,
        "fibrer": 0.53,
        "alkohol": 0
    },
    {
        "namn": "Kyckling nugget friterad tillagad på restaurang",
        "livsmedelsnummer": 1207,
        "kolhydrater": 14.2,
        "fett": 10.44,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Kycklingsoppa tillagad redd pulver m. vatten mjölk",
        "livsmedelsnummer": 1208,
        "kolhydrater": 5.11,
        "fett": 2.36,
        "fibrer": 0.98,
        "alkohol": 0
    },
    {
        "namn": "Kycklingsoppa tillagad redd pulver m. vatten",
        "livsmedelsnummer": 1209,
        "kolhydrater": 5.83,
        "fett": 1.33,
        "fibrer": 0.98,
        "alkohol": 0
    },
    {
        "namn": "Kalvbuljong pasta el. pulver storhushåll",
        "livsmedelsnummer": 1210,
        "kolhydrater": 18.5,
        "fett": 8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalvbuljong pasta el. pulver lågsalt storhushåll",
        "livsmedelsnummer": 1211,
        "kolhydrater": 35,
        "fett": 5.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Köttbuljong pasta el. pulver storhushåll",
        "livsmedelsnummer": 1212,
        "kolhydrater": 23.36,
        "fett": 5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Köttbuljong pasta el. pulver lågsalt storhushåll",
        "livsmedelsnummer": 1213,
        "kolhydrater": 39,
        "fett": 4.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Skinkbuljong pasta el. pulver storhushåll",
        "livsmedelsnummer": 1214,
        "kolhydrater": 13.5,
        "fett": 13,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hönsbuljong pasta el. pulver lågsalt storhushåll",
        "livsmedelsnummer": 1215,
        "kolhydrater": 32,
        "fett": 15,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hönsbuljong pasta el. pulver storhushåll",
        "livsmedelsnummer": 1216,
        "kolhydrater": 16.2,
        "fett": 12.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Köttbuljong pulver tärning",
        "livsmedelsnummer": 1217,
        "kolhydrater": 5,
        "fett": 3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Köttbuljong konserv. ätf.",
        "livsmedelsnummer": 1218,
        "kolhydrater": 0,
        "fett": 0.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gelatinblad el. gelatinpulver",
        "livsmedelsnummer": 1219,
        "kolhydrater": 0,
        "fett": 0.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Köttbuljong tärning ätf.",
        "livsmedelsnummer": 1222,
        "kolhydrater": 0.46,
        "fett": 0.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Köttbuljong ätf.",
        "livsmedelsnummer": 1223,
        "kolhydrater": 1.2,
        "fett": 0.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hönsbuljong ätf.",
        "livsmedelsnummer": 1224,
        "kolhydrater": 0.2,
        "fett": 0.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ägg rått",
        "livsmedelsnummer": 1225,
        "kolhydrater": 0.4,
        "fett": 9.73,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Äggula rå",
        "livsmedelsnummer": 1226,
        "kolhydrater": 0.6,
        "fett": 28.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Äggvita rå",
        "livsmedelsnummer": 1227,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fransk omelett m. grädde",
        "livsmedelsnummer": 1229,
        "kolhydrater": 1.14,
        "fett": 22.48,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fransk omelett m. vatten",
        "livsmedelsnummer": 1230,
        "kolhydrater": 0.34,
        "fett": 14.68,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sufflé gräddad u. fyllning veg.",
        "livsmedelsnummer": 1231,
        "kolhydrater": 5.99,
        "fett": 11.31,
        "fibrer": 0.16,
        "alkohol": 0
    },
    {
        "namn": "Äggakaka",
        "livsmedelsnummer": 1232,
        "kolhydrater": 9.91,
        "fett": 6.26,
        "fibrer": 0.33,
        "alkohol": 0
    },
    {
        "namn": "Ägg stekt",
        "livsmedelsnummer": 1233,
        "kolhydrater": 0.44,
        "fett": 15.52,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Skinklåda m. mjölk ost",
        "livsmedelsnummer": 1235,
        "kolhydrater": 7.23,
        "fett": 3.54,
        "fibrer": 1.17,
        "alkohol": 0
    },
    {
        "namn": "Torsksufflé",
        "livsmedelsnummer": 1236,
        "kolhydrater": 4.58,
        "fett": 3.13,
        "fibrer": 0.13,
        "alkohol": 0
    },
    {
        "namn": "Kolja rå",
        "livsmedelsnummer": 1237,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kummel rå",
        "livsmedelsnummer": 1238,
        "kolhydrater": 0,
        "fett": 0.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Siklöja rå",
        "livsmedelsnummer": 1240,
        "kolhydrater": 0,
        "fett": 6.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sill rå",
        "livsmedelsnummer": 1241,
        "kolhydrater": 0,
        "fett": 9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Flundra rå",
        "livsmedelsnummer": 1242,
        "kolhydrater": 0,
        "fett": 2.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Strömming rå",
        "livsmedelsnummer": 1243,
        "kolhydrater": 0,
        "fett": 4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Röding rå",
        "livsmedelsnummer": 1244,
        "kolhydrater": 0,
        "fett": 7.94,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Torsk rå",
        "livsmedelsnummer": 1246,
        "kolhydrater": 0,
        "fett": 0.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vitling rå",
        "livsmedelsnummer": 1247,
        "kolhydrater": 0,
        "fett": 0.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ål rå",
        "livsmedelsnummer": 1248,
        "kolhydrater": 0,
        "fett": 33,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Öring odlad rå",
        "livsmedelsnummer": 1249,
        "kolhydrater": 0,
        "fett": 10,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Pinklax rå",
        "livsmedelsnummer": 1250,
        "kolhydrater": 0,
        "fett": 2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Piggvar rå",
        "livsmedelsnummer": 1251,
        "kolhydrater": 0,
        "fett": 1.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sik urtagen varmrökt",
        "livsmedelsnummer": 1252,
        "kolhydrater": 0,
        "fett": 4.97,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Abborre rå",
        "livsmedelsnummer": 1253,
        "kolhydrater": 0,
        "fett": 0.61,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lax odlad Norge fjordlax rå",
        "livsmedelsnummer": 1255,
        "kolhydrater": 0.7,
        "fett": 14.13,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Öring Sverige rå",
        "livsmedelsnummer": 1256,
        "kolhydrater": 0,
        "fett": 2.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lake rå",
        "livsmedelsnummer": 1257,
        "kolhydrater": 0,
        "fett": 0.45,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rödspätta rå",
        "livsmedelsnummer": 1258,
        "kolhydrater": 0,
        "fett": 0.61,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sik rå",
        "livsmedelsnummer": 1259,
        "kolhydrater": 0,
        "fett": 0.64,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Makrill rå",
        "livsmedelsnummer": 1260,
        "kolhydrater": 0,
        "fett": 25,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Regnbågslax odlad rå",
        "livsmedelsnummer": 1261,
        "kolhydrater": 0.4,
        "fett": 3.46,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gädda rå",
        "livsmedelsnummer": 1262,
        "kolhydrater": 0,
        "fett": 0.23,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gös rå",
        "livsmedelsnummer": 1263,
        "kolhydrater": 0,
        "fett": 0.21,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ansjovis skarpsill konserv. ",
        "livsmedelsnummer": 1265,
        "kolhydrater": 11.8,
        "fett": 13.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Böckling varmrökt",
        "livsmedelsnummer": 1266,
        "kolhydrater": 0,
        "fett": 12.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fisk torkad",
        "livsmedelsnummer": 1267,
        "kolhydrater": 0,
        "fett": 1.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lax kallrökt",
        "livsmedelsnummer": 1269,
        "kolhydrater": 1.3,
        "fett": 9.78,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sardeller konserv.",
        "livsmedelsnummer": 1270,
        "kolhydrater": 0.3,
        "fett": 10.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sardiner i olja konserv.",
        "livsmedelsnummer": 1271,
        "kolhydrater": 0,
        "fett": 21.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sardiner i tomatsås konserv.",
        "livsmedelsnummer": 1272,
        "kolhydrater": 0.6,
        "fett": 14.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Saltsill rå",
        "livsmedelsnummer": 1273,
        "kolhydrater": 0,
        "fett": 19,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Strömming rå salt",
        "livsmedelsnummer": 1274,
        "kolhydrater": 0,
        "fett": 7.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Tonfisk i olja konserv. avrunnen",
        "livsmedelsnummer": 1275,
        "kolhydrater": 0,
        "fett": 9.87,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ål varmrökt rundrökt",
        "livsmedelsnummer": 1277,
        "kolhydrater": 0,
        "fett": 30.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Tonfisk i vatten konserv. avrunnen",
        "livsmedelsnummer": 1278,
        "kolhydrater": 0,
        "fett": 0.95,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Makrill urtagen varmrökt",
        "livsmedelsnummer": 1279,
        "kolhydrater": 0,
        "fett": 24.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lutfisk rå frysvara",
        "livsmedelsnummer": 1280,
        "kolhydrater": 0,
        "fett": 0.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sill matjessill konserv.",
        "livsmedelsnummer": 1281,
        "kolhydrater": 12.1,
        "fett": 22.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Marulk rå",
        "livsmedelsnummer": 1282,
        "kolhydrater": 0,
        "fett": 0.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Makrill filé i olja konserv.",
        "livsmedelsnummer": 1283,
        "kolhydrater": 0,
        "fett": 28,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Saltsill urvattnad konserv.",
        "livsmedelsnummer": 1284,
        "kolhydrater": 0,
        "fett": 16,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lax gravad",
        "livsmedelsnummer": 1285,
        "kolhydrater": 3.1,
        "fett": 8.72,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lax rimmad",
        "livsmedelsnummer": 1286,
        "kolhydrater": 0,
        "fett": 8.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Böckling dubbelfilé varmrökt",
        "livsmedelsnummer": 1287,
        "kolhydrater": 0,
        "fett": 20.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lax varmrökt urtagen",
        "livsmedelsnummer": 1288,
        "kolhydrater": 0.1,
        "fett": 14.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Makrill filé varmrökt",
        "livsmedelsnummer": 1289,
        "kolhydrater": 0,
        "fett": 27.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Regnbågslax kallrökt",
        "livsmedelsnummer": 1290,
        "kolhydrater": 0,
        "fett": 12.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Regnbågslax urtagen varmrökt",
        "livsmedelsnummer": 1291,
        "kolhydrater": 0,
        "fett": 7.68,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Röding urtagen varmrökt",
        "livsmedelsnummer": 1292,
        "kolhydrater": 0,
        "fett": 8.61,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ål varmrökt flatrökt",
        "livsmedelsnummer": 1293,
        "kolhydrater": 0,
        "fett": 40.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fiskpinnar stekta",
        "livsmedelsnummer": 1294,
        "kolhydrater": 16.8,
        "fett": 12.11,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Makrill filé i tomatsås konserv.",
        "livsmedelsnummer": 1296,
        "kolhydrater": 3.9,
        "fett": 13.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Surströmming",
        "livsmedelsnummer": 1297,
        "kolhydrater": 0,
        "fett": 3.89,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lutfisk kokt",
        "livsmedelsnummer": 1298,
        "kolhydrater": 0,
        "fett": 0.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Saltsill panerad stekt hemlagad",
        "livsmedelsnummer": 1299,
        "kolhydrater": 4,
        "fett": 24.2,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Strömmingsflundra panerad stekt hemlagad",
        "livsmedelsnummer": 1300,
        "kolhydrater": 4.1,
        "fett": 19.2,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Torsk filé panerad stekt hemlagad",
        "livsmedelsnummer": 1301,
        "kolhydrater": 4.5,
        "fett": 6,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Ål inkokt hemlagad",
        "livsmedelsnummer": 1302,
        "kolhydrater": 0,
        "fett": 36,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ål ugnsstekt hemlagad",
        "livsmedelsnummer": 1303,
        "kolhydrater": 3.2,
        "fett": 40.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Abborre kokt m. salt",
        "livsmedelsnummer": 1304,
        "kolhydrater": 0,
        "fett": 0.99,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Abborre filé panerad stekt",
        "livsmedelsnummer": 1305,
        "kolhydrater": 6.58,
        "fett": 8.53,
        "fibrer": 0.38,
        "alkohol": 0
    },
    {
        "namn": "Fisk friterad",
        "livsmedelsnummer": 1306,
        "kolhydrater": 12,
        "fett": 10.99,
        "fibrer": 0.56,
        "alkohol": 0
    },
    {
        "namn": "Regnbågslax inkokt m. salt",
        "livsmedelsnummer": 1308,
        "kolhydrater": 0,
        "fett": 11.45,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Regnbågslax panerad stekt",
        "livsmedelsnummer": 1309,
        "kolhydrater": 5.96,
        "fett": 14.3,
        "fibrer": 0.34,
        "alkohol": 0
    },
    {
        "namn": "Gädda kokt m. salt",
        "livsmedelsnummer": 1310,
        "kolhydrater": 0,
        "fett": 0.37,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gädda panerad stekt",
        "livsmedelsnummer": 1311,
        "kolhydrater": 6.57,
        "fett": 8.13,
        "fibrer": 0.38,
        "alkohol": 0
    },
    {
        "namn": "Hälleflundra kokt m. salt",
        "livsmedelsnummer": 1312,
        "kolhydrater": 0,
        "fett": 10.35,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hälleflundra panerad stekt",
        "livsmedelsnummer": 1313,
        "kolhydrater": 6.01,
        "fett": 13.61,
        "fibrer": 0.34,
        "alkohol": 0
    },
    {
        "namn": "Kolja kokt m. salt",
        "livsmedelsnummer": 1314,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kolja panerad stekt m. salt",
        "livsmedelsnummer": 1315,
        "kolhydrater": 6.61,
        "fett": 7.94,
        "fibrer": 0.38,
        "alkohol": 0
    },
    {
        "namn": "Lax stekt m. salt",
        "livsmedelsnummer": 1316,
        "kolhydrater": 0.84,
        "fett": 13.51,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lax kokt m. salt",
        "livsmedelsnummer": 1317,
        "kolhydrater": 0.82,
        "fett": 16.56,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Makrill kokt m. salt",
        "livsmedelsnummer": 1318,
        "kolhydrater": 0,
        "fett": 28.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Makrill panerad stekt",
        "livsmedelsnummer": 1319,
        "kolhydrater": 5.94,
        "fett": 25.66,
        "fibrer": 0.34,
        "alkohol": 0
    },
    {
        "namn": "Makrill stekt m. salt",
        "livsmedelsnummer": 1320,
        "kolhydrater": 0,
        "fett": 23.98,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Piggvar kokt m. salt",
        "livsmedelsnummer": 1321,
        "kolhydrater": 0,
        "fett": 2.81,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rödspätta filé kokt m. salt",
        "livsmedelsnummer": 1322,
        "kolhydrater": 0,
        "fett": 0.98,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rödspätta filé panerad stekt m. salt",
        "livsmedelsnummer": 1323,
        "kolhydrater": 6.54,
        "fett": 8.48,
        "fibrer": 0.38,
        "alkohol": 0
    },
    {
        "namn": "Rödspätta filé stekt m. salt",
        "livsmedelsnummer": 1324,
        "kolhydrater": 0,
        "fett": 0.83,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sik kokt m. salt",
        "livsmedelsnummer": 1325,
        "kolhydrater": 0,
        "fett": 1.03,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sik panerad stekt",
        "livsmedelsnummer": 1326,
        "kolhydrater": 6.55,
        "fett": 8.52,
        "fibrer": 0.38,
        "alkohol": 0
    },
    {
        "namn": "Saltsill kokt",
        "livsmedelsnummer": 1327,
        "kolhydrater": 0,
        "fett": 18.96,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sill panerad stekt m. salt",
        "livsmedelsnummer": 1328,
        "kolhydrater": 6.17,
        "fett": 13.46,
        "fibrer": 0.78,
        "alkohol": 0
    },
    {
        "namn": "Strömming kokt m. salt",
        "livsmedelsnummer": 1329,
        "kolhydrater": 0,
        "fett": 4.85,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ättikströmming",
        "livsmedelsnummer": 1331,
        "kolhydrater": 8.44,
        "fett": 15.24,
        "fibrer": 0.48,
        "alkohol": 0
    },
    {
        "namn": "Kräftströmming",
        "livsmedelsnummer": 1332,
        "kolhydrater": 1,
        "fett": 3.68,
        "fibrer": 0.38,
        "alkohol": 0
    },
    {
        "namn": "Strömming filé stekt m. salt",
        "livsmedelsnummer": 1333,
        "kolhydrater": 0,
        "fett": 3.85,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Tonfisk stekt m. salt",
        "livsmedelsnummer": 1334,
        "kolhydrater": 0,
        "fett": 4.67,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Torsk filé kokt m. salt",
        "livsmedelsnummer": 1335,
        "kolhydrater": 0,
        "fett": 0.83,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Torsk panerad stekt",
        "livsmedelsnummer": 1336,
        "kolhydrater": 6.63,
        "fett": 8.49,
        "fibrer": 0.38,
        "alkohol": 0
    },
    {
        "namn": "Torsk stekt",
        "livsmedelsnummer": 1337,
        "kolhydrater": 0,
        "fett": 0.69,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vitling kokt m. salt",
        "livsmedelsnummer": 1338,
        "kolhydrater": 0,
        "fett": 0.99,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vitling filé panerad stekt",
        "livsmedelsnummer": 1339,
        "kolhydrater": 6.61,
        "fett": 8.56,
        "fibrer": 0.38,
        "alkohol": 0
    },
    {
        "namn": "Fisk varmrökt",
        "livsmedelsnummer": 1340,
        "kolhydrater": 0.09,
        "fett": 15.54,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fiskbullar konserv. u. buljong",
        "livsmedelsnummer": 1344,
        "kolhydrater": 5.8,
        "fett": 2.29,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fiskbullar m. hummersås konserv. tillagad",
        "livsmedelsnummer": 1345,
        "kolhydrater": 7.4,
        "fett": 4.35,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Laxpastej lättrökt",
        "livsmedelsnummer": 1346,
        "kolhydrater": 10,
        "fett": 30,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Böcklingpastej",
        "livsmedelsnummer": 1347,
        "kolhydrater": 9,
        "fett": 31,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fiskpudding m. ris hemlagad",
        "livsmedelsnummer": 1348,
        "kolhydrater": 4.5,
        "fett": 5.6,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Fiskgratäng u. potatismos hemlagad",
        "livsmedelsnummer": 1349,
        "kolhydrater": 4.5,
        "fett": 5.6,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Böcklinglåda m. äggstanning",
        "livsmedelsnummer": 1350,
        "kolhydrater": 2.11,
        "fett": 9.82,
        "fibrer": 0.17,
        "alkohol": 0
    },
    {
        "namn": "Fiskbullar panerade stekta",
        "livsmedelsnummer": 1351,
        "kolhydrater": 11.74,
        "fett": 10.25,
        "fibrer": 0.31,
        "alkohol": 0
    },
    {
        "namn": "Fisksoppa bouillabaisse",
        "livsmedelsnummer": 1354,
        "kolhydrater": 1.46,
        "fett": 3.2,
        "fibrer": 0.32,
        "alkohol": 0.26
    },
    {
        "namn": "Fiskpaté m. räkor",
        "livsmedelsnummer": 1356,
        "kolhydrater": 3.3,
        "fett": 15.76,
        "fibrer": 0.11,
        "alkohol": 0
    },
    {
        "namn": "Fiskfärs kokt",
        "livsmedelsnummer": 1357,
        "kolhydrater": 8.52,
        "fett": 1.96,
        "fibrer": 0.21,
        "alkohol": 0
    },
    {
        "namn": "Fiskgratäng m. dillsås",
        "livsmedelsnummer": 1358,
        "kolhydrater": 4.98,
        "fett": 10.79,
        "fibrer": 0.37,
        "alkohol": 0
    },
    {
        "namn": "Fiskgratäng m. räkor u. potatismos",
        "livsmedelsnummer": 1359,
        "kolhydrater": 4.28,
        "fett": 9.37,
        "fibrer": 0.31,
        "alkohol": 0
    },
    {
        "namn": "Laxmousse",
        "livsmedelsnummer": 1360,
        "kolhydrater": 2.46,
        "fett": 19.78,
        "fibrer": 0.35,
        "alkohol": 0
    },
    {
        "namn": "Sillbullar",
        "livsmedelsnummer": 1361,
        "kolhydrater": 13.81,
        "fett": 10.86,
        "fibrer": 1.62,
        "alkohol": 0
    },
    {
        "namn": "Sillsallad",
        "livsmedelsnummer": 1362,
        "kolhydrater": 10.34,
        "fett": 3.55,
        "fibrer": 1.43,
        "alkohol": 0
    },
    {
        "namn": "Sushi nigiri m. lax",
        "livsmedelsnummer": 1363,
        "kolhydrater": 60.66,
        "fett": 6.06,
        "fibrer": 1.01,
        "alkohol": 0
    },
    {
        "namn": "Sushi nigiri m. hälleflundra",
        "livsmedelsnummer": 1364,
        "kolhydrater": 64.56,
        "fett": 3.57,
        "fibrer": 1.08,
        "alkohol": 0
    },
    {
        "namn": "Sushi nigiri m. tonfisk",
        "livsmedelsnummer": 1365,
        "kolhydrater": 72.01,
        "fett": 2.02,
        "fibrer": 1.21,
        "alkohol": 0
    },
    {
        "namn": "Sushi rulle m. crabfish gurka",
        "livsmedelsnummer": 1366,
        "kolhydrater": 76.65,
        "fett": 0.8,
        "fibrer": 0.98,
        "alkohol": 0
    },
    {
        "namn": "Sallad m. tonfisk potatis bönor tomat sallad u. dressing",
        "livsmedelsnummer": 1367,
        "kolhydrater": 5.87,
        "fett": 4.02,
        "fibrer": 1.25,
        "alkohol": 0
    },
    {
        "namn": "Fisk m. mandel ströbröd frysvara",
        "livsmedelsnummer": 1371,
        "kolhydrater": 5.3,
        "fett": 11,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Fiskgratäng m. potatismos dillsås tillagad frysvara",
        "livsmedelsnummer": 1372,
        "kolhydrater": 11.29,
        "fett": 7.36,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Laxpaté",
        "livsmedelsnummer": 1373,
        "kolhydrater": 0.9,
        "fett": 18.14,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Fiskgratäng m. potatismos räksås tillagad frysvara",
        "livsmedelsnummer": 1374,
        "kolhydrater": 10.55,
        "fett": 6.8,
        "fibrer": 0.51,
        "alkohol": 0
    },
    {
        "namn": "Sushi olika sorter 7 bitar",
        "livsmedelsnummer": 1375,
        "kolhydrater": 29,
        "fett": 1.66,
        "fibrer": 0.72,
        "alkohol": 0
    },
    {
        "namn": "Fiskrom torsk sill rå",
        "livsmedelsnummer": 1376,
        "kolhydrater": 0,
        "fett": 2.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Påläggskaviar orökt",
        "livsmedelsnummer": 1377,
        "kolhydrater": 23.6,
        "fett": 3.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Påläggskaviar original",
        "livsmedelsnummer": 1378,
        "kolhydrater": 15.2,
        "fett": 35.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Påläggskaviar lätt",
        "livsmedelsnummer": 1379,
        "kolhydrater": 23,
        "fett": 15.79,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Stenbitsrom",
        "livsmedelsnummer": 1381,
        "kolhydrater": 2.5,
        "fett": 3.44,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Löjrom saltad",
        "livsmedelsnummer": 1382,
        "kolhydrater": 1.5,
        "fett": 2.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Bläckfisk rå",
        "livsmedelsnummer": 1384,
        "kolhydrater": 0,
        "fett": 0.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Blåmussla kokt m. vin avrunnen",
        "livsmedelsnummer": 1385,
        "kolhydrater": 2.3,
        "fett": 3.26,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ostron",
        "livsmedelsnummer": 1386,
        "kolhydrater": 0,
        "fett": 2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Snigel vinbergssnäcka",
        "livsmedelsnummer": 1387,
        "kolhydrater": 2.2,
        "fett": 1.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Groda lår rått frysvara",
        "livsmedelsnummer": 1388,
        "kolhydrater": 0,
        "fett": 0.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mussla konserv. m. lag",
        "livsmedelsnummer": 1389,
        "kolhydrater": 3.1,
        "fett": 0.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mussla konserv. u. lag",
        "livsmedelsnummer": 1390,
        "kolhydrater": 4.7,
        "fett": 2.27,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ostron konserv. m. lag",
        "livsmedelsnummer": 1391,
        "kolhydrater": 0,
        "fett": 2.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Krabba Blå krabba kokt",
        "livsmedelsnummer": 1392,
        "kolhydrater": 0,
        "fett": 1.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hummer kokt",
        "livsmedelsnummer": 1393,
        "kolhydrater": 0,
        "fett": 1.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kräfta kokt",
        "livsmedelsnummer": 1394,
        "kolhydrater": 0.7,
        "fett": 0.82,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Räka kokt",
        "livsmedelsnummer": 1395,
        "kolhydrater": 0,
        "fett": 0.64,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hummer kokt el. konserv.",
        "livsmedelsnummer": 1396,
        "kolhydrater": 0.1,
        "fett": 1.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Krabba kokt",
        "livsmedelsnummer": 1397,
        "kolhydrater": 0,
        "fett": 1.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Krabba konserv.",
        "livsmedelsnummer": 1398,
        "kolhydrater": 1.3,
        "fett": 2.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Räka konserv. m. lag",
        "livsmedelsnummer": 1399,
        "kolhydrater": 1,
        "fett": 0.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Räka konserv. u. lag",
        "livsmedelsnummer": 1400,
        "kolhydrater": 1.2,
        "fett": 0.26,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kräfta konserv.",
        "livsmedelsnummer": 1402,
        "kolhydrater": 1.1,
        "fett": 1.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Havskräfta kokt",
        "livsmedelsnummer": 1403,
        "kolhydrater": 0,
        "fett": 0.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Räka friterad",
        "livsmedelsnummer": 1404,
        "kolhydrater": 27.8,
        "fett": 14.8,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Räka friterad tillagad på restaurang",
        "livsmedelsnummer": 1406,
        "kolhydrater": 24.7,
        "fett": 29.06,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Bläckfisk friterad",
        "livsmedelsnummer": 1407,
        "kolhydrater": 15.2,
        "fett": 17.4,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Bläckfisk friterad tillagad på restaurang",
        "livsmedelsnummer": 1408,
        "kolhydrater": 19.1,
        "fett": 17.76,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sallad m. räkor sparris tomat champinjoner ägg",
        "livsmedelsnummer": 1410,
        "kolhydrater": 1.44,
        "fett": 4.27,
        "fibrer": 0.86,
        "alkohol": 0
    },
    {
        "namn": "Räka stuvad",
        "livsmedelsnummer": 1411,
        "kolhydrater": 4.17,
        "fett": 10.13,
        "fibrer": 0.18,
        "alkohol": 0
    },
    {
        "namn": "Räksoppa ätf.",
        "livsmedelsnummer": 1412,
        "kolhydrater": 2.7,
        "fett": 6.34,
        "fibrer": 0.39,
        "alkohol": 0.18
    },
    {
        "namn": "Västkustsallad m. musslor räkor champinjon dressing hemlagad",
        "livsmedelsnummer": 1413,
        "kolhydrater": 2.69,
        "fett": 7.32,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Västkustsallad m. musslor räkor champinjon hemlagad",
        "livsmedelsnummer": 1414,
        "kolhydrater": 2.37,
        "fett": 0.89,
        "fibrer": 1.19,
        "alkohol": 0
    },
    {
        "namn": "Medelhavssallad m. tonfisk skaldjur majonnäsdressing sallad tomat",
        "livsmedelsnummer": 1416,
        "kolhydrater": 2.5,
        "fett": 9.52,
        "fibrer": 0.84,
        "alkohol": 0
    },
    {
        "namn": "Skaldjurspaté",
        "livsmedelsnummer": 1417,
        "kolhydrater": 2.3,
        "fett": 10.17,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Räksoppa tillagad pulver m. vatten mjölk",
        "livsmedelsnummer": 1418,
        "kolhydrater": 5.77,
        "fett": 2.09,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Fiskbuljong pasta el. pulver storhushåll",
        "livsmedelsnummer": 1419,
        "kolhydrater": 17.53,
        "fett": 4.88,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fiskbuljong pasta el. pulver lågsalt storhushåll",
        "livsmedelsnummer": 1420,
        "kolhydrater": 23,
        "fett": 3.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fisk och skaldjurssås tillagad pulver m. mjölk vatten smör typ Smögen",
        "livsmedelsnummer": 1421,
        "kolhydrater": 8.2,
        "fett": 7.64,
        "fibrer": 0.05,
        "alkohol": 0
    },
    {
        "namn": "Fiskbuljong ätf.",
        "livsmedelsnummer": 1422,
        "kolhydrater": 0.3,
        "fett": 0.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris blod rått",
        "livsmedelsnummer": 1423,
        "kolhydrater": 0.4,
        "fett": 0.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt blod rått",
        "livsmedelsnummer": 1424,
        "kolhydrater": 0,
        "fett": 0.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd blodbröd fullkorn",
        "livsmedelsnummer": 1425,
        "kolhydrater": 65.5,
        "fett": 1.9,
        "fibrer": 6,
        "alkohol": 0
    },
    {
        "namn": "Blodpudding blodkorv fett 19%",
        "livsmedelsnummer": 1426,
        "kolhydrater": 21,
        "fett": 19,
        "fibrer": 2.3,
        "alkohol": 0
    },
    {
        "namn": "Blodpalt",
        "livsmedelsnummer": 1427,
        "kolhydrater": 21.9,
        "fett": 4.2,
        "fibrer": 4.7,
        "alkohol": 0
    },
    {
        "namn": "Blodpudding blodkorv fett 14%",
        "livsmedelsnummer": 1428,
        "kolhydrater": 20,
        "fett": 14,
        "fibrer": 2.3,
        "alkohol": 0
    },
    {
        "namn": "Blodbröd paltbröd frysvara",
        "livsmedelsnummer": 1429,
        "kolhydrater": 47.8,
        "fett": 2.8,
        "fibrer": 4.7,
        "alkohol": 0
    },
    {
        "namn": "Blodpudding blodkorv fett 10%",
        "livsmedelsnummer": 1430,
        "kolhydrater": 17.3,
        "fett": 9,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Blodpudding blodkorv stekt fett 13%",
        "livsmedelsnummer": 1431,
        "kolhydrater": 20.52,
        "fett": 14.37,
        "fibrer": 2.36,
        "alkohol": 0
    },
    {
        "namn": "Blodpudding blodkorv stekt fett 8%",
        "livsmedelsnummer": 1432,
        "kolhydrater": 17.82,
        "fett": 9.27,
        "fibrer": 2.06,
        "alkohol": 0
    },
    {
        "namn": "Blodbröd paltbröd kokt m. salt",
        "livsmedelsnummer": 1433,
        "kolhydrater": 18.85,
        "fett": 0,
        "fibrer": 1.85,
        "alkohol": 0
    },
    {
        "namn": "Lamm bräss rå",
        "livsmedelsnummer": 1434,
        "kolhydrater": 0,
        "fett": 7.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm hjärta rå",
        "livsmedelsnummer": 1435,
        "kolhydrater": 0,
        "fett": 5.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm lever rå",
        "livsmedelsnummer": 1436,
        "kolhydrater": 3.2,
        "fett": 5.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm njure rå",
        "livsmedelsnummer": 1437,
        "kolhydrater": 0,
        "fett": 3.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm tunga rå",
        "livsmedelsnummer": 1438,
        "kolhydrater": 0,
        "fett": 14.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv bräss rå",
        "livsmedelsnummer": 1439,
        "kolhydrater": 0,
        "fett": 3.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv lever rå",
        "livsmedelsnummer": 1441,
        "kolhydrater": 2.8,
        "fett": 3.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv njure rå",
        "livsmedelsnummer": 1442,
        "kolhydrater": 0.7,
        "fett": 5.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalv tunga rå",
        "livsmedelsnummer": 1443,
        "kolhydrater": 0,
        "fett": 9.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt kalv hjärta",
        "livsmedelsnummer": 1444,
        "kolhydrater": 0,
        "fett": 8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt lever rå",
        "livsmedelsnummer": 1445,
        "kolhydrater": 4.4,
        "fett": 3.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt njure rå",
        "livsmedelsnummer": 1446,
        "kolhydrater": 0.9,
        "fett": 5.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt oxtunga rå",
        "livsmedelsnummer": 1447,
        "kolhydrater": 0,
        "fett": 12.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris hjärta rå",
        "livsmedelsnummer": 1448,
        "kolhydrater": 0,
        "fett": 5.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris lever rå",
        "livsmedelsnummer": 1449,
        "kolhydrater": 3,
        "fett": 3.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris njure rå",
        "livsmedelsnummer": 1450,
        "kolhydrater": 0.3,
        "fett": 3.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris tunga rå",
        "livsmedelsnummer": 1451,
        "kolhydrater": 0.4,
        "fett": 11.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling hjärta rå",
        "livsmedelsnummer": 1452,
        "kolhydrater": 0.3,
        "fett": 9.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling lever rå",
        "livsmedelsnummer": 1453,
        "kolhydrater": 0.7,
        "fett": 3.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling mage rå",
        "livsmedelsnummer": 1454,
        "kolhydrater": 0,
        "fett": 4.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ren lever rå",
        "livsmedelsnummer": 1455,
        "kolhydrater": 1.8,
        "fett": 3.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt oxtunga rimmad rå",
        "livsmedelsnummer": 1456,
        "kolhydrater": 0.4,
        "fett": 17.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling lever stekt",
        "livsmedelsnummer": 1457,
        "kolhydrater": 0.91,
        "fett": 4.93,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt lever panerad stekt",
        "livsmedelsnummer": 1458,
        "kolhydrater": 11.83,
        "fett": 7.76,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Nöt lever stekt",
        "livsmedelsnummer": 1459,
        "kolhydrater": 5.62,
        "fett": 3.96,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt oxtunga rimmad kokt",
        "livsmedelsnummer": 1460,
        "kolhydrater": 0,
        "fett": 24,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lever stuvad hemlagad",
        "livsmedelsnummer": 1461,
        "kolhydrater": 6.6,
        "fett": 7.5,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Gryta m. kalvhjärta grönsaker",
        "livsmedelsnummer": 1462,
        "kolhydrater": 3.51,
        "fett": 4.62,
        "fibrer": 1.38,
        "alkohol": 0
    },
    {
        "namn": "Korvkaka",
        "livsmedelsnummer": 1463,
        "kolhydrater": 15.13,
        "fett": 2.94,
        "fibrer": 1.15,
        "alkohol": 0
    },
    {
        "namn": "Leversauté kyckling",
        "livsmedelsnummer": 1464,
        "kolhydrater": 3.5,
        "fett": 9.63,
        "fibrer": 0.64,
        "alkohol": 0.07
    },
    {
        "namn": "Gryta levergryta nöt",
        "livsmedelsnummer": 1465,
        "kolhydrater": 6.76,
        "fett": 8.8,
        "fibrer": 0.53,
        "alkohol": 0
    },
    {
        "namn": "Njursauté",
        "livsmedelsnummer": 1466,
        "kolhydrater": 3.33,
        "fett": 8.8,
        "fibrer": 0.71,
        "alkohol": 0.06
    },
    {
        "namn": "Leverbiff mald lever stekt frysvara",
        "livsmedelsnummer": 1467,
        "kolhydrater": 8.1,
        "fett": 14.4,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Gryta levergryta m. grönsaker frysvara",
        "livsmedelsnummer": 1468,
        "kolhydrater": 7,
        "fett": 4.4,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Gåsleverpastej konserv. rökt",
        "livsmedelsnummer": 1470,
        "kolhydrater": 4.6,
        "fett": 44,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Leverpalt",
        "livsmedelsnummer": 1471,
        "kolhydrater": 22.8,
        "fett": 9.9,
        "fibrer": 2.3,
        "alkohol": 0
    },
    {
        "namn": "Njurpalt",
        "livsmedelsnummer": 1472,
        "kolhydrater": 24.6,
        "fett": 1.7,
        "fibrer": 2.3,
        "alkohol": 0
    },
    {
        "namn": "Leverbiff mald lever rå frysvara",
        "livsmedelsnummer": 1473,
        "kolhydrater": 7,
        "fett": 14.5,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Leverpastej bredbar skivbar fett ca 24%",
        "livsmedelsnummer": 1474,
        "kolhydrater": 9,
        "fett": 24.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Leverpastej skivbar fett 14%",
        "livsmedelsnummer": 1476,
        "kolhydrater": 9.8,
        "fett": 14,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Leverpastej bredbar fett ca 10%",
        "livsmedelsnummer": 1477,
        "kolhydrater": 13.5,
        "fett": 9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Leverpastej bredbar fett 3-3,5%",
        "livsmedelsnummer": 1478,
        "kolhydrater": 12.9,
        "fett": 3.6,
        "fibrer": 2.7,
        "alkohol": 0
    },
    {
        "namn": "Leverbiff mald lever stekt hemlagad",
        "livsmedelsnummer": 1479,
        "kolhydrater": 8.9,
        "fett": 6.4,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Paté älgfärs kycklinglever",
        "livsmedelsnummer": 1480,
        "kolhydrater": 4.02,
        "fett": 11.34,
        "fibrer": 0.54,
        "alkohol": 0
    },
    {
        "namn": "Lantpaté",
        "livsmedelsnummer": 1482,
        "kolhydrater": 4.7,
        "fett": 37.45,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Grönpepparpaté",
        "livsmedelsnummer": 1483,
        "kolhydrater": 1.1,
        "fett": 25.99,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Korv kycklingkorv mager",
        "livsmedelsnummer": 1485,
        "kolhydrater": 6.5,
        "fett": 9.08,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Korv kycklingkorv halal",
        "livsmedelsnummer": 1486,
        "kolhydrater": 3.5,
        "fett": 15.46,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Korv falukorv fett 19% kött 58%",
        "livsmedelsnummer": 1487,
        "kolhydrater": 7.9,
        "fett": 19.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv falukorv kött 58%",
        "livsmedelsnummer": 1488,
        "kolhydrater": 3.7,
        "fett": 23,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv fläskkorv kokt kött 48%",
        "livsmedelsnummer": 1491,
        "kolhydrater": 3.8,
        "fett": 20.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv frukostkorv fett 23% kött 52%",
        "livsmedelsnummer": 1492,
        "kolhydrater": 3.2,
        "fett": 23,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Påläggskorv medvurst fett 23%",
        "livsmedelsnummer": 1496,
        "kolhydrater": 4.1,
        "fett": 22.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Påläggskorv medvurst rökt fett 35%",
        "livsmedelsnummer": 1497,
        "kolhydrater": 5.4,
        "fett": 34.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Påläggskorv salami rökt fett 34-44%",
        "livsmedelsnummer": 1498,
        "kolhydrater": 0.2,
        "fett": 41.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv varmkorv kött 51-54%",
        "livsmedelsnummer": 1500,
        "kolhydrater": 8.5,
        "fett": 21.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv varmkorv kokt kött ca 53%",
        "livsmedelsnummer": 1501,
        "kolhydrater": 7.8,
        "fett": 22.6,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Korv wienerkorv kött 73%",
        "livsmedelsnummer": 1503,
        "kolhydrater": 3.9,
        "fett": 23,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv grillkorv kött 32-35%",
        "livsmedelsnummer": 1508,
        "kolhydrater": 9.2,
        "fett": 15,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv isterband fermenterad kött 59%",
        "livsmedelsnummer": 1509,
        "kolhydrater": 4.6,
        "fett": 24,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Korv middagskorv fett ca 15%  kött 52%",
        "livsmedelsnummer": 1511,
        "kolhydrater": 5.7,
        "fett": 14.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv wienerkorv mager kött 73%",
        "livsmedelsnummer": 1512,
        "kolhydrater": 5.7,
        "fett": 15,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv chorizo stekt kött 73%",
        "livsmedelsnummer": 1513,
        "kolhydrater": 4.1,
        "fett": 23.83,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv kabanoss stekt kött 80%",
        "livsmedelsnummer": 1514,
        "kolhydrater": 1.2,
        "fett": 32.98,
        "fibrer": 0.66,
        "alkohol": 0
    },
    {
        "namn": "Korv prinskorv kött 61%",
        "livsmedelsnummer": 1516,
        "kolhydrater": 3.8,
        "fett": 24,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv salsiccia rå kött 73%",
        "livsmedelsnummer": 1518,
        "kolhydrater": 4.7,
        "fett": 18.31,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv salsiccia stekt u. fett kött 73%",
        "livsmedelsnummer": 1519,
        "kolhydrater": 7.7,
        "fett": 20.24,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv värmlandskorv rå kött 45%",
        "livsmedelsnummer": 1521,
        "kolhydrater": 8.9,
        "fett": 19.1,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Korv värmlandskorv kokt kött 45%",
        "livsmedelsnummer": 1522,
        "kolhydrater": 8.5,
        "fett": 18.2,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Gris bacon stekt mager",
        "livsmedelsnummer": 1523,
        "kolhydrater": 1.37,
        "fett": 3.14,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris bacon rå mager",
        "livsmedelsnummer": 1524,
        "kolhydrater": 1,
        "fett": 3.47,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv frukostkorv kokt fett 23% kött 52%",
        "livsmedelsnummer": 1526,
        "kolhydrater": 3.39,
        "fett": 24.35,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv falukorv stekt fett 19% kött 58%",
        "livsmedelsnummer": 1527,
        "kolhydrater": 8.33,
        "fett": 20.34,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv falukorv skivad kokt",
        "livsmedelsnummer": 1528,
        "kolhydrater": 3.91,
        "fett": 24.34,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv frukostkorv stekt",
        "livsmedelsnummer": 1530,
        "kolhydrater": 3.39,
        "fett": 24.35,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv isterband fermenterad stekt kött 59%",
        "livsmedelsnummer": 1531,
        "kolhydrater": 4.85,
        "fett": 25.3,
        "fibrer": 1.05,
        "alkohol": 0
    },
    {
        "namn": "Korv varmkorv kokt",
        "livsmedelsnummer": 1534,
        "kolhydrater": 8.94,
        "fett": 22.62,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv varmkorv stekt",
        "livsmedelsnummer": 1535,
        "kolhydrater": 8.94,
        "fett": 22.62,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv wienerkorv stekt",
        "livsmedelsnummer": 1536,
        "kolhydrater": 4.13,
        "fett": 24.34,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv falukorv ugnsstekt",
        "livsmedelsnummer": 1537,
        "kolhydrater": 6.47,
        "fett": 14.14,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Korv falukorv stekt",
        "livsmedelsnummer": 1538,
        "kolhydrater": 8.33,
        "fett": 20.34,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv wienerkorv kokt",
        "livsmedelsnummer": 1540,
        "kolhydrater": 4.13,
        "fett": 24.34,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Pölsa stekt värmd",
        "livsmedelsnummer": 1541,
        "kolhydrater": 9.02,
        "fett": 14.15,
        "fibrer": 1.25,
        "alkohol": 0
    },
    {
        "namn": "Pölsa",
        "livsmedelsnummer": 1543,
        "kolhydrater": 7.2,
        "fett": 11.3,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Korv stroganoff hemlagad i gjutjärnsstekpanna",
        "livsmedelsnummer": 1544,
        "kolhydrater": 7.5,
        "fett": 20.5,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Gryta korvgryta m. chorizo rotfrukter",
        "livsmedelsnummer": 1548,
        "kolhydrater": 5.19,
        "fett": 8.67,
        "fibrer": 1.17,
        "alkohol": 0
    },
    {
        "namn": "Tunnbrödrulle m. korv potatismos räk- gurksallad",
        "livsmedelsnummer": 1551,
        "kolhydrater": 16.28,
        "fett": 11.31,
        "fibrer": 1.47,
        "alkohol": 0
    },
    {
        "namn": "Kalvsylta",
        "livsmedelsnummer": 1553,
        "kolhydrater": 0.1,
        "fett": 5.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Pressylta",
        "livsmedelsnummer": 1554,
        "kolhydrater": 0,
        "fett": 26.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hushållssylta",
        "livsmedelsnummer": 1555,
        "kolhydrater": 0.3,
        "fett": 10.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Cashewnötter rostade u. salt",
        "livsmedelsnummer": 1557,
        "kolhydrater": 19.2,
        "fett": 48.67,
        "fibrer": 8.3,
        "alkohol": 0
    },
    {
        "namn": "Hasselnötter",
        "livsmedelsnummer": 1558,
        "kolhydrater": 0.5,
        "fett": 64.6,
        "fibrer": 16.1,
        "alkohol": 0
    },
    {
        "namn": "Jordnötssmör",
        "livsmedelsnummer": 1559,
        "kolhydrater": 14.3,
        "fett": 51,
        "fibrer": 7.6,
        "alkohol": 0
    },
    {
        "namn": "Jordnötter torkade",
        "livsmedelsnummer": 1560,
        "kolhydrater": 8.2,
        "fett": 49,
        "fibrer": 8.1,
        "alkohol": 0
    },
    {
        "namn": "Jordnötter rostade saltade",
        "livsmedelsnummer": 1562,
        "kolhydrater": 9.3,
        "fett": 51.3,
        "fibrer": 11.6,
        "alkohol": 0
    },
    {
        "namn": "Kastanjer",
        "livsmedelsnummer": 1563,
        "kolhydrater": 39,
        "fett": 2.2,
        "fibrer": 6.8,
        "alkohol": 0
    },
    {
        "namn": "Kokosflingor",
        "livsmedelsnummer": 1564,
        "kolhydrater": 13.1,
        "fett": 67.2,
        "fibrer": 9.18,
        "alkohol": 0
    },
    {
        "namn": "Kokosnöt",
        "livsmedelsnummer": 1565,
        "kolhydrater": 6.1,
        "fett": 33.5,
        "fibrer": 9,
        "alkohol": 0
    },
    {
        "namn": "Kokosmjölk light",
        "livsmedelsnummer": 1566,
        "kolhydrater": 3,
        "fett": 7.08,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Linfrö hela",
        "livsmedelsnummer": 1567,
        "kolhydrater": 0,
        "fett": 43.8,
        "fibrer": 30.4,
        "alkohol": 0
    },
    {
        "namn": "Paranötter",
        "livsmedelsnummer": 1568,
        "kolhydrater": 0,
        "fett": 67.8,
        "fibrer": 13.7,
        "alkohol": 0
    },
    {
        "namn": "Pekannötter",
        "livsmedelsnummer": 1569,
        "kolhydrater": 1.5,
        "fett": 73.3,
        "fibrer": 13.3,
        "alkohol": 0
    },
    {
        "namn": "Pistaschnötter",
        "livsmedelsnummer": 1570,
        "kolhydrater": 21.7,
        "fett": 48.5,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Pumpafrö",
        "livsmedelsnummer": 1571,
        "kolhydrater": 2.4,
        "fett": 48,
        "fibrer": 9.2,
        "alkohol": 0
    },
    {
        "namn": "Sesamfrö m. skal",
        "livsmedelsnummer": 1572,
        "kolhydrater": 4.4,
        "fett": 54.8,
        "fibrer": 12.01,
        "alkohol": 0
    },
    {
        "namn": "Sesamfrö u. skal",
        "livsmedelsnummer": 1573,
        "kolhydrater": 2.7,
        "fett": 59.7,
        "fibrer": 10.4,
        "alkohol": 0
    },
    {
        "namn": "Solrosfrö",
        "livsmedelsnummer": 1574,
        "kolhydrater": 3.9,
        "fett": 56.1,
        "fibrer": 11.5,
        "alkohol": 0
    },
    {
        "namn": "Sötmandel",
        "livsmedelsnummer": 1575,
        "kolhydrater": 0.5,
        "fett": 53.2,
        "fibrer": 18.7,
        "alkohol": 0
    },
    {
        "namn": "Valnötter",
        "livsmedelsnummer": 1576,
        "kolhydrater": 0.5,
        "fett": 53.2,
        "fibrer": 18.7,
        "alkohol": 0
    },
    {
        "namn": "Kastanjer rostade",
        "livsmedelsnummer": 1577,
        "kolhydrater": 45,
        "fett": 2.2,
        "fibrer": 7.9,
        "alkohol": 0
    },
    {
        "namn": "Kikärtor snacks torkade m. salt",
        "livsmedelsnummer": 1579,
        "kolhydrater": 47.8,
        "fett": 6.55,
        "fibrer": 15.5,
        "alkohol": 0
    },
    {
        "namn": "Jordnötsbågar jordnötsringar",
        "livsmedelsnummer": 1580,
        "kolhydrater": 44.2,
        "fett": 35,
        "fibrer": 11,
        "alkohol": 0
    },
    {
        "namn": "Chips majs tortilla ",
        "livsmedelsnummer": 1581,
        "kolhydrater": 63.6,
        "fett": 17.9,
        "fibrer": 7.9,
        "alkohol": 0
    },
    {
        "namn": "Ostbågar",
        "livsmedelsnummer": 1582,
        "kolhydrater": 53.7,
        "fett": 30,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Popcorn mikropoocorn poppade fett ca 15%",
        "livsmedelsnummer": 1583,
        "kolhydrater": 55,
        "fett": 14.5,
        "fibrer": 11,
        "alkohol": 0
    },
    {
        "namn": "Chips potatis m. havssalt",
        "livsmedelsnummer": 1584,
        "kolhydrater": 52.4,
        "fett": 31.5,
        "fibrer": 5.5,
        "alkohol": 0
    },
    {
        "namn": "Salta pinnar",
        "livsmedelsnummer": 1585,
        "kolhydrater": 68.2,
        "fett": 6.3,
        "fibrer": 4.3,
        "alkohol": 0
    },
    {
        "namn": "Popcorn mikropopcorn poppade fett ca 22%",
        "livsmedelsnummer": 1586,
        "kolhydrater": 42.9,
        "fett": 22.13,
        "fibrer": 21.9,
        "alkohol": 0
    },
    {
        "namn": "Chips potatis smaksatta fett 34%",
        "livsmedelsnummer": 1587,
        "kolhydrater": 51.3,
        "fett": 32.22,
        "fibrer": 5.7,
        "alkohol": 0
    },
    {
        "namn": "Chips potatis light fett 25%",
        "livsmedelsnummer": 1588,
        "kolhydrater": 63,
        "fett": 24.31,
        "fibrer": 3.8,
        "alkohol": 0
    },
    {
        "namn": "Japanmix blandade snacks m. inbakade nötter riscracker",
        "livsmedelsnummer": 1589,
        "kolhydrater": 75.5,
        "fett": 5.64,
        "fibrer": 4.4,
        "alkohol": 0
    },
    {
        "namn": "Kokosmjölk",
        "livsmedelsnummer": 1590,
        "kolhydrater": 3.5,
        "fett": 24,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Vatten kokosvatten",
        "livsmedelsnummer": 1591,
        "kolhydrater": 4.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sesamdryck vattenextrakt av frön m. skal",
        "livsmedelsnummer": 1592,
        "kolhydrater": 0.6,
        "fett": 6.4,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Sesamdryck vattenextrakt av frön u. skal",
        "livsmedelsnummer": 1593,
        "kolhydrater": 1.4,
        "fett": 6.4,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Skorpor råg",
        "livsmedelsnummer": 1595,
        "kolhydrater": 51.9,
        "fett": 10.8,
        "fibrer": 19,
        "alkohol": 0
    },
    {
        "namn": "Skorpor vete osötade",
        "livsmedelsnummer": 1597,
        "kolhydrater": 66.2,
        "fett": 18.2,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Sött vetebröd",
        "livsmedelsnummer": 1598,
        "kolhydrater": 54.4,
        "fett": 10.9,
        "fibrer": 2.8,
        "alkohol": 0
    },
    {
        "namn": "Sött vetebröd slätt",
        "livsmedelsnummer": 1599,
        "kolhydrater": 50.3,
        "fett": 9.5,
        "fibrer": 2.8,
        "alkohol": 0
    },
    {
        "namn": "Sött vetebröd sötat m. fruktsocker",
        "livsmedelsnummer": 1600,
        "kolhydrater": 45.6,
        "fett": 8,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Vetebröd osötat",
        "livsmedelsnummer": 1601,
        "kolhydrater": 44.6,
        "fett": 7.8,
        "fibrer": 2.8,
        "alkohol": 0
    },
    {
        "namn": "Sött vetebröd fyllt bulle längd",
        "livsmedelsnummer": 1602,
        "kolhydrater": 56.1,
        "fett": 10.27,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Skorpor vete",
        "livsmedelsnummer": 1603,
        "kolhydrater": 70.7,
        "fett": 9.23,
        "fibrer": 4.2,
        "alkohol": 0
    },
    {
        "namn": "Skorpor fullkorn osötade",
        "livsmedelsnummer": 1604,
        "kolhydrater": 64.1,
        "fett": 6.17,
        "fibrer": 10,
        "alkohol": 0
    },
    {
        "namn": "Mandelkubb",
        "livsmedelsnummer": 1605,
        "kolhydrater": 61.3,
        "fett": 13.55,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Munk u. fyllning",
        "livsmedelsnummer": 1606,
        "kolhydrater": 42.7,
        "fett": 25.85,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Munk fylld m. äppelmos vaniljkräm",
        "livsmedelsnummer": 1607,
        "kolhydrater": 41.4,
        "fett": 13.23,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Wienerbröd m. vaniljkräm sylt florsocker",
        "livsmedelsnummer": 1608,
        "kolhydrater": 45.4,
        "fett": 27.3,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Sött vetebröd bakpulver",
        "livsmedelsnummer": 1609,
        "kolhydrater": 45.57,
        "fett": 11.83,
        "fibrer": 1.61,
        "alkohol": 0
    },
    {
        "namn": "Sött vetebröd saffransbröd ",
        "livsmedelsnummer": 1610,
        "kolhydrater": 46.37,
        "fett": 8.35,
        "fibrer": 1.96,
        "alkohol": 0
    },
    {
        "namn": "Kex cream crackers",
        "livsmedelsnummer": 1611,
        "kolhydrater": 60.3,
        "fett": 22.5,
        "fibrer": 4.3,
        "alkohol": 0
    },
    {
        "namn": "Kex rån fyllt m. creme smaksatt",
        "livsmedelsnummer": 1612,
        "kolhydrater": 62.3,
        "fett": 29.93,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Kex havrekex fullkorn",
        "livsmedelsnummer": 1613,
        "kolhydrater": 59.1,
        "fett": 20.61,
        "fibrer": 6,
        "alkohol": 0
    },
    {
        "namn": "Kex Mariekex",
        "livsmedelsnummer": 1614,
        "kolhydrater": 74.7,
        "fett": 12.79,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Kex mördegskex",
        "livsmedelsnummer": 1615,
        "kolhydrater": 71.8,
        "fett": 18.37,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Kex m. syltfyllning",
        "livsmedelsnummer": 1616,
        "kolhydrater": 70.9,
        "fett": 18.94,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Kex m. nougatfyllning",
        "livsmedelsnummer": 1617,
        "kolhydrater": 67,
        "fett": 20.69,
        "fibrer": 2.6,
        "alkohol": 0
    },
    {
        "namn": "Maräng m. choklad",
        "livsmedelsnummer": 1618,
        "kolhydrater": 91,
        "fett": 0.74,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Småkakor olika sorter",
        "livsmedelsnummer": 1619,
        "kolhydrater": 68.8,
        "fett": 21.42,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Jitterbugg m. mördeg maräng",
        "livsmedelsnummer": 1620,
        "kolhydrater": 52.8,
        "fett": 30.48,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Cookie amerikansk m. choklad",
        "livsmedelsnummer": 1621,
        "kolhydrater": 63.3,
        "fett": 22.89,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Kex smörgåskex",
        "livsmedelsnummer": 1623,
        "kolhydrater": 63.1,
        "fett": 18.1,
        "fibrer": 9,
        "alkohol": 0
    },
    {
        "namn": "Pepparkaka",
        "livsmedelsnummer": 1624,
        "kolhydrater": 72.1,
        "fett": 15.4,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Spettekaka",
        "livsmedelsnummer": 1625,
        "kolhydrater": 71.4,
        "fett": 9.8,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Maräng",
        "livsmedelsnummer": 1626,
        "kolhydrater": 95.3,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kex fyllt",
        "livsmedelsnummer": 1627,
        "kolhydrater": 60.7,
        "fett": 24.5,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Kex ostkex",
        "livsmedelsnummer": 1628,
        "kolhydrater": 54.1,
        "fett": 25.3,
        "fibrer": 4.1,
        "alkohol": 0
    },
    {
        "namn": "Kex salta",
        "livsmedelsnummer": 1629,
        "kolhydrater": 55.3,
        "fett": 27.02,
        "fibrer": 5.1,
        "alkohol": 0
    },
    {
        "namn": "Kex salta m. mjölk",
        "livsmedelsnummer": 1630,
        "kolhydrater": 57.6,
        "fett": 27.25,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Kex u. socker",
        "livsmedelsnummer": 1631,
        "kolhydrater": 76.1,
        "fett": 12,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Pepparkaka u. socker",
        "livsmedelsnummer": 1632,
        "kolhydrater": 63.2,
        "fett": 24,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Kex smörgåsrån",
        "livsmedelsnummer": 1633,
        "kolhydrater": 76.3,
        "fett": 7.5,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Glasstrut våffla ofylld",
        "livsmedelsnummer": 1636,
        "kolhydrater": 80.8,
        "fett": 6.4,
        "fibrer": 2.6,
        "alkohol": 0
    },
    {
        "namn": "Småkakor u. socker",
        "livsmedelsnummer": 1637,
        "kolhydrater": 54.6,
        "fett": 33,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Mandelbiskvi",
        "livsmedelsnummer": 1638,
        "kolhydrater": 46.62,
        "fett": 20.82,
        "fibrer": 3.17,
        "alkohol": 0
    },
    {
        "namn": "Deg mördeg gräddad",
        "livsmedelsnummer": 1639,
        "kolhydrater": 44.11,
        "fett": 34.13,
        "fibrer": 1.74,
        "alkohol": 0
    },
    {
        "namn": "Deg smördeg gräddad",
        "livsmedelsnummer": 1640,
        "kolhydrater": 53.89,
        "fett": 20.89,
        "fibrer": 1.83,
        "alkohol": 0
    },
    {
        "namn": "Deg smördeg frysvara",
        "livsmedelsnummer": 1641,
        "kolhydrater": 31.8,
        "fett": 27.5,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Deg filodeg kylvara el. frysvara",
        "livsmedelsnummer": 1642,
        "kolhydrater": 57.9,
        "fett": 1.87,
        "fibrer": 2.4,
        "alkohol": 0
    },
    {
        "namn": "Gräddtårta",
        "livsmedelsnummer": 1645,
        "kolhydrater": 27.7,
        "fett": 19,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Toscabit m. mazarinmassa mandel choklad",
        "livsmedelsnummer": 1646,
        "kolhydrater": 42.6,
        "fett": 31.43,
        "fibrer": 4.8,
        "alkohol": 0
    },
    {
        "namn": "Bärtårta m. grädde vaniljkräm sylt gele",
        "livsmedelsnummer": 1647,
        "kolhydrater": 31.4,
        "fett": 11.05,
        "fibrer": 3.3,
        "alkohol": 0
    },
    {
        "namn": "Prinsesstårta m. grädde vaniljkräm hallonsylt marsipan",
        "livsmedelsnummer": 1648,
        "kolhydrater": 37.3,
        "fett": 13.82,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Chokladtårta Sachertårta",
        "livsmedelsnummer": 1649,
        "kolhydrater": 46.8,
        "fett": 25.34,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Napoleonbakelse m. grädde vaniljkräm hallonsylt glasyr",
        "livsmedelsnummer": 1650,
        "kolhydrater": 37.2,
        "fett": 20.62,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Frukttårta m. hallonsylt vaniljkräm mandelmassa frukt gele",
        "livsmedelsnummer": 1651,
        "kolhydrater": 37.4,
        "fett": 7.46,
        "fibrer": 5.7,
        "alkohol": 0
    },
    {
        "namn": "Chokladbiskvi m. mandelbotten smörkräm choklad",
        "livsmedelsnummer": 1652,
        "kolhydrater": 50.9,
        "fett": 28.61,
        "fibrer": 5.7,
        "alkohol": 0
    },
    {
        "namn": "Mazariner m. mördegsbotten mazarinfyllning glasyr",
        "livsmedelsnummer": 1653,
        "kolhydrater": 55,
        "fett": 20.55,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka drömtårta chokladrulltårta",
        "livsmedelsnummer": 1654,
        "kolhydrater": 53.2,
        "fett": 16.49,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka rulltårta m. sylt",
        "livsmedelsnummer": 1655,
        "kolhydrater": 57.4,
        "fett": 14.87,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Punschrulle",
        "livsmedelsnummer": 1656,
        "kolhydrater": 61.2,
        "fett": 20.15,
        "fibrer": 3.3,
        "alkohol": 0
    },
    {
        "namn": "Chokladboll",
        "livsmedelsnummer": 1657,
        "kolhydrater": 49.6,
        "fett": 31.16,
        "fibrer": 4.7,
        "alkohol": 0
    },
    {
        "namn": "Gräddtårta m. jordgubb banan hemlagad",
        "livsmedelsnummer": 1658,
        "kolhydrater": 22,
        "fett": 11.66,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Potatisbakelse m. vaniljkräm smörkräm marsipan",
        "livsmedelsnummer": 1659,
        "kolhydrater": 56.8,
        "fett": 16.82,
        "fibrer": 2.9,
        "alkohol": 0
    },
    {
        "namn": "Äppelkaka m. ströbröd",
        "livsmedelsnummer": 1660,
        "kolhydrater": 28.43,
        "fett": 10.51,
        "fibrer": 2.52,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka drömtårta chokladrulltårta hemlagad",
        "livsmedelsnummer": 1661,
        "kolhydrater": 43.04,
        "fett": 17.58,
        "fibrer": 1.64,
        "alkohol": 0
    },
    {
        "namn": "Semla vetebulle fylld m. mandelmassa vispad grädde",
        "livsmedelsnummer": 1662,
        "kolhydrater": 39.7,
        "fett": 16.33,
        "fibrer": 2.9,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka chokladruta m. chokladglasyr riven kokos",
        "livsmedelsnummer": 1663,
        "kolhydrater": 47.64,
        "fett": 23.22,
        "fibrer": 2.54,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka ambrosiakaka sockerkaka m. glasyr",
        "livsmedelsnummer": 1664,
        "kolhydrater": 53.78,
        "fett": 16.17,
        "fibrer": 0.87,
        "alkohol": 0
    },
    {
        "namn": "Arraksboll",
        "livsmedelsnummer": 1666,
        "kolhydrater": 57.98,
        "fett": 21.79,
        "fibrer": 1.57,
        "alkohol": 0
    },
    {
        "namn": "Petit-choux u. fyllning",
        "livsmedelsnummer": 1667,
        "kolhydrater": 17.88,
        "fett": 11.66,
        "fibrer": 0.88,
        "alkohol": 0
    },
    {
        "namn": "Semla vetebulle fylld m. mandelmassa vispad grädde hemlagad",
        "livsmedelsnummer": 1668,
        "kolhydrater": 37.97,
        "fett": 12.86,
        "fibrer": 1.68,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka fransk äppelkaka",
        "livsmedelsnummer": 1669,
        "kolhydrater": 19.54,
        "fett": 15.17,
        "fibrer": 3.53,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka toscakaka",
        "livsmedelsnummer": 1671,
        "kolhydrater": 43.87,
        "fett": 21.79,
        "fibrer": 3.09,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka chokladkaka",
        "livsmedelsnummer": 1672,
        "kolhydrater": 39.69,
        "fett": 17.19,
        "fibrer": 2.36,
        "alkohol": 0
    },
    {
        "namn": "Chokladtårta Sachertårta hemlagad",
        "livsmedelsnummer": 1673,
        "kolhydrater": 48.05,
        "fett": 23.94,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Muffins amerikansk",
        "livsmedelsnummer": 1677,
        "kolhydrater": 46.8,
        "fett": 24.25,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka sockerkaka pepparkaka",
        "livsmedelsnummer": 1678,
        "kolhydrater": 54.7,
        "fett": 15.88,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka tårtbotten",
        "livsmedelsnummer": 1679,
        "kolhydrater": 58.73,
        "fett": 4.19,
        "fibrer": 0.44,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka sockerkaka fin",
        "livsmedelsnummer": 1681,
        "kolhydrater": 48.34,
        "fett": 20.53,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka pepparkaka",
        "livsmedelsnummer": 1682,
        "kolhydrater": 45.3,
        "fett": 14.74,
        "fibrer": 0.92,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka nötkaka",
        "livsmedelsnummer": 1683,
        "kolhydrater": 29.37,
        "fett": 30.56,
        "fibrer": 6.85,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka sockerkaka fin mager",
        "livsmedelsnummer": 1684,
        "kolhydrater": 49,
        "fett": 8.31,
        "fibrer": 1.02,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka sockerkaka saftig",
        "livsmedelsnummer": 1685,
        "kolhydrater": 52.96,
        "fett": 9.1,
        "fibrer": 1.08,
        "alkohol": 0
    },
    {
        "namn": "Kex digestive fullkorn 23%",
        "livsmedelsnummer": 1686,
        "kolhydrater": 66.1,
        "fett": 19.77,
        "fibrer": 3.4,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka fruktkaka",
        "livsmedelsnummer": 1687,
        "kolhydrater": 42.88,
        "fett": 21.14,
        "fibrer": 2.84,
        "alkohol": 0
    },
    {
        "namn": "Glass gräddglass fett 12%",
        "livsmedelsnummer": 1689,
        "kolhydrater": 25.1,
        "fett": 9.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass vaniljsmak fett ca 8%",
        "livsmedelsnummer": 1690,
        "kolhydrater": 27,
        "fett": 6.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass fett ca 10%",
        "livsmedelsnummer": 1691,
        "kolhydrater": 23.1,
        "fett": 9.67,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass glasstrut fett ca 15%",
        "livsmedelsnummer": 1692,
        "kolhydrater": 29.17,
        "fett": 15.3,
        "fibrer": 0.33,
        "alkohol": 0
    },
    {
        "namn": "Glass lättglass m. sötningsm. fett ca 6%",
        "livsmedelsnummer": 1693,
        "kolhydrater": 17.54,
        "fett": 5.72,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass glasstrut våffla m. vaniljglass daimbitar chokladöverdrag",
        "livsmedelsnummer": 1694,
        "kolhydrater": 35.1,
        "fett": 20.81,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Glass vaniljglass m. chokladkex",
        "livsmedelsnummer": 1695,
        "kolhydrater": 37.4,
        "fett": 10.4,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Glass gräddglass fett 15%",
        "livsmedelsnummer": 1696,
        "kolhydrater": 19.6,
        "fett": 14.45,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass fett 12%",
        "livsmedelsnummer": 1697,
        "kolhydrater": 19.3,
        "fett": 12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass lättglass fett ca 5%",
        "livsmedelsnummer": 1698,
        "kolhydrater": 26.56,
        "fett": 4.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass glasspinne fett ca 25%",
        "livsmedelsnummer": 1699,
        "kolhydrater": 26.01,
        "fett": 25.33,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass glasspinne m. kakaoöverdrag fett 20%",
        "livsmedelsnummer": 1700,
        "kolhydrater": 27.99,
        "fett": 20.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass glasspinne el. split m. isöverdrag fett ca 6%",
        "livsmedelsnummer": 1701,
        "kolhydrater": 22.27,
        "fett": 6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass glasstrut fett ca 10%",
        "livsmedelsnummer": 1702,
        "kolhydrater": 33.95,
        "fett": 10.27,
        "fibrer": 0.33,
        "alkohol": 0
    },
    {
        "namn": "Glass mjukglass bägare",
        "livsmedelsnummer": 1703,
        "kolhydrater": 19.7,
        "fett": 6.97,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass glasstårta fett 17%",
        "livsmedelsnummer": 1705,
        "kolhydrater": 22.17,
        "fett": 17,
        "fibrer": 1.43,
        "alkohol": 0
    },
    {
        "namn": "Glass m. maräng fett 10%",
        "livsmedelsnummer": 1706,
        "kolhydrater": 25.84,
        "fett": 12.8,
        "fibrer": 0.06,
        "alkohol": 0
    },
    {
        "namn": "Glass havreglass m. vanilj mjölkfri fett 10%",
        "livsmedelsnummer": 1707,
        "kolhydrater": 22.33,
        "fett": 9.7,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Glass parfait m. bär",
        "livsmedelsnummer": 1708,
        "kolhydrater": 9.17,
        "fett": 21.44,
        "fibrer": 1.17,
        "alkohol": 0
    },
    {
        "namn": "Matlagningsbas m. havre fett 13%",
        "livsmedelsnummer": 1712,
        "kolhydrater": 5.1,
        "fett": 13,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Gräddfil fett 12%",
        "livsmedelsnummer": 1713,
        "kolhydrater": 4.43,
        "fett": 12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kaffegrädde fett 12%",
        "livsmedelsnummer": 1714,
        "kolhydrater": 4.4,
        "fett": 12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vispgrädde fett 40%",
        "livsmedelsnummer": 1715,
        "kolhydrater": 3,
        "fett": 40,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mellangrädde fett 27%",
        "livsmedelsnummer": 1716,
        "kolhydrater": 3.6,
        "fett": 27,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Matlagningsgrädde fett 15%",
        "livsmedelsnummer": 1717,
        "kolhydrater": 4.2,
        "fett": 15,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Crème fraiche fett 34%",
        "livsmedelsnummer": 1719,
        "kolhydrater": 3.27,
        "fett": 34,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Crème fraiche lätt fett 15%",
        "livsmedelsnummer": 1721,
        "kolhydrater": 4.26,
        "fett": 15,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gräddersättning pulver fett 35%",
        "livsmedelsnummer": 1725,
        "kolhydrater": 54.9,
        "fett": 35.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gräddfilssås m. kryddgrönt",
        "livsmedelsnummer": 1726,
        "kolhydrater": 4.41,
        "fett": 10.6,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Gräddfilssås fett 9%",
        "livsmedelsnummer": 1727,
        "kolhydrater": 6.7,
        "fett": 5.12,
        "fibrer": 0.71,
        "alkohol": 0
    },
    {
        "namn": "Gräddfilssås m. crème fraiche",
        "livsmedelsnummer": 1728,
        "kolhydrater": 6.44,
        "fett": 12.34,
        "fibrer": 0.71,
        "alkohol": 0
    },
    {
        "namn": "Rabarberkräm",
        "livsmedelsnummer": 1729,
        "kolhydrater": 12.65,
        "fett": 0.12,
        "fibrer": 2.15,
        "alkohol": 0
    },
    {
        "namn": "Rabarbersoppa",
        "livsmedelsnummer": 1730,
        "kolhydrater": 11.7,
        "fett": 0.1,
        "fibrer": 1.72,
        "alkohol": 0
    },
    {
        "namn": "Apelsinsoppa",
        "livsmedelsnummer": 1732,
        "kolhydrater": 10.56,
        "fett": 0.08,
        "fibrer": 0.27,
        "alkohol": 0
    },
    {
        "namn": "Blåbärssoppa hemlagad",
        "livsmedelsnummer": 1734,
        "kolhydrater": 10.39,
        "fett": 0.26,
        "fibrer": 0.99,
        "alkohol": 0
    },
    {
        "namn": "Svartvinbärskräm",
        "livsmedelsnummer": 1740,
        "kolhydrater": 15.09,
        "fett": 0.44,
        "fibrer": 2.31,
        "alkohol": 0
    },
    {
        "namn": "Äppelkompott",
        "livsmedelsnummer": 1741,
        "kolhydrater": 14.96,
        "fett": 0.04,
        "fibrer": 1.9,
        "alkohol": 0
    },
    {
        "namn": "Äppelkräm",
        "livsmedelsnummer": 1742,
        "kolhydrater": 13.86,
        "fett": 0.04,
        "fibrer": 1.73,
        "alkohol": 0
    },
    {
        "namn": "Äppelsoppa",
        "livsmedelsnummer": 1743,
        "kolhydrater": 11.21,
        "fett": 0.04,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Kräm m. bär el. frukt",
        "livsmedelsnummer": 1744,
        "kolhydrater": 14.44,
        "fett": 0.15,
        "fibrer": 1.36,
        "alkohol": 0
    },
    {
        "namn": "Pajfyllning bär m. socker",
        "livsmedelsnummer": 1745,
        "kolhydrater": 23.5,
        "fett": 0.43,
        "fibrer": 2.56,
        "alkohol": 0
    },
    {
        "namn": "Saftkräm",
        "livsmedelsnummer": 1746,
        "kolhydrater": 28.38,
        "fett": 0.02,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Saftsoppa",
        "livsmedelsnummer": 1747,
        "kolhydrater": 21.14,
        "fett": 0.01,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Saftsås",
        "livsmedelsnummer": 1748,
        "kolhydrater": 28.79,
        "fett": 0.02,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktdryck blåbär berikad",
        "livsmedelsnummer": 1749,
        "kolhydrater": 10.6,
        "fett": 0.1,
        "fibrer": 0.25,
        "alkohol": 0
    },
    {
        "namn": "Fruktsoppa pastöriserad ätf. blandad torkad frukt berikad",
        "livsmedelsnummer": 1750,
        "kolhydrater": 12.9,
        "fett": 0,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Nyponsoppa ätf. pastöriserad el. pulver berikad ",
        "livsmedelsnummer": 1751,
        "kolhydrater": 12.1,
        "fett": 0.1,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Nyponsoppa ätf. pulver osötad berikad",
        "livsmedelsnummer": 1752,
        "kolhydrater": 4.3,
        "fett": 0.1,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kaka m. katrinplommon",
        "livsmedelsnummer": 1758,
        "kolhydrater": 24.25,
        "fett": 5.18,
        "fibrer": 2.88,
        "alkohol": 0
    },
    {
        "namn": "Kalvdans m. mjölkpulver ägg",
        "livsmedelsnummer": 1759,
        "kolhydrater": 13.01,
        "fett": 3.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ostkaka m. cottage cheese",
        "livsmedelsnummer": 1760,
        "kolhydrater": 10.5,
        "fett": 9.73,
        "fibrer": 1.18,
        "alkohol": 0
    },
    {
        "namn": "Marängsviss hovdessert",
        "livsmedelsnummer": 1761,
        "kolhydrater": 37.39,
        "fett": 19.97,
        "fibrer": 3.88,
        "alkohol": 0
    },
    {
        "namn": "Brylépudding",
        "livsmedelsnummer": 1762,
        "kolhydrater": 19.64,
        "fett": 3.27,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vaniljsås m. mellanmjölk matlagningsgrädde vispgrädde hemlagad",
        "livsmedelsnummer": 1763,
        "kolhydrater": 11.77,
        "fett": 14.6,
        "fibrer": 0.03,
        "alkohol": 0
    },
    {
        "namn": "Chokladpudding",
        "livsmedelsnummer": 1764,
        "kolhydrater": 19.11,
        "fett": 2.92,
        "fibrer": 1.24,
        "alkohol": 0
    },
    {
        "namn": "Chokladpudding m. vispad grädde fett 40%",
        "livsmedelsnummer": 1765,
        "kolhydrater": 16.13,
        "fett": 9.78,
        "fibrer": 1.01,
        "alkohol": 0
    },
    {
        "namn": "Chokladmousse",
        "livsmedelsnummer": 1766,
        "kolhydrater": 28.67,
        "fett": 17.76,
        "fibrer": 0.06,
        "alkohol": 0
    },
    {
        "namn": "Fromage apelsin el. citron hemlagad",
        "livsmedelsnummer": 1767,
        "kolhydrater": 18.15,
        "fett": 20.4,
        "fibrer": 0.04,
        "alkohol": 0
    },
    {
        "namn": "Glassås choklad hemlagad",
        "livsmedelsnummer": 1768,
        "kolhydrater": 44.81,
        "fett": 4.11,
        "fibrer": 6.49,
        "alkohol": 0
    },
    {
        "namn": "Glassås kolasås",
        "livsmedelsnummer": 1769,
        "kolhydrater": 28.42,
        "fett": 20.72,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vaniljpudding",
        "livsmedelsnummer": 1770,
        "kolhydrater": 15.96,
        "fett": 8.35,
        "fibrer": 0.01,
        "alkohol": 0
    },
    {
        "namn": "Vaniljsås m. grädde mjölk",
        "livsmedelsnummer": 1771,
        "kolhydrater": 10.43,
        "fett": 29.53,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ostkaka fett 9%",
        "livsmedelsnummer": 1772,
        "kolhydrater": 15.8,
        "fett": 8.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ostkaka lätt osötad fett 3%",
        "livsmedelsnummer": 1773,
        "kolhydrater": 8.6,
        "fett": 3,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Fromage citron",
        "livsmedelsnummer": 1775,
        "kolhydrater": 16.2,
        "fett": 11,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vaniljsås m. havre fett 11%",
        "livsmedelsnummer": 1776,
        "kolhydrater": 14.5,
        "fett": 11,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Vaniljsås tillagad pulver m. mjölk",
        "livsmedelsnummer": 1777,
        "kolhydrater": 16.06,
        "fett": 3.24,
        "fibrer": 0.04,
        "alkohol": 0
    },
    {
        "namn": "Glassås choklad",
        "livsmedelsnummer": 1778,
        "kolhydrater": 69.5,
        "fett": 5.53,
        "fibrer": 3.9,
        "alkohol": 0
    },
    {
        "namn": "Glassås frukt",
        "livsmedelsnummer": 1779,
        "kolhydrater": 77.8,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Äppelpaj m. botten lock",
        "livsmedelsnummer": 1780,
        "kolhydrater": 40,
        "fett": 12.5,
        "fibrer": 2.4,
        "alkohol": 0
    },
    {
        "namn": "Rabarberpaj",
        "livsmedelsnummer": 1781,
        "kolhydrater": 34.56,
        "fett": 13.33,
        "fibrer": 2.86,
        "alkohol": 0
    },
    {
        "namn": "Äppelpaj",
        "livsmedelsnummer": 1782,
        "kolhydrater": 25.02,
        "fett": 12.15,
        "fibrer": 1.68,
        "alkohol": 0
    },
    {
        "namn": "Cheesecake m. digestivebotten frukt bär",
        "livsmedelsnummer": 1783,
        "kolhydrater": 14.58,
        "fett": 20.91,
        "fibrer": 0.46,
        "alkohol": 0
    },
    {
        "namn": "Cheesecake m. digestivebotten",
        "livsmedelsnummer": 1784,
        "kolhydrater": 19.96,
        "fett": 21.25,
        "fibrer": 0.38,
        "alkohol": 0
    },
    {
        "namn": "Mannagrynskaka mannagrynspudding",
        "livsmedelsnummer": 1785,
        "kolhydrater": 15.27,
        "fett": 2.37,
        "fibrer": 0.46,
        "alkohol": 0
    },
    {
        "namn": "Äppelsmulpaj",
        "livsmedelsnummer": 1786,
        "kolhydrater": 32.46,
        "fett": 10.93,
        "fibrer": 2.55,
        "alkohol": 0
    },
    {
        "namn": "Katrinplommonsufflé",
        "livsmedelsnummer": 1788,
        "kolhydrater": 12.42,
        "fett": 0.25,
        "fibrer": 0.86,
        "alkohol": 0
    },
    {
        "namn": "Äppelpaj friterad",
        "livsmedelsnummer": 1789,
        "kolhydrater": 35.1,
        "fett": 16.6,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Banan friterad",
        "livsmedelsnummer": 1790,
        "kolhydrater": 27.28,
        "fett": 6.02,
        "fibrer": 1.53,
        "alkohol": 0
    },
    {
        "namn": "Äpple ugnsstekt m. olja el. flytande margarin socker mandelmassa valnötter",
        "livsmedelsnummer": 1791,
        "kolhydrater": 23.69,
        "fett": 20.97,
        "fibrer": 4.59,
        "alkohol": 0
    },
    {
        "namn": "Banan friterad m. glass tillagad på restaurang",
        "livsmedelsnummer": 1792,
        "kolhydrater": 30.3,
        "fett": 13.22,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Apelsinmarmelad",
        "livsmedelsnummer": 1793,
        "kolhydrater": 56.9,
        "fett": 0,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Gelé röda vinbär",
        "livsmedelsnummer": 1794,
        "kolhydrater": 68.4,
        "fett": 0,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Gelé svarta vinbär",
        "livsmedelsnummer": 1795,
        "kolhydrater": 64.7,
        "fett": 0,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Apelsinmarmelad lättsockrad lag",
        "livsmedelsnummer": 1796,
        "kolhydrater": 44.5,
        "fett": 0.1,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Marmelad olika smaker",
        "livsmedelsnummer": 1797,
        "kolhydrater": 57.7,
        "fett": 0.1,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Lingonsylt",
        "livsmedelsnummer": 1798,
        "kolhydrater": 35.3,
        "fett": 0.2,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Lingonsylt osötad",
        "livsmedelsnummer": 1800,
        "kolhydrater": 8.8,
        "fett": 0.4,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Jordgubbssylt",
        "livsmedelsnummer": 1801,
        "kolhydrater": 41.1,
        "fett": 0.1,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Björnbärssylt",
        "livsmedelsnummer": 1802,
        "kolhydrater": 41.2,
        "fett": 0.1,
        "fibrer": 2.4,
        "alkohol": 0
    },
    {
        "namn": "Blåbärssylt",
        "livsmedelsnummer": 1803,
        "kolhydrater": 34.9,
        "fett": 0.3,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Hallonsylt",
        "livsmedelsnummer": 1804,
        "kolhydrater": 43.6,
        "fett": 0.2,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Hjortronsylt",
        "livsmedelsnummer": 1805,
        "kolhydrater": 42,
        "fett": 0.3,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Krusbärssylt",
        "livsmedelsnummer": 1806,
        "kolhydrater": 38.5,
        "fett": 0.2,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Körsbärssylt",
        "livsmedelsnummer": 1808,
        "kolhydrater": 42.6,
        "fett": 0.3,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Äppelmos",
        "livsmedelsnummer": 1809,
        "kolhydrater": 56.9,
        "fett": 0,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Äppelmos lättsockrad",
        "livsmedelsnummer": 1810,
        "kolhydrater": 30.9,
        "fett": 0,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Äppelmos osötad el. sötningsm.",
        "livsmedelsnummer": 1811,
        "kolhydrater": 11.3,
        "fett": 0,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Cumberlandsås",
        "livsmedelsnummer": 1812,
        "kolhydrater": 47.97,
        "fett": 0.29,
        "fibrer": 0.7,
        "alkohol": 1.83
    },
    {
        "namn": "Apelsinsaft konc. vitberik.",
        "livsmedelsnummer": 1814,
        "kolhydrater": 47.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Apelsinsaft drickf. vitberik.",
        "livsmedelsnummer": 1815,
        "kolhydrater": 7.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Saft lättsockrad konc.",
        "livsmedelsnummer": 1817,
        "kolhydrater": 52.4,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Måltidsdryck drickf.",
        "livsmedelsnummer": 1818,
        "kolhydrater": 8.8,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Blandsaft konc.",
        "livsmedelsnummer": 1819,
        "kolhydrater": 52.4,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Saft drickf.",
        "livsmedelsnummer": 1820,
        "kolhydrater": 8.8,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Svartvinbärssaft konc. berikad",
        "livsmedelsnummer": 1821,
        "kolhydrater": 42.3,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Saft sötningsm. konc.",
        "livsmedelsnummer": 1822,
        "kolhydrater": 22.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktdryck m. kolsyra",
        "livsmedelsnummer": 1826,
        "kolhydrater": 9.9,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktdryck u. kolsyra",
        "livsmedelsnummer": 1827,
        "kolhydrater": 11.9,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Läsk",
        "livsmedelsnummer": 1828,
        "kolhydrater": 10.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Läsk cola",
        "livsmedelsnummer": 1829,
        "kolhydrater": 10.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Läsk light",
        "livsmedelsnummer": 1830,
        "kolhydrater": 0.1,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Läsk cola light",
        "livsmedelsnummer": 1831,
        "kolhydrater": 0.1,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sportdryck drickf.",
        "livsmedelsnummer": 1832,
        "kolhydrater": 7.2,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Saft sötningsm. drickf.",
        "livsmedelsnummer": 1834,
        "kolhydrater": 2.25,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hallonsaft drickf.",
        "livsmedelsnummer": 1837,
        "kolhydrater": 9,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Svartvinbärssaft drickf. berikad",
        "livsmedelsnummer": 1838,
        "kolhydrater": 8,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lingondricka drickf. berikad",
        "livsmedelsnummer": 1840,
        "kolhydrater": 7,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Äppeldricka drickf. berikad",
        "livsmedelsnummer": 1841,
        "kolhydrater": 7.9,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Saft sötningsm. drickf. berikad",
        "livsmedelsnummer": 1842,
        "kolhydrater": 4.2,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass isglass",
        "livsmedelsnummer": 1843,
        "kolhydrater": 23.25,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass sorbet",
        "livsmedelsnummer": 1844,
        "kolhydrater": 30.5,
        "fett": 0.57,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass isglass saftis",
        "livsmedelsnummer": 1845,
        "kolhydrater": 20.5,
        "fett": 1.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Chokladdryck m. vatten",
        "livsmedelsnummer": 1846,
        "kolhydrater": 7.64,
        "fett": 0.33,
        "fibrer": 0.42,
        "alkohol": 0
    },
    {
        "namn": "Chokladdryck drickf.",
        "livsmedelsnummer": 1847,
        "kolhydrater": 9.8,
        "fett": 1.5,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Mjölkchoklad m. hackade hasselnötter",
        "livsmedelsnummer": 1848,
        "kolhydrater": 55.6,
        "fett": 31.76,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Mjölkchoklad fylld m. mandelkrokant",
        "livsmedelsnummer": 1849,
        "kolhydrater": 60.1,
        "fett": 31.1,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Mjölkchoklad m. mjuk kolafyllning",
        "livsmedelsnummer": 1850,
        "kolhydrater": 62.9,
        "fett": 24.25,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kex m. mjölkchokladöverdrag",
        "livsmedelsnummer": 1851,
        "kolhydrater": 67.2,
        "fett": 22.31,
        "fibrer": 2.3,
        "alkohol": 0
    },
    {
        "namn": "Kex m. kola mjölkchokladöverdrag",
        "livsmedelsnummer": 1852,
        "kolhydrater": 66.1,
        "fett": 21.17,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Mjuk nougat m. kolasås jordnötter mjölkchokladöverdrag",
        "livsmedelsnummer": 1853,
        "kolhydrater": 54,
        "fett": 25.09,
        "fibrer": 3.2,
        "alkohol": 0
    },
    {
        "namn": "Mjuk chokladmaräng m. kola mjölkchokladöverdrag",
        "livsmedelsnummer": 1854,
        "kolhydrater": 69.3,
        "fett": 16.2,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Choklad chokladpraliner",
        "livsmedelsnummer": 1855,
        "kolhydrater": 53.7,
        "fett": 33.7,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Chokladpralin",
        "livsmedelsnummer": 1858,
        "kolhydrater": 53.3,
        "fett": 33.5,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Mjuk kokos m. mjölkchokladöverdrag",
        "livsmedelsnummer": 1859,
        "kolhydrater": 56.1,
        "fett": 25.7,
        "fibrer": 4.2,
        "alkohol": 0
    },
    {
        "namn": "Nötkräm chokladkräm",
        "livsmedelsnummer": 1860,
        "kolhydrater": 56.9,
        "fett": 29.6,
        "fibrer": 4.9,
        "alkohol": 0
    },
    {
        "namn": "Choklad osötad",
        "livsmedelsnummer": 1861,
        "kolhydrater": 46.9,
        "fett": 39,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Gelékonfekt",
        "livsmedelsnummer": 1863,
        "kolhydrater": 79.4,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Karameller syrliga",
        "livsmedelsnummer": 1864,
        "kolhydrater": 97.2,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kola",
        "livsmedelsnummer": 1865,
        "kolhydrater": 68.9,
        "fett": 18,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lakritskonfekt",
        "livsmedelsnummer": 1866,
        "kolhydrater": 86.1,
        "fett": 3.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Marmeladkonfekt",
        "livsmedelsnummer": 1867,
        "kolhydrater": 82.6,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Skumgodis",
        "livsmedelsnummer": 1868,
        "kolhydrater": 80.4,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Polkagris",
        "livsmedelsnummer": 1869,
        "kolhydrater": 98.1,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Tuggummi",
        "livsmedelsnummer": 1870,
        "kolhydrater": 92.7,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Klubba chokladkola karamell",
        "livsmedelsnummer": 1871,
        "kolhydrater": 80.6,
        "fett": 11.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Saltlakrits",
        "livsmedelsnummer": 1873,
        "kolhydrater": 94.2,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Supersalt lakrits",
        "livsmedelsnummer": 1874,
        "kolhydrater": 76,
        "fett": 0,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Chokladkola mörk m. chokladöverdrag",
        "livsmedelsnummer": 1875,
        "kolhydrater": 71.7,
        "fett": 18.23,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kex rån fyllt m. choklad",
        "livsmedelsnummer": 1876,
        "kolhydrater": 59.8,
        "fett": 25,
        "fibrer": 0.7,
        "alkohol": 0
    },
    {
        "namn": "Fruktkola",
        "livsmedelsnummer": 1877,
        "kolhydrater": 96.3,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Skumbilar",
        "livsmedelsnummer": 1878,
        "kolhydrater": 83.7,
        "fett": 0.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Skumboll m. chokladöverdrag kokos",
        "livsmedelsnummer": 1879,
        "kolhydrater": 52.6,
        "fett": 20,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Skumboll m. chokladöverdrag",
        "livsmedelsnummer": 1880,
        "kolhydrater": 59.6,
        "fett": 15,
        "fibrer": 0.4,
        "alkohol": 0
    },
    {
        "namn": "Bar energibar m. choklad nötter",
        "livsmedelsnummer": 1881,
        "kolhydrater": 69.6,
        "fett": 11.17,
        "fibrer": 4.5,
        "alkohol": 0
    },
    {
        "namn": "Karameller sockerfria",
        "livsmedelsnummer": 1882,
        "kolhydrater": 76.9,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Tuggummi sockerfritt",
        "livsmedelsnummer": 1884,
        "kolhydrater": 86.1,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mandelmassa",
        "livsmedelsnummer": 1885,
        "kolhydrater": 51.5,
        "fett": 23,
        "fibrer": 3.5,
        "alkohol": 0
    },
    {
        "namn": "Kakaopulver fett 20-22%",
        "livsmedelsnummer": 1886,
        "kolhydrater": 10.6,
        "fett": 21.5,
        "fibrer": 34,
        "alkohol": 0
    },
    {
        "namn": "Chokladdryckspulver sockrad fett 2,5%",
        "livsmedelsnummer": 1887,
        "kolhydrater": 87.7,
        "fett": 2.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Chokladboll hemlagad",
        "livsmedelsnummer": 1888,
        "kolhydrater": 53.54,
        "fett": 24.05,
        "fibrer": 3.98,
        "alkohol": 0
    },
    {
        "namn": "Måltidsersättning pulver chokladsmak",
        "livsmedelsnummer": 1891,
        "kolhydrater": 32.6,
        "fett": 9.01,
        "fibrer": 11.6,
        "alkohol": 0
    },
    {
        "namn": "Socker",
        "livsmedelsnummer": 1892,
        "kolhydrater": 99.6,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Brun farin",
        "livsmedelsnummer": 1893,
        "kolhydrater": 95.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ljus sirap",
        "livsmedelsnummer": 1894,
        "kolhydrater": 79.6,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Honung",
        "livsmedelsnummer": 1896,
        "kolhydrater": 81.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Druvsocker",
        "livsmedelsnummer": 1897,
        "kolhydrater": 91.1,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktsocker",
        "livsmedelsnummer": 1898,
        "kolhydrater": 91.7,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sorbitol m. sackarin",
        "livsmedelsnummer": 1899,
        "kolhydrater": 100,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Svagdricka vol. % 2,3",
        "livsmedelsnummer": 1900,
        "kolhydrater": 3.8,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 1.8
    },
    {
        "namn": "Öl lättöl vol. % 2,3",
        "livsmedelsnummer": 1901,
        "kolhydrater": 3.8,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 1.8
    },
    {
        "namn": "Öl pilsner folköl vol. % 3,5",
        "livsmedelsnummer": 1902,
        "kolhydrater": 4.6,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 2.8
    },
    {
        "namn": "Cider vol. % 1",
        "livsmedelsnummer": 1903,
        "kolhydrater": 10.1,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0.8
    },
    {
        "namn": "Vin vitt vol. % 1",
        "livsmedelsnummer": 1904,
        "kolhydrater": 2.8,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0.8
    },
    {
        "namn": "Vin rött el. rosé vol. % 1",
        "livsmedelsnummer": 1905,
        "kolhydrater": 2.8,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0.8
    },
    {
        "namn": "Öl starköl el. exportöl vol. % 5,4",
        "livsmedelsnummer": 1906,
        "kolhydrater": 3,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 4.3
    },
    {
        "namn": "Vin rött vol. % 14",
        "livsmedelsnummer": 1907,
        "kolhydrater": 1,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 10.77
    },
    {
        "namn": "Vin vitt vol. % 12",
        "livsmedelsnummer": 1908,
        "kolhydrater": 1,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 9.53
    },
    {
        "namn": "Vin vitt el. rhenvin vol. % 10",
        "livsmedelsnummer": 1909,
        "kolhydrater": 3.8,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 7.9
    },
    {
        "namn": "Glögg vin vol. % 10",
        "livsmedelsnummer": 1912,
        "kolhydrater": 17,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 8
    },
    {
        "namn": "Starkvin vol. % 18 typ Madiera",
        "livsmedelsnummer": 1914,
        "kolhydrater": 7.9,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 14
    },
    {
        "namn": "Starkvin vitt rött vol. % 20 typ Portvin",
        "livsmedelsnummer": 1915,
        "kolhydrater": 9.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 16
    },
    {
        "namn": "Starkvin halvtorr vol. % 17 typ Sherry",
        "livsmedelsnummer": 1916,
        "kolhydrater": 3.4,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 16
    },
    {
        "namn": "Glögg starkvin vol. % 16",
        "livsmedelsnummer": 1917,
        "kolhydrater": 22.3,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 12.8
    },
    {
        "namn": "Brännvin renat el. vodka vol. % 40",
        "livsmedelsnummer": 1918,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 32
    },
    {
        "namn": "Likör söt vol. % 24",
        "livsmedelsnummer": 1919,
        "kolhydrater": 33,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 19
    },
    {
        "namn": "Likör Kaptenlöjtnant vol. % 38",
        "livsmedelsnummer": 1920,
        "kolhydrater": 27,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 30.5
    },
    {
        "namn": "Konjak el. brandy vol. % 40",
        "livsmedelsnummer": 1921,
        "kolhydrater": 0.8,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 32
    },
    {
        "namn": "Punsch vol. % 26",
        "livsmedelsnummer": 1922,
        "kolhydrater": 26,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 20
    },
    {
        "namn": "Rom vol. % 40",
        "livsmedelsnummer": 1923,
        "kolhydrater": 0.3,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 32
    },
    {
        "namn": "Brännvin kryddat vol. % 40 ",
        "livsmedelsnummer": 1924,
        "kolhydrater": 1.1,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 32
    },
    {
        "namn": "Gin vol. % 40",
        "livsmedelsnummer": 1925,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 32
    },
    {
        "namn": "Whisky vol. % 40",
        "livsmedelsnummer": 1926,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 32
    },
    {
        "namn": "Likör mindre söt vol. % 24",
        "livsmedelsnummer": 1927,
        "kolhydrater": 24.7,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 19
    },
    {
        "namn": "Kaffedrink Irish coffee m.whiskey vispad grädde",
        "livsmedelsnummer": 1929,
        "kolhydrater": 4.09,
        "fett": 2.69,
        "fibrer": 0,
        "alkohol": 5.54
    },
    {
        "namn": "Bovetemjöl",
        "livsmedelsnummer": 1930,
        "kolhydrater": 65.1,
        "fett": 3.55,
        "fibrer": 3.2,
        "alkohol": 0
    },
    {
        "namn": "Havremust pulver berikad",
        "livsmedelsnummer": 1931,
        "kolhydrater": 56,
        "fett": 5.8,
        "fibrer": 8,
        "alkohol": 0
    },
    {
        "namn": "Kornmjöl fullkorn",
        "livsmedelsnummer": 1932,
        "kolhydrater": 64.7,
        "fett": 3,
        "fibrer": 7.6,
        "alkohol": 0
    },
    {
        "namn": "Majsmjöl gult u. groddar el. polenta",
        "livsmedelsnummer": 1933,
        "kolhydrater": 73.2,
        "fett": 1.2,
        "fibrer": 5,
        "alkohol": 0
    },
    {
        "namn": "Rågmjöl fullkorn",
        "livsmedelsnummer": 1934,
        "kolhydrater": 60.2,
        "fett": 2.5,
        "fibrer": 13.6,
        "alkohol": 0
    },
    {
        "namn": "Grahamsmjöl fullkorn vete",
        "livsmedelsnummer": 1935,
        "kolhydrater": 60.68,
        "fett": 2.5,
        "fibrer": 11.32,
        "alkohol": 0
    },
    {
        "namn": "Vetediet berikad",
        "livsmedelsnummer": 1936,
        "kolhydrater": 53.5,
        "fett": 8.5,
        "fibrer": 9.5,
        "alkohol": 0
    },
    {
        "namn": "Vetemjöl bagerivetemjöl",
        "livsmedelsnummer": 1938,
        "kolhydrater": 70.2,
        "fett": 1.57,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Vetemjöl",
        "livsmedelsnummer": 1941,
        "kolhydrater": 72.4,
        "fett": 1.88,
        "fibrer": 3.6,
        "alkohol": 0
    },
    {
        "namn": "Mjölblandning grov vete råg vitberik.",
        "livsmedelsnummer": 1942,
        "kolhydrater": 63.2,
        "fett": 2.5,
        "fibrer": 9,
        "alkohol": 0
    },
    {
        "namn": "Mjölblandning rågsikt vetemjöl vitberik.",
        "livsmedelsnummer": 1943,
        "kolhydrater": 68.4,
        "fett": 2.5,
        "fibrer": 5.1,
        "alkohol": 0
    },
    {
        "namn": "Mjölblandning vete råg korn havre vitberik.",
        "livsmedelsnummer": 1944,
        "kolhydrater": 66,
        "fett": 2.5,
        "fibrer": 6,
        "alkohol": 0
    },
    {
        "namn": "Majsstärkelse",
        "livsmedelsnummer": 1945,
        "kolhydrater": 87.5,
        "fett": 0.74,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Potatismjöl",
        "livsmedelsnummer": 1946,
        "kolhydrater": 84.3,
        "fett": 0.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Samarinpulver",
        "livsmedelsnummer": 1947,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Samarin drickf.",
        "livsmedelsnummer": 1948,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vatten sodavatten",
        "livsmedelsnummer": 1949,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vatten vichyvatten",
        "livsmedelsnummer": 1950,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vatten mineralvatten",
        "livsmedelsnummer": 1951,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vatten kranvatten",
        "livsmedelsnummer": 1953,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Snabbkaffe pulver",
        "livsmedelsnummer": 1955,
        "kolhydrater": 42.6,
        "fett": 1.7,
        "fibrer": 19,
        "alkohol": 0
    },
    {
        "namn": "Snabbkaffe drickf.",
        "livsmedelsnummer": 1956,
        "kolhydrater": 0.4,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kaffe bryggt",
        "livsmedelsnummer": 1957,
        "kolhydrater": 0.3,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kaffe espresso bryggt drickf.",
        "livsmedelsnummer": 1958,
        "kolhydrater": 1.67,
        "fett": 0.18,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Snabbkaffe koffeinfritt drickf.",
        "livsmedelsnummer": 1959,
        "kolhydrater": 0.3,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Tepulver",
        "livsmedelsnummer": 1960,
        "kolhydrater": 61.8,
        "fett": 0.4,
        "fibrer": 3.7,
        "alkohol": 0
    },
    {
        "namn": "Te bryggt",
        "livsmedelsnummer": 1962,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Örtte drickf.",
        "livsmedelsnummer": 1963,
        "kolhydrater": 0.3,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nyponte drickf. m. svarta vinbär",
        "livsmedelsnummer": 1964,
        "kolhydrater": 0.7,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ättiksprit ättiksyra 12%",
        "livsmedelsnummer": 1965,
        "kolhydrater": 12,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vinäger ättiksyra 7%",
        "livsmedelsnummer": 1966,
        "kolhydrater": 7,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Äppelcidervinäger ättiksyra 7%",
        "livsmedelsnummer": 1967,
        "kolhydrater": 7,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Chilisås tomat",
        "livsmedelsnummer": 1968,
        "kolhydrater": 16.7,
        "fett": 0.5,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Ketchup",
        "livsmedelsnummer": 1969,
        "kolhydrater": 18.5,
        "fett": 0.5,
        "fibrer": 3.9,
        "alkohol": 0
    },
    {
        "namn": "Engelsk brown sauce HP-sås",
        "livsmedelsnummer": 1970,
        "kolhydrater": 25.2,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Grillsås",
        "livsmedelsnummer": 1971,
        "kolhydrater": 8,
        "fett": 6.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Senap svensk",
        "livsmedelsnummer": 1972,
        "kolhydrater": 23.1,
        "fett": 6.83,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Senap fransk",
        "livsmedelsnummer": 1973,
        "kolhydrater": 5.3,
        "fett": 5,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Sötsur sås",
        "livsmedelsnummer": 1974,
        "kolhydrater": 23.3,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Salt m. jod",
        "livsmedelsnummer": 1975,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Salt mineralsalt",
        "livsmedelsnummer": 1976,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Salt havssalt u. jod",
        "livsmedelsnummer": 1977,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Salt örtsalt",
        "livsmedelsnummer": 1978,
        "kolhydrater": 22.9,
        "fett": 0.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Jäst färsk",
        "livsmedelsnummer": 1979,
        "kolhydrater": 14.1,
        "fett": 0.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Jäst torkad",
        "livsmedelsnummer": 1980,
        "kolhydrater": 48.1,
        "fett": 1.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Bakpulver",
        "livsmedelsnummer": 1981,
        "kolhydrater": 42.4,
        "fett": 0,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Béchamelsås m. lättmjölk",
        "livsmedelsnummer": 1982,
        "kolhydrater": 8.34,
        "fett": 4.48,
        "fibrer": 0.15,
        "alkohol": 0
    },
    {
        "namn": "Ljus sås m. mjölk",
        "livsmedelsnummer": 1983,
        "kolhydrater": 9.35,
        "fett": 5.67,
        "fibrer": 0.18,
        "alkohol": 0
    },
    {
        "namn": "Ljus sås m. lättmjölk",
        "livsmedelsnummer": 1984,
        "kolhydrater": 9.49,
        "fett": 4.45,
        "fibrer": 0.19,
        "alkohol": 0
    },
    {
        "namn": "Béchamelsås",
        "livsmedelsnummer": 1985,
        "kolhydrater": 8.17,
        "fett": 8.22,
        "fibrer": 0.15,
        "alkohol": 0
    },
    {
        "namn": "Gratängsås u. ost hemlagad",
        "livsmedelsnummer": 1986,
        "kolhydrater": 6.5,
        "fett": 9.19,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Ljus sås",
        "livsmedelsnummer": 1987,
        "kolhydrater": 4.86,
        "fett": 9.7,
        "fibrer": 0.19,
        "alkohol": 0
    },
    {
        "namn": "Ostsås",
        "livsmedelsnummer": 1988,
        "kolhydrater": 7.38,
        "fett": 10.79,
        "fibrer": 0.13,
        "alkohol": 0
    },
    {
        "namn": "Ostsås m. ädelost",
        "livsmedelsnummer": 1989,
        "kolhydrater": 6.87,
        "fett": 11.35,
        "fibrer": 0.12,
        "alkohol": 0
    },
    {
        "namn": "Ostsås till moussaka",
        "livsmedelsnummer": 1990,
        "kolhydrater": 7.44,
        "fett": 7.4,
        "fibrer": 0.19,
        "alkohol": 0
    },
    {
        "namn": "Brunsås m. mjölk",
        "livsmedelsnummer": 1991,
        "kolhydrater": 11.93,
        "fett": 7.86,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Sky",
        "livsmedelsnummer": 1992,
        "kolhydrater": 0,
        "fett": 2.67,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Brunsås m. buljong grädde",
        "livsmedelsnummer": 1993,
        "kolhydrater": 7.27,
        "fett": 8.7,
        "fibrer": 0.19,
        "alkohol": 0
    },
    {
        "namn": "Brunsås m. buljong",
        "livsmedelsnummer": 1994,
        "kolhydrater": 7.54,
        "fett": 6.36,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Currysås hemlagad",
        "livsmedelsnummer": 1995,
        "kolhydrater": 4.55,
        "fett": 8.87,
        "fibrer": 0.19,
        "alkohol": 0
    },
    {
        "namn": "Brunsås m. kaffegrädde",
        "livsmedelsnummer": 1996,
        "kolhydrater": 7.38,
        "fett": 6.93,
        "fibrer": 0.19,
        "alkohol": 0
    },
    {
        "namn": "Korintsås",
        "livsmedelsnummer": 1997,
        "kolhydrater": 9.61,
        "fett": 2.92,
        "fibrer": 0.62,
        "alkohol": 0
    },
    {
        "namn": "Brunsås tillagad pulver m. mjölk vatten",
        "livsmedelsnummer": 1998,
        "kolhydrater": 7.12,
        "fett": 2.02,
        "fibrer": 0.12,
        "alkohol": 0
    },
    {
        "namn": "Gräddsås tillagad pulver m. mjölk vatten smör",
        "livsmedelsnummer": 1999,
        "kolhydrater": 7.58,
        "fett": 8.44,
        "fibrer": 0.11,
        "alkohol": 0
    },
    {
        "namn": "Tomatsås kryddstark",
        "livsmedelsnummer": 2000,
        "kolhydrater": 5.89,
        "fett": 2.57,
        "fibrer": 1.42,
        "alkohol": 0
    },
    {
        "namn": "Dillsås",
        "livsmedelsnummer": 2001,
        "kolhydrater": 7.49,
        "fett": 8.4,
        "fibrer": 0.36,
        "alkohol": 0
    },
    {
        "namn": "Äggsås m. persilja",
        "livsmedelsnummer": 2002,
        "kolhydrater": 3.95,
        "fett": 9.47,
        "fibrer": 0.22,
        "alkohol": 0
    },
    {
        "namn": "Pesto hemlagad",
        "livsmedelsnummer": 2003,
        "kolhydrater": 1.69,
        "fett": 54.09,
        "fibrer": 4.41,
        "alkohol": 0
    },
    {
        "namn": "Pesto m. basilika pinjenötter cashewnötter",
        "livsmedelsnummer": 2004,
        "kolhydrater": 12.6,
        "fett": 57.09,
        "fibrer": 4.1,
        "alkohol": 0
    },
    {
        "namn": "Dippmix pulver olika smaker",
        "livsmedelsnummer": 2006,
        "kolhydrater": 59.3,
        "fett": 1.11,
        "fibrer": 5.4,
        "alkohol": 0
    },
    {
        "namn": "Sweet chilisås",
        "livsmedelsnummer": 2007,
        "kolhydrater": 43.36,
        "fett": 2.87,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Pastasås m. tomat örtkryddor",
        "livsmedelsnummer": 2008,
        "kolhydrater": 13.1,
        "fett": 4.4,
        "fibrer": 3,
        "alkohol": 0
    },
    {
        "namn": "Pastasås olika märken",
        "livsmedelsnummer": 2009,
        "kolhydrater": 5.3,
        "fett": 2.09,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Sötsur sås m. grönsaker konserv.",
        "livsmedelsnummer": 2010,
        "kolhydrater": 20.1,
        "fett": 2.49,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Orientalisk sås m. grönsaker konserv.",
        "livsmedelsnummer": 2011,
        "kolhydrater": 10.1,
        "fett": 4.77,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Teriyakisås",
        "livsmedelsnummer": 2012,
        "kolhydrater": 22.2,
        "fett": 0.83,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor müsli fullkorn m. frukt",
        "livsmedelsnummer": 2024,
        "kolhydrater": 69.9,
        "fett": 4.52,
        "fibrer": 8.82,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor müsli fullkorn m. bär",
        "livsmedelsnummer": 2025,
        "kolhydrater": 68.9,
        "fett": 3.51,
        "fibrer": 10.3,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor müsli fullkorn sockrad m. frukt nötter",
        "livsmedelsnummer": 2027,
        "kolhydrater": 61.2,
        "fett": 17.1,
        "fibrer": 7.98,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor crunchy fullkorn sockrad m. russin kokos",
        "livsmedelsnummer": 2028,
        "kolhydrater": 65.5,
        "fett": 16.3,
        "fibrer": 5.78,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor crunchy naturell sockrad m. kokos",
        "livsmedelsnummer": 2029,
        "kolhydrater": 64.8,
        "fett": 17.7,
        "fibrer": 5.72,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor müsli fullkorn sockrad m. frukt kokos",
        "livsmedelsnummer": 2030,
        "kolhydrater": 67.6,
        "fett": 10.9,
        "fibrer": 7.56,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor müsli fullkorn sockrad m. frukt bär",
        "livsmedelsnummer": 2031,
        "kolhydrater": 64.4,
        "fett": 18.4,
        "fibrer": 5.86,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor müsli flingblandning fullkorn m. frukt nötter  ",
        "livsmedelsnummer": 2032,
        "kolhydrater": 66.1,
        "fett": 6.07,
        "fibrer": 9.32,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor müsli fullkorn m. frukt banan",
        "livsmedelsnummer": 2033,
        "kolhydrater": 65.2,
        "fett": 7.03,
        "fibrer": 10.7,
        "alkohol": 0
    },
    {
        "namn": "Surimi fisk",
        "livsmedelsnummer": 2035,
        "kolhydrater": 23.5,
        "fett": 0.72,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Matlagningsbas fett 15%",
        "livsmedelsnummer": 2036,
        "kolhydrater": 3,
        "fett": 15.26,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Matlagningsbas fett 7%",
        "livsmedelsnummer": 2037,
        "kolhydrater": 5.4,
        "fett": 7.08,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vispgrädde ersättningsprod. mjölk olja fett 20%",
        "livsmedelsnummer": 2039,
        "kolhydrater": 5,
        "fett": 19.68,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kaffegrädde ersättningsprod. mjölk olja fett 10%",
        "livsmedelsnummer": 2040,
        "kolhydrater": 4.4,
        "fett": 9.88,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vaniljvisp 12% fett",
        "livsmedelsnummer": 2041,
        "kolhydrater": 19.1,
        "fett": 12.07,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Crème fraiche smaksatt fett 13%",
        "livsmedelsnummer": 2043,
        "kolhydrater": 6.7,
        "fett": 13.22,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Crème fraiche smaksatt fett 28%",
        "livsmedelsnummer": 2044,
        "kolhydrater": 4.4,
        "fett": 28.11,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mini fraiche fett 5%",
        "livsmedelsnummer": 2046,
        "kolhydrater": 5.7,
        "fett": 5.16,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mjukost smältost fett 13% typ grevé",
        "livsmedelsnummer": 2047,
        "kolhydrater": 3.4,
        "fett": 12.97,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Filmjölk naturell fett 4,2%",
        "livsmedelsnummer": 2048,
        "kolhydrater": 4.2,
        "fett": 4.13,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktyoghurt olika smaker fett 3,6%",
        "livsmedelsnummer": 2049,
        "kolhydrater": 11.5,
        "fett": 3.69,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vit choklad",
        "livsmedelsnummer": 2051,
        "kolhydrater": 52.4,
        "fett": 39.28,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mörk choklad kakao ≥ 70%",
        "livsmedelsnummer": 2052,
        "kolhydrater": 50.7,
        "fett": 36.98,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mörk choklad kakao < 70%",
        "livsmedelsnummer": 2053,
        "kolhydrater": 63.1,
        "fett": 28.77,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Bakchoklad mörk",
        "livsmedelsnummer": 2054,
        "kolhydrater": 59.8,
        "fett": 32.82,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mjölkchoklad",
        "livsmedelsnummer": 2055,
        "kolhydrater": 52.9,
        "fett": 35.21,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kebabkött frysvara",
        "livsmedelsnummer": 2056,
        "kolhydrater": 6.2,
        "fett": 18.61,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ris avorio okokt",
        "livsmedelsnummer": 2057,
        "kolhydrater": 78.1,
        "fett": 1.28,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Lök rostad ",
        "livsmedelsnummer": 2058,
        "kolhydrater": 35,
        "fett": 48.54,
        "fibrer": 4.9,
        "alkohol": 0
    },
    {
        "namn": "Glass glasspinne m. frukt  mjölk fett 5,5%",
        "livsmedelsnummer": 2059,
        "kolhydrater": 25.5,
        "fett": 5.59,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Glass glasspinne fett 10%",
        "livsmedelsnummer": 2060,
        "kolhydrater": 22.6,
        "fett": 10.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Bar m. fiber havre vete naturell",
        "livsmedelsnummer": 2061,
        "kolhydrater": 49.9,
        "fett": 20.81,
        "fibrer": 16.5,
        "alkohol": 0
    },
    {
        "namn": "Knäckemacka vete olika fyllningar",
        "livsmedelsnummer": 2062,
        "kolhydrater": 52.1,
        "fett": 25.02,
        "fibrer": 3.6,
        "alkohol": 0
    },
    {
        "namn": "Knäckemacka fullkorn råg olika fyllningar",
        "livsmedelsnummer": 2063,
        "kolhydrater": 45.9,
        "fett": 24.48,
        "fibrer": 9.1,
        "alkohol": 0
    },
    {
        "namn": "Falafel kikärtskroketter frysvara",
        "livsmedelsnummer": 2064,
        "kolhydrater": 24.2,
        "fett": 11.17,
        "fibrer": 7.2,
        "alkohol": 0
    },
    {
        "namn": "Pytt i panna m. sojaprotein veg.",
        "livsmedelsnummer": 2065,
        "kolhydrater": 16.3,
        "fett": 3.62,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Korv veg. sojakorv",
        "livsmedelsnummer": 2066,
        "kolhydrater": 0.8,
        "fett": 15.97,
        "fibrer": 7.7,
        "alkohol": 0
    },
    {
        "namn": "Soja- och veteprotein bullar kylvara el. frysvara",
        "livsmedelsnummer": 2067,
        "kolhydrater": 4.3,
        "fett": 7,
        "fibrer": 5.5,
        "alkohol": 0
    },
    {
        "namn": "Sojaprotein färs kylvara el. frysvara",
        "livsmedelsnummer": 2068,
        "kolhydrater": 5.5,
        "fett": 6.81,
        "fibrer": 7.4,
        "alkohol": 0
    },
    {
        "namn": "Veteprotein grytbitar",
        "livsmedelsnummer": 2069,
        "kolhydrater": 9.9,
        "fett": 9.14,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Matlagningsbas m. soja fett 17%",
        "livsmedelsnummer": 2070,
        "kolhydrater": 5.2,
        "fett": 17.54,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Bar müslibar fullkorn m. röd frukt berikad",
        "livsmedelsnummer": 2071,
        "kolhydrater": 77.9,
        "fett": 4.37,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Bar müslibar m. choklad berikad",
        "livsmedelsnummer": 2072,
        "kolhydrater": 73.2,
        "fett": 6.46,
        "fibrer": 5.8,
        "alkohol": 0
    },
    {
        "namn": "Jordnötssås",
        "livsmedelsnummer": 2073,
        "kolhydrater": 8.6,
        "fett": 24.16,
        "fibrer": 3.46,
        "alkohol": 0
    },
    {
        "namn": "Coleslaw hemlagad",
        "livsmedelsnummer": 2075,
        "kolhydrater": 6.92,
        "fett": 5.89,
        "fibrer": 1.94,
        "alkohol": 0
    },
    {
        "namn": "Löksås m. grädde",
        "livsmedelsnummer": 2078,
        "kolhydrater": 11.3,
        "fett": 11.95,
        "fibrer": 0.66,
        "alkohol": 0
    },
    {
        "namn": "Nudlar äggnudlar kokta m. salt",
        "livsmedelsnummer": 2079,
        "kolhydrater": 23.16,
        "fett": 1.43,
        "fibrer": 0.98,
        "alkohol": 0
    },
    {
        "namn": "Nässlor stuvade",
        "livsmedelsnummer": 2080,
        "kolhydrater": 2.32,
        "fett": 4.14,
        "fibrer": 2.22,
        "alkohol": 0
    },
    {
        "namn": "Kantarell stuvad",
        "livsmedelsnummer": 2081,
        "kolhydrater": 5.99,
        "fett": 15.07,
        "fibrer": 2.22,
        "alkohol": 0
    },
    {
        "namn": "Gryta ratatouille veg.",
        "livsmedelsnummer": 2083,
        "kolhydrater": 5.92,
        "fett": 2.27,
        "fibrer": 1.92,
        "alkohol": 0
    },
    {
        "namn": "Potatisgratäng m. matlagningsgrädde ost hemlagad",
        "livsmedelsnummer": 2085,
        "kolhydrater": 13.4,
        "fett": 7.57,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Sjömansbiff",
        "livsmedelsnummer": 2092,
        "kolhydrater": 10.52,
        "fett": 2.79,
        "fibrer": 1.27,
        "alkohol": 0
    },
    {
        "namn": "Gryta kreolsk gryta",
        "livsmedelsnummer": 2093,
        "kolhydrater": 4.73,
        "fett": 13.67,
        "fibrer": 0.78,
        "alkohol": 0
    },
    {
        "namn": "Flygande Jakob kyckling m. bacon jordnötter banan",
        "livsmedelsnummer": 2096,
        "kolhydrater": 6.28,
        "fett": 8.81,
        "fibrer": 0.63,
        "alkohol": 0
    },
    {
        "namn": "Korv prinskorv stekt kött 61%",
        "livsmedelsnummer": 2097,
        "kolhydrater": 4.02,
        "fett": 25.37,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Skinkröra kall",
        "livsmedelsnummer": 2098,
        "kolhydrater": 2.98,
        "fett": 11.16,
        "fibrer": 0.52,
        "alkohol": 0
    },
    {
        "namn": "Hamburgare blandfärs stekt",
        "livsmedelsnummer": 2099,
        "kolhydrater": 0,
        "fett": 16.14,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Köttfärssås blandfärs",
        "livsmedelsnummer": 2100,
        "kolhydrater": 4.65,
        "fett": 7.04,
        "fibrer": 1.03,
        "alkohol": 0
    },
    {
        "namn": "Nöt färs stekt m. salt fett 10%",
        "livsmedelsnummer": 2101,
        "kolhydrater": 0,
        "fett": 13.98,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt el. gris kött stekt",
        "livsmedelsnummer": 2103,
        "kolhydrater": 0,
        "fett": 8.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Carbonara pastasås",
        "livsmedelsnummer": 2104,
        "kolhydrater": 1.63,
        "fett": 23.66,
        "fibrer": 0.01,
        "alkohol": 0
    },
    {
        "namn": "Skagenröra",
        "livsmedelsnummer": 2107,
        "kolhydrater": 1.95,
        "fett": 11.69,
        "fibrer": 0.13,
        "alkohol": 0
    },
    {
        "namn": "Fisksoppa m. rotfrukter",
        "livsmedelsnummer": 2108,
        "kolhydrater": 2.74,
        "fett": 5.21,
        "fibrer": 0.84,
        "alkohol": 0.37
    },
    {
        "namn": "Havregrynsgröt fullkorn fiberhavregryn",
        "livsmedelsnummer": 2123,
        "kolhydrater": 11.17,
        "fett": 1.35,
        "fibrer": 1.94,
        "alkohol": 0
    },
    {
        "namn": "Havregrynsgröt kokt m. mjölk",
        "livsmedelsnummer": 2124,
        "kolhydrater": 12.32,
        "fett": 2.28,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Nudlar glasnudlar kokta m. salt",
        "livsmedelsnummer": 2125,
        "kolhydrater": 32.89,
        "fett": 0.02,
        "fibrer": 0.19,
        "alkohol": 0
    },
    {
        "namn": "Gröt",
        "livsmedelsnummer": 2128,
        "kolhydrater": 11.46,
        "fett": 1.37,
        "fibrer": 1.32,
        "alkohol": 0
    },
    {
        "namn": "Pannkaka m. sojadryck",
        "livsmedelsnummer": 2133,
        "kolhydrater": 16.6,
        "fett": 7.18,
        "fibrer": 1.01,
        "alkohol": 0
    },
    {
        "namn": "Paj m. broccoli skinka",
        "livsmedelsnummer": 2134,
        "kolhydrater": 12.35,
        "fett": 14.07,
        "fibrer": 1.28,
        "alkohol": 0
    },
    {
        "namn": "Pizza m. kebabkött hemlagad",
        "livsmedelsnummer": 2138,
        "kolhydrater": 18.78,
        "fett": 7.83,
        "fibrer": 1.63,
        "alkohol": 0
    },
    {
        "namn": "Ostsås m. skinka hemlagad",
        "livsmedelsnummer": 2142,
        "kolhydrater": 5.97,
        "fett": 8.93,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Tzatziki",
        "livsmedelsnummer": 2144,
        "kolhydrater": 4.25,
        "fett": 5.52,
        "fibrer": 0.01,
        "alkohol": 0
    },
    {
        "namn": "Ris à la malta m. lättmjölk mellangrädde fett 27%",
        "livsmedelsnummer": 2147,
        "kolhydrater": 16.2,
        "fett": 4.11,
        "fibrer": 0.12,
        "alkohol": 0
    },
    {
        "namn": "Rödkålssallad m. äpple",
        "livsmedelsnummer": 2160,
        "kolhydrater": 18.28,
        "fett": 0.12,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Champinjon stekt u. fett",
        "livsmedelsnummer": 2161,
        "kolhydrater": 3.46,
        "fett": 0.29,
        "fibrer": 3.07,
        "alkohol": 0
    },
    {
        "namn": "Palsternacka kokt m. salt",
        "livsmedelsnummer": 2162,
        "kolhydrater": 12.55,
        "fett": 0.6,
        "fibrer": 3.75,
        "alkohol": 0
    },
    {
        "namn": "Gratängsås m. ost hemlagad",
        "livsmedelsnummer": 2163,
        "kolhydrater": 6.52,
        "fett": 9.99,
        "fibrer": 0.18,
        "alkohol": 0
    },
    {
        "namn": "Fänkål kokt m. salt",
        "livsmedelsnummer": 2164,
        "kolhydrater": 1.79,
        "fett": 0.4,
        "fibrer": 3.29,
        "alkohol": 0
    },
    {
        "namn": "Kroppkakor el. potatispalt m. fläsk hemlagad",
        "livsmedelsnummer": 2165,
        "kolhydrater": 19.74,
        "fett": 6.06,
        "fibrer": 1.89,
        "alkohol": 0
    },
    {
        "namn": "Currysås m. lätt crème fraiche hemlagad",
        "livsmedelsnummer": 2173,
        "kolhydrater": 5.34,
        "fett": 6.68,
        "fibrer": 0.71,
        "alkohol": 0
    },
    {
        "namn": "Korv stroganoff  mager korv fett 15%  grädde fett 15%",
        "livsmedelsnummer": 2174,
        "kolhydrater": 6.29,
        "fett": 14.67,
        "fibrer": 0.48,
        "alkohol": 0
    },
    {
        "namn": "Ostkaka fett 7%",
        "livsmedelsnummer": 2184,
        "kolhydrater": 16.6,
        "fett": 7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rapsolja",
        "livsmedelsnummer": 2189,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Matfettsblandning fett 75% berikad typ Bregott",
        "livsmedelsnummer": 2190,
        "kolhydrater": 0.5,
        "fett": 75,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lättmargarin fett 40% berikad typ Lätta",
        "livsmedelsnummer": 2192,
        "kolhydrater": 3,
        "fett": 40,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Äggröra",
        "livsmedelsnummer": 2197,
        "kolhydrater": 1.05,
        "fett": 15.27,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ägg kokt",
        "livsmedelsnummer": 2205,
        "kolhydrater": 0.4,
        "fett": 9.73,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Aloe vera juice naturell",
        "livsmedelsnummer": 2214,
        "kolhydrater": 0.5,
        "fett": 0.09,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Aloe vera juice m. grönt te",
        "livsmedelsnummer": 2216,
        "kolhydrater": 6.5,
        "fett": 0.37,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Aloe vera-dryck m. tranbär äpple",
        "livsmedelsnummer": 2217,
        "kolhydrater": 9.1,
        "fett": 0.19,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Aloe vera-dryck naturell",
        "livsmedelsnummer": 2218,
        "kolhydrater": 4.4,
        "fett": 0.09,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Toscaglasyr",
        "livsmedelsnummer": 2219,
        "kolhydrater": 30.45,
        "fett": 40.52,
        "fibrer": 6.05,
        "alkohol": 0
    },
    {
        "namn": "Pasta makaroner spagetti okokt glutenfri",
        "livsmedelsnummer": 2220,
        "kolhydrater": 77.6,
        "fett": 1.29,
        "fibrer": 2.8,
        "alkohol": 0
    },
    {
        "namn": "Pasta fusilli lasagneplattor okokt glutenfri",
        "livsmedelsnummer": 2221,
        "kolhydrater": 76.9,
        "fett": 1.39,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Pepparkaka glutenfri",
        "livsmedelsnummer": 2222,
        "kolhydrater": 75.6,
        "fett": 16.24,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Kex digestive fullkorn glutenfri",
        "livsmedelsnummer": 2223,
        "kolhydrater": 75.3,
        "fett": 16.13,
        "fibrer": 3.2,
        "alkohol": 0
    },
    {
        "namn": "Chokladkaka glutenfri",
        "livsmedelsnummer": 2224,
        "kolhydrater": 66.8,
        "fett": 25.09,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd glutenfritt fibrer ca 7,5% typ grovknäcke",
        "livsmedelsnummer": 2225,
        "kolhydrater": 79.9,
        "fett": 2.31,
        "fibrer": 8.1,
        "alkohol": 0
    },
    {
        "namn": "Pasta tagliatelle m. ägg okokt glutenfri",
        "livsmedelsnummer": 2226,
        "kolhydrater": 82.1,
        "fett": 4.52,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Pasta okokt majs 100% glutenfri",
        "livsmedelsnummer": 2227,
        "kolhydrater": 77.7,
        "fett": 1.84,
        "fibrer": 2.9,
        "alkohol": 0
    },
    {
        "namn": "Bearnaisesås fett 8%",
        "livsmedelsnummer": 2228,
        "kolhydrater": 7.7,
        "fett": 8.04,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Klassisk gräddsås fett 6%",
        "livsmedelsnummer": 2229,
        "kolhydrater": 7.1,
        "fett": 5.78,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ostsås fett 8%",
        "livsmedelsnummer": 2230,
        "kolhydrater": 7.9,
        "fett": 7.58,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Bearnaisesås fett ca 40%",
        "livsmedelsnummer": 2231,
        "kolhydrater": 5.9,
        "fett": 35.53,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rödvinssås fett 1,5%",
        "livsmedelsnummer": 2232,
        "kolhydrater": 12.1,
        "fett": 1.22,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kebabsås vit fett 30%",
        "livsmedelsnummer": 2233,
        "kolhydrater": 5,
        "fett": 30.85,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Svampsås fett 8,5%",
        "livsmedelsnummer": 2234,
        "kolhydrater": 7.6,
        "fett": 8.71,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv varmkorv mager 7%",
        "livsmedelsnummer": 2236,
        "kolhydrater": 7.6,
        "fett": 9.86,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Korv chorizo mager fett 9%",
        "livsmedelsnummer": 2238,
        "kolhydrater": 4.8,
        "fett": 9.02,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Korv middagskorv fett ca 9% kött ca 55 %",
        "livsmedelsnummer": 2239,
        "kolhydrater": 6,
        "fett": 7.04,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Påläggskorv salami mager",
        "livsmedelsnummer": 2240,
        "kolhydrater": 1.1,
        "fett": 8.01,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktyoghurt lättsockrad fett 0,2%",
        "livsmedelsnummer": 2242,
        "kolhydrater": 11.5,
        "fett": 0.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktyoghurt lättsockrad laktosreducerad fett 0,1% berikad",
        "livsmedelsnummer": 2243,
        "kolhydrater": 11.2,
        "fett": 0.31,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mintplattor m. mörkchokladöverdrag",
        "livsmedelsnummer": 2246,
        "kolhydrater": 88.1,
        "fett": 4.63,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost mozzarella fett 18%",
        "livsmedelsnummer": 2255,
        "kolhydrater": 0.8,
        "fett": 16.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fruktdryck nypon blåbär berikad",
        "livsmedelsnummer": 2301,
        "kolhydrater": 10.6,
        "fett": 0.1,
        "fibrer": 0.25,
        "alkohol": 0
    },
    {
        "namn": "Energidryck berikad",
        "livsmedelsnummer": 2302,
        "kolhydrater": 9.6,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Flytande margarin mjölkfri fett 80% berikad typ Carlshamn",
        "livsmedelsnummer": 2401,
        "kolhydrater": 0,
        "fett": 80,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Bordsmargarin mjölkfri fett 70% berikad typ Carlshamn",
        "livsmedelsnummer": 2403,
        "kolhydrater": 0,
        "fett": 70,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hushållsmargarin mjölkfri fett 80% berikad typ Carlshamn",
        "livsmedelsnummer": 2404,
        "kolhydrater": 0,
        "fett": 80,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm rygg el. hals kokt m. salt",
        "livsmedelsnummer": 2413,
        "kolhydrater": 0,
        "fett": 14.57,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Tilapia rå",
        "livsmedelsnummer": 2468,
        "kolhydrater": 0,
        "fett": 1.59,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lättmargarin fett 28% berikad typ Mini Lätta",
        "livsmedelsnummer": 2472,
        "kolhydrater": 4,
        "fett": 28,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Flytande margarin fett 79% typ Becel",
        "livsmedelsnummer": 2474,
        "kolhydrater": 0.5,
        "fett": 82,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ris basmati okokt",
        "livsmedelsnummer": 2475,
        "kolhydrater": 76.7,
        "fett": 1,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Ris jasmin okokt",
        "livsmedelsnummer": 2477,
        "kolhydrater": 78.2,
        "fett": 0.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ris råris långkornigt okokt fullkorn",
        "livsmedelsnummer": 2478,
        "kolhydrater": 71.9,
        "fett": 3,
        "fibrer": 4.2,
        "alkohol": 0
    },
    {
        "namn": "Ris grötris snabb okokt",
        "livsmedelsnummer": 2479,
        "kolhydrater": 81.3,
        "fett": 0.6,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Ris långkornigt okokt",
        "livsmedelsnummer": 2481,
        "kolhydrater": 76.9,
        "fett": 0.7,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Ris långkornigt parboiled okokt",
        "livsmedelsnummer": 2482,
        "kolhydrater": 78,
        "fett": 1.2,
        "fibrer": 1.4,
        "alkohol": 0
    },
    {
        "namn": "Ris snabbris okokt salt 1%",
        "livsmedelsnummer": 2483,
        "kolhydrater": 79.7,
        "fett": 0.2,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Ris snabbris okokt",
        "livsmedelsnummer": 2484,
        "kolhydrater": 78.5,
        "fett": 0.7,
        "fibrer": 2.6,
        "alkohol": 0
    },
    {
        "namn": "Ris grötris rundkornigt okokt",
        "livsmedelsnummer": 2485,
        "kolhydrater": 80.2,
        "fett": 0.8,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Bordsmargarin fett 70% berikad typ Becel Gold",
        "livsmedelsnummer": 2490,
        "kolhydrater": 0.5,
        "fett": 70,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Blandfärs rå nöt 70% gris 30%",
        "livsmedelsnummer": 2492,
        "kolhydrater": 0,
        "fett": 12.44,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Blandfärs rå nöt 50% gris 50% ",
        "livsmedelsnummer": 2499,
        "kolhydrater": 0,
        "fett": 13.17,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kebab m. bröd sallad sås",
        "livsmedelsnummer": 2506,
        "kolhydrater": 18.84,
        "fett": 11.96,
        "fibrer": 1.21,
        "alkohol": 0
    },
    {
        "namn": "Kebabtallrik m. pommes frites",
        "livsmedelsnummer": 2507,
        "kolhydrater": 15.25,
        "fett": 16.6,
        "fibrer": 1.39,
        "alkohol": 0
    },
    {
        "namn": "Korv m. mos ketchup senap bostongurka",
        "livsmedelsnummer": 2508,
        "kolhydrater": 12.31,
        "fett": 4.58,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Korv m. bröd ketchup senap",
        "livsmedelsnummer": 2509,
        "kolhydrater": 22.43,
        "fett": 14.7,
        "fibrer": 1.96,
        "alkohol": 0
    },
    {
        "namn": "Hamburgare dubbel m. bröd ost inlagd gurka tillagad på restaurang",
        "livsmedelsnummer": 2510,
        "kolhydrater": 17.5,
        "fett": 13.14,
        "fibrer": 1.58,
        "alkohol": 0
    },
    {
        "namn": "Hamburgare 90 g m. bröd tillbehör tillagad på restaurang",
        "livsmedelsnummer": 2511,
        "kolhydrater": 18.84,
        "fett": 13.5,
        "fibrer": 1.71,
        "alkohol": 0
    },
    {
        "namn": "Hamburgare m. bröd ost tillagad på restaurang",
        "livsmedelsnummer": 2512,
        "kolhydrater": 24.78,
        "fett": 10.66,
        "fibrer": 2.16,
        "alkohol": 0
    },
    {
        "namn": "Ris basmati kokt m. salt",
        "livsmedelsnummer": 2513,
        "kolhydrater": 25.91,
        "fett": 0.34,
        "fibrer": 0.17,
        "alkohol": 0
    },
    {
        "namn": "Ris jasmin kokt m. salt",
        "livsmedelsnummer": 2514,
        "kolhydrater": 25.04,
        "fett": 0.22,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ris långkornigt kokt m. salt",
        "livsmedelsnummer": 2515,
        "kolhydrater": 24.63,
        "fett": 0.22,
        "fibrer": 0.32,
        "alkohol": 0
    },
    {
        "namn": "Ris långkornigt parboiled kokt",
        "livsmedelsnummer": 2516,
        "kolhydrater": 27.87,
        "fett": 0.43,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Ris råris långkornigt kokt m. salt fullkorn",
        "livsmedelsnummer": 2517,
        "kolhydrater": 27.28,
        "fett": 1.14,
        "fibrer": 1.59,
        "alkohol": 0
    },
    {
        "namn": "Ris snabbris kokt salt 1%",
        "livsmedelsnummer": 2518,
        "kolhydrater": 22.84,
        "fett": 0.06,
        "fibrer": 0.43,
        "alkohol": 0
    },
    {
        "namn": "Ris snabbris kokt m. salt",
        "livsmedelsnummer": 2519,
        "kolhydrater": 23.96,
        "fett": 0.21,
        "fibrer": 0.79,
        "alkohol": 0
    },
    {
        "namn": "Pasta tagliatelle m. ägg kokt m. salt glutenfri",
        "livsmedelsnummer": 2520,
        "kolhydrater": 33.98,
        "fett": 1.87,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Pasta makaroner spagetti kokt m. salt glutenfri",
        "livsmedelsnummer": 2521,
        "kolhydrater": 32.79,
        "fett": 0.55,
        "fibrer": 1.18,
        "alkohol": 0
    },
    {
        "namn": "Pasta kokt m. salt majs 100% glutenfri",
        "livsmedelsnummer": 2522,
        "kolhydrater": 32.96,
        "fett": 0.78,
        "fibrer": 1.23,
        "alkohol": 0
    },
    {
        "namn": "Gröna ärtor kokta m. salt frysvara",
        "livsmedelsnummer": 2547,
        "kolhydrater": 8.85,
        "fett": 0.4,
        "fibrer": 4.41,
        "alkohol": 0
    },
    {
        "namn": "Gryta kalops älg",
        "livsmedelsnummer": 2548,
        "kolhydrater": 3.58,
        "fett": 2.19,
        "fibrer": 0.75,
        "alkohol": 0
    },
    {
        "namn": "Älg högrev rå",
        "livsmedelsnummer": 2552,
        "kolhydrater": 0.2,
        "fett": 2.31,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Älg ryggbiff rå",
        "livsmedelsnummer": 2555,
        "kolhydrater": 0,
        "fett": 1.12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Tacoskal",
        "livsmedelsnummer": 2557,
        "kolhydrater": 61,
        "fett": 23.5,
        "fibrer": 4,
        "alkohol": 0
    },
    {
        "namn": "Romansallat",
        "livsmedelsnummer": 2559,
        "kolhydrater": 0.9,
        "fett": 0.2,
        "fibrer": 1.77,
        "alkohol": 0
    },
    {
        "namn": "Ruccolasallat",
        "livsmedelsnummer": 2561,
        "kolhydrater": 0,
        "fett": 0.4,
        "fibrer": 1.7,
        "alkohol": 0
    },
    {
        "namn": "Okra kokt u. salt",
        "livsmedelsnummer": 2565,
        "kolhydrater": 2.5,
        "fett": 0.2,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Salt u. jod",
        "livsmedelsnummer": 2883,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost halloumi stekt eller grillad",
        "livsmedelsnummer": 2899,
        "kolhydrater": 2.01,
        "fett": 23.13,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Dressing hamburgerdressing",
        "livsmedelsnummer": 2973,
        "kolhydrater": 10.08,
        "fett": 56.01,
        "fibrer": 0.41,
        "alkohol": 0
    },
    {
        "namn": "Sill inlagd m. gräddfilssås",
        "livsmedelsnummer": 3035,
        "kolhydrater": 15.58,
        "fett": 23.17,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sill inlagd m. senapssås",
        "livsmedelsnummer": 3036,
        "kolhydrater": 14.53,
        "fett": 17.96,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hummus kikärtsröra",
        "livsmedelsnummer": 3051,
        "kolhydrater": 8.47,
        "fett": 26.51,
        "fibrer": 7.3,
        "alkohol": 0
    },
    {
        "namn": "Chilinötter",
        "livsmedelsnummer": 3069,
        "kolhydrater": 36.5,
        "fett": 32.33,
        "fibrer": 7.43,
        "alkohol": 0
    },
    {
        "namn": "Pinjefrö",
        "livsmedelsnummer": 3071,
        "kolhydrater": 8.9,
        "fett": 66.8,
        "fibrer": 5.5,
        "alkohol": 0
    },
    {
        "namn": "Bulgur kokt m. salt",
        "livsmedelsnummer": 3136,
        "kolhydrater": 16.55,
        "fett": 0.32,
        "fibrer": 1.87,
        "alkohol": 0
    },
    {
        "namn": "Korv ren rå",
        "livsmedelsnummer": 3141,
        "kolhydrater": 4,
        "fett": 18.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv lamm rå",
        "livsmedelsnummer": 3213,
        "kolhydrater": 4.8,
        "fett": 19.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kvarg naturell fett 0,2%",
        "livsmedelsnummer": 3243,
        "kolhydrater": 5.2,
        "fett": 0.2,
        "fibrer": 0,
        "alkohol": 0.04
    },
    {
        "namn": "Älg färs rå",
        "livsmedelsnummer": 3323,
        "kolhydrater": 0,
        "fett": 1.59,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Älg ytterlår",
        "livsmedelsnummer": 3324,
        "kolhydrater": 1.5,
        "fett": 1.32,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Linfröolja",
        "livsmedelsnummer": 3433,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sill inlagd olika smaker",
        "livsmedelsnummer": 3500,
        "kolhydrater": 20,
        "fett": 14,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Quinoa röd kokt m. salt",
        "livsmedelsnummer": 3518,
        "kolhydrater": 21.7,
        "fett": 2.4,
        "fibrer": 6.7,
        "alkohol": 0
    },
    {
        "namn": "Bulgur kokt u. salt fullkorn",
        "livsmedelsnummer": 3564,
        "kolhydrater": 20.7,
        "fett": 0.6,
        "fibrer": 3.8,
        "alkohol": 0
    },
    {
        "namn": "Lamm färs stekt m. salt",
        "livsmedelsnummer": 3620,
        "kolhydrater": 0,
        "fett": 22.68,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Älg färs m. salt stekt",
        "livsmedelsnummer": 3621,
        "kolhydrater": 0,
        "fett": 1.94,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sojadryck berikad",
        "livsmedelsnummer": 3668,
        "kolhydrater": 3.2,
        "fett": 1.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Couscous kokt m. salt fullkorn",
        "livsmedelsnummer": 3752,
        "kolhydrater": 27,
        "fett": 0.9,
        "fibrer": 3.9,
        "alkohol": 0
    },
    {
        "namn": "Pasta kokt m. salt",
        "livsmedelsnummer": 3756,
        "kolhydrater": 27.5,
        "fett": 0.6,
        "fibrer": 2,
        "alkohol": 0
    },
    {
        "namn": "Vita bönor torkade kokta m. salt",
        "livsmedelsnummer": 3760,
        "kolhydrater": 11,
        "fett": 0.9,
        "fibrer": 12.5,
        "alkohol": 0
    },
    {
        "namn": "Stora vita bönor konserv. u. lag",
        "livsmedelsnummer": 3761,
        "kolhydrater": 14.6,
        "fett": 0.8,
        "fibrer": 6.8,
        "alkohol": 0
    },
    {
        "namn": "Kikärtor torkade kokta m. salt",
        "livsmedelsnummer": 3762,
        "kolhydrater": 12.6,
        "fett": 2.9,
        "fibrer": 12.3,
        "alkohol": 0
    },
    {
        "namn": "Sötpotatis rå",
        "livsmedelsnummer": 3765,
        "kolhydrater": 17,
        "fett": 0.3,
        "fibrer": 2.7,
        "alkohol": 0
    },
    {
        "namn": "Dinkelmjöl",
        "livsmedelsnummer": 3786,
        "kolhydrater": 63.5,
        "fett": 3.33,
        "fibrer": 9.1,
        "alkohol": 0
    },
    {
        "namn": "Bröd rågsikt fibrer ca 7%",
        "livsmedelsnummer": 3790,
        "kolhydrater": 41.8,
        "fett": 2.8,
        "fibrer": 5.4,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt fibrer ca 5% typ formfranska",
        "livsmedelsnummer": 3791,
        "kolhydrater": 41.9,
        "fett": 4.2,
        "fibrer": 5.1,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fibrer ca 14%",
        "livsmedelsnummer": 3793,
        "kolhydrater": 66.7,
        "fett": 1.7,
        "fibrer": 14.1,
        "alkohol": 0
    },
    {
        "namn": "Bröd fullkorn vete råg fibrer ca 6%",
        "livsmedelsnummer": 3794,
        "kolhydrater": 46.1,
        "fett": 2.2,
        "fibrer": 5.6,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt fibrer ca 5% typ limpa",
        "livsmedelsnummer": 3795,
        "kolhydrater": 46.6,
        "fett": 2,
        "fibrer": 6,
        "alkohol": 0
    },
    {
        "namn": "Bröd fullkorn råg fibrer ca 7%",
        "livsmedelsnummer": 3797,
        "kolhydrater": 38.3,
        "fett": 2.3,
        "fibrer": 6.5,
        "alkohol": 0
    },
    {
        "namn": "Korvbröd grovt",
        "livsmedelsnummer": 3798,
        "kolhydrater": 42.4,
        "fett": 4.9,
        "fibrer": 5.6,
        "alkohol": 0
    },
    {
        "namn": "Lax odlad Norge fjordlax rå över disk",
        "livsmedelsnummer": 3800,
        "kolhydrater": 0.7,
        "fett": 13.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kikärtor konserv. u. lag",
        "livsmedelsnummer": 3815,
        "kolhydrater": 15.7,
        "fett": 2.5,
        "fibrer": 6.2,
        "alkohol": 0
    },
    {
        "namn": "Kidneybönor röda bönor konserv. u. lag",
        "livsmedelsnummer": 3816,
        "kolhydrater": 13.4,
        "fett": 0.7,
        "fibrer": 7.2,
        "alkohol": 0
    },
    {
        "namn": "Svarta bönor konserv. u. lag",
        "livsmedelsnummer": 3817,
        "kolhydrater": 13.8,
        "fett": 1,
        "fibrer": 6.8,
        "alkohol": 0
    },
    {
        "namn": "Hamburgerbröd",
        "livsmedelsnummer": 3818,
        "kolhydrater": 51.15,
        "fett": 4.14,
        "fibrer": 4.19,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt mjölk fibrer ca 4% typ tekaka",
        "livsmedelsnummer": 3819,
        "kolhydrater": 51.15,
        "fett": 4.14,
        "fibrer": 4.19,
        "alkohol": 0
    },
    {
        "namn": "Bruna bönor rullpack kylvara",
        "livsmedelsnummer": 3820,
        "kolhydrater": 15,
        "fett": 0.5,
        "fibrer": 6.4,
        "alkohol": 0
    },
    {
        "namn": "Gröna linser torkade kokta m. salt",
        "livsmedelsnummer": 3821,
        "kolhydrater": 15.9,
        "fett": 0.7,
        "fibrer": 9.6,
        "alkohol": 0
    },
    {
        "namn": "Röda linser torkade kokta m. salt",
        "livsmedelsnummer": 3822,
        "kolhydrater": 14.6,
        "fett": 0.6,
        "fibrer": 9.1,
        "alkohol": 0
    },
    {
        "namn": "Röda linser konserv. u. lag",
        "livsmedelsnummer": 3823,
        "kolhydrater": 11.9,
        "fett": 0.5,
        "fibrer": 4.1,
        "alkohol": 0
    },
    {
        "namn": "Gröna linser konserv. u. lag",
        "livsmedelsnummer": 3824,
        "kolhydrater": 13.1,
        "fett": 0.6,
        "fibrer": 4.4,
        "alkohol": 0
    },
    {
        "namn": "Hamburgerbröd grovt",
        "livsmedelsnummer": 3825,
        "kolhydrater": 42.4,
        "fett": 4.9,
        "fibrer": 5.6,
        "alkohol": 0
    },
    {
        "namn": "Pasta kokt m. salt fullkorn>50%",
        "livsmedelsnummer": 3828,
        "kolhydrater": 29.9,
        "fett": 0.95,
        "fibrer": 3.7,
        "alkohol": 0
    },
    {
        "namn": "Ägg rått eko.",
        "livsmedelsnummer": 3840,
        "kolhydrater": 0.4,
        "fett": 10.12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Äggula rå eko.",
        "livsmedelsnummer": 3841,
        "kolhydrater": 0.6,
        "fett": 29.23,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Dinkel speltvete kokt m. salt",
        "livsmedelsnummer": 3845,
        "kolhydrater": 24.35,
        "fett": 1.28,
        "fibrer": 3.49,
        "alkohol": 0
    },
    {
        "namn": "Majskrokar MVU",
        "livsmedelsnummer": 4011,
        "kolhydrater": 81.7,
        "fett": 1.7,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Mâchesallat",
        "livsmedelsnummer": 4052,
        "kolhydrater": 0.8,
        "fett": 0.2,
        "fibrer": 1.8,
        "alkohol": 0
    },
    {
        "namn": "Hampfröolja",
        "livsmedelsnummer": 4074,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hushållsmargarin mjölkfri fett 80% berikad typ Milda",
        "livsmedelsnummer": 4095,
        "kolhydrater": 0,
        "fett": 80,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lättmargarin fett 40% berikad typ Coop",
        "livsmedelsnummer": 4105,
        "kolhydrater": 0.5,
        "fett": 40,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Bordsmargarin fett 60% berikad typ Ica Basic",
        "livsmedelsnummer": 4107,
        "kolhydrater": 0.5,
        "fett": 60,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hushållsmargarin fett 70% berikad typ X-tra",
        "livsmedelsnummer": 4109,
        "kolhydrater": 0.5,
        "fett": 70,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hushållsmargarin fett 80% berikad typ ICA",
        "livsmedelsnummer": 4112,
        "kolhydrater": 0.3,
        "fett": 80,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nudlar kokta m. kryddor",
        "livsmedelsnummer": 4117,
        "kolhydrater": 11.8,
        "fett": 4.33,
        "fibrer": 3.14,
        "alkohol": 0
    },
    {
        "namn": "Palmolja",
        "livsmedelsnummer": 4131,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ägg stekt eko.",
        "livsmedelsnummer": 4134,
        "kolhydrater": 0.44,
        "fett": 15.93,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ägg kokt eko.",
        "livsmedelsnummer": 4135,
        "kolhydrater": 0.4,
        "fett": 10.12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Färs stekt m. salt",
        "livsmedelsnummer": 4183,
        "kolhydrater": 0,
        "fett": 15.22,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Pangasiusmal rå",
        "livsmedelsnummer": 4226,
        "kolhydrater": 0,
        "fett": 1.13,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Potatis Solist rå",
        "livsmedelsnummer": 4385,
        "kolhydrater": 13.6,
        "fett": 0.1,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Potatis Swift rå",
        "livsmedelsnummer": 4386,
        "kolhydrater": 11,
        "fett": 0.1,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Potatis Solist kokt m. salt",
        "livsmedelsnummer": 4415,
        "kolhydrater": 16.4,
        "fett": 0.1,
        "fibrer": 1.9,
        "alkohol": 0
    },
    {
        "namn": "Potatis Swift kokt m. salt",
        "livsmedelsnummer": 4416,
        "kolhydrater": 12.5,
        "fett": 0.1,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Potatis Asterix rå",
        "livsmedelsnummer": 4445,
        "kolhydrater": 14.8,
        "fett": 0.1,
        "fibrer": 3.1,
        "alkohol": 0
    },
    {
        "namn": "Nudlar risnudlar okokta",
        "livsmedelsnummer": 4447,
        "kolhydrater": 83.24,
        "fett": 0.56,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Nudlar risnudlar kokta",
        "livsmedelsnummer": 4448,
        "kolhydrater": 24.9,
        "fett": 0.2,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Havtorn",
        "livsmedelsnummer": 4456,
        "kolhydrater": 6.3,
        "fett": 5,
        "fibrer": 6,
        "alkohol": 0
    },
    {
        "namn": "Potatis rå",
        "livsmedelsnummer": 4457,
        "kolhydrater": 16.4,
        "fett": 0.1,
        "fibrer": 2.09,
        "alkohol": 0
    },
    {
        "namn": "Potatis kokt m. salt",
        "livsmedelsnummer": 4458,
        "kolhydrater": 17.5,
        "fett": 0.1,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Grönkålssallad",
        "livsmedelsnummer": 4504,
        "kolhydrater": 11.16,
        "fett": 7.53,
        "fibrer": 2.8,
        "alkohol": 0
    },
    {
        "namn": "Kålrotslåda",
        "livsmedelsnummer": 4505,
        "kolhydrater": 9.1,
        "fett": 6.85,
        "fibrer": 3.02,
        "alkohol": 0
    },
    {
        "namn": "Potatis färsk kokt m. salt",
        "livsmedelsnummer": 4511,
        "kolhydrater": 14.8,
        "fett": 0.1,
        "fibrer": 1.98,
        "alkohol": 0
    },
    {
        "namn": "Potatis färsk rå",
        "livsmedelsnummer": 4512,
        "kolhydrater": 12.5,
        "fett": 0.1,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Potatis Inova rå",
        "livsmedelsnummer": 4513,
        "kolhydrater": 13.1,
        "fett": 0.1,
        "fibrer": 1.83,
        "alkohol": 0
    },
    {
        "namn": "Potatis King Edward rå",
        "livsmedelsnummer": 4514,
        "kolhydrater": 17.7,
        "fett": 0.1,
        "fibrer": 1.63,
        "alkohol": 0
    },
    {
        "namn": "Potatis mandelpotatis rå",
        "livsmedelsnummer": 4515,
        "kolhydrater": 18.1,
        "fett": 0.1,
        "fibrer": 2.73,
        "alkohol": 0
    },
    {
        "namn": "Potatis kokt m. salt tillagad i storkök",
        "livsmedelsnummer": 4516,
        "kolhydrater": 15.8,
        "fett": 0.1,
        "fibrer": 2.09,
        "alkohol": 0
    },
    {
        "namn": "Potatis Asterix kokt m. salt",
        "livsmedelsnummer": 4518,
        "kolhydrater": 16.8,
        "fett": 0.1,
        "fibrer": 2.3,
        "alkohol": 0
    },
    {
        "namn": "Potatis Inova kokt m. salt",
        "livsmedelsnummer": 4519,
        "kolhydrater": 15.4,
        "fett": 0.1,
        "fibrer": 2.17,
        "alkohol": 0
    },
    {
        "namn": "Potatis King Edward kokt m. salt",
        "livsmedelsnummer": 4520,
        "kolhydrater": 18,
        "fett": 0.1,
        "fibrer": 1.97,
        "alkohol": 0
    },
    {
        "namn": "Potatis mandelpotatis kokt m. salt",
        "livsmedelsnummer": 4521,
        "kolhydrater": 21.2,
        "fett": 0.1,
        "fibrer": 2.6,
        "alkohol": 0
    },
    {
        "namn": "Gratäng broccoligratäng m. keso tomat veg.",
        "livsmedelsnummer": 4579,
        "kolhydrater": 2.42,
        "fett": 4.84,
        "fibrer": 1.07,
        "alkohol": 0
    },
    {
        "namn": "Gris färs rå fett 15%",
        "livsmedelsnummer": 4583,
        "kolhydrater": 0,
        "fett": 15.06,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hoki rå",
        "livsmedelsnummer": 4586,
        "kolhydrater": 0,
        "fett": 0.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Aronia",
        "livsmedelsnummer": 4588,
        "kolhydrater": 8.3,
        "fett": 0.14,
        "fibrer": 5.6,
        "alkohol": 0
    },
    {
        "namn": "Vinbär vita",
        "livsmedelsnummer": 4589,
        "kolhydrater": 9.5,
        "fett": 0.2,
        "fibrer": 4.3,
        "alkohol": 0
    },
    {
        "namn": "Ris rundkornigt kokt m. salt",
        "livsmedelsnummer": 4591,
        "kolhydrater": 28.62,
        "fett": 0.29,
        "fibrer": 0.39,
        "alkohol": 0
    },
    {
        "namn": "Pilgrimsmussla",
        "livsmedelsnummer": 4600,
        "kolhydrater": 0,
        "fett": 0.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Laxbullar tillagade m. sås",
        "livsmedelsnummer": 4601,
        "kolhydrater": 7.2,
        "fett": 7.22,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Fiskpinnar ugnsstekta",
        "livsmedelsnummer": 4602,
        "kolhydrater": 19,
        "fett": 9.06,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Skarpsill",
        "livsmedelsnummer": 4607,
        "kolhydrater": 0,
        "fett": 9.05,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sill inlagd u. lag",
        "livsmedelsnummer": 4608,
        "kolhydrater": 21.9,
        "fett": 11.99,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sill höstsill inlagd u. lag",
        "livsmedelsnummer": 4609,
        "kolhydrater": 23.1,
        "fett": 11.97,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sill inlagd senapssill u. sås",
        "livsmedelsnummer": 4610,
        "kolhydrater": 15.2,
        "fett": 17.83,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kapkummel rå",
        "livsmedelsnummer": 4611,
        "kolhydrater": 0,
        "fett": 0.64,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Guldsparid rå",
        "livsmedelsnummer": 4612,
        "kolhydrater": 0,
        "fett": 11.36,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Havsabborre rå",
        "livsmedelsnummer": 4613,
        "kolhydrater": 0,
        "fett": 6.17,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Alaska pollock rå",
        "livsmedelsnummer": 4615,
        "kolhydrater": 0,
        "fett": 0.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Guldsparid grillad m. salt",
        "livsmedelsnummer": 4616,
        "kolhydrater": 0,
        "fett": 12.28,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Havsabborre grillad m. salt",
        "livsmedelsnummer": 4617,
        "kolhydrater": 0,
        "fett": 6.71,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Olivolja extra jungfruolja",
        "livsmedelsnummer": 4659,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rapsolja kallpressad",
        "livsmedelsnummer": 4661,
        "kolhydrater": 0,
        "fett": 100,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Flytande matfettsblandning fett 80% typ Arla smör- och rapsolja",
        "livsmedelsnummer": 4662,
        "kolhydrater": 0.3,
        "fett": 80,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Matfettsblandning fett 43% typ Bregott mindre",
        "livsmedelsnummer": 4663,
        "kolhydrater": 5,
        "fett": 43,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Pastasås m. tonfisk curry",
        "livsmedelsnummer": 4736,
        "kolhydrater": 3.51,
        "fett": 3.63,
        "fibrer": 1.01,
        "alkohol": 0
    },
    {
        "namn": "Tomat körsbärstomat röd",
        "livsmedelsnummer": 4937,
        "kolhydrater": 4.4,
        "fett": 0.13,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Tomat torkad m. olja avrunnen",
        "livsmedelsnummer": 4938,
        "kolhydrater": 23.3,
        "fett": 1.5,
        "fibrer": 11,
        "alkohol": 0
    },
    {
        "namn": "Broccoli kokt u. salt frysvara",
        "livsmedelsnummer": 4939,
        "kolhydrater": 2,
        "fett": 0.3,
        "fibrer": 2.72,
        "alkohol": 0
    },
    {
        "namn": "Spenat färsk",
        "livsmedelsnummer": 4941,
        "kolhydrater": 0.8,
        "fett": 0.39,
        "fibrer": 2.07,
        "alkohol": 0
    },
    {
        "namn": "Mangold röd småbladig färsk",
        "livsmedelsnummer": 4942,
        "kolhydrater": 0,
        "fett": 0.5,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Kruksallat",
        "livsmedelsnummer": 4946,
        "kolhydrater": 0,
        "fett": 0.2,
        "fibrer": 1.65,
        "alkohol": 0
    },
    {
        "namn": "Lök röd",
        "livsmedelsnummer": 4947,
        "kolhydrater": 9,
        "fett": 0.1,
        "fibrer": 1.98,
        "alkohol": 0
    },
    {
        "namn": "Kantarell gul rå",
        "livsmedelsnummer": 5007,
        "kolhydrater": 2.02,
        "fett": 0.33,
        "fibrer": 3.22,
        "alkohol": 0
    },
    {
        "namn": "Hjort kronhjort kött rå",
        "livsmedelsnummer": 5043,
        "kolhydrater": 0,
        "fett": 2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hjort dovhjort färs rå",
        "livsmedelsnummer": 5044,
        "kolhydrater": 0,
        "fett": 5.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ren kött kallrökt rå",
        "livsmedelsnummer": 5045,
        "kolhydrater": 0.5,
        "fett": 2.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Hjort skav rå",
        "livsmedelsnummer": 5046,
        "kolhydrater": 0,
        "fett": 6.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv hjort rå",
        "livsmedelsnummer": 5047,
        "kolhydrater": 1.42,
        "fett": 17.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vildsvin bog rå",
        "livsmedelsnummer": 5048,
        "kolhydrater": 0,
        "fett": 1.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vildsvin filé rå",
        "livsmedelsnummer": 5049,
        "kolhydrater": 0,
        "fett": 1.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rådjur stek rå",
        "livsmedelsnummer": 5050,
        "kolhydrater": 0,
        "fett": 1.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vildsvin stek rå",
        "livsmedelsnummer": 5058,
        "kolhydrater": 0,
        "fett": 1.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv kycklingkorv",
        "livsmedelsnummer": 5059,
        "kolhydrater": 9.6,
        "fett": 13.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vildsvin kött rå",
        "livsmedelsnummer": 5060,
        "kolhydrater": 0,
        "fett": 1.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Rådjur bog rå",
        "livsmedelsnummer": 5064,
        "kolhydrater": 0,
        "fett": 1.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ren kött rå",
        "livsmedelsnummer": 5065,
        "kolhydrater": 0,
        "fett": 1.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt kött rå",
        "livsmedelsnummer": 5066,
        "kolhydrater": 0,
        "fett": 4.22,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm kött rå",
        "livsmedelsnummer": 5067,
        "kolhydrater": 0,
        "fett": 9.39,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lamm grytbitar rå",
        "livsmedelsnummer": 5068,
        "kolhydrater": 0,
        "fett": 5.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Bordsmargarin fett 80% berikad typ Flora original",
        "livsmedelsnummer": 5085,
        "kolhydrater": 0,
        "fett": 80,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Flytande matfettsblandning fett 80% berikad typ Ica raps- och smörolja",
        "livsmedelsnummer": 5087,
        "kolhydrater": 0.3,
        "fett": 80,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Potatis höst kokt u. salt",
        "livsmedelsnummer": 5136,
        "kolhydrater": 17.81,
        "fett": 0.1,
        "fibrer": 2.12,
        "alkohol": 0
    },
    {
        "namn": "Julmust påskmust",
        "livsmedelsnummer": 5147,
        "kolhydrater": 8.3,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Slush drickf.",
        "livsmedelsnummer": 5149,
        "kolhydrater": 10.2,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Mandeldryck berikad",
        "livsmedelsnummer": 5150,
        "kolhydrater": 3.5,
        "fett": 1.3,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Alkoläsk kolsyrad dryck vol. % 4-5",
        "livsmedelsnummer": 5152,
        "kolhydrater": 5.9,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 4.05
    },
    {
        "namn": "Potatis kokt u. salt",
        "livsmedelsnummer": 5153,
        "kolhydrater": 17.5,
        "fett": 0.1,
        "fibrer": 2.1,
        "alkohol": 0
    },
    {
        "namn": "Lasagne m. svarta bönor veg. ",
        "livsmedelsnummer": 5155,
        "kolhydrater": 7.47,
        "fett": 9.64,
        "fibrer": 1.64,
        "alkohol": 0
    },
    {
        "namn": "Tranbärsdryck drickf.",
        "livsmedelsnummer": 5184,
        "kolhydrater": 9.4,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Barngröt fr. 6 mån eko. hirs m. äpple päron",
        "livsmedelsnummer": 5186,
        "kolhydrater": 18.83,
        "fett": 3.16,
        "fibrer": 0.46,
        "alkohol": 0
    },
    {
        "namn": "Barngröt fr. 12 mån flerkorn m. äpple päron berikad typ Semper",
        "livsmedelsnummer": 5188,
        "kolhydrater": 12.21,
        "fett": 4.2,
        "fibrer": 1.75,
        "alkohol": 0
    },
    {
        "namn": "Barngröt fr. 8 mån fullkorn m. frukt bär berikad typ Semper",
        "livsmedelsnummer": 5189,
        "kolhydrater": 12.39,
        "fett": 4.11,
        "fibrer": 1.41,
        "alkohol": 0
    },
    {
        "namn": "Barngröt fr. 6 mån m. äpple banan berikad typ Semper",
        "livsmedelsnummer": 5190,
        "kolhydrater": 13.13,
        "fett": 3.99,
        "fibrer": 1.29,
        "alkohol": 0
    },
    {
        "namn": "Barngröt ris mjölkfri berikad typ Sinlac",
        "livsmedelsnummer": 5191,
        "kolhydrater": 14.62,
        "fett": 2.21,
        "fibrer": 0.65,
        "alkohol": 0
    },
    {
        "namn": "Barngröt fr. 12 mån fullkorn m. exotiska frukter müsli berikad typ Nestlé",
        "livsmedelsnummer": 5192,
        "kolhydrater": 9.97,
        "fett": 1.53,
        "fibrer": 0.65,
        "alkohol": 0
    },
    {
        "namn": "Barngröt fr. 8 mån m. yoghurt päron banan berikad typ Nestlé",
        "livsmedelsnummer": 5193,
        "kolhydrater": 13.38,
        "fett": 2.15,
        "fibrer": 0.92,
        "alkohol": 0
    },
    {
        "namn": "Barngröt fr. 8 mån havre m. banan mango berikad typ Nestlé",
        "livsmedelsnummer": 5194,
        "kolhydrater": 11.28,
        "fett": 1.92,
        "fibrer": 0.93,
        "alkohol": 0
    },
    {
        "namn": "Barngröt fr. 6 mån havre berikad typ God natt",
        "livsmedelsnummer": 5195,
        "kolhydrater": 13.32,
        "fett": 2.63,
        "fibrer": 1.15,
        "alkohol": 0
    },
    {
        "namn": "Barngröt fr. 6 mån havre m. banan hallon berikad typ Nestlé",
        "livsmedelsnummer": 5196,
        "kolhydrater": 13.34,
        "fett": 2.22,
        "fibrer": 1.11,
        "alkohol": 0
    },
    {
        "namn": "Pepparsås",
        "livsmedelsnummer": 5218,
        "kolhydrater": 6.07,
        "fett": 21.42,
        "fibrer": 0.58,
        "alkohol": 0
    },
    {
        "namn": "Saffransris",
        "livsmedelsnummer": 5305,
        "kolhydrater": 21.88,
        "fett": 1.96,
        "fibrer": 0.34,
        "alkohol": 0
    },
    {
        "namn": "Gris kött rå",
        "livsmedelsnummer": 5447,
        "kolhydrater": 0,
        "fett": 8.67,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gratäng zucchinigratäng m. kalvfärs",
        "livsmedelsnummer": 5452,
        "kolhydrater": 3.15,
        "fett": 8.77,
        "fibrer": 1.37,
        "alkohol": 0
    },
    {
        "namn": "Pastagratäng m. kyckling",
        "livsmedelsnummer": 5665,
        "kolhydrater": 8.98,
        "fett": 11.88,
        "fibrer": 1.05,
        "alkohol": 0
    },
    {
        "namn": "Minimjölk fett < 0,1% berikad",
        "livsmedelsnummer": 5727,
        "kolhydrater": 4.9,
        "fett": 0.05,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Örtagårdssås m. gräddfil",
        "livsmedelsnummer": 5753,
        "kolhydrater": 4.9,
        "fett": 28.66,
        "fibrer": 0.53,
        "alkohol": 0
    },
    {
        "namn": "Köttfärssås Bolognese m. nötfärs bacon",
        "livsmedelsnummer": 5756,
        "kolhydrater": 3.08,
        "fett": 7.02,
        "fibrer": 0.89,
        "alkohol": 0.33
    },
    {
        "namn": "Aioli",
        "livsmedelsnummer": 5758,
        "kolhydrater": 1.35,
        "fett": 85.14,
        "fibrer": 0.12,
        "alkohol": 0
    },
    {
        "namn": "Guacamole",
        "livsmedelsnummer": 5759,
        "kolhydrater": 2.62,
        "fett": 13.11,
        "fibrer": 3.5,
        "alkohol": 0
    },
    {
        "namn": "Pasta carbonara m. pasta fläsk grädde",
        "livsmedelsnummer": 5804,
        "kolhydrater": 19.3,
        "fett": 8.12,
        "fibrer": 1.37,
        "alkohol": 0
    },
    {
        "namn": "Mandeldryck",
        "livsmedelsnummer": 5828,
        "kolhydrater": 3.5,
        "fett": 1.3,
        "fibrer": 0.2,
        "alkohol": 0
    },
    {
        "namn": "Fisk m. apelsin chili ugnsstekt",
        "livsmedelsnummer": 5837,
        "kolhydrater": 3.66,
        "fett": 12.88,
        "fibrer": 0.09,
        "alkohol": 0
    },
    {
        "namn": "Pulled pork gris m. marinad tillagad",
        "livsmedelsnummer": 5847,
        "kolhydrater": 5.3,
        "fett": 8.3,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Tropisk juice drickf.",
        "livsmedelsnummer": 5859,
        "kolhydrater": 10.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sojabönor färska förvällda u. skal",
        "livsmedelsnummer": 5860,
        "kolhydrater": 4.9,
        "fett": 6.4,
        "fibrer": 5.1,
        "alkohol": 0
    },
    {
        "namn": "Sparris grön kokt m. salt",
        "livsmedelsnummer": 5861,
        "kolhydrater": 1.8,
        "fett": 0.2,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Kålrot kokt",
        "livsmedelsnummer": 5862,
        "kolhydrater": 5,
        "fett": 0.06,
        "fibrer": 3.9,
        "alkohol": 0
    },
    {
        "namn": "Brysselkål kokt",
        "livsmedelsnummer": 5863,
        "kolhydrater": 5.5,
        "fett": 0,
        "fibrer": 4.3,
        "alkohol": 0
    },
    {
        "namn": "Rotselleri kokt",
        "livsmedelsnummer": 5864,
        "kolhydrater": 2.7,
        "fett": 0.5,
        "fibrer": 2.9,
        "alkohol": 0
    },
    {
        "namn": "Gula ärtor kokta m. salt",
        "livsmedelsnummer": 5865,
        "kolhydrater": 16.4,
        "fett": 0.6,
        "fibrer": 11.2,
        "alkohol": 0
    },
    {
        "namn": "Bruna bönor kokta m. salt",
        "livsmedelsnummer": 5866,
        "kolhydrater": 16.8,
        "fett": 0.9,
        "fibrer": 13.2,
        "alkohol": 0
    },
    {
        "namn": "Gråärtor kokta m. salt",
        "livsmedelsnummer": 5867,
        "kolhydrater": 16.6,
        "fett": 0.5,
        "fibrer": 8.6,
        "alkohol": 0
    },
    {
        "namn": "Åkerbönor kokta m. salt",
        "livsmedelsnummer": 5868,
        "kolhydrater": 18.4,
        "fett": 0.5,
        "fibrer": 7.1,
        "alkohol": 0
    },
    {
        "namn": "Äpple Aroma rött",
        "livsmedelsnummer": 5869,
        "kolhydrater": 10.2,
        "fett": 0.05,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Äpple Ingrid Marie rött",
        "livsmedelsnummer": 5870,
        "kolhydrater": 11,
        "fett": 0.05,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Äpple Frida",
        "livsmedelsnummer": 5871,
        "kolhydrater": 12.6,
        "fett": 0.05,
        "fibrer": 2.2,
        "alkohol": 0
    },
    {
        "namn": "Äpple Golden delicious Granny Smith grönt",
        "livsmedelsnummer": 5872,
        "kolhydrater": 9.4,
        "fett": 0.05,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Kyckling pulled chicken tillagad m. marinad",
        "livsmedelsnummer": 5875,
        "kolhydrater": 0.9,
        "fett": 5.4,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Tacosås",
        "livsmedelsnummer": 5916,
        "kolhydrater": 7,
        "fett": 0.05,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Hälleflundra odlad Atlanten rå",
        "livsmedelsnummer": 5926,
        "kolhydrater": 0,
        "fett": 2.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korngryn kokt u. salt",
        "livsmedelsnummer": 5935,
        "kolhydrater": 25.75,
        "fett": 1.22,
        "fibrer": 4.21,
        "alkohol": 0
    },
    {
        "namn": "Torsk odlad rå",
        "livsmedelsnummer": 5936,
        "kolhydrater": 0,
        "fett": 0.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Julmust light",
        "livsmedelsnummer": 5942,
        "kolhydrater": 0,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Havregurt naturell berikad",
        "livsmedelsnummer": 5956,
        "kolhydrater": 10.9,
        "fett": 2,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Fraiche m. havre veg. fett 15%",
        "livsmedelsnummer": 5957,
        "kolhydrater": 3,
        "fett": 15,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Havrebaserat bredbart pålägg",
        "livsmedelsnummer": 5961,
        "kolhydrater": 11.2,
        "fett": 20,
        "fibrer": 0.5,
        "alkohol": 0
    },
    {
        "namn": "Havregurt smaksatt bägare berikad",
        "livsmedelsnummer": 5962,
        "kolhydrater": 15,
        "fett": 3,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Havredryck m. apelsin mango",
        "livsmedelsnummer": 5963,
        "kolhydrater": 9.8,
        "fett": 0.6,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Havredryck",
        "livsmedelsnummer": 5964,
        "kolhydrater": 7.6,
        "fett": 0.5,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Korv grillkorv grillad kött 32-35%",
        "livsmedelsnummer": 5965,
        "kolhydrater": 12.8,
        "fett": 16.3,
        "fibrer": 1.1,
        "alkohol": 0
    },
    {
        "namn": "Korv falukorv tillagad kött 58%",
        "livsmedelsnummer": 5966,
        "kolhydrater": 5.4,
        "fett": 23.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv bratwurst tillagad kryddig kött 73-75%",
        "livsmedelsnummer": 5967,
        "kolhydrater": 4.5,
        "fett": 22.7,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Blodpudding blodkorv tillagad",
        "livsmedelsnummer": 5968,
        "kolhydrater": 23,
        "fett": 9.4,
        "fibrer": 3.2,
        "alkohol": 0
    },
    {
        "namn": "Gris sidfläsk el. stekfläsk rimmat stekt",
        "livsmedelsnummer": 5969,
        "kolhydrater": 0.1,
        "fett": 38.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv kabanoss tillagad kryddig kött 90%",
        "livsmedelsnummer": 5970,
        "kolhydrater": 1.4,
        "fett": 24.8,
        "fibrer": 0.8,
        "alkohol": 0
    },
    {
        "namn": "Kryddblandning taco",
        "livsmedelsnummer": 5973,
        "kolhydrater": 72.6,
        "fett": 3.55,
        "fibrer": 12.2,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt vetetortilla",
        "livsmedelsnummer": 5974,
        "kolhydrater": 57.5,
        "fett": 4.8,
        "fibrer": 1.75,
        "alkohol": 0
    },
    {
        "namn": "Gris färs tillagad u. salt",
        "livsmedelsnummer": 5978,
        "kolhydrater": 0,
        "fett": 19.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris skinka innanlår tillagad",
        "livsmedelsnummer": 5999,
        "kolhydrater": 0,
        "fett": 3.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris skinkstek tillagad u. salt",
        "livsmedelsnummer": 6002,
        "kolhydrater": 0,
        "fett": 5.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris ytterfilé tillagad",
        "livsmedelsnummer": 6003,
        "kolhydrater": 0,
        "fett": 5.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskkotlett tillagad",
        "livsmedelsnummer": 6004,
        "kolhydrater": 0,
        "fett": 6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris fläskfilé tillagad",
        "livsmedelsnummer": 6005,
        "kolhydrater": 0,
        "fett": 4.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Nöt kalv lever tillagad",
        "livsmedelsnummer": 6006,
        "kolhydrater": 9.3,
        "fett": 3.5,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling lever ugnsstekt",
        "livsmedelsnummer": 6007,
        "kolhydrater": 4.5,
        "fett": 4.6,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Gris lever tillagad",
        "livsmedelsnummer": 6008,
        "kolhydrater": 6,
        "fett": 3.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kalkon rökt tunna skivor",
        "livsmedelsnummer": 6009,
        "kolhydrater": 1.1,
        "fett": 2.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Korv veg. soja- och veteprotein tillagad typ falukorv",
        "livsmedelsnummer": 6010,
        "kolhydrater": 14.1,
        "fett": 15.3,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Gratäng m. korv rotfrukt",
        "livsmedelsnummer": 6038,
        "kolhydrater": 9.08,
        "fett": 14.64,
        "fibrer": 1.39,
        "alkohol": 0
    },
    {
        "namn": "Pastasås m. lax crème fraiche grädde dill",
        "livsmedelsnummer": 6052,
        "kolhydrater": 3.1,
        "fett": 23.35,
        "fibrer": 0.25,
        "alkohol": 0
    },
    {
        "namn": "Cashewnötter rostade m. salt",
        "livsmedelsnummer": 6053,
        "kolhydrater": 19.2,
        "fett": 48.67,
        "fibrer": 8.3,
        "alkohol": 0
    },
    {
        "namn": "Gris kassler tillagad",
        "livsmedelsnummer": 6057,
        "kolhydrater": 0,
        "fett": 8.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kyckling bröstfilé tillagad u. skinn frysvara",
        "livsmedelsnummer": 6058,
        "kolhydrater": 0,
        "fett": 2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Drickyoghurt smaksatt fett ca 1%",
        "livsmedelsnummer": 6069,
        "kolhydrater": 10.1,
        "fett": 0.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Ost hårdost eko. fett 28%",
        "livsmedelsnummer": 6070,
        "kolhydrater": 2.7,
        "fett": 27,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Vaniljsås ätf.",
        "livsmedelsnummer": 6071,
        "kolhydrater": 15.3,
        "fett": 3.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Yoghurt sommar eko. naturell fett 3%",
        "livsmedelsnummer": 6076,
        "kolhydrater": 4.7,
        "fett": 2.7,
        "fibrer": 0,
        "alkohol": 0.03
    },
    {
        "namn": "Pannkaka tunn helfabrikat",
        "livsmedelsnummer": 6079,
        "kolhydrater": 25.9,
        "fett": 5.8,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Hårt bröd fullkorn råg fiber ca 20% typ sport ",
        "livsmedelsnummer": 6081,
        "kolhydrater": 64,
        "fett": 3.31,
        "fibrer": 14.43,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt grovt m. nyckelhål typ formfranska",
        "livsmedelsnummer": 6083,
        "kolhydrater": 43.8,
        "fett": 4.17,
        "fibrer": 5.38,
        "alkohol": 0
    },
    {
        "namn": "Bröd vitt typ levain",
        "livsmedelsnummer": 6084,
        "kolhydrater": 49.5,
        "fett": 1.45,
        "fibrer": 2.52,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor müsli vete havre råg korn fullkorn m. frukt nötter fröer",
        "livsmedelsnummer": 6086,
        "kolhydrater": 47.2,
        "fett": 20.11,
        "fibrer": 7,
        "alkohol": 0
    },
    {
        "namn": "Mandelmjöl",
        "livsmedelsnummer": 6087,
        "kolhydrater": 7.4,
        "fett": 53.1,
        "fibrer": 9.8,
        "alkohol": 0
    },
    {
        "namn": "Filmjölk sommar eko. fett 3%",
        "livsmedelsnummer": 6088,
        "kolhydrater": 4.5,
        "fett": 2.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kvarg drickf. olika smaker",
        "livsmedelsnummer": 6089,
        "kolhydrater": 4.6,
        "fett": 0.2,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kvarg smaksatt sötningsm.",
        "livsmedelsnummer": 6090,
        "kolhydrater": 5.2,
        "fett": 0.2,
        "fibrer": 0,
        "alkohol": 0.01
    },
    {
        "namn": "Kvarg smaksatt sockrad",
        "livsmedelsnummer": 6091,
        "kolhydrater": 5.2,
        "fett": 0.2,
        "fibrer": 0,
        "alkohol": 0.03
    },
    {
        "namn": "Drickyoghurt smaksatt fett ca 1% socker ca 8%",
        "livsmedelsnummer": 6092,
        "kolhydrater": 10.1,
        "fett": 0.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Drickyoghurt smaksatt fett ca 1% socker ca 11%",
        "livsmedelsnummer": 6093,
        "kolhydrater": 10.1,
        "fett": 0.8,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Frukostflingor fullkorn berikad typ Specialflingor",
        "livsmedelsnummer": 6110,
        "kolhydrater": 78.7,
        "fett": 2.17,
        "fibrer": 3.7,
        "alkohol": 0
    },
    {
        "namn": "Yoghurt naturell fett 10%",
        "livsmedelsnummer": 6113,
        "kolhydrater": 5.2,
        "fett": 8.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Pizza m. köttfärs frysvara",
        "livsmedelsnummer": 6120,
        "kolhydrater": 27.7,
        "fett": 6.6,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Pizza m. köttstek frysvara",
        "livsmedelsnummer": 6121,
        "kolhydrater": 28.2,
        "fett": 5.3,
        "fibrer": 2.8,
        "alkohol": 0
    },
    {
        "namn": "Pizza m. tomat mozzarella veg. frysvara",
        "livsmedelsnummer": 6122,
        "kolhydrater": 26.8,
        "fett": 12.5,
        "fibrer": 2.7,
        "alkohol": 0
    },
    {
        "namn": "Noni fruktpuré",
        "livsmedelsnummer": 6131,
        "kolhydrater": 7.21,
        "fett": 0.1,
        "fibrer": 2.01,
        "alkohol": 0
    },
    {
        "namn": "Fisk Bordelaise",
        "livsmedelsnummer": 6132,
        "kolhydrater": 5.26,
        "fett": 3.8,
        "fibrer": 0.19,
        "alkohol": 0
    },
    {
        "namn": "Ostkräm",
        "livsmedelsnummer": 6133,
        "kolhydrater": 1.31,
        "fett": 65.14,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Äppeljuice konc.",
        "livsmedelsnummer": 6134,
        "kolhydrater": 48.5,
        "fett": 0,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Matvete kokt m. salt",
        "livsmedelsnummer": 6145,
        "kolhydrater": 33.5,
        "fett": 0.71,
        "fibrer": 9.33,
        "alkohol": 0
    },
    {
        "namn": "Mathavre kokt m. salt",
        "livsmedelsnummer": 6146,
        "kolhydrater": 33.1,
        "fett": 3.01,
        "fibrer": 7.76,
        "alkohol": 0
    },
    {
        "namn": "Psylliumfröskal",
        "livsmedelsnummer": 6154,
        "kolhydrater": 10,
        "fett": 0.5,
        "fibrer": 78.1,
        "alkohol": 0
    },
    {
        "namn": "Chiafrö",
        "livsmedelsnummer": 6157,
        "kolhydrater": 0,
        "fett": 33.9,
        "fibrer": 36.33,
        "alkohol": 0
    },
    {
        "namn": "Hampafrö m. skal",
        "livsmedelsnummer": 6158,
        "kolhydrater": 0,
        "fett": 32.9,
        "fibrer": 35.04,
        "alkohol": 0
    },
    {
        "namn": "Hampafrö u. skal",
        "livsmedelsnummer": 6159,
        "kolhydrater": 2.6,
        "fett": 53.6,
        "fibrer": 5.4,
        "alkohol": 0
    },
    {
        "namn": "Vallmofrö",
        "livsmedelsnummer": 6160,
        "kolhydrater": 4.8,
        "fett": 45.9,
        "fibrer": 18.96,
        "alkohol": 0
    },
    {
        "namn": "Senap sötstark",
        "livsmedelsnummer": 6164,
        "kolhydrater": 48.9,
        "fett": 6.44,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kokosolja",
        "livsmedelsnummer": 6165,
        "kolhydrater": 0.7,
        "fett": 99.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Majonnäs m. sojabönolja fett 80%",
        "livsmedelsnummer": 6166,
        "kolhydrater": 2.7,
        "fett": 74.7,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Majonnäs m. solrosolja fett 80%",
        "livsmedelsnummer": 6167,
        "kolhydrater": 7.1,
        "fett": 70.3,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Kräfta kräftstjärtar konserv. u. lag",
        "livsmedelsnummer": 6168,
        "kolhydrater": 0.8,
        "fett": 0.44,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Sikrom Nordamerikansk",
        "livsmedelsnummer": 6169,
        "kolhydrater": 5.7,
        "fett": 9.12,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Påläggskaviar m. färskost",
        "livsmedelsnummer": 6170,
        "kolhydrater": 13.8,
        "fett": 23,
        "fibrer": 2.32,
        "alkohol": 0
    },
    {
        "namn": "Tångkaviar röd",
        "livsmedelsnummer": 6171,
        "kolhydrater": 0.4,
        "fett": 0.15,
        "fibrer": 2.9,
        "alkohol": 0
    },
    {
        "namn": "Tångkaviar påläggskaviar",
        "livsmedelsnummer": 6172,
        "kolhydrater": 16.4,
        "fett": 25.8,
        "fibrer": 0.69,
        "alkohol": 0
    },
    {
        "namn": "Lax vildfångad Sverige rå",
        "livsmedelsnummer": 6173,
        "kolhydrater": 1.1,
        "fett": 10.4,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lax odlad Norge fjordlax rå frysvara",
        "livsmedelsnummer": 6174,
        "kolhydrater": 1.2,
        "fett": 15.1,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Lax odlad Norge fjordlax rå förpackad",
        "livsmedelsnummer": 6225,
        "kolhydrater": 0.3,
        "fett": 13.9,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Äggstanning",
        "livsmedelsnummer": 6314,
        "kolhydrater": 3.37,
        "fett": 5.08,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Jams kokt u. salt",
        "livsmedelsnummer": 6330,
        "kolhydrater": 27.4,
        "fett": 0.2,
        "fibrer": 2.3,
        "alkohol": 0
    },
    {
        "namn": "Vindruvor gröna",
        "livsmedelsnummer": 6333,
        "kolhydrater": 14.7,
        "fett": 0.2,
        "fibrer": 1.2,
        "alkohol": 0
    },
    {
        "namn": "Vindruvor röda",
        "livsmedelsnummer": 6334,
        "kolhydrater": 16.4,
        "fett": 0.1,
        "fibrer": 1.3,
        "alkohol": 0
    },
    {
        "namn": "Dressing hamburgerdressing lätt fett 28 %",
        "livsmedelsnummer": 6336,
        "kolhydrater": 6.96,
        "fett": 27.2,
        "fibrer": 0.15,
        "alkohol": 0
    },
    {
        "namn": "Majonnäs äggfri",
        "livsmedelsnummer": 6337,
        "kolhydrater": 0.65,
        "fett": 54.32,
        "fibrer": 0.05,
        "alkohol": 0
    },
    {
        "namn": "Sås mango curry m. majonnäs kylvara",
        "livsmedelsnummer": 6338,
        "kolhydrater": 13.52,
        "fett": 54.41,
        "fibrer": 0.11,
        "alkohol": 0
    },
    {
        "namn": "Ostsås m. kalkon",
        "livsmedelsnummer": 6341,
        "kolhydrater": 6.02,
        "fett": 8.91,
        "fibrer": 0.1,
        "alkohol": 0
    },
    {
        "namn": "Lasagne m. zucchini aubergine nötfärs",
        "livsmedelsnummer": 6342,
        "kolhydrater": 2.84,
        "fett": 6.57,
        "fibrer": 1.57,
        "alkohol": 0
    },
    {
        "namn": "Karlssons frestelse m. nötfärs",
        "livsmedelsnummer": 6345,
        "kolhydrater": 11.49,
        "fett": 7.24,
        "fibrer": 1.49,
        "alkohol": 0
    },
    {
        "namn": "Skinkfrestelse m. grädde",
        "livsmedelsnummer": 6348,
        "kolhydrater": 10.56,
        "fett": 13.46,
        "fibrer": 1.25,
        "alkohol": 0
    },
    {
        "namn": "Lök stekt m. flytande matfett",
        "livsmedelsnummer": 6349,
        "kolhydrater": 8.33,
        "fett": 1.15,
        "fibrer": 2.15,
        "alkohol": 0
    },
    {
        "namn": "Tzatziki m. morot",
        "livsmedelsnummer": 6352,
        "kolhydrater": 5.99,
        "fett": 5.42,
        "fibrer": 1.36,
        "alkohol": 0
    },
    {
        "namn": "Mango currysås hemlagad",
        "livsmedelsnummer": 6353,
        "kolhydrater": 8.82,
        "fett": 10.2,
        "fibrer": 0.77,
        "alkohol": 0
    },
    {
        "namn": "Kycklingpanna m. citron örter crème fraiche",
        "livsmedelsnummer": 6355,
        "kolhydrater": 4,
        "fett": 8.16,
        "fibrer": 0.07,
        "alkohol": 0
    },
    {
        "namn": "Cowboysoppa m. potatis köttfärs",
        "livsmedelsnummer": 6356,
        "kolhydrater": 6.69,
        "fett": 6.46,
        "fibrer": 0.85,
        "alkohol": 0
    },
    {
        "namn": "Fransk bondsoppa m. fläsk rotfrukter",
        "livsmedelsnummer": 6357,
        "kolhydrater": 6.15,
        "fett": 2.32,
        "fibrer": 1.9,
        "alkohol": 0
    },
    {
        "namn": "Kycklingpanna m. lime honung crème fraiche",
        "livsmedelsnummer": 6358,
        "kolhydrater": 3.8,
        "fett": 13.28,
        "fibrer": 0.02,
        "alkohol": 0
    },
    {
        "namn": "Hedvigsoppa m. vitkål nötfärs morot",
        "livsmedelsnummer": 6359,
        "kolhydrater": 2.75,
        "fett": 2.71,
        "fibrer": 1.13,
        "alkohol": 0
    },
    {
        "namn": "Nikkaluoktasoppa m. vitkål nötfärs",
        "livsmedelsnummer": 6360,
        "kolhydrater": 1.53,
        "fett": 3.82,
        "fibrer": 0.38,
        "alkohol": 0
    },
    {
        "namn": "Mexicanasoppa m. kyckling majs",
        "livsmedelsnummer": 6361,
        "kolhydrater": 6.51,
        "fett": 0.47,
        "fibrer": 0.81,
        "alkohol": 0
    },
    {
        "namn": "Kycklingpanna m. oliv basilika citron grädde",
        "livsmedelsnummer": 6362,
        "kolhydrater": 1.92,
        "fett": 11.03,
        "fibrer": 0.27,
        "alkohol": 0
    },
    {
        "namn": "Färsruta m. fetaost ugnsstekt",
        "livsmedelsnummer": 6364,
        "kolhydrater": 1.52,
        "fett": 14.46,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Fisk cornflakesfisk panerad ugnsstekt",
        "livsmedelsnummer": 6366,
        "kolhydrater": 7.03,
        "fett": 6.52,
        "fibrer": 0.34,
        "alkohol": 0
    },
    {
        "namn": "Gryta fiskgryta m. torsk kokosmjölk curry",
        "livsmedelsnummer": 6367,
        "kolhydrater": 3.7,
        "fett": 13.33,
        "fibrer": 1.43,
        "alkohol": 0
    },
    {
        "namn": "Rödbetshummus",
        "livsmedelsnummer": 6368,
        "kolhydrater": 9.77,
        "fett": 11.8,
        "fibrer": 6.38,
        "alkohol": 0
    },
    {
        "namn": "Ajvaryoghurt",
        "livsmedelsnummer": 6369,
        "kolhydrater": 5.41,
        "fett": 7.25,
        "fibrer": 0.59,
        "alkohol": 0
    },
    {
        "namn": "Karl-Alfredsås m. yoghurt spenat",
        "livsmedelsnummer": 6370,
        "kolhydrater": 4.39,
        "fett": 18.78,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Chili- och mangosås",
        "livsmedelsnummer": 6372,
        "kolhydrater": 8.89,
        "fett": 8.44,
        "fibrer": 0.75,
        "alkohol": 0
    },
    {
        "namn": "Fisk mager m. fänkål tomat crème fraiche ångkokt",
        "livsmedelsnummer": 6373,
        "kolhydrater": 1.66,
        "fett": 7.12,
        "fibrer": 0.75,
        "alkohol": 0
    },
    {
        "namn": "Bondomelett m. bönor",
        "livsmedelsnummer": 6374,
        "kolhydrater": 8.74,
        "fett": 5.37,
        "fibrer": 1.98,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbiff Caribbean stekt",
        "livsmedelsnummer": 6375,
        "kolhydrater": 26.04,
        "fett": 8.21,
        "fibrer": 3.03,
        "alkohol": 0
    },
    {
        "namn": "Gräddsås m. persilja",
        "livsmedelsnummer": 6377,
        "kolhydrater": 4.11,
        "fett": 16.28,
        "fibrer": 0.12,
        "alkohol": 0
    },
    {
        "namn": "Köttfärs- och grönsaksbiff stekt",
        "livsmedelsnummer": 6378,
        "kolhydrater": 8.39,
        "fett": 6.81,
        "fibrer": 3.76,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbiff broccolibiff stekt veg.",
        "livsmedelsnummer": 6379,
        "kolhydrater": 23.96,
        "fett": 15.8,
        "fibrer": 1.99,
        "alkohol": 0
    },
    {
        "namn": "Gryta kycklinggryta m. bönor kakao ",
        "livsmedelsnummer": 6380,
        "kolhydrater": 4.17,
        "fett": 3.3,
        "fibrer": 2.06,
        "alkohol": 0
    },
    {
        "namn": "Fisk Björkeby m. ströbröd smör persilja ugnsstekt",
        "livsmedelsnummer": 6381,
        "kolhydrater": 12.4,
        "fett": 14.87,
        "fibrer": 0.96,
        "alkohol": 0
    },
    {
        "namn": "Fisk m. soltorkad tomat persilja vitlök",
        "livsmedelsnummer": 6382,
        "kolhydrater": 11.84,
        "fett": 11.95,
        "fibrer": 1.67,
        "alkohol": 0
    },
    {
        "namn": "Gratäng djungelgratäng m. kyckling banan mango chutney crème fraiche",
        "livsmedelsnummer": 6383,
        "kolhydrater": 7.89,
        "fett": 16.15,
        "fibrer": 0.36,
        "alkohol": 0
    },
    {
        "namn": "Mango chutney",
        "livsmedelsnummer": 6384,
        "kolhydrater": 25.81,
        "fett": 0.3,
        "fibrer": 1.11,
        "alkohol": 0
    },
    {
        "namn": "Gratäng m. kassler ananas ost",
        "livsmedelsnummer": 6385,
        "kolhydrater": 3.9,
        "fett": 4.3,
        "fibrer": 0.3,
        "alkohol": 0
    },
    {
        "namn": "Gryta fiskgryta brasiliansk fiskgryta m. kokosmjölk krossad tomat paprika",
        "livsmedelsnummer": 6386,
        "kolhydrater": 4.1,
        "fett": 9.04,
        "fibrer": 1.25,
        "alkohol": 0
    },
    {
        "namn": "Gryta mormors kycklinggryta m. svamp",
        "livsmedelsnummer": 6387,
        "kolhydrater": 2.78,
        "fett": 7.32,
        "fibrer": 0.36,
        "alkohol": 0
    },
    {
        "namn": "Gryta köttgryta m. fransk senap pepparrot gräddfil",
        "livsmedelsnummer": 6388,
        "kolhydrater": 2.98,
        "fett": 5.09,
        "fibrer": 0.74,
        "alkohol": 0.54
    },
    {
        "namn": "Gryta fisk m. crème fraiche curry apelsin",
        "livsmedelsnummer": 6389,
        "kolhydrater": 3.54,
        "fett": 5.79,
        "fibrer": 0.58,
        "alkohol": 0
    },
    {
        "namn": "Korv falukorv ugnsstekt m. ajvar",
        "livsmedelsnummer": 6390,
        "kolhydrater": 4.59,
        "fett": 21.3,
        "fibrer": 0.42,
        "alkohol": 0
    },
    {
        "namn": "Gryta kyckling tikka masala",
        "livsmedelsnummer": 6391,
        "kolhydrater": 2.45,
        "fett": 3.29,
        "fibrer": 0.13,
        "alkohol": 0
    },
    {
        "namn": "Senapskräm",
        "livsmedelsnummer": 6392,
        "kolhydrater": 14.89,
        "fett": 22.97,
        "fibrer": 0.35,
        "alkohol": 0
    },
    {
        "namn": "Köttfärslåda",
        "livsmedelsnummer": 6393,
        "kolhydrater": 7.54,
        "fett": 6.35,
        "fibrer": 1,
        "alkohol": 0
    },
    {
        "namn": "Gryta svampprotein m. lätt crème fraiche bambuskott haricot verts paprika veg.",
        "livsmedelsnummer": 6395,
        "kolhydrater": 4.97,
        "fett": 5.39,
        "fibrer": 1.06,
        "alkohol": 0
    },
    {
        "namn": "Gryta svampprotein tikka masala veg.",
        "livsmedelsnummer": 6396,
        "kolhydrater": 5.79,
        "fett": 3.55,
        "fibrer": 3.61,
        "alkohol": 0
    },
    {
        "namn": "Gryta svampprotein m. fransk senap pepparrot gräddfil veg.",
        "livsmedelsnummer": 6397,
        "kolhydrater": 4.72,
        "fett": 4.12,
        "fibrer": 3.01,
        "alkohol": 0.5
    },
    {
        "namn": "Grönsaksburgare stekt veg.",
        "livsmedelsnummer": 6398,
        "kolhydrater": 24.84,
        "fett": 12.03,
        "fibrer": 3.34,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbiff rödbetsbiff stekt veg.",
        "livsmedelsnummer": 6399,
        "kolhydrater": 11.12,
        "fett": 4.59,
        "fibrer": 2.02,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbiff morotsbiff stekt veg.",
        "livsmedelsnummer": 6400,
        "kolhydrater": 11.46,
        "fett": 4.62,
        "fibrer": 2.5,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbiff zucchinibiff m. ost stekt veg.",
        "livsmedelsnummer": 6401,
        "kolhydrater": 15.28,
        "fett": 12.07,
        "fibrer": 1.99,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbiff ärt- och kålrotsbiff stekt veg. kylvara",
        "livsmedelsnummer": 6402,
        "kolhydrater": 17.2,
        "fett": 6.44,
        "fibrer": 8.41,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbiff kikärtsbiff stekt veg. hemlagad",
        "livsmedelsnummer": 6403,
        "kolhydrater": 17.75,
        "fett": 9.37,
        "fibrer": 10.14,
        "alkohol": 0
    },
    {
        "namn": "Gryta chili sin carne m. zucchini paprika veg.",
        "livsmedelsnummer": 6404,
        "kolhydrater": 9.18,
        "fett": 1.63,
        "fibrer": 3.75,
        "alkohol": 0
    },
    {
        "namn": "Gryta chili con quorn veg.",
        "livsmedelsnummer": 6405,
        "kolhydrater": 9.11,
        "fett": 2.17,
        "fibrer": 4.38,
        "alkohol": 0
    },
    {
        "namn": "Gryta chili con soja veg.",
        "livsmedelsnummer": 6406,
        "kolhydrater": 9.08,
        "fett": 3.09,
        "fibrer": 4.85,
        "alkohol": 0
    },
    {
        "namn": "Svampproteinfärssås veg. ",
        "livsmedelsnummer": 6407,
        "kolhydrater": 7.18,
        "fett": 3.07,
        "fibrer": 3.16,
        "alkohol": 0
    },
    {
        "namn": "Gryta böngryta provencale m. potatis rotselleri vitt vin crème fraiche veg.",
        "livsmedelsnummer": 6408,
        "kolhydrater": 10.28,
        "fett": 4.04,
        "fibrer": 3.17,
        "alkohol": 0.16
    },
    {
        "namn": "Gryta halloumigryta m. linser veg.",
        "livsmedelsnummer": 6409,
        "kolhydrater": 7.88,
        "fett": 8.9,
        "fibrer": 2.89,
        "alkohol": 0
    },
    {
        "namn": "Halloumi stroganoff veg.",
        "livsmedelsnummer": 6410,
        "kolhydrater": 3.84,
        "fett": 19.7,
        "fibrer": 0.47,
        "alkohol": 0
    },
    {
        "namn": "Gryta halloumigryta m. aubergine veg.",
        "livsmedelsnummer": 6411,
        "kolhydrater": 4.1,
        "fett": 7.73,
        "fibrer": 1.28,
        "alkohol": 0
    },
    {
        "namn": "Gryta svampprotein m. grönsaker veg.",
        "livsmedelsnummer": 6412,
        "kolhydrater": 4.58,
        "fett": 2.11,
        "fibrer": 2.42,
        "alkohol": 0
    },
    {
        "namn": "Gryta kalops m. quorn veg.",
        "livsmedelsnummer": 6413,
        "kolhydrater": 4.12,
        "fett": 1.46,
        "fibrer": 1.42,
        "alkohol": 0
    },
    {
        "namn": "Gryta indonesisk kycklinggryta m. mango chutney",
        "livsmedelsnummer": 6414,
        "kolhydrater": 6.03,
        "fett": 12.22,
        "fibrer": 0.6,
        "alkohol": 0
    },
    {
        "namn": "Gryta svampprotein indonesisk gryta m. mango chutney veg.",
        "livsmedelsnummer": 6415,
        "kolhydrater": 8.51,
        "fett": 8.73,
        "fibrer": 2.83,
        "alkohol": 0
    },
    {
        "namn": "Gryta svampprotein m. persika veg.",
        "livsmedelsnummer": 6416,
        "kolhydrater": 7.17,
        "fett": 9.47,
        "fibrer": 2.66,
        "alkohol": 0
    },
    {
        "namn": "Bön stroganoff veg.",
        "livsmedelsnummer": 6417,
        "kolhydrater": 11.08,
        "fett": 5.8,
        "fibrer": 4.7,
        "alkohol": 0
    },
    {
        "namn": "Gryta m. gröna linser rotfrukter kokosmjölk veg.",
        "livsmedelsnummer": 6418,
        "kolhydrater": 6.24,
        "fett": 4.52,
        "fibrer": 2.89,
        "alkohol": 0
    },
    {
        "namn": "Gryta gulasch m. bönor veg.",
        "livsmedelsnummer": 6419,
        "kolhydrater": 7.26,
        "fett": 1.79,
        "fibrer": 2.28,
        "alkohol": 0
    },
    {
        "namn": "Grönsaker ugnsstekta",
        "livsmedelsnummer": 6420,
        "kolhydrater": 3.73,
        "fett": 0.17,
        "fibrer": 2.55,
        "alkohol": 0
    },
    {
        "namn": "Majssås",
        "livsmedelsnummer": 6421,
        "kolhydrater": 5.71,
        "fett": 7.23,
        "fibrer": 0.9,
        "alkohol": 0
    },
    {
        "namn": "Gryta kikärtsgryta m. aprikos blandade grönsaker veg.",
        "livsmedelsnummer": 6422,
        "kolhydrater": 7.33,
        "fett": 2.47,
        "fibrer": 2.11,
        "alkohol": 0
    },
    {
        "namn": "Svamp stroganoff veg.",
        "livsmedelsnummer": 6423,
        "kolhydrater": 4.9,
        "fett": 6.31,
        "fibrer": 2.24,
        "alkohol": 0
    },
    {
        "namn": "Broccolisås",
        "livsmedelsnummer": 6424,
        "kolhydrater": 2.3,
        "fett": 14.07,
        "fibrer": 1.03,
        "alkohol": 0
    },
    {
        "namn": "Gryta indisk lammgryta",
        "livsmedelsnummer": 6425,
        "kolhydrater": 3.68,
        "fett": 7.58,
        "fibrer": 0.58,
        "alkohol": 0
    },
    {
        "namn": "Sojafärssås veg.",
        "livsmedelsnummer": 6426,
        "kolhydrater": 7.17,
        "fett": 4.93,
        "fibrer": 4.14,
        "alkohol": 0
    },
    {
        "namn": "Sojafärssås m. linser veg.",
        "livsmedelsnummer": 6427,
        "kolhydrater": 8.04,
        "fett": 4.22,
        "fibrer": 4.16,
        "alkohol": 0
    },
    {
        "namn": "Tikka masala m. potatis grönsaker veg.",
        "livsmedelsnummer": 6429,
        "kolhydrater": 8.93,
        "fett": 6.21,
        "fibrer": 1.96,
        "alkohol": 0
    },
    {
        "namn": "Medelhavssås m. grädde soltorkad tomat",
        "livsmedelsnummer": 6430,
        "kolhydrater": 6.71,
        "fett": 26.62,
        "fibrer": 1.51,
        "alkohol": 0
    },
    {
        "namn": "Sås m. grädde soltorkad tomat basilika vitlök",
        "livsmedelsnummer": 6431,
        "kolhydrater": 8.45,
        "fett": 16.44,
        "fibrer": 1.68,
        "alkohol": 0
    },
    {
        "namn": "Gryta currygryta m. grönsaker veg.",
        "livsmedelsnummer": 6433,
        "kolhydrater": 5.13,
        "fett": 9.36,
        "fibrer": 1.52,
        "alkohol": 0
    },
    {
        "namn": "Pasta carbonara m. pasta sojabönor veg.",
        "livsmedelsnummer": 6434,
        "kolhydrater": 13.14,
        "fett": 8.19,
        "fibrer": 1.85,
        "alkohol": 0
    },
    {
        "namn": "Lasagne m. linser veg.",
        "livsmedelsnummer": 6436,
        "kolhydrater": 7.54,
        "fett": 9.61,
        "fibrer": 1.85,
        "alkohol": 0
    },
    {
        "namn": "Lasagne m. grönsaker veg. ",
        "livsmedelsnummer": 6437,
        "kolhydrater": 17.85,
        "fett": 4.05,
        "fibrer": 1.69,
        "alkohol": 0
    },
    {
        "namn": "Grönsaksbas grönsakspasta",
        "livsmedelsnummer": 6438,
        "kolhydrater": 6.83,
        "fett": 5.39,
        "fibrer": 2.38,
        "alkohol": 0
    },
    {
        "namn": "Tomatsås m. grädde",
        "livsmedelsnummer": 6439,
        "kolhydrater": 4.32,
        "fett": 13.54,
        "fibrer": 1.02,
        "alkohol": 0
    },
    {
        "namn": "Morotssås",
        "livsmedelsnummer": 6440,
        "kolhydrater": 5.29,
        "fett": 4.42,
        "fibrer": 1.45,
        "alkohol": 0
    },
    {
        "namn": "Ajvar- och spenatsås",
        "livsmedelsnummer": 6441,
        "kolhydrater": 7.29,
        "fett": 7.89,
        "fibrer": 2.18,
        "alkohol": 0
    },
    {
        "namn": "Paprika grillad",
        "livsmedelsnummer": 6442,
        "kolhydrater": 4.2,
        "fett": 0.19,
        "fibrer": 1.15,
        "alkohol": 0
    },
    {
        "namn": "Lasagne m. keso veg. ",
        "livsmedelsnummer": 6446,
        "kolhydrater": 8.64,
        "fett": 4.66,
        "fibrer": 1.34,
        "alkohol": 0
    },
    {
        "namn": "Paj m. fetaost sötpotatis veg.",
        "livsmedelsnummer": 6447,
        "kolhydrater": 11.16,
        "fett": 20.01,
        "fibrer": 1.5,
        "alkohol": 0
    },
    {
        "namn": "Grynblandning havre råg vete korn kokt m. salt",
        "livsmedelsnummer": 6448,
        "kolhydrater": 22.8,
        "fett": 1.08,
        "fibrer": 6.74,
        "alkohol": 0
    },
    {
        "namn": "Soppa m. kokosmjölk blomkål potatis spenat veg.",
        "livsmedelsnummer": 6449,
        "kolhydrater": 5.83,
        "fett": 20.96,
        "fibrer": 1.92,
        "alkohol": 0
    },
    {
        "namn": "Sötpotatissoppa m. linser chili kokosmjölk veg.",
        "livsmedelsnummer": 6450,
        "kolhydrater": 8.39,
        "fett": 7.2,
        "fibrer": 2.29,
        "alkohol": 0
    },
    {
        "namn": "Rysk kålsoppa veg.",
        "livsmedelsnummer": 6451,
        "kolhydrater": 3.25,
        "fett": 0.87,
        "fibrer": 1.33,
        "alkohol": 0
    },
    {
        "namn": "Vegestronesoppa veg.",
        "livsmedelsnummer": 6452,
        "kolhydrater": 5.52,
        "fett": 0.93,
        "fibrer": 1.44,
        "alkohol": 0
    },
    {
        "namn": "Gratäng m. quorn ananas veg. ",
        "livsmedelsnummer": 6453,
        "kolhydrater": 8.43,
        "fett": 3.63,
        "fibrer": 3.53,
        "alkohol": 0
    },
    {
        "namn": "Pumpasoppa veg.",
        "livsmedelsnummer": 6454,
        "kolhydrater": 4.45,
        "fett": 1.09,
        "fibrer": 0.96,
        "alkohol": 0
    },
    {
        "namn": "Gryta chiligryta m. bönor linser sojakorv veg.",
        "livsmedelsnummer": 6455,
        "kolhydrater": 10.33,
        "fett": 4.25,
        "fibrer": 5.48,
        "alkohol": 0
    },
    {
        "namn": "Lasagne m. skinka",
        "livsmedelsnummer": 6456,
        "kolhydrater": 12.26,
        "fett": 3.86,
        "fibrer": 1.05,
        "alkohol": 0
    },
    {
        "namn": "Pastasås m. kyckling paprika",
        "livsmedelsnummer": 6457,
        "kolhydrater": 1.91,
        "fett": 11.2,
        "fibrer": 0.25,
        "alkohol": 0
    },
    {
        "namn": "Pastagratäng Rossini m. kycklingfärs ananas paprika squash tomat purjolök",
        "livsmedelsnummer": 6458,
        "kolhydrater": 7.53,
        "fett": 4.52,
        "fibrer": 1.6,
        "alkohol": 0
    },
    {
        "namn": "Köttfärssås Vivaldi nöt m. squash majs paprika rödlök ost",
        "livsmedelsnummer": 6459,
        "kolhydrater": 5.37,
        "fett": 5.79,
        "fibrer": 1.42,
        "alkohol": 0
    },
    {
        "namn": "Chiapudding",
        "livsmedelsnummer": 6461,
        "kolhydrater": 9.29,
        "fett": 4.79,
        "fibrer": 4.87,
        "alkohol": 0
    },
    {
        "namn": "Korv stroganoff hemlagad",
        "livsmedelsnummer": 6462,
        "kolhydrater": 5.6,
        "fett": 24.02,
        "fibrer": 0.46,
        "alkohol": 0
    },
    {
        "namn": "Lasagne hemlagad",
        "livsmedelsnummer": 6463,
        "kolhydrater": 12.68,
        "fett": 4.68,
        "fibrer": 1.09,
        "alkohol": 0
    },
    {
        "namn": "Havremjöl fullkorn",
        "livsmedelsnummer": 6468,
        "kolhydrater": 64.1,
        "fett": 6.98,
        "fibrer": 7.5,
        "alkohol": 0
    },
    {
        "namn": "Öring Sverige höst rå ",
        "livsmedelsnummer": 6478,
        "kolhydrater": 1.7,
        "fett": 9.25,
        "fibrer": 0,
        "alkohol": 0
    },
    {
        "namn": "Taco tortilla m. köttfärs grönsaker ost",
        "livsmedelsnummer": 6479,
        "kolhydrater": 11.34,
        "fett": 8.01,
        "fibrer": 0.68,
        "alkohol": 0
    },
    {
        "namn": "Kornflingor ångprep. fullkorn",
        "livsmedelsnummer": 6480,
        "kolhydrater": 65.4,
        "fett": 3.1,
        "fibrer": 10.7,
        "alkohol": 0
    },
    {
        "namn": "Rågflingor ångprep. fullkorn",
        "livsmedelsnummer": 6481,
        "kolhydrater": 61.1,
        "fett": 1.5,
        "fibrer": 12.7,
        "alkohol": 0
    },
    {
        "namn": "Veteflingor ångprep. fullkorn",
        "livsmedelsnummer": 6482,
        "kolhydrater": 60.98,
        "fett": 2,
        "fibrer": 11.32,
        "alkohol": 0
    }
]`