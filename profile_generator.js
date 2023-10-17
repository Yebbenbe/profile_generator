const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question("What's your name? ", (name) => {
  profile.name = name;
  rl.question("Do you like cats? If not, what's wrong with you? ", (likesCats) => {
    profile.likesCats = likesCats;
    rl.question("I'm going to own a tiger later in life. Will you be comfortable sharing our bed with a tiger? ", (tigerComfort) => {
      profile.tigerComfort = tigerComfort;
      rl.question("Do you talk so much that people frequently wish you'd stop? ", (talkative) => {
        profile.talkative = talkative;
        rl.question("Are you Swedish, and if so - will you change? ", (isSwedish) => {
          profile.isSwedish = isSwedish;
          // construct the profile paragraph
          const profileParagraph = `Profile Paragraph:\nName: ${profile.name}\nLikes Cats: ${profile.likesCats}\nComfortable with Tigers: ${profile.tigerComfort}\nTalkative: ${profile.talkative}\nSwedish and Willing to Change: ${profile.isSwedish}\n`;
          // output the profile paragraph
          process.stdout.write(profileParagraph);
          rl.close();
        });
      });
    });
  });
});
