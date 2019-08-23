const inquirer = require('inquirer');
const minimist = require('minimist');
const files = require('./files');

module.exports = {
	askGitHubCredentials: () => {
		const questions = [
		{
			name: 'username',
			type: 'input',
			message: 'Enter your GitHub username or e-mail address:',
		}];
		return inquirer.prompt(questions);
	}

}