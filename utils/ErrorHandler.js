const handleError = (res, error) => {
    console.error(error);
    res.status(500).send({
        error: 'An error occured, try again later'
    });
}

module.exports = {
    handleError
}