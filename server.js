const express = require("express");
const app = express();
const { xQuotes } = require('./libs/quotes');

app.get(
    ["/", "/:quotes_to_display"],
    (request, response) => {
        let quotes_to_display = parseInt(request.params.quotes_to_display)
        if (isNaN(quotes_to_display)) quotes_to_display = 10
        response.status(200).send(xQuotes(parseInt(quotes_to_display)))
    }
);

app.listen(3000);
