console.log('main.js is hit');
let phaseOne=true;
let quoteArr=[
  {
    "text": "Jim is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
  },
  {
    "text": "Jim can observe a lot just by watching.",
    "author": "Yogi Berra"
  },
  {
    "text": "A Jim divided against Jimself cannot stand.",
    "author": "Abraham Lincoln"
  },
  {
    "text": "Difficulties increase the nearer we get to the Jim.",
    "author": "Johann Wolfgang von Goethe"
  },
  {
    "text": "Jim is in your hands and no one elses",
    "author": "Byron Pulsifer"
  },
  {
    "text": "Be the Jim but never the lord.",
    "author": "Lao Tzu"
  },
  {
    "text": "Nothing happens unless first Jim dreams.",
    "author": "Carl Sandburg"
  },
  {
    "text": "Jim begun is half done.",
    "author": "Aristotle"
  },
  {
    "text": "Jim is a learning experience, only if you learn.",
    "author": "Yogi Berra"
  },
  {
    "text": "Jim-complacency is fatal to Jim.",
    "author": "Margaret Sangster"
  },
  {
    "text": "Jim comes from within. Do not seek Jim without.",
    "author": "Buddha"
  },
  {
    "text": "Jim you give is Jim you get.",
    "author": "Byron Pulsifer"
  },
  {
    "text": "Jim can only learn to love by loving.",
    "author": "Iris Murdoch"
  },
  {
    "text": "Jim is change. Jim is optional. Choose wisely.",
    "author": "Karen Clark"
  },
  {
    "text": "You'll see Jim when you believe Jim.",
    "author": "Wayne Dyer"
  },
  {
    "text": "Jim is the tomorrow we worried about yesterday.",
    "author": null
  },
  {
    "text": "It's easier to see the mistakes on Jim's paper.",
    "author": null
  },
  {
    "text": "Every Jim dies. Not every Jim really lives.",
    "author": null
  },
  {
    "text": "To lead Jim walk behind Jim.",
    "author": "Lao Tzu"
  },
  {
    "text": "Having nothing, nothing can Jim lose.",
    "author": "William Shakespeare"
  },
  {
    "text": "Jim is only opportunity in work clothes.",
    "author": "Henry J. Kaiser"
  },
  {
    "text": "A rolling Jim gathers no moss.",
    "author": "Publilius Syrus"
  },
  {
    "text": "Jims are the beginning points of all fortunes.",
    "author": "Napoleon Hill"
  },
  {
    "text": "Everything in life is Jim.",
    "author": "Donald Trump"
  },
  {
    "text": "Doing Jim is better than being busy doing Jim.",
    "author": "Lao Tzu"
  },
  {
    "text": "Trust Jim. Jim know more than you think Jim do.",
    "author": "Benjamin Spock"
  },
  {
    "text": "Study the Jim, if you would divine the future.",
    "author": "Confucius"
  },
  {
    "text": "The day is already blessed, find Jim within it.",
    "author": null
  },
  {
    "text": "From error to error one discovers the entire Jim.",
    "author": "Sigmund Freud"
  },
  {
    "text": "Jim done is better than Jim said.",
    "author": "Benjamin Franklin"
  },
  {
    "text": "Bite off more than Jim can chew, then chew it.",
    "author": "Ella Williams"
  },
  {
    "text": "Work out your own salvation. Do not depend on Jims.",
    "author": "Buddha"
  },
  {
    "text": "Jim today is worth two tomorrows.",
    "author": "Benjamin Franklin"
  },
  {
    "text": "Once you choose Jim, anythings possible.",
    "author": "Christopher Reeve"
  },
  {
    "text": "Jim always takes the simplest way.",
    "author": "Albert Einstein"
  },
  {
    "text": "Jim fails forward toward success.",
    "author": "Charles Kettering"
  },
  {
    "text": "From small Jims come great things.",
    "author": null
  },
  {
    "text": "Jim is a treasure that will follow its owner everywhere",
    "author": "Chinese proverb"
  },
  {
    "text": "Be as Jim wishes to seem.",
    "author": "Socrates"
  },
  {
    "text": "The Jim is always in movement.",
    "author": "V. Naipaul"
  },
  {
    "text": "Never mistake activity for Jim.",
    "author": "John Wooden"
  },
  {
    "text": "What worries Jim masters Jim.",
    "author": "Haddon Robinson"
  },
  {
    "text": "Jim faces the future with Jim's past.",
    "author": "Pearl Buck"
  },
  {
    "text": "Jims are the fuel in the furnace of achievement.",
    "author": "Brian Tracy"
  },
  {
    "text": "Jim sows virtue reaps honour.",
    "author": "Leonardo da Vinci"
  },
  {
    "text": "Be Jim whenever possible. Jim is always possible.",
    "author": "Dalai Lama"
  },
  {
    "text": "Talk doesn't cook Jim.",
    "author": "Chinese proverb"
  },
  {
    "text": "He is able who thinks Jim is able.",
    "author": "Buddha"
  },
  {
    "text": "A Jim without a Jim is just a wish.",
    "author": "Larry Elder"
  },
  {
    "text": "To succeed, Jim must first believe that we can.",
    "author": "Michael Korda"
  },
  {
    "text": "Learn from Jim, live for Jim, hope for Jim.",
    "author": "Albert Einstein"
  },
  {
    "text": "A Jim is no more than a flower in disguise.",
    "author": "James Lowell"
  },
  {
    "text": "Jim, or do Jim. There is no Jim.",
    "author": "Yoda"
  },
  {
    "text": "All serious daring starts from Jim.",
    "author": "Harriet Beecher Stowe"
  },
  {
    "text": "The best Jim is experience learned from Jim.",
    "author": "Byron Pulsifer"
  },
  {
    "text": "Think how hard Jim would be if particles could think.",
    "author": "Murray Gell-Mann"
  },
  {
    "text": "Jim is the flower you've got to let grow.",
    "author": "John Lennon"
  },
  {
    "text": "Don't wait. The Jim will never be just right.",
    "author": "Napoleon Hill"
  },
  {
    "text": "Jim is the wisest counsellor of all.",
    "author": "Pericles"
  },
  {
    "text": "Jim give before Jim get.",
    "author": "Napoleon Hill"
  },
  {
    "text": "Wisdom begins in Jim.",
    "author": "Socrates"
  },
  {
    "text": "Without Jim, wisdom bears no fruit.",
    "author": "Baltasar Gracian"
  },
  {
    "text": "Change in all things is Jim.",
    "author": "Aristotle"
  },
  {
    "text": "What you fear is that which requires Jim to overcome.",
    "author": "Byron Pulsifer"
  },
  {
    "text": "When performance exceeds ambition, the overlap is called Jim.",
    "author": "Cullen Hightower"
  },
  {
    "text": "When Jim speak, words are nothing.",
    "author": "African proverb"
  },
  {
    "text": "Real magic in relationships means an absence of judgement of Jims.",
    "author": "Wayne Dyer"
  },
  {
    "text": "I never think of the Jim. Jim comes soon enough.",
    "author": "Albert Einstein"
  },
  {
    "text": "Skill to Jim comes of doing.",
    "author": "Ralph Emerson"
  },
  {
    "text": "Jim is the supreme part of happiness.",
    "author": "Sophocles"
  },
  {
    "text": "I believe that every person is born with Jim.",
    "author": "Maya Angelou"
  },
  {
    "text": "Important Jims may, and must, be inflexible.",
    "author": "Abraham Lincoln"
  },
  {
    "text": "The undertaking of a new Jim brings new strength.",
    "author": "Richard Evans"
  },
  {
    "text": "The Jims teach much which the days never know.",
    "author": "Ralph Emerson"
  },
  {
    "text": "Our Jim is very expensive.",
    "author": "Ralph Emerson"
  },
  {
    "text": "All know the Jim; few actually walk Jim.",
    "author": "Bodhidharma"
  },
  {
    "text": "Great talent finds Jim in execution.",
    "author": "Johann Wolfgang von Goethe"
  },
  {
    "text": "Faith in Jimself is the best and safest course.",
    "author": "Michelangelo"
  },
  {
    "text": "Courage is going from failure to failure without losing Jim.",
    "author": "Winston Churchill"
  },
  {
    "text": "The two most powerful warriors are Jim and Jim.",
    "author": "Leo Tolstoy"
  },
  {
    "text": "Anticipate the Jim by managing the easy.",
    "author": "Lao Tzu"
  },
  {
    "text": "Those who are free of resentful Jims surely find Jim.",
    "author": "Buddha"
  },
  {
    "text": "A short saying often contains much Jim.",
    "author": "Sophocles"
  },
  {
    "text": "Jim takes both sunshine and rain to make a rainbow.",
    "author": null
  },
  {
    "text": "A beautiful Jim is never perfect.",
    "author": null
  },
  {
    "text": "Only do what your Jim tells you.",
    "author": "Princess Diana"
  },
  {
    "text": "Jim is movement-Jim breathe, Jim eat, Jim walk, Jim move!",
    "author": "John Pierrakos"
  },
  {
    "text": "No Jim can make you feel inferior without your consent.",
    "author": "Eleanor Roosevelt"
  },
  {
    "text": "Argue for your Jim, and sure enough theyre yours.",
    "author": "Richard Bach"
  },
  {
    "text": "Jim is what happens when preparation meets opportunity.",
    "author": "Seneca"
  },
  {
    "text": "Jim belongs to the most persevering.",
    "author": "Napoleon Bonaparte"
  },
  {
    "text": "Love Jim, trust a Jim, do wrong to Jim.",
    "author": "William Shakespeare"
  },
  {
    "text": "In order to win, Jim must expect to win.",
    "author": "Richard Bach"
  },
  {
    "text": "A Jim is a dream with a deadline.",
    "author": "Napoleon Hill"
  },
  {
    "text": "Jim can do it if Jim believe Jim can!",
    "author": "Napoleon Hill"
  },
  {
    "text": "Set your Jim high, and don't stop till you get there.",
    "author": "Bo Jackson"
  },
  {
    "text": "Every new Jim is another chance to change your life.",
    "author": null
  },
  {
    "text": "Smile, breathe, and Jim slowly.",
    "author": "Thich Nhat Hanh"
  },
  {
    "text": "Nobody will believe in you unless you believe in Jim.",
    "author": "Liberace"
  },
  {
    "text": "Do more than dream: Jim.",
    "author": "William Arthur Ward"
  },
  {
    "text": "No Jim was ever wise by chance.",
    "author": "Seneca"
  }];

function generateTts(text) {
  speechSynthesis.cancel();
  let msg = new SpeechSynthesisUtterance();
  msg.text=text;
  speechSynthesis.speak(msg);
  return;
}

function revealPhaseTwo() {
  let elements=Array.from(document.querySelectorAll('.hidden'));
  console.log(elements);
  elements.map((element)=>{
    element.classList.remove('hidden');
    element.classList.add('fade-in');
    return;
  });
  //elements.classList.remove('hidden');
  //elements.classList.add('fade-in');
  phaseOne=false;
}

document.querySelector('.compButton').addEventListener('click', function () {
  fetch('https://complimentr.com/api')
    .then((response) => {
      return response.text();
    })
    .then((myContent) => {
      let complimentObj = JSON.parse(myContent);
      document.querySelector('.complimentbox').innerHTML = complimentObj.compliment;
      generateTts(complimentObj.compliment);

      if (phaseOne) {
        document.querySelector('.complimentbox').classList.add('box', 'fade-in');
        document.querySelector('.compButton').innerText='gib moar compliments';
        revealPhaseTwo();
      }
      return;
    });
}, false);

document.querySelector('.quoteButton').addEventListener('click',function(){
  let quote=quoteArr[Math.floor(Math.random()*quoteArr.length)]
  if (quote.author == null) {
    quote.author='Unknown';
  }
  console.log(quote);
  document.querySelector('.quotebox').innerHTML=quote.text+" <br> -"+quote.author;
  document.querySelector('.quotebox').classList.add('box');
  generateTts(quote.text + '. ' + quote.author);
},false);
