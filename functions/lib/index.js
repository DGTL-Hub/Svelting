const functions = require('firebase-functions');

let sveltekitServer;
exports.sveltekit = functions.region('us-central1').https.onRequest(async (request, response) => {
	if (!sveltekitServer) {
		sveltekitServer = require('./sveltekit/index').default;
	}

	return sveltekitServer(request, response);
});