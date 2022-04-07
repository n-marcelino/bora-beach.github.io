var images = ["assets/images/willysrock.jpg" ,"assets/images/diniwid.jpg","assets/images/dmall.jpg","assets/images/pukabeach.jpg","assets/images/boracaysandcastle.jpg","assets/images/iligiligan.jpg"];

var headers = ["Willy's Rock", "Diniwid Beach", "D'Mall Boracay", "Puka Beach", "Boracay", "Ilig-Iligan Beach"];

var paragraphs = [
    [
        "Willy's Rock is a volcanic rock formation that is located along that shallow waters of Station 1 in Boracay. Along with its unique shape, it has also become a popular attraction due to the shrine dedicated to the Blessed Virgin Mary that sits on its surface. Man-made steps leading to the shrine have been constructed on the rock formation to help visitors.",
        "Aside from the religious grotto, travelers also often step onto the rock formation to get a great view of the long shoreline of White Beach. Most locals also believe that the structure has been around for about a thousand years."
    ],

    [
        "Diniwid Beach is a tranquil destination just a few minutes away from the popular Station 1 area. It is a great spot for anyone wanting to escape the usual white sand beaches of Boracay and is looking for a peaceful and serene ambiance. It also has various villas or beachfront places for guests who would like to stay in their area and not in Boracay's beach. Some villas also offer a panoramic view of the beach. As for the restaurants by the beach, most of them serve both local and international cuisines for their guests. ",
        "Due to its peaceful atmosphere, no loud or busy activities are provided in the area. Instead, more subtle and quiet activities such as swimming and snorkeling are favored on this beach."
    ],

    [
        "D'Mall is a Boracay open-air establishment located between White Beach and Boracay Main Road near Station 2. It includes everything from food vendors to souvenir shops and ATM machines. It's an all-in-one location that guarantees you'll find everything you're searching for. In comparison to other important institutions on the island, D'Mall is relatively relaxed. Main Street, the Local Market, and the Beach Area are the three areas. The majority of ATMs and money changers are located on Main Street.",
        "This neighborhood also has snack shops, pharmacies, and convenience stores. Meanwhile, smaller kiosks offering fruits, vegetables, and other regional specialties may be found in the Local Market area. This area also has a small grocery and a few ATMs. The majority of diving and swimming stores are located in the Beach Area. Money changers and eateries may also be found in the city. It's also one of the primary pick-up places for most Boracay excursions and activities."
    ],

    [
        "Puka Beach is a serene destination in Boracay that boasts a white-sand shore that contains bits of coral. Going on for 800 meters, it is also one of the longest beaches on the island.  While the bits of coral make its sand slightly more coarse than those of the White Beach, this spot makes up for it with its almost unspoiled natural beauty. Puka Beach is lined with tall coconut trees as well, and has a lush tropical forest just past its stunning shore. ",
        "It is also home to Boracay's flying foxes, which are a species of fruit bats. From the shore, you can spot these animals flying around at night when they are most active."
    ],

    [
        "Boracay, hailed as one of the best islands in the world, is arguably the most popular and prime tourist destination in the Philippines. Its main draw is the White Beach, famous for its ultra-powdery white sand that stretches up to 4 kilometers, lined with swaying palm trees from end to end, kissed by calm azure waters, and features one of the most spectacular sunsets incomparable to anywhere else in the country.<br><br>Despite its small and compact size, the island has no shortage of wondrous sights and fun-filled activities that can be enjoyed by either a solo traveler, tour groups, or families. From frolicking in its many beach pockets, drinking and dancing until sunrise, and experiencing many of the water sports activities here, you will never run out of things to see and do in Boracay. Aside from this, Boracay basically has all the choices imaginable, from backpacker- and budget-friendly hostels, mid-range hotels, down to the most exclusive and luxurious resorts in the entire country.",
        "Its postcard-perfect beaches and rock formations have also become favorite backdrops for couples getting married and spending their honeymoon, as well as for adventure-seekers, sun worshippers, and party-goers — registering more than a million visitors every year.<br><br>What used to be a quiet and sleepy island has become a crowd-pleaser and world-class destination over the years, prompting a rehabilitation project by the government in 2018 — closing down the island for its environment's healing and community rejuvenation from mass tourism. But it is open once again, renewed and revitalized, but with the same sheer beauty and natural majesty for all the world to see and experience."
    ],

    [
        "Ilig-Iligan Beach is a secluded beach in the northeast coast of Boracay, yet it gives its visitors a picturesque view of the island. The combination of the powdery white sand and the crystal clear waters highlights the beach’s beauty. The beach also serves as a great retreat place for anyone looking for a more private space within Boracay Island.",
        "Guests can enjoy sunbathing the whole day, playing by the sands, or swimming and snorkeling at the beach. There are no establishments and hotel facilities built around the area, so it is highly suggested to the visitors to come to the beach well-packed! You may bring a beach mat, umbrellas, and light snacks and drinks to enjoy a perfect picnic vibe by the beach."
    ]
];

var slider = $("#attractions-slide");

var num = 0;

$(
    function(){
        function setItems() {
            $("#attractions-header").html(headers[num]);
            $("#attractions-slide").css('background-image','url('+images[num]+')');
            $("#attractions-p1").html(paragraphs[num][0]);
            $("#attractions-p2").html(paragraphs[num][1]);
        }

        $("#attractions-next").click(
            function(){
                num += 1;
                if(num>=images.length) {
                    num=0;
                    // if num is greater than the length of images,
                    // it means that u have reached the end of the images array
                    // so restart back to 0 to go back to first picture
                }
                console.log(num);
                setItems();
            }   
        );

        $("#attractions-prev").click(
            function(){
                num-=1;
                if(num < 0) {
					num = images.length-1;
                    //if num is less than 0,
                    //that means user is trying to go to the end of the array
                    //so equate num to length of images array - 1, to go to the last images array index
				}
                console.log(num);
                
                setItems();
                ;
            }
        );
    }
);
