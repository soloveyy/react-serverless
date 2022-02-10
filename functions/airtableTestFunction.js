const Airtable = require('airtable')

Airtable.configure({
    apiKey: 'keyfNMJkJnT6QdGek'
})
const base = Airtable.base('appvDSsL0hCFAMME1');


exports.handler = (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            msg: 'Hello Wotld',
            msg2: 'It is Denis',
        }),
    }
}

