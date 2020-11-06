exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": 'text/plain; charset=UTF-8',
        },
        body: 'test string'
    };
}