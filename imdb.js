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
        const url = `http://vps588796.ovh.net:5000/movie/add/${event.target.offsetParent.baseURI.split('/')[4]}?token=${cookie_user}`;
        let win = window.open(url);
        setTimeout(function(){
            win.close();
        }, 200)

    }
    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    let cookie_user = getCookie('navet_user');
    if (!cookie_user){
        let user_name = prompt("Please enter your ID");
        setCookie('navet_user', user_name, 9999);
        cookie_user = getCookie('navet_user');
    }


    const div = document.createElement('span');
    div.className = 'navetButton';
    div.innerHTML = `<button id="myBtn">+ Add to navetAPP</button> `;
    div.addEventListener("click", getTab);
    let parentDiv = document.getElementsByClassName('plot_summary ')[0]
    parentDiv.appendChild(div)
})();