# Submit to Google Spreadsheet from React

Based on [an article by David McCoy](https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175) and [a further comment by Joel Aguero](https://medium.com/@joelaguero/thanks-david-mccoy-for-this-great-guide-1eaed8eb9668), this is a basic demo that (after some setup) will allow you to submit a name and email form to a Google Spreadsheet.


To run this demo (paraphrasing the article):
1. Create a Google Spreadsheet where the first row has `email` and `name`.
2. Go to `Tools -> Script Editor` and paste code from [the forked Google Apps Script gist](https://gist.github.com/tayiorbeii/cc8dc6a1028f0e8040c82d34d857bd64).
3. `Run -> Setup`
4. `Publish -> Deploy as web app...` and set to `Execute as me` and access for `Anyone, even anonymous`.
5. Copy the deployment URL, and paste it in `App.js`

It's unstyled, but has [basic email validation](https://www.npmjs.com/package/email-validator).

![https://i.imgur.com/RcKhyCO.gif]


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
