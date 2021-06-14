---
id: snapchat
title: Snapchat
sidebar_label: Snapchat
---

In order to connect a Snapchat business account as a datasource for Klar you need the following information:

- A Snap Chat OAuth App with the following credentials: 
    - Snap Client ID
    - Snap Client Secret Key

---

## How to create a SnapChat OAuth App 

You need to create a Snapchat OAuth app so that Klar can access your data.

1. Go to `https://business.snapchat.com/` and login with your Snapchat credentials.
2. Click on **Business** on the menu bar on the left side and when the menu opens click on **Business Details**:

   ![Snapchat: 1](/img/assets/snapchat/snapchat_1.png)

3. On the "Business Details" page scroll to the bottom and click on **+ OAuth App**

    ![Snapchat: 2](/img/assets/snapchat/snapchat_2.png)

4. On the "Create OAuth App" dialog enter a name for the credentials (1), e.g. "Klar!" and paste the following URL in the field **Snap Redirect URI** (2): `https://app.getklar./com/datasources/snapchat/callback`. Click on **Save** (3)
 
   ![Snapchat: 3](/img/assets/snapchat/snapchat_3.png)


5. Once the credentials have been created, copy and paste the "Snap Client ID" (1) and paste it into Klar! and then click on **Copy Secret** (2) to copy the Snap Client Secret Key into your clipboard. Paste it also into the corresponding field in Klar!.  

   ![Snapchat: 3](/img/assets/snapchat/snapchat_4.png)



:::note Info
Leave that window open in case you need to copy the password into the clipboard again.
:::

---
