# Razorpay Integration Guide

This guide explains how to set up and use the Razorpay payment integration in FreshFit.

## Prerequisites

1. A Razorpay account with API credentials
2. Node.js environment set up for both backend and frontend

## Backend Setup

### 1. Environment Variables

Copy the `.env.example` file to `.env` in the backend directory and add your Razorpay credentials:

```bash
cd backend
cp .env.example .env
```

Edit the `.env` file and add your Razorpay credentials:

```env
# Razorpay credentials from your Razorpay Dashboard
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 2. Getting Razorpay Credentials

1. Sign up/Login to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Navigate to Settings > API Keys
3. Generate API keys if you haven't already
4. Copy the `Key ID` (this is your publishable key)
5. Copy the `Key Secret` (this is your secret key)

## Frontend Setup

### 1. Environment Variables

Copy the `.env.example` file to `.env` in the frontend directory:

```bash
cd frontend
cp .env.example .env
```

Edit the `.env` file and add your Razorpay Key ID:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

**Note**: Only use the Key ID (publishable key) in the frontend, never the secret key.

## How It Works

### Payment Flow

1. **Order Creation**: When a user selects Razorpay payment, the frontend sends order details to `/api/order/razorpay`
2. **Razorpay Order**: Backend creates a Razorpay order using the Razorpay API
3. **Checkout**: Frontend opens Razorpay checkout with the order details
4. **Payment**: User completes payment on Razorpay's secure interface
5. **Verification**: Backend verifies the payment status via `/api/order/verifyRazorpay`
6. **Completion**: Order is marked as paid and cart is cleared

### API Endpoints

- `POST /api/order/razorpay` - Create Razorpay order
- `POST /api/order/verifyRazorpay` - Verify Razorpay payment

## Testing

### Test Mode

Razorpay provides test credentials for development:

- Use test API keys from your Razorpay dashboard
- Test payments won't charge real money
- Use test card numbers provided by Razorpay

### Test Card Numbers

```
Card Number: 4111 1111 1111 1111
CVV: Any 3 digits
Expiry: Any future date
```

## Production Checklist

- [ ] Replace test API keys with live keys
- [ ] Enable webhook endpoints for payment notifications (optional)
- [ ] Test with small amounts first
- [ ] Set up proper error logging
- [ ] Configure CORS for your production domain

## Troubleshooting

### Common Issues

1. **"Razorpay is not defined" error**: Make sure the Razorpay script is loaded in `index.html`
2. **"Invalid key_id" error**: Check that your RAZORPAY_KEY_ID is correct
3. **Payment verification fails**: Ensure your RAZORPAY_KEY_SECRET is correct
4. **CORS errors**: Update the CORS configuration in your backend server

### Debug Mode

Enable detailed logging by adding console.log statements in the payment handlers to track the payment flow.

## Security Notes

- Never expose your Razorpay secret key in frontend code
- Always verify payments on the backend
- Use HTTPS in production
- Validate all payment data on the server side

## Support

For Razorpay-specific issues, refer to:
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Integration Guide](https://razorpay.com/docs/payments/payment-gateway/web-integration/)