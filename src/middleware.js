export { default } from "next-auth/middleware"

//Define the route that you wish to protect
export const config = { matcher: ['/todo-list/:id*',"/todo-list", "/todo-board/:id*","/todo-board"] }
