.corazon{

    position:absolute;

    color:#ff7eb9;

    font-size:25px;

    animation:flotar 5s linear forwards;

    pointer-events:none;

}


@keyframes flotar{

    0%{

        transform:translateY(0) scale(1);

        opacity:1;

    }


    100%{

        transform:translateY(-700px) scale(1.8);

        opacity:0;

    }

}