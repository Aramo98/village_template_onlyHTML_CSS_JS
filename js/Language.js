const button = document.querySelectorAll("button");
const captionHeadOne = document.querySelector(".captionOne");
const captionHeadTwo = document.querySelector(".captionTwo");
const captionHeadThree =document.querySelector(".captionThree");
const ParagraphOne = document.querySelector(".paragraphOne");
const ParagraphTwo = document.querySelector(".paragraphTwo");
const ParagraphThree = document.querySelector(".paragraphThree");
 const headerHistory = document.querySelector('.headerHistory');
 const HistoryParagraph = document.querySelector('.HistoryParagraph');
 const Problem = document.querySelector(".Problem");

 const Population = document.querySelector(".population");
 const Area = document.querySelector(".area");
 const Altitude = document.querySelector(".altitude");
 const footerOne = document.querySelector(".leftFooter");
 const footerTwo = document.querySelector(".rightFooter");
 const CounterOne = document.querySelector(".counterOne");
 const CounterTwo = document.querySelector(".counterTwo");
 const FooterHeadOne = document.querySelector(".FooterHeadOne");
 const FooterHeadTwo = document.querySelector(".FooterHeadTwo");
 const listOne = document.querySelector(".listOne");
 const listTwo = document.querySelector(".listTwo");
 const listThree = document.querySelector(".listThree"); 
 
 button.forEach(el => {
      el.addEventListener('click',() =>{
          setTimeout(() => {
          const attr = el.getAttribute('lang');
           captionHeadOne.textContent = data[attr].captionOne;
           captionHeadTwo.textContent = data[attr].captionTwo;
           captionHeadThree.textContent = data[attr].captionThree;
           ParagraphOne.textContent = data[attr].paragraphOne;
           ParagraphTwo.textContent = data[attr].paragraphTwo;
           ParagraphThree.textContent = data[attr].paragraphThree;
           headerHistory.textContent = data[attr].HistoryHead;
           HistoryParagraph.textContent = data[attr].HistoryParagraph;
           Problem.textContent = data[attr].ProblemBtn;
           Heroes.textContent = data[attr].HeroesBtn;
         
           Population.textContent = data[attr].Population;
           Area.textContent = data[attr].Area;
           Altitude.textContent = data[attr].Altitude;
           footerOne.textContent = data[attr].leftfooter;
           footerTwo.textContent = data[attr].rightfooter;
           CounterOne.textContent = data[attr].kilometrSquare;
           CounterTwo.textContent = data[attr].altitudeMeter;
           FooterHeadOne.textContent = data[attr].FooterHeadOne;
           FooterHeadTwo.textContent = data[attr].FooterHeadTwo;
           listOne.textContent = data[attr].listOne;
           listTwo.textContent = data[attr].listTwo;
           listThree.textContent = data[attr].listThree;
           
        }, 2000); 
      })
 });

   const data = {
     "armenian":{
       "captionOne":"եկեղեցու կառուցումը",
       "captionTwo":"իմանանք",
       "captionThree":"Ճանաչենք",
       "paragraphOne":"որպես կարևոր հիմնախնդիր",
       "paragraphTwo":"մեր հերոսներին",
       "paragraphThree":"պատմական վայրերը",
       "HistoryHead": "Ավանդազրույց",
       "HistoryParagraph": "Ըստ ավանդության՝ սկեսուրը հարսի խոնարհությունը փորձելու համար ձեռքի ճլորը՝ կավե փոքրիկ աման, գցում է շիկացած թոնրի մեջ ու խնդրում նրան, որ հանի՝ «Խա'րս, ճլորը խա՛ն»։. Հարսը իրեն նետում է թոնիրը և այրվում։ Այդ օրվանից գյուղի անունը մնում է Ճլոխան",
       "MenuHead": "Մենյու",
       "ProblemBtn": "Առկա Խնդիրներ",
       "HeroesBtn": "Հերոսների Պատ",

        "Population": "Բնակչություն",
        "Area": "Մակերես",
        "kilometrSquare": "8.6 կմ²",
        "altitudeMeter": "1540 մ",
        "Altitude": "ԲԾՄ",
        "leftfooter":"© Բոլոր Կանոնները Պահպանված են Հեղինակ՝ Արամ Մարգարյան",
        "rightfooter": "Տեղեկությունը՝ Վիքիպեդիա Էջից,Լուսանկարների Հեղինակ՝ Լուպե",
        "FooterHeadOne": "Մեր Մասին",
        "FooterHeadTwo" : "Հետևեք Մեզ Սոցցանցերում",
        "listOne": "Մեր Հասցեն: Շիրակի Մարզ Գյուղ Բենիամին:",
        "listTwo": "Հարցերի համար",
        "listThree":"Հեռախոսահամար: +374 312 6-00-86",
       
     },
     "russian":{
     "captionOne":"Церковное здание",
       "captionTwo":"знать",
       "captionThree":"узнаем",
       "paragraphOne":"как потенциальная проблема",
       "paragraphTwo":"наше героям",
       "paragraphThree":"Исторические места",
       "HistoryHead": "Легенд",
       "HistoryParagraph": "Согласно легенде, свекровь использовала небольшой кусочек глины, чтобы проверить смирение невесты.Она бросает горшок в нагретый тонир и просит его вынуть сама невеста.бросает тонир и горит. С этого дня название села осталось Члохан.",
       "MenuHead": "Меню",
       "ProblemBtn": "Проблемы",
       "HeroesBtn": "Стена героев",

        "Population": "численность населения",
        "Area": "Площадь",
        "kilometrSquare": "8.6 км²",
        "altitudeMeter": "1540 м",
        "Altitude": "ВУМ",
        "leftfooter": "© Все права защишены Автор՝ Арам Маргарян",
        "rightfooter": "информация՝ Википедия соц.сети,Автор картинки՝ Лупе",
        "FooterHeadOne": "О Нас",
        "FooterHeadTwo": "Подписайтесь нас Соц.сетях",
        "listOne": "Наш адрес: Ширакская Область Село Бениамин",
        "listTwo": "Для вопросам:",
       "listThree": "Тел.номер: +374 312 6-00-86",

     },
     "english":{
       "captionOne":"construction of a church",
       "captionTwo":"let's know",
       "captionThree":"to recognize",
       "paragraphOne":"as a potential problem",
       "paragraphTwo":"Our Heroes",
       "paragraphThree":"historical places",
       "HistoryHead": "Legend",
       "HistoryParagraph": " According to the legend, the mother-in-law used a small piece of clay to test the bride's humility.He throws the pot in the heated tonir and asks him to take it out. The bride herself.throws the tonir and burns. From that day the name of the village remains Chlokhan",
       "MenuHead": "Menu",
       "ProblemBtn": "Existing Problems",
       "HeroesBtn": "Wall of heroes",
        "Population": "Population",
        "Area": "Area",
        "kilometrSquare": "8.6 km²",
        "altitudeMeter": "1540 m",
        "Altitude": "ASL",
        "leftfooter": "© All rights reserved՝ author website Aram Margaryan",
        "rightfooter": "Information՝ Wikipedia website author pictures՝ Lupe",
        "FooterHeadOne": "About us",
        "FooterHeadTwo": "Follow us",
        "listOne":"Our Address: Shirak Region Village Beniamin",
        "listTwo":"For Answer:",
        "listThree":"Phone Number: +374 312 6-00-86:",
       
     }
}
