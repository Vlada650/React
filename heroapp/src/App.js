import './App.css';
import './components/hero.css';
import Hero from './components/hero'
import React from 'react';


const heroes = [
  {
    name: "Железный человек",
    alterEgo: "Тони Старк",
    occupation: "гений, миллиардер, плейбой, филантроп",
    superpower: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    more: "самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают",
    url: "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
  }, {
    name: "Спайдер-мен/Человек-паук",
    alterEgo: "Питер Паркер",
    occupation: "борец за справедливость, студент, фотограф",
    superpower: "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    more: "Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность».",
    url: "https://n1s1.hsmedia.ru/37/39/74/373974effcc7ccd093d849e8fa062091/547x397_0xac120002_9548247751540468871.jpg"
  }, {
    name: "Капитан Америка",
    alterEgo: "Стивен Роджерс",
    occupation: "супер-солдат",
    superpower: "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    more: "По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона",
    url: "https://n1s1.hsmedia.ru/41/8f/05/418f050c767eeca8854b328914c7bccc/547x397_0xac120002_20106541761540468871.jpg"
  }, {
    name: "Тор",
    alterEgo: "нет; полное имя — Тор Одинсон",
    occupation: "борец за справедливость, скандинавский бог",
    superpower: "все, что может бог, плюс молот Мьелнир",
    more: "родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении",
    url: "https://n1s1.hsmedia.ru/52/a3/e1/52a3e14a0c8f02715b763e7a20fe1c00/547x397_0xac120002_19311926741540468872.jpg"
  }, {
    name: "Халк",
    alterEgo: "Брюс Беннер",
    occupation: "супергерой, борец за справедливость, ученый-биохимик",
    superpower: "сверхчеловеческая сила искорость, выносливость, полет",
    more: "Брюс выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках.",
    url: "https://n1s1.hsmedia.ru/9a/28/e7/9a28e7b059594fc10387669ae4bd2f22/547x397_0xac120002_20162335021540468872.jpg"
  }, {
    name: "Черная вдова",
    alterEgo: "Наташа Романофф",
    occupation: "супергероиня, шпионка",
    superpower: "пик человеческого физического потенциала, замедленное старение, знание многих языков",
    more: "Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы. Там же ей вживили сыворотку Суперсолдата — как у Капитана Америки, но в советском варианте. Благодаря ей Наташа может использовать максимальные возможности своего организма: силу, гибкость, скорость, ловкость и т. д. Также сыворотка дает эффект замедленного старения. ",
    url: "https://n1s1.hsmedia.ru/e0/2b/55/e02b55b147eeaff9b3fe6bdbb36ff9ea/547x397_0xac120002_744074131540468872.jpg"
  }, {
    name: "Дэдпул",
    alterEgo: "Уэйд Уинстон Уилсон",
    occupation: "антигерой, наемник",
    superpower: "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
    more: " Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным. Это единственный супергерой из списка, который однозначно не на стороне добра. ",
    url: "https://n1s1.hsmedia.ru/34/93/39/3493392c94fc2ae0552ef9c7e87f2617/728x382_1_cc2a743fd686b7b2e256c062966bb465@1034x543_0xac120002_2692921231540468872.jpg"
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {
          heroes.map((hero) =>
            <Hero url={hero.url} name={hero.name} alterEgo={hero.alterEgo} occupation={hero.occupation} superpower={hero.superpower} more={hero.more}></Hero>
          )
        }
      </div>
    );
  }
}

export default App;
