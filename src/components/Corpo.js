import Posts from "./Posts"
import SideBar from "./SideBar"
import Stories from "./Stories"



export default function Corpo(){
   return (
    <div ClassName="corpo">
        <div ClassName="esquerda"> 
            <Stories/>
            <Posts/>
        </div>        
        <SideBar/>
    </div>
    )
}