$(document).ready(function() {

    var workTime = 25;
    var breakTime = 5;
    var minutes = 25;
    var seconds = 0;
    var pause = false;
    var time;


    $(".timer").html(minutes + ":00");

    function decBreakTime() {
        if (breakTime == 1) {
            return;
        }
        breakTime--;
        $("#break").html(breakTime);

        seconds = 0;
        minutes = workTime;
        $('.session').text('Session');
    };

    function incBreakTime() {
        breakTime++;
        $("#break").text(breakTime);

        seconds = 0;
        minutes = workTime;
        $('.session').text('Session');
    };

    function decWorkTime() {
        if (workTime == 1) {
            return;
        }
        workTime--;
        $("#work").html(workTime);
        $(".timer").html(workTime + ":00");

        seconds = 0;
        minutes = workTime;
        $('.session').text('Session');
    };

    function incWorkTime() {
        workTime++;
        $("#work").html(workTime);
        $(".timer").html(workTime + ":00");

        seconds = 0;
        minutes = workTime;
        $('.session').text('Session');
    };


    function countdown() {
        if (minutes === 0 && seconds === 0) {
            if ($(".session").text() === 'Session') {
                $(".session").text('Break');
                minutes = breakTime;
                $(".timer").html(minutes + ":0" + seconds);
                alert("Work Time Over!");
            } else if ($('.session').text() === 'Break') {
                $('.session').text('Session');
                minutes = workTime;
                $('.timer').html(minutes + ":0" + seconds);
                alert("Break Time Over!!!");
            }
        } else {
            if (seconds === 0) {
                seconds = 60;
                minutes--;
            }
            seconds--;
            if (seconds < 10) {
                $(".timer").html(minutes + ":0" + seconds);
            } else {
                $('.timer').html(minutes + ":" + seconds);
            }
        }
    };


    $('.clock').click(function() {
        //begin countdown function, call it every sec
        if (pause === false) {
            counting = setInterval(countdown, 1000);
            pause = true;
        } else if (pause === true) {
            clearInterval(counting);
            pause = false;
        }
    });


    $("#break-minus").click(function() {
        decBreakTime();
    });
    $("#break-plus").click(function() {
        incBreakTime();
    });
    $("#work-minus").click(function() {
        decWorkTime();
    });
    $("#work-plus").click(function() {
        incWorkTime();
    });

});
