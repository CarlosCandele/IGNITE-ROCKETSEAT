// JSX - JavaScript + XML
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
        < Header />
        
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
            author="Jorge Candele"
            content=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis voluptatum autem architecto blanditiis quidem atque provident est similique dolores. Voluptatum, odio. Aliquid totam, recusandae consequatur molestias commodi ab aperiam laboriosam."
            />
             <Post 
            author="Rossana Jorge"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis voluptatum autem architecto blanditiis quidem atque provident est similique dolores. Voluptatum, odio. Aliquid totam, recusandae consequatur molestias commodi ab aperiam laboriosam."
            />
          </main>
        </div>
    </div>
 )
}
 

