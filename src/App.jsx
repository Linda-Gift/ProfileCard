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

<ProfileCard 
     image = "./src/assets/katherine.jpg"
     username = "Katherine Obadeyi"
     age = {30}
     location = "Oklahoma"
     occupation = "Legal Practitional"
     bio = "I am a brutal Legal practitional with a keen interest in Litigation with 10 years in experience at the bar with upward interest in Company Law and oil exploration"
     hobbies = "John Grisham is my go-to book lover. i love indept research, i dance when i am not in the court, i love tasty meals."/>
    </>
  )
}

export default App
