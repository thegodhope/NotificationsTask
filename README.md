# Automated Deposit Notification System

This project is an Express.js application that sends email or SMS notifications to users when a deposit fails due to insufficient funds.

##### Prerequisites

Before you begin, ensure you have the following installed on your machine:

-Node.js (v14.x or later)
-npm (v6.x or later)

-clone repo
<code>
git clone https://github.com/thegodhope/NotificationsTask.git
cd your-repository
</code>

### Install Dependencies

<code>npm install</code>

### Environment Variables

Create a .env file in the root directory and add the following environment variables:

```
PORT: Port
MAIL_USER : Mailtrap user
MAIL_PASS : Mailtrap password
```

### API Endpoint

##### POST /api/notifications/deposit-failed

This endpoint sends a notification to the user if a deposit fails due to insufficient funds.

###### Request Body

<code>
{
  "userId": 1,
  "amount": 500,
  "notification_type": "email"
}
</code>

-userId: ID of the user.
-amount: The amount of the deposit that was attempted.
-notification_type: Type of notification ('email' or 'mobile').

#### Response

-200 OK: Notification sent.
-400 Bad Request: Balance is sufficient.
-404 Not Found: User not found.
-500 Internal Server Error: An error occurred.
