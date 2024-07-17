import Profile from "./components/Profile"
import image from "./assets/pic.jpg"

function App() {
 
 return(
    <div className="app">
        <Profile 
              avatar={image} 
              name="Harvey Specter"
              bio="Advogado Criminalista e Socio administrativo at Suits "
              phone="872311889"
              email="harvey@gmail.com"
              githubUrl="https://github.com"
              linkedinUrl="https://linkedin.com"
              twitterUrl="https://twitter.c0m"


        />
    </div>
 )
}

export default App
