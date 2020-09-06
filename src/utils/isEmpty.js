function isEmpty(obj, res, message) {

    if (obj.length == 0) {
        res.status(404);
        res.json({ errorMessage: message });
        return res;
    }
    else {
        res.status(200);
        res.json(obj);
        return res;
    }
}

module.exports = isEmpty;