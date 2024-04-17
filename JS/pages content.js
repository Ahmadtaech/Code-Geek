import { articlesArray } from '../API.js'
let index = document.getElementById('index').innerHTML;
let category = document.getElementById('category');
let langName = document.getElementById('langName');
let lessonNumer = document.getElementById('lessonNumer');
let articleName = document.getElementById('articleName');
let article = document.getElementById('article');

category.innerHTML = articlesArray[index].category;
langName.innerHTML = articlesArray[index].langName;
lessonNumer.innerHTML = articlesArray[index].lessonNumer;
articleName.innerHTML = articlesArray[index].articleName;
article.innerHTML = articlesArray[index].article;