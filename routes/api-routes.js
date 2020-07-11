module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.get("/api/sample1", function (req, res) {
        console.log({
            success: true,
            portNumber: process.env.PORT
        });
        res.json({
            success: true,
            portNumber: process.env.PORT
        });
    });
};