var heading = [
    ["Day 1", "Arrival + Check-in"],
    ["Day 2", "Crimson Resort and Spa"],
    ["Day 3", "Free time in Boracay<br>+ Departure"]
];

var itineraryimg = [
    "assets/images/itinerary/1.png",
    "assets/images/itinerary/2.png",
    "assets/images/itinerary/3.png"
];

var descriptions = [
    "On your first day, you will board a Philippine Airlines flight bound to Caticlan Airport. Once you arrive, you will be picked up for your land and boat transfer going to Crimson Resort and Spa where you will be checking-in for your 3 days and 2 nights stay. <br><br>The luxurious 5-star Crimson Resort and Spa is the perfect getaway for a safe stay in Boracay. It's located at the exclusive Station 0 where guests have access to the resort's private beach and wide open spaces for facilities limited only to checked-in guests. <br><br>Relax and enjoy the facilities for the entire day or book your tours (not included in the package) to explore tourist attractions in Boracay such as White Beach, Puka Beach, and more.",
    "Start your second day with the complimentary breakfast for 2 in one of Crimson Resort and Spa's restaurants. After your meal, you can lounge on Crimson Resort and Spa's private beach or swim in the crystal clear waters or in the outdoor pool.<br><br>If you're feeling adventurous, you can also try doing the many water activities offered in Boracay's White Beach including parasailing, helmet diving, jet-skiing, and more (not included in the package).<br><br>Cap off your last night in Boracay by availing of the spa services in Crimson Resort (not included in the package).",
    "For your last day in Boracay, make the most out of Crimson Resort's facilities by exercising at its fitness center, do some laps at the outdoor pool, or take an early run along the beach. Your complimentary breakfast will be ready for you after your morning exercise.<br><br>Before checking out, you will still have some time to do a bit of sunbathing or swimming by the beach. Don't forget to take a trip to D'Mall to buy some souvenirs for your family and friends back home.<br><br>Once you've checked out, you will be transferred to Caticlan Airport to board your Philippine Airlines flight back to Manila."
];

var i_num = 0;

$(
    function() {
        function setItems() {
            if(i_num==0) {
                $("#itinerary-heading").removeClass("align-self-end");
                $("#itinerary-heading").addClass("align-self-start");

                $("#itinerary-heading").removeClass("text-end");
                $("#itinerary-heading").addClass("text-start");
            } else if (i_num==1) {
                $("#itinerary-heading").removeClass("align-self-start");
                $("#itinerary-heading").addClass("align-self-center");

                $("#itinerary-heading").removeClass("text-start");
                $("#itinerary-heading").addClass("text-center");
            } else if (i_num==2) {
                $("#itinerary-heading").removeClass("align-self-center");
                $("#itinerary-heading").addClass("align-self-end");

                $("#itinerary-heading").removeClass("text-center");
                $("#itinerary-heading").addClass("text-end");
            }

            $("#itinerary-day").html(heading[i_num][0]);
            $("#itinerary-caption").html(heading[i_num][1]);
            $("#itinerary-image").attr("src",itineraryimg[i_num]);
            $("#itinerary-description").html(descriptions[i_num]);
        }

        $("#itinerary-next").click(
            function() {
                i_num+=1;
                if(i_num>=itineraryimg.length) {
                    i_num = 0;
                }                
                console.log("i_num = " + i_num);

                
                setItems();
            }
        );
    }
);