import theme from 'styles/theme';

const textList = [
  'c:\\why\\arent\\we\\getting\\curious.exe? 🤓',
  '"Why.so.SERIOUS? 🤡"',
  '"I know kung-fu...💥"',
  '"The Lannisters send their regards 🔪"',
  '"Sometimes you have to put your faith in the machine 🤖"',
  '"NO. THERE IS NO MORE TIME, EVEN FOR CAKE. FOR YOU, THE CAKE IS OVER. YOU HAVE REACHED THE END OF CAKE 💀"',
  '"I came here to drink milk and kick arse. And I\'ve just finished my milk 🥛"',
  'F5 F5 F5....it\'s always just refreshing with you isn\'t it!',
  '"I can\'t fight pirates without coffee ☕"',
  '"Up until the punching, it was a real nice party 🍸"',
];

export default {
  text: textList[Math.floor(Math.random() * textList.length)],
  style: `
    font-family: ${theme.fontHeading};
    font-size: 16px;
    font-weight: 700;
    padding: 1em;
    background-color: ${theme.colorCharcoal};
    color: cyan;
  `,
};
