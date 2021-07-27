import { configureStore } from "@reduxjs/toolkit";
import reducer from "./projects";
//import reducer from "./bugs";


export default function () {
    return configureStore({reducer});
  
}