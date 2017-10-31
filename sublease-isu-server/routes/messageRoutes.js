(function () {'use strict';

	module.exports = function(app) {
		var message = require("../controllers/messageController.js");

		
		app.route('/messages')
			.post(message.maintainSocket);
		
		app.route('/messages/getUsernamesOfSenders')
			.post(message.getUsernamesOfSenders);

		app.route('/messages/getHistory/:usernameOfSender')
			.post(message.getHistory);

		/*
		// Should be able to implement within backend socket
		app.route('/messages/saveHistory')
			.post(message.saveHistory);
		*/


		/*
		app.route('/messages')
			.post(message.createMessage); // create message

		app.route('listAllMessages')// for admin view
			.post(message.listAllMessages);

		app.route('listUsersMessages')// for user view
			.post(message.listUserMessages);

		app.route('/messages/:messageID')
			.get(message.getSpecificMessage) // in case additional message data needs to be retrieved
			.post(message.updateSpecificMessage) // unlikely to be used, users shouldn't be able to change messages that have been sent
			.delete(message.deleteSpecificMessage); // for admin to remove messages that violate policy
		*/

		// socket routes

	};

}());
