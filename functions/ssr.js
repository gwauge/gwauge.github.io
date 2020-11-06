exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": 'text/html; charset=UTF-8',
        },
        body: `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>My SSR site</title>
                </head>
                <body>
                    <h1>Hello, and welcome!</h1>
                </body>
            </html>
        `
    };
}