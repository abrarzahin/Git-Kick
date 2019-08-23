const kick = require('commander');

const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

const files = require('./lib/files');

kick 
	.command('init')

	.description('Draw app banner')

	.action(() => {
		clear();
		console.log(chalk.magenta(figlet.textSync('kick', { horizontalLayout: 'full'})));
	}); 

kick.parse(process.argv);
if(!kick.args.length){
	kick.help();
}