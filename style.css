body{
background:#050816;
color:white;
}

body::before{
content:"";
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background-image:
radial-gradient(white 1px, transparent 1px),
radial-gradient(#00e5ff 1px, transparent 1px);

background-size:120px 120px,200px 200px;
opacity:.35;
z-index:-1;
}

.home__title{
color:#00e5ff;
text-shadow:
0 0 10px #00e5ff,
0 0 20px #00e5ff,
0 0 40px #00e5ff;
}

.button{
background:linear-gradient(
135deg,
#00e5ff,
#6a00ff
);
border-radius:50px;
}

.portfolio__content,
.skills__content,
.about__container{
background:rgba(255,255,255,.05);
backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,.15);
border-radius:20px;
}
.stars{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-1;
    overflow:hidden;
}

.stars span{
    position:absolute;
    width:3px;
    height:3px;
    background:white;
    border-radius:50%;
    animation:blink 2s infinite alternate;
}

@keyframes blink{
    from{
        opacity:.2;
    }
    to{
        opacity:1;
        box-shadow:0 0 10px white;
    }
}

.planet{
    position:fixed;
    width:150px;
    height:150px;
    border-radius:50%;
    background:
    radial-gradient(circle at 30% 30%,
    #4fc3f7,
    #3f51b5);

    top:10%;
    right:5%;
    z-index:-1;

    animation:floatPlanet 12s ease-in-out infinite;
}

@keyframes floatPlanet{
    0%{
        transform:translateY(0px);
    }
    50%{
        transform:translateY(40px);
    }
    100%{
        transform:translateY(0px);
    }
}

.planet::before{
    content:"";
    position:absolute;
    width:220px;
    height:40px;
    border:3px solid rgba(255,255,255,.5);
    border-radius:50%;
    top:50%;
    left:-35px;
    transform:translateY(-50%) rotate(20deg);

    animation:ringRotate 15s linear infinite;
}

@keyframes ringRotate{
    from{
        transform:
        translateY(-50%)
        rotate(0deg);
    }

    to{
        transform:
        translateY(-50%)
        rotate(360deg);
    }
}

.home__title{
    animation:glowText 3s infinite alternate;
}

@keyframes glowText{
    from{
        text-shadow:
        0 0 10px #00e5ff;
    }

    to{
        text-shadow:
        0 0 20px #00e5ff,
        0 0 40px #00e5ff,
        0 0 60px #00e5ff;
    }
}

.skills__content,
.portfolio__content,
.about__container{

transition:.5s;
}

.skills__content:hover,
.portfolio__content:hover,
.about__container:hover{

transform:
translateY(-10px)
scale(1.02);

box-shadow:
0 0 30px rgba(0,229,255,.5);
}

.astronaut{

position:fixed;

width:120px;

bottom:30px;

right:30px;

animation:astronautFloat 8s ease-in-out infinite;

z-index:-1;
}

@keyframes astronautFloat{

0%{
transform:
translateY(0px)
rotate(0deg);
}

50%{
transform:
translateY(-30px)
rotate(10deg);
}

100%{
transform:
translateY(0px)
rotate(0deg);
}
}

.section{

animation:
fadeUp 1s ease forwards;
}

@keyframes fadeUp{

from{
opacity:0;
transform:
translateY(50px);
}

to{
opacity:1;
transform:
translateY(0);
}
}

.shooting-star{

position:fixed;

width:2px;
height:120px;

background:
linear-gradient(
transparent,
white
);

transform:
rotate(45deg);

animation:
shoot 6s linear infinite;

z-index:-1;
}

@keyframes shoot{

0%{
top:-10%;
left:20%;
opacity:0;
}

10%{
opacity:1;
}

100%{
top:100%;
left:90%;
opacity:0;
}
}

body{
    opacity:0;
    transform:scale(0.97);
    animation:spaceIntro 2s ease forwards;
}

@keyframes spaceIntro{

0%{
    opacity:0;
    transform:scale(0.97);
}

100%{
    opacity:1;
    transform:scale(1);
}

}

.astronaut{
    position:fixed;

    width:180px;
    height:auto;

    bottom:50px;
    right:50px;

    z-index:10;

    opacity:0.95;

    filter:
    drop-shadow(0 0 15px #00e5ff)
    drop-shadow(0 0 30px #00e5ff);

    animation:
    astronautFloat 8s ease-in-out infinite;
}

@keyframes astronautFloat{

0%{
transform:
translateY(0px)
rotate(-5deg);
}

25%{
transform:
translateY(-20px)
rotate(5deg);
}

50%{
transform:
translateY(-40px)
rotate(10deg);
}

75%{
transform:
translateY(-20px)
rotate(5deg);
}

100%{
transform:
translateY(0px)
rotate(-5deg);
}
}

@media screen and (max-width:768px){

.astronaut{

width:100px;

bottom:20px;
right:10px;

}

}

.astronaut::after{
content:"";
position:absolute;
width:120%;
height:120%;
top:-10%;
left:-10%;

background:
radial-gradient(
circle,
rgba(0,229,255,.3),
transparent 70%
);

z-index:-1;
}