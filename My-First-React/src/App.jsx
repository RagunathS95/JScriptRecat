import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";
import List from "./List.jsx";

function App() {
  

const fruits = [
                {id:1,name:"apple",calories:"55"},
                {id:2,name:"pineapple",calories:"35"},
                {id:3,name:"iceapple",calories:"65"}
               ];

const Veggies = [{id:1,name:"carrot",calories:"50"},
                 {id:2,name:"beetroot",calories:"75"},
                 {id:3,name:"Spinach",calories:"15"}
                ];

return(
    <>
    {fruits.length>0 &&
    <List items={fruits} category="Fruits" />}
    {Veggies.length>0 &&
    <List items={Veggies} category="Veggies"/>}

    {/* <Student name="Jin" age="20"/>
    <Student/>
     <Header/> 
    <Card/>
    <Footer/> */}
    </>
);

}

export default App
