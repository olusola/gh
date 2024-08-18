# Notes - Time spent - Around 4hours

Data fetch - I used react-query to help with data fetching as it returns data, accurate error and loading states which can be used to display relevant states to the customer.

Decided to pick the the first 10 products from the API response in order to showcase the required features quickly. However, for a production based implementation and with more time, it would be better to create pagination feature so a user is able to see more products returned from the end point.

Example - we can show 50 products per page.

UI Library - shadcn/Radix headless component library which works really well with tailwind in order to provide quick styling to components

I used react context to provide a global state management for the cart view - this makes it eaiser to access any cart related data from any page or view withing the app.

Hooks - Cart, Products, Categories
I made use of hooks to improve code readability and also extract logics away fro components.

Features Not Impletemented

With a bit more time, would have loved to finish off the cart view and confirmation page.
