const master = require("./master.json");

const quoteOnly = master.reduce(
    (carry, item) => {
        return carry.concat(item.quotes); 
    },
    []
);

require("fs").writeFileSync(`${__dirname}/quotes.json`, JSON.stringify(quoteOnly));
