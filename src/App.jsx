import ProfileCard from "./Profilecard.jsx"

function App() {
  

  return (
    <>

    <ProfileCard />
    
     <ProfileCard 
     image = "./src/assets/settee.jpeg" />

     <ProfileCard 
     image = "./src/assets/joseph.jpg"
     username = "Nicholas Cage"
     age = {45}
     location = "West Indice"
     occupation = "Wrestling"
     bio = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos atque enim similique!Eos atque enim similique"
     hobbies = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos atque enim similique!"/>
    </>
  )
}

export default App
