// ==UserScript==
// @name         NavetAppScript
// @version      0.1
// @description  add button to push this movie in the navetapp's database
// @author       Slok
// @match        https://www.imdb.com/title/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function getTab(event){
      const url = `http://vps588796.ovh.net:5000/movie/add/${event.target.offsetParent.baseURI.split('/')[4]}`;
      let win = window.open(url);
      setTimeout(function(){
          win.close();
      }, 200)

  }

  const div = document.createElement('button');
  div.className = 'navetButton';
  div.innerHTML = `<button id="myBtn">Try it</button> `;
  div.addEventListener("click", getTab);
  let parentDiv = document.getElementsByClassName('plot_summary ')[0]
  parentDiv.appendChild(div)
})();
