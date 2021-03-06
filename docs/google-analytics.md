---
id: google-analytics
title: Google Analytics
sidebar_label: Google Analytics
---

In order to connect a Google Analytics account as a datasource for Klar you need the following information:

- A Google Analytics View ID
- Authorization via Google Authentication (OAuth)

---

## How to find your View ID

1. Go to https://analytics.google.com and login with the account you want to connect to Klar as a datasource.
2. Click on the selector in the top left corner that says _“All accounts > Your Website > All Web Site Data”_.

   ![Google Analytics: 1](/img/assets/google-analytics/google-analytics-1.png)

3. Your View ID is to be found in the Views section below the name of the view (e.g. “All Web Site Data”), e.g. _123456789_. Please copy and paste that View ID as you'll need it later to configure your datasource in Klar.

   ![Google Analytics: 2](/img/assets/google-analytics/google-analytics-2.png)

4. Go to the Admin section of Google Analytics.

   ![Google Analytics: 2a](/img/assets/google-analytics/google-analytics-2a.png)

5. In the 'View' column, click on "View User Management".

   ![Google Analytics: 2b](/img/assets/google-analytics/google-analytics-2b.png)

6. Click the "+"-Button and then click on "Add Users".

![Google Analytics: 2c](/img/assets/google-analytics/google-analytics-2c.png)

7. Enter `klar-653@invertible-star-288412.iam.gserviceaccount.com` as an email address for the user (1), make sure "Read & Analyse" is selected as a permission for the user (2) and then click "Add" (3).

![Google Analytics: 2d](/img/assets/google-analytics/google-analytics-2d.png)

---

## How to configure the Google Analytics datasource in Klar

1. Go to https://app.getklar.com and login with your Klar account.
2. Go to https://app.getklar.com/app/datasources and click the “+”-Button.

   ![Google Analytics: 3](/img/assets/google-analytics/google-analytics-3.png)

3. Select “Google Analytics” in the drawer that opens on the right hand side.

   ![Google Analytics: 4](/img/assets/google-analytics/google-analytics-4.png)

4. Enter your Google Analytics View ID and click “next”.

   ![Google Analytics: 5](/img/assets/google-analytics/google-analytics-5.png)

5. (optional) Give your Google Analytics datasource a name.

![Google Analytics: 6](/img/assets/google-analytics/google-analytics-6.png)

6. Confirm that the information you’ve entered is correct, then click “Add Google Analytics Datasource”.

![Google Analytics: 7](/img/assets/google-analytics/google-analytics-7.png)

:::note Info
Klar redirects you to “Sign in with Google"
:::

7. Choose the Google Account that has permissions to access the Google Analytics account you want to connect to Klar and login with your Google credentials.

:::note Info
Google redirects you back to Klar
:::

8. The new Google Analytics datasource has been added to your shop as a new datasource and Klar is beginning to import your data.

---
