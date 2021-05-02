---
title: "A JavaScript Honeymoon"
description: "Captain's Log, Stardate 98931.76. I have recently decided to undertake the #JavaScript30 coding challenge. During the next 30 days I will be committing myself to spend a little more time working with JavaScript by building some really cool shit. I'll be updating this post with my progress so be sure to check back for updates!"
date: 2021-04-01T22:30:00Z
image: 'https://javascript30.com/images/JS3-social-share.png'
readmore: "Join Me"
tags: ['JavaScript30', 'JavaScript', 'Challenge']
author: 'Hunter Trammell'
featured: true
---
![](https://javascript30.com/images/JS3-social-share.png)

Captain's Log, Stardate 98931.76. I have recently decided to undertake the [#JavaScript30](https://JavaScript30.com) coding challenge. During the next 30 days I will be committing myself to spend a little more time working with JavaScript by building some really cool shit. I'll be updating this post with my progress so be sure to check back for updates!

Take the challenge at [JavaScript30.com](https://JavaScript30.com), be sure to checkout more of [Wes Bos' courses](https://wesbos.com/courses) and show your support!

## Day 1: JavaScript Drum Kit
*Saturday May 1st, 2021* 

![](https://raw.githubusercontent.com/huntertrammell/JavaScript30/main/challenges/01_-_JavaScript_Drum_Kit/screenshot.png)

[**Source Files**](https://github.com/huntertrammell/JavaScript30/tree/main/challenges/01_-_JavaScript_Drum_Kit)

[**Live Demo**](https://huntertrammell.github.io/JavaScript30/challenges/01_-_JavaScript_Drum_Kit/)

**TIL/Thoughts**: This was great, I think the biggest takeaway for me was the ```transitionend``` event listener. This was an event type I have not had the pleasure of working with yet. By listening to when the CSS transition had completed on the element we were able to remove the style that set the glow around the key.

Another thing I found helpful was taking a look at the [different properties and methods](https://www.w3schools.com/jsref/dom_obj_audio.asp) related to the ```audio``` tag. We used the ```currentTime``` property to rewind the audio so that when ```audio.play()``` is called on the same element there is no delay.

I opted to try to build the app myself before watching the tutorial and without reviewing the solution. My approach wasn't quite as eloquent as Wes' -- and that is ok. This challenge is meant to help reinforce and invigorate your JavaScript knowledge. I happily refactored and gained some good insight on how to write cleaner code.
