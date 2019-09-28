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



  const div = document.createElement('span');
  div.className = 'navetButton';
  div.innerHTML = `<span><a title="+ Addd to navetApp" target="_blank" href="http://vps588796.ovh.net:5000/movie/add/${document.getElementsByClassName('wlb-title-main-details')[0].firstElementChild.dataset.tconst}"><p style="color: red">+ Add navetAPP</p></a></span>`;

  let parentDiv = document.getElementsByClassName('plot_summary ')[0]
  parentDiv.appendChild(div)
})();


