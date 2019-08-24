const kick = require('commander');

const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

const files = require('./lib/files');
const github = require('./lib/github_credentials');

kick 
	.command('init')

	.description('Draw app banner')

	.action(() => {
		clear();
		console.log(chalk.magenta(figlet.textSync('kick', { horizontalLayout: 'full'})));
	}); 
 
 kick
	.command('octocheck')
	.description('Check user GitHub credentials')
	.action(async () => {
		let token = github.getStoredGitHubToken();
		if (!token) {
			await github.setGitHubCredentials();
			token = await github.registerNewToken();
		}
		console.log(token);
	});

kick.parse(process.argv);
if(!kick.args.length){
	kick.help();
}