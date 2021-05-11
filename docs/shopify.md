---
id: shopify
title: Shopify
sidebar_label: Shopify
---

In order to connect a Shopify shop as a datasource for Klar you need the following information:

- Shop subdomain (_e.g. `my-awesome-store`.myshopify.com_)
- Private App API Password

---

## How to find your Shop subdomain

The store subdomain can be taken from your Shopify admin URL.

If your URL starts with `https://my-awesome-store.myshopify.com/`, your store subdomain is `my-awesome-store`.

---

## How to get your Private App API Password

You need to create a Private App in your Shopify so that Klar can access your data.

:::note Info
Official Shopify documentation on [setting up a Private App](https://help.shopify.com/en/manual/apps/private-apps).
:::

1. Go to `https://my-awesome-store.myshopify.com/admin` and login with your Shopify credentials.
2. Click on **Apps** on the menu bar on the left side

   ![Shopify: 1](/img/assets/shopify/shopify-1.png)

3. On the "Apps" page click on **Manage private apps**

   ![Shopify: 2](/img/assets/shopify/shopify-2.png)

4. Click on **Create new private app**

   ![Shopify: 3](/img/assets/shopify/shopify-3.png)

5. (1) Give your private App a name, e.g. "Klar Datasource". (2) Enter your email address. (3) Click on "Show inactive Admin API permissions"

   ![Shopify: 4](/img/assets/shopify/shopify-4.png)

6. In order to extract the necessary meta data from Shopify Klar needs the following permissions:

`Analytics (Access scope: read_analytics)`: Read access

![Shopify: 6](/img/assets/shopify/shopify-6.png)

`Customers (Access scope: read_customers)`: Read access

![Shopify: 5](/img/assets/shopify/shopify-5.png)

`Discounts (Access scope: read_discounts)`: Read access

![Shopify: 18](/img/assets/shopify/shopify-18.png)

`Inventory (Access scope: read_inventory)`: Read access

![Shopify: 5a](/img/assets/shopify/shopify-5a.png)

`Locations (Access scope: read_locations)`: Read access

![Shopify: 19](/img/assets/shopify/shopify-19.png)

`Marketing events (Access scope: read_marketing_events)`:   
Read access

![Shopify: 8](/img/assets/shopify/shopify-8.png)

`Orders (Access scope: read_orders)`: Read access

![Shopify: 5](/img/assets/shopify/shopify-7.png)

`Price rules (Access scope: read_price_rules)`: Read access

![Shopify: 20](/img/assets/shopify/shopify-20.png)

`Products (Access scope: read_products)`: Read access

![Shopify: 9](/img/assets/shopify/shopify-9.png)

`Product listings (Access scope: read_product_listings)`: Read access

![Shopify: 21](/img/assets/shopify/shopify-21.png)

For German language settings: 

* `Bestellungen (Zugriffsbereiche: read_orders)`: Lesezugriff
* `Inventar (Zugriffsbereiche: read_inventory)`: Lesezugriff
* `Kunden (Zugriffsbereiche: read_customers)`: Lesezugriff
* `Marketing-Events (Zugriffsbereiche: read_marketing_events)`: Lesezugriff
* `Preisregeln (Zugriffsbereiche: read_price_rules)`: Lesezugriff
* `Produktangebote (Zugriffsbereiche: read_product_listings)`: Lesezugriff
* `Produkte (Zugriffsbereiche: read_products)`: Lesezugriff
* `Rabatte (Zugriffsbereiche: read_discounts)`: Lesezugriff
* `Standorte (Zugriffsbereiche: read_locations)`: Lesezugriff
* `Statistiken (Zugriffsbereiche: read_analytics)`: Lesezugriff

7. Click the **Save**-Button

8. In the modal click **I understand, create the app**

9. You can now obtain the Password you need for the datasource configuration in Klar. In the "Password"-field click on the clipboard-button on the right hand side to copy the password into your clipboard.

![Shopify: 10](/img/assets/shopify/shopify-10.png)

:::note Info
Leave that window open in case you need to copy the password into the clipboard again.
:::

---

## How to configure the Shopify datasource in Klar

1. Go to https://app.getklar.com and login with your Klar account.

2. Go to https://app.getklar.com/app/datasources and click the “Add new Shop”-Button.

![Shopify: 11](/img/assets/shopify/shopify-11.png)

3. Enter your Shopify Store URL, e.g. my-awesome-store. Click "Next".

:::note Info
The .myshopify.com is automatically added to the URL.
:::

![Shopify: 12](/img/assets/shopify/shopify-13.png)

4. (optional) Give your Shopify Store a name. Click "Next".

![Shopify: 14](/img/assets/shopify/shopify-14.png)

5. Paste your Private App Password from Shopify into the field "Shopify Admin API Password / Access Token". Click "Next".

![Shopify: 15](/img/assets/shopify/shopify-15.png)

6. Confirm that the information you’ve entered is correct, then click "Create ShopifyDatasource”.

![Shopify: 15](/img/assets/shopify/shopify-16.png)

7. A new shop has been created, your Shopify Private App was added as a new datasource and Klar is beginning to import your data.

![Shopify: 15](/img/assets/shopify/shopify-17.png)

---
