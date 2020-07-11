module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.get("/api/sample1", function (req, res) {
        res.json({
            success: true,
            portNumber: process.env.PORT || 3000,
            mySuperSecretKey: process.env.MY_SUPER_SECRET_KEY || "for your eyes only"
        });
    });
};