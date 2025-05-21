## :pushpin: StealTheirLook
&emsp;Our project is a fashion sharing platform that allows people to create post of their outfits and share it with other people. 
Each post will include an image of the attire with checklist of clothing needed for the outfit. We created this project because 
some people see very attractive outfits online, but have no idea how to achieve or complete it. With this web application, 
people will be able to share their outfits, allowing others to be able to have the same outfit.


---

## :rocket: Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/G04_StealTheirlook.git
   cd G04_StealTheirlook
   ```

---

## :hammer: Frontend - React

### :wrench: Tech Stack

- React
- Axios
- React Router DOM
- Tailwind CSS

### :rocket: Getting Started - React Client

1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The client will be running on [http://localhost:5173](http://localhost:5173)

---

## :wrench: Backend - Hono

### :hammer_and_wrench: Tech Stack

- Hono
- MySQL 

### :electric_plug: API Endpoints
### User
| Method | Endpoint                          | Description                                           |
|--------|-----------------------------------|-------------------------------------------------------|
| POST   | `/user/createUser`                | Create an account for a user                          |
| GET    | `/user/getUsername/:userId`       | Get username of a user based on given user id         |
| GET    | `/user/getProfilePicture/:userId` | Get profile picture of a user based on given user id  |
| GET    | `/user/getDisplayName/:userId`    | Get display name of a user based on given user id     |
| GET    | `/user/getJoinDate/:userId`       | Get joined date of a user based on given user id      |
| GET    | `/user/getCreatedPost/:userId`    | Get all posts created by a user based on give user id |
| GET    | `/user/getSavedPost/:userId`      | Get all posts saved by a user based on given user id  |
| PATCH  | `/user/updateProfilePicture`      | Update a user's profile picture                       |
| PATCH  | `/user/updateDisplayName`         | Update a user's display name                          |

### Post
| Method | Endpoint                         | Description                                                                       |
|--------|----------------------------------|-----------------------------------------------------------------------------------|
| POST   | `/post/createPost`               | Create a post                                                                     |
| PATCH  | `/post/getPosts`                 | Get all post with/without filter                                                  |
| GET    | `/post/getPostImage/:postId`     | Get image of a post based on given post id                                        |
| GET    | `/post/getPostTitle/:postId`     | Get title of a post based on given post id                                        |
| GET    | `/post/getPostTag/:postId`       | Get tag of a post based on given post id                                          |
| GET    | `/post/getPostChecklist/:postId` | Get all checklist of a post based on given post id                                |
| DELETE | `/post/deletePost`               | Delete a post                                                                     |
| GET    | `/post/isSaved/:userId&:postId`  | Check whether a post is aleady saved by a user based on given user id and post id |

### Saved Post
| Method | Endpoint                                        | Description                                                      |
|--------|-------------------------------------------------|------------------------------------------------------------------|
| POST   | `/savedPost/createSavedPost`                    | Create a saved post                                              |
| GET    | `/savedPost/getSavedPostImage/:savedPostId`     | Get image of a saved post based in given saved post id           |
| GET    | `/savedPost/getSavedPostTitle/:savedPostId`     | Get title of a saved post based in given saved post id           |
| GET    | `/savedPost/getSavedPostTag/:savedPostId`       | Get tag of a saved post based in given saved post id             |
| GET    | `/savedPost/getSavedPostChecklist/:savedPostId` | Get all checklist   of a saved post based in given saved post id |
| DELETE | `/savedPost/deleteSavedPost`                    | Delete a saved post from a user                                  |

### Check
| Method | Endpoint                 | Description                   |
|--------|--------------------------|-------------------------------|
| PATCH  | `/check/editCheckBrand`  | Update a check's brand entry  |
| PATCH  | `/check/editCheckClothe` | Update a check's clothe entry |

### Saved Check
| Method | Endpoint                  | Description                           |
|--------|---------------------------|---------------------------------------|
| PATCH  | `/savedCheck/updateCheck` | Update a check's status of completion |

### :rocket: Getting Started - Node.js Server

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure the following variables:
   ```
   DATABASE_URL={Your database connection string}
   SHADOW_DATABASE_URL={Your shadow database connection string}
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. The server will be running on [http://localhost:8000](http://localhost:8000)
