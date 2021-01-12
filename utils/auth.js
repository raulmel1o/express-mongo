
const auth = (req, res, next) => {

    console.log(req.headers);

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        
        const err = new Error('You are not authenticated!');
        err.status = 401;

        res.setHeader('WWW-Authenticate', 'Basic');
        
        next(err);

        return;

    }

    const auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');

    const user = auth[0];
    const pass = auth[1];

    if (user == 'admin' && pass == 'password') {
        
        next();

    } else {

        const err = new Error('You are not authenticated!');
        err.status = 401;

        res.setHeader('WWW-Authenticate', 'Basic');
        
        next(err);

    }

}

module.exports = auth;