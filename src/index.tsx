import './index.css';
import {store} from "./redux/state";
import {rerenderEntireTree} from "./Render";



store.subscribe(rerenderEntireTree);
rerenderEntireTree();





/*reportWebVitals();*/
