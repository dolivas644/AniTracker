# AniTracker
<img src="https://github.com/dolivas644/AniTracker/blob/main/client/src/components/Images/Head.png?raw=true">
<h2 align="center"> Why use Anime Tracker? - App Overview </h2>
  ANIME TRACKER is an application for users that have an interest in anime and are looking to keep track of what they are currently watching and have completed. With the rise in popularity of anime, the frequent release of anime makes it difficult to keep track of the current and past anime schedule. 
  <br></br>
  <h1 align="center">TEST SITE HERE</h1>
  <a align="center" href="https://server-0zje.onrender.com" >ANIME TRACKER DEPLOMENT</a>
  <h2 align="center">MOCK USER ACCOUNTS (CAN BE USED TO TEST SITE)</h2>
  <table align="center">
  <tr>
    <th>EMAIL</th>
    <th>PASSWORD</th>
  </tr>
  <tr>
    <td>Yolis@TheCoolCat.com</td>
     <td>Manolo333</td>
  </tr>
  <tr>
     <td>Xochitl@TheTurtleCycler.com</td>
     <td>Cannondale23</td>
  </tr>
  <tr>
     <td>Kimmy@TheCandyHoarder.com</td>
     <td>SweetLikeMe64</td>
  </tr>
  <tr>
     <td>Dean@TheEdgeLord.com</td>
     <td>IAmTheMasterpiece101</td>
  </tr>
</table>
<h3 align="center"> Goal for users </h3>
  <ol>
  <li> Keep track of anime (Currently watching & completed)</li>
  <li> Search for anime </li>
  <li> Look at the top rankings from the following categories</li>
  <ol>
    <li> Anime</li>
    <li> Manga</li>
    <li> Characters</li>
    <li> People</li>
  </ol>
 </ol>
<h2 align="center">> Techstack </h2>
   <table align="center">
  <tr align="center">
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202346526-a5ff4025-f329-4869-9bf2-a55c438acce4.png" height="30px"><br>HTML</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202346792-38f643ef-1547-437c-be94-934896ffb419.png" height="30px"><br>CSS</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202346924-4c884b4b-2ae1-4c99-96e3-5928237c2608.png" height="30px"><br>JavaScript</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202349986-4508269e-0ccc-4557-8387-b200fd48eff5.png" height="30px"><br>Express</td>
  </tr>
     <tr align="center">
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202350485-fbca3896-cdf0-42b6-bace-5ff4130d0745.png" height="30px"><br>React</td>
    <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202350785-7c97d6ee-cfdd-42d8-bf66-754ebf06609b.png" height="30px"><br>Node JS</td>
        <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202349804-b01c7de8-8a26-477d-87b7-6533268deafe.png" height="30px"><br>postgreSQL</td>
         <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202370441-e6500520-443f-46c0-8062-243cfdf0ee84.png" height="30px"><br>emailJS</td>
  </tr>
</table>
   <h2 align="center">APIs</h2>
   <table align="center">
     <tr>
         <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202351394-d7590e35-21ac-4f29-b042-b91299187901.png" height="30px"><br>Jikan</td>
        <td align="center"><img src="https://user-images.githubusercontent.com/76704309/202351473-c2b9308b-9fd1-4dd6-980e-108bb1eb8731.png" height="40px"><br>Auth0</td>
     </tr>
   </table>
<h2 align="center">Minimum Viable Product</h2>
<h3 align="center">Tier 1</h3>
<ul >
  <li>Find anime using search bar</li>
  <li>Allow users to add anime to watchlist</li>
  <li>User Registration</li>
</ul>
<h3 align="center">Tier 2</h3>
<ul >
  <li>Complete anime watchlist</li>
  <li>Allow users to remove anime from watchlist</li>
  <li>Get top rankings from different categories</li>
</ul>
<h3 align="center">Tier 3</h3>
<ul >
<li>Allow users to comment on anime pages</li>
</ul>
<h4 align="center">Future additions</h4>
<ul>
  <li>Allow users to rate anime in their list</li>
  <li>Allow users to make their own custom lists</li>
</ul>
<h3 align="center">Technical Risks</h3>
<ul>
  <li>Difficulty in saving anime data from API into database</li>
</ul>
<h2 align="center">Drawing Board/Planning Phase</h2>
<h3 align="center"> Official Database Schema </h3>
<h4 align="center">User</h4>
<table align="center">
  </tr>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Picture</th>
    <th>Email</th>
    <th>Sub</th>
  </tr>
  <tr>
    <td>Primary Key</td>
    <td>Character Varying</td>
    <td>Character Varying</td>
    <td>Character Varying</td>
    <td>Character Varying</td>
  </tr>
</table>
<h4 align="center">Anime</h4>
<table align="center">
  <tr>
    <th>mal_id</th>
    <th>Title</th>
    <th>Image</th>
  </tr>
  <tr>
    <td>Integer (Primary Key)</td>
    <td>Text</td>
    <td>Text</td>
  </tr>
</table>
<h4 align="center">user_anime_list</h4>
<table align="center">
  <tr>
    <th>Id</th>
    <th>user_id</th>
    <th>anime_id</th>
    <th>complete</th>
  </tr>
  <tr>
    <td>Integer (Primary Key)</td>
    <td>Integer (Foreign Key: user.id)</td>
    <td>Integer (Foreign Key: anime.mal_id)</td>
    <td>Boolean</td>
  </tr>
</table>
<h5 align="center">Original Schema</h5>
<img src="https://i.postimg.cc/1z77NQ27/Screenshot-20221116-081806.png)](https://postimg.cc/67RfDD9C">
<h2align="center">Wireframe</h2>
<img height="500px" width="100%" src="https://i.postimg.cc/mDX0y9q4/Screenshot-20221116-085717.png)](https://postimg.cc/62Zj98tb)">
<img height="500px" width="100%" src="https://i.postimg.cc/R0sBX262/Screenshot-20221116-085801.png)](https://postimg.cc/Lq1wsCVV))">
<h2 >Installation</h2>
<h3>Node</h3>
I strongly recommend using a Node version manager like <a href="https://www.w3schools.com](https://github.com/nvm-sh/nvm"></a> 
To install Node.js and npm 
<h3>Install</h3>
*Disclaimer: The app uses Auth0 and requires an Auth0 domain + ClientId to use. As wellas email JS, which requires an emailJS account: service id, domain id and template id*<br>
Clone the repo:<br>
<br><code>https://github.com/dolivas644/AniTracker.git</code>
<br>To clean your folder from the owner git, run the command:
<br><code>rm -rf .git</code>
<br>Run the command to start your directory:
<br><code>git init</code>
<br>Go to the server folder in the project:
<br><code>cd server</code>
<br>Install all NPM packages using this in the root directory:
<br><code>npm install</code>
<br>Inside your server folder, create an .env file with:
<br><code>touch .env</code>
<br>Inside your .env add:
<br><code>postgres://localhost:5432/AnimeTracker</code>
<br>BACK TO THE TERMINAL:<br>
<br>To restore the DB dump file that the project already contain, just run the command:
<br><code>psql -U postgres -f db.sql</code>
<br>If you had configured your postgres without password just run the command:
<br><code>psql -f db.sql</code>
<br><code>npm start</code>
<br>Go to client folder:
<br><code>cd ..</code>
<br><code>cd client</code>
<br><code> npm install</code>
<br>Both server and Client can run with:
<br><code>npm start</code>
  <h2>Testing</h2>
  <h3>Jest Testing</h3>
  To run tests on the terminal, go to the Clien side and run the following command:
  <code>npm test</code>
  
