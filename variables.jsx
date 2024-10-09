import image1 from "./src/assets/videoStreamingClient(1).jpeg"
import image2 from "./src/assets/videoStreamingClient(2).jpeg"
import image3 from "./src/assets/videoStreamingAdmin(1).jpeg"
import image4 from "./src/assets/videoStreamingAdmin(2).jpeg"
import image5 from "./src/assets/chat-app-1.jpeg"
import image6 from "./src/assets/chat-app-2.jpeg"


export const projects = [
    {
      title:"Video-Streaming-App",
      image:{1:image1,
        2:image2
      },
      link:"https://video-streaming-app-client.vercel.app/",
      technology:"React, Node js, Express, Mongodb, Stripe, jwt, Scss, postman, material-ui, multer, firebase",
      features:[

        {
            title:"Get Recommendation",
            discription:"Get recommendations based on recent activity"
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
            title:"Add ratings",
            discription:null
        },
        {
            title:"Jwt authentication",
            discription:"Refresh tokens feature for enhanced security"
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
      image:{1:image3,
        2:image4
      },
      link:"https://streaming-app-nu-two.vercel.app/",
      technology:"React, Node js, Express, Mongodb, jwt, MUI datagrid, Recharts, Firebase, Scss, multer",
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
    {
      title:"Chat-App",
      image:{1:image5,
        2:image6
      },
      link:"https://chat-app-ten-neon.vercel.app/",
      technology:"React, Typescript, Tailwind css, Node js, Express, Mongodb, Socket.io",
      features:[
          {
              title:"Real time chat using socket.io",
              discription:null
          },
          {
              title:"Chats stored in database",
              discription:null
          },
          {
              title:"Moniter number of unread and latest messages",
              discription:null
          },
      ]
    },
   
]