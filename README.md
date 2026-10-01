# Sprint 06 - ShopZone

A React-based Single Page E-Commerce application
built for the Prodesk Sprint 06 assignment.

## Features

- React Router
- Home route
- Shop route
- Contact route
- Dynamic product routes
- Product details
- DummyJSON REST API
- Context API
- Global shopping cart
- Cart quantity management
- Cart total calculation
- localStorage persistence
- Mock guest authentication
- Protected checkout route
- Responsive UI
- Vercel deployment

## Routes

/
 /shop
 /product/:id
 /contact
 /cart
 /login
 /checkout

## API

Products:

https://dummyjson.com/products

Single Product:

https://dummyjson.com/products/:id

## Tech Stack

- React
- Vite
- JavaScript
- React Router DOM
- Context API
- CSS
- DummyJSON API

## State Architecture

AuthProvider
    ↓
CartProvider
    ↓
App
    ↓
Routes

## Run Locally

npm install

npm run dev

## Production Build

npm run build

## Deployment

The application is deployed using Vercel.