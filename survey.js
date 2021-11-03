const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What is your name? ', name => {
	rl.question("What's an activity you like doing? ", actv => {
		rl.question('What do you listen to while doing that? ', music => {
			rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', meal => {
				rl.question("What's your favourite thing to eat for that meal? ", faveFood => {
					rl.question('Which sport is your absolute favourite? ', sport => {
						rl.question('What is your superpower? ', superPow => {
							console.log(`${name} loves listening to ${music} while ${actv}, devouring ${faveFood} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superPow}.`);
							rl.close();
						});
					});
				});
			});
		});
	});
});


