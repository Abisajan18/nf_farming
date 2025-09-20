import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Create Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-be9f0d97/health", (c) => {
  return c.json({ status: "ok" });
});

// User signup endpoint
app.post("/make-server-be9f0d97/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();
    
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.log(`User signup error: ${error.message}`);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ user: data.user });
  } catch (error) {
    console.log(`Server error during signup: ${error}`);
    return c.json({ error: "Internal server error during signup" }, 500);
  }
});

// Seeds order submission endpoint
app.post("/make-server-be9f0d97/submit-seed-order", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user) {
      return c.json({ error: "Unauthorized - please login to place orders" }, 401);
    }

    const orderData = await c.req.json();
    const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store order in KV store
    await kv.set(`seed_order:${orderId}`, {
      ...orderData,
      userId: user.id,
      userEmail: user.email,
      status: 'pending',
      createdAt: new Date().toISOString(),
      orderId
    });

    // Send to Google Sheets
    await sendToGoogleSheets(orderData, user);

    return c.json({ 
      success: true, 
      orderId,
      message: "Order submitted successfully" 
    });
  } catch (error) {
    console.log(`Error submitting seed order: ${error}`);
    return c.json({ error: "Failed to submit order" }, 500);
  }
});

// Get user orders
app.get("/make-server-be9f0d97/user-orders", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    
    if (authError || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const orders = await kv.getByPrefix(`seed_order:`);
    const userOrders = orders.filter(order => order.userId === user.id);
    
    return c.json({ orders: userOrders });
  } catch (error) {
    console.log(`Error fetching user orders: ${error}`);
    return c.json({ error: "Failed to fetch orders" }, 500);
  }
});

// Submit contact form
app.post("/make-server-be9f0d97/contact", async (c) => {
  try {
    const contactData = await c.req.json();
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store contact in KV store
    await kv.set(`contact:${contactId}`, {
      ...contactData,
      contactId,
      createdAt: new Date().toISOString()
    });

    return c.json({ 
      success: true, 
      contactId,
      message: "Contact form submitted successfully" 
    });
  } catch (error) {
    console.log(`Error submitting contact form: ${error}`);
    return c.json({ error: "Failed to submit contact form" }, 500);
  }
});

// Function to send data to Google Sheets
async function sendToGoogleSheets(orderData: any, user: any) {
  const apiKey = Deno.env.get('GOOGLE_SHEETS_API_KEY');
  if (!apiKey) {
    console.log('Google Sheets API key not configured');
    return;
  }

  try {
    // This is a placeholder for Google Sheets integration
    // You would need to set up a Google Sheets API endpoint
    // and implement the actual integration based on your sheet structure
    console.log('Sending to Google Sheets:', { orderData, userEmail: user.email });
    
    // Example API call structure:
    // const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1:append?valueInputOption=RAW&key=${apiKey}`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     values: [[user.email, orderData.seedType, orderData.quantity, orderData.location, new Date().toISOString()]]
    //   })
    // });
  } catch (error) {
    console.log(`Error sending to Google Sheets: ${error}`);
  }
}

Deno.serve(app.fetch);