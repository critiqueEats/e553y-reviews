module.exports = (restaurantId) => `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Lorem-yelpsum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div id="reviews">this should disappear</div>
        <script src="/bundle.js"></script>
        <script>
            ReactDOM.render(
            React.createElement(Reviews, {restaurantId: ${restaurantId}}, null),
            document.getElementById('reviews')
            );
        </script>
    </body>
    </html>
`