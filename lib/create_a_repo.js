const _ = require('lodash');
const fs = require('fs');
const git = require('simple-git')();

const inquirer = require('./inquirer');
const gh = require('./github_credentials');

module.exports = {
	createRemoteRepository: async () => {
		const github = gh.getInstance();

		const answers = await inquirer.askRepositoryDetails();

		const data = {
			name: answers.name,
			description: answers.description,
			private: (answers.visibility === 'private')
		};

		try {
			const response = await github.repos.createForAuthenticatedUser(data);

			return response.data.ssh_url;
		} catch (error) {
			throw error;
		}
	}
}