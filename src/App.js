import TopNav from "./Component/TopNav";
import Featured from "./Component/Featured";
import Delivery from "./Component/Delivery";
import TopPicks from "./Component/TopPicks";
import Meal from "./Component/Meal";
import Categories from "./Component/Categories";
import Footer from "./Component/Footer";
import NewsLetter from "./Component/Newsletter";


function App() {
  return (
    <div className="App">
     <TopNav /> 
     <Featured />
     <Delivery />
     <TopPicks />
     <Meal />
     <Categories/>
     <NewsLetter/>
     <Footer/>
    </div>
  );
}

export default App;
