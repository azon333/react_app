import "./App.css"
import BusinessCard from './components/first homework/BusinessCard/BusinessCard';
import FavoriteMovie from './components/first homework/FavoriteMovie/FavoriteMovie';
import StudentCard from './components/first homework/StudentCard/StudentCard';
import ProductList from "./components/2 homwork/ProductList";
import Calculator from "./components/3 homework/Calculator";
import MagicBall from "./components/3 homework/MagicBall";
import ThemeBlock from "./components/3 homework/ThemeBlock";
import ShopingList from "./components/4 homework/ShoppingList";
import TodoList from "./components/todo/TodoList";
import { Outlet } from "react-router";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      {/* 1 */}
      {/*<BusinessCard/>*/}
      {/*<FavoriteMovie/>*/}
      {/*<StudentCard/>*/}
      {/*  2  */}
      {/*  <ProductList/>*/}
        {/*3*/}
        {/*<Calculator/>*/}
        {/*<MagicBall/>*/}
        {/*<ThemeBlock/>*/}

        {/*4*/}
        {/*<ShopingList/>*/}

        {/*5*/}
        {/*<TodoList/>*/}

        {/*6*/}
        {/*<ShopingList/>*/}

        {/*7*/}
        <Header />
        <main>
            <Outlet />
        </main>
    </>
  );
}

export default App;