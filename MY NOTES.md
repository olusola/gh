# Notes - Time spent - Around 4hours

Data fetch - I used react-query to help with data fetching as it returns data, accurate error and loading states which can be used to display relevant states to the users.

Decided to pick the the first 10 products from the API response in order to showcase the required features quickly. However, for a production based implementation and with more time, it would be better to create pagination feature so a user is able to see more products.

Example - we can show 50 products per page.

UI Library - shadcn/Radix headless component library which works really well with tailwind to provide quick styling to components

I used react context to provide a global state management for the cart view - this makes it eaiser to access any cart related data from different views within the app.

Hooks - Cart, Products, Categories

-   I made use of hooks to improve code readability and also extract logics away fro components.

Could be better

-   Error and loading states could be better by using suspense and error boundry method available Next.js

With a bit more time

-   Would have created more granular tests for all components,
-   Created a dedicated page for payment/order confirmation and show list of products purchased
-   add feedback after every user interaction using an inline message or a toast component
-   Create a payment and Order hook
-   Extract Alert component into a separate file with relevant props

Not implemented

-   Tests
-   Product quantity via cart
