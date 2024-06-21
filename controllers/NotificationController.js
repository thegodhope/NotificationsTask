const userService = require("../services/UserService");
const walletService = require("../services/WalletService");
const notificationService = require("../services/NotificationService");
const errorHandler = require("../utils/ErrorHandler");

const handleFailedDeposit = async (req, res) => {
  try {
    const { userId, amount, notification_type } = req.body;
    const user = await userService.getUserId(userId);
    const walletBalance = await walletService.getWalletBalance(userId);
    if (walletBalance < amount) {
      const message = `Dear ${user.name}, your automated deposit of $${amount} failed due to insuficicent funds. Please top up your wallet`;
      if (notification_type === "mobile") {
        await notificationService.sendMobileNotification(user.phone, message);
      } else if (notification_type === "email") {
        await notificationService.sendEmailNotification(
          user.email,
          "Failed Deposit Notification",
          message
        );
      }
      return res.status(200).send({
        message: "Notification sent",
      });
    }
    return res.status(200).send({
      message: "balance is suffficient",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  handleFailedDeposit,
};
