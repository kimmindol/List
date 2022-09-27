const quotes = [
    {
        quote:"준비도 되지 않은 상태에서 최고 위치에 오르려고 애쓰는 야망 때문에 주목 받아서는 안된다.",
        author: "-로버트 그린",
    },
    {
        quote: "행복해지고 싶은 만큼만 행복해질 수 있다.",
        author: "-에이브리엄 링컨",
    },
    {
        quote: "자신에게 관대해지고 싶은 유혹에 '저항'하라.",
        author: "-로버트 그린",
    },
    {
        quote: "장애물을 외면하면 기분은 좋아질지 모른다. 하지만 마음 속 깊은 곳에서는 그런다고 해서 사태가 호전되지 않는다는 것을 안다. 행동을 해야한다. 지금 당장.",
        author: "-돌파력",
    },
    {
        quote: "내가 통제할 수 있는가 없는가 선택하는 것이다. 좋고 나쁨은 없다 다만 내가 선택하는 것이다.",
        author: "-돌파력",
    },
    {
        quote: "어떤 사람에게 'No!'라고 말할 수 없다면 그가 누구든지 당신의 주인이 되며 당신은 그의 노예가 된다.",
        author: "-롤로 타마시",
    },
    {
        quote: "모든 세상 사람의 비위를 맞추려고 하다가 오히려 자기 자신을 포함해 그 누구의 비위도 맞추지 못한다.",
        author: "-로버트 A. 글로버",
    },
    {
        quote: "내가 나를 도와야 더불어 타인도 도울 수 있다.(수신제가치국평천하)",
        author: "-",
    },
    {
        quote:"'왜 나에게 이런 일이 일어나지?'가 아닌 '내가 이 상황에서 배울 수 있는 것은 무엇인가?'",
        author:"-로버트 A. 글로버",
    },
    {
        quote: "드러내고 구걸하는 태도는 좋지 않다.",
        author: "-"
    },   
];

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 

const todaysQuote = quotes[Math.floor(Math.random() * 10 )];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;