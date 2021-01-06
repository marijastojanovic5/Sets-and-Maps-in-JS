const ordersSet = new Set([
   'Pasta',
   'Pizza',
   'Risotto',
   'Pasta',
   'Pizza',
   'Pizza',
 ]);

 for (const item of ordersSet) {
   console.log(item);
 }
 console.log(ordersSet);
 console.log(new Set('Marija'));
 console.log(ordersSet.has('Bread'));

 const staff = ['Waiter', 'Cheff', 'Mng', 'Waiter', 'Bartender', 'Mng', 'Door'];
 const st = [...new Set(staff)];
 console.log(st);
 const rest = new Map();
 rest.set('name', 'Clasicco Italiano');
 rest.set(1, 'Firenca');
 rest.set(2, 'Rome');
 rest.set(true, 'we are open').set(false, 'we are closed');
 rest.set('open', 11).set('close', 23);
 console.log(rest);

 const time = 21;
 const result = rest.get(time > rest.get('open') && time < rest.get('close'));
 console.log(result);

 console.log(rest.has('bread'));
 rest.set([1, 2], 'test');
 console.log(rest.get([1, 2]));
 console.log(rest);
 const question = new Map([
   ['question', 'What is the best programming language in the world?'],
   [1, 'c'],
   [2, 'java'],
   [3, 'js'],
   ['correct', 3],
   [true, 'correct :)'],
   [false, 'try again'],
 ]);
 console.log(question);
 const mapHours = new Map(Object.entries(openingHours));
 console.log(mapHours);
 console.log(question.get('question'));
 for (const [key, value] of question) {
   if (typeof key === 'number') {
     console.log(`Answer ${key}: ${value}`);
   }
 }
 const answer = Number(prompt('your answer is: '));
 console.log(answer);
 console.log(question.get(answer === question.get('correct')));
 console.log([...question]);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
gameEvents.delete(64);

const time = [...gameEvents.keys().pop()];
console.log(
  `An event happens on avarage every ${time / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half}HALF] ${min}: ${event}`);
}

}
