
export const projects = [
    {
      title:"Movie-Streaming-App",
      image:{1:"src/assets/Screenshot 2024-08-12 185710 (1).jpeg",
        2:"src/assets/Screenshot 2024-08-13 120151 (1).jpeg"
      },
      link:"",
      technology:"React, Node js, Express, Mongodb, Stripe, jwt, Scss, postman, material-ui",
      features:[

        {
            title:"Jwt authentication",
            discription:"Refreshe tokens feature for enhanced security"
        },
        {
            title:"Stripe subscription",
            discription:"choose a plan, update current subscription, cancel current subscription"
        },
        {
            title:"Update account infromation",
            discription:"update account details, update profile image using multer and firebase storage, change password  "
        },
        {
            title:"Forgot password",
            discription:"OTP verification by email"
        },
        {
            title:"Add to watchlist",
            discription:"access all watchlisted movies in one page"
        },
        {
            title:"Sort",
            discription:"Sort Movies by genre, by type(series/movie), by watchlist"
        },
        {
            title:"search feature",
            discription:"search movies with autocomplete suggestions"
        },
        {
            title:"Custom video player",
            discription:"select video quality, scrollbar with timestamp and timestamp image"
        },
      ]
    },
    {
      title:"Admin-Panel",
      image:{1:"src/assets/Screenshot 2024-08-13 110000 (1).jpeg",
        2:"src/assets/Screenshot 2024-08-13 120514 (1).jpeg"
      },
      link:"",
      technology:"React, Node js, Express, Mongodb,jwt, MUI datagrid, Recharts, Firebase, Scss",
      features:[
          {
              title:"Tables(users, products, lists)",
              discription:"server side sorting, server side search with autocomplted suggestions, server side pagination, delete(products, customer and lists), toggle user admin status"
          },
          {
              title:"Chart",
              discription:"find number of users joined each month through a chart"
          },
          {
              title:"CRUD operations",
              discription:"create, get, update and delete data"
          },
        {
            title:"Update account infromation",
            discription:"update account details, update profile image, change password  "
        },
        {
            title:"Jwt authentication",
            discription:"Refreshes tokens feature for enhanced security"
        },
        {
            title:"Forgot password",
            discription:"OTP verification by email"
        },
        {
            title:"Firebase storage",
            discription:"Images and videos are stored in Firebase, and links to them are stored in MongoDB."
        },
      ]
    },
   
]