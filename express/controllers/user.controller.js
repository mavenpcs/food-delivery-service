exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.orderHistory = (req, res) => {
    res.status(200).send("Customer Content.");
  };
  
  exports.vendorPage = (req, res) => {
    res.status(200).send("Vendor Content.");
  };