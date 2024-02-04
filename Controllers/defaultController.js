const defaultController = (req, res) => {
  res.status(200).send({
    Message: "Ecommerce API",

    Endpoints: "PRODUCT and USER",
    Github: "https://github.com/ajay-kumar-gour/Ecommerce-API",
    Developer: "Ajay Kumar Gour",
  });
};

module.exports = defaultController;
