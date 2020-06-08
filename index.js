/*
 * This template contains a HTTP function that responds with a greeting when called
 *
 * Always use the FUNCTIONS HANDLER NAMESPACE
 * when writing Cloud Functions for extensions.
 * Learn more about the handler namespace in the docs
 *
 * Reference PARAMETERS in your functions code with:
 * `process.env.<parameter-name>`
 * Learn more about parameters in the docs
 */

const functions = require('firebase-functions');

exports.greetTheWorld = functions.handler.pubsub.schedule.onRun(() => {
  // And here we reference an auto-populated parameter (its value is provided by Firebase after installation)
  const instanceId = process.env.EXT_INSTANCE_ID;

  const greeting = `Hello World from ${instanceId}`;

  return console.log(greeting);
});
