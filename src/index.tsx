import './index.css';
import {store} from "./redux/redux-store";
import {rerenderEntireTree} from "./Render";


rerenderEntireTree();

store.subscribe(rerenderEntireTree);





