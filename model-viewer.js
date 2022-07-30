import { projects } from "./projects.js";
const  url_string = window.location.href;
const  url = new URL(url_string);
const  CurrentprojectID = url.searchParams.get("id");
const currentproject = projects.find(projects=> projects.id === CurrentprojectID)

const iframe = document.getElementById("Model-iframe").src=currentproject.url
console.log(document.getElementById("Model-iframe"))