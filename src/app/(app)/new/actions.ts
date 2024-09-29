"use server";

import { Database } from "@/types/supabase";
import { canadaProvinceCenters, usStateCenters } from "./constants";
import { getJson } from "serpapi";
import { createClient } from "@/lib/supabase/server";

export async function searchForBusiness(formData: FormData) {
  const businessName = formData.get("businessName") as string;
  const country = formData.get("country") as string;
  const region = formData.get("region") as string;

  let regionCoordinates: { lat: number; lng: number };

  switch (country) {
    case "United States":
      regionCoordinates = usStateCenters.get(region)!;
      break;
    case "Canada":
      regionCoordinates = canadaProvinceCenters.get(region)!;
      break;
  }

  console.log(`Searching for business: ${businessName} in region: ${region}`);

  return [
    {
      search_metadata: {
        id: "66ea3361f3cbfa2865c7e357",
        status: "Success",
        json_endpoint:
          "https://serpapi.com/searches/7200dcf9adcffbb5/66ea3361f3cbfa2865c7e357.json",
        created_at: "2024-09-18 01:56:49 UTC",
        processed_at: "2024-09-18 01:56:49 UTC",
        google_maps_url:
          "https://www.google.com/maps/search/Yoho+Landscaping/@53.726669,-127.647621,14z?hl=en",
        raw_html_file:
          "https://serpapi.com/searches/7200dcf9adcffbb5/66ea3361f3cbfa2865c7e357.html",
        total_time_taken: 1.52,
      },
      search_parameters: {
        engine: "google_maps",
        type: "search",
        q: "Yoho Landscaping",
        ll: "@53.726669,-127.647621,14z",
        google_domain: "google.com",
        hl: "en",
      },
      search_information: {
        local_results_state:
          'Showing results for type: "place" instead of type: "search"',
        query_displayed: "Yoho Landscaping",
      },
      place_results: {
        title: "Yoho landscaping",
        place_id: "ChIJy1biiUR3hlQRIA1ReB_EbFs",
        data_id: "0x5486774489e256cb:0x5b6cc41f78510d20",
        data_cid: "6587855994377800992",
        reviews_link:
          "https://serpapi.com/search.json?data_id=0x5486774489e256cb%3A0x5b6cc41f78510d20&engine=google_maps_reviews&hl=en",
        photos_link:
          "https://serpapi.com/search.json?data_id=0x5486774489e256cb%3A0x5b6cc41f78510d20&engine=google_maps_photos&hl=en",
        gps_coordinates: {
          latitude: 49.257735399999994,
          longitude: -123.123904,
        },
        place_id_search:
          "https://serpapi.com/search.json?engine=google_maps&google_domain=google.com&hl=en&place_id=ChIJy1biiUR3hlQRIA1ReB_EbFs",
        provider_id: "/g/11lrccvsfn",
        thumbnail:
          "https://lh5.googleusercontent.com/p/AF1QipP2-PkYpsb_6hNCtFXxjYiYdN7YN6U1ex_k57Df=w126-h86-k-no",
        rating_summary: [
          { stars: 1, amount: 1 },
          { stars: 2, amount: 1 },
          { stars: 3, amount: 0 },
          { stars: 4, amount: 0 },
          { stars: 5, amount: 30 },
        ],
        rating: 4.8,
        reviews: 32,
        type: [
          "Landscape designer",
          "Service establishment",
          "Landscape architect",
          "Landscape lighting designer",
        ],
        type_ids: [
          "landscape_designer",
          "establishment_service",
          "landscape_architect",
          "landscape_lighting_designer",
        ],
        extensions: [{ planning: ["Appointment required"] }],
        booking_link: "https://www.facebook.com/yoholandscaping",
        website:
          "https://www.yoholandscaping.com/?utm_source=google&utm_medium=wix_google_business_profile&utm_campaign=7269162699661483561",
        phone: "+1 604-366-8713",
        open_state: "Closed ⋅ Opens 7:30 AM Wed",
        hours: [
          { tuesday: "7:30 AM–4:30 PM" },
          { wednesday: "7:30 AM–4:30 PM" },
          { thursday: "7:30 AM–4:30 PM" },
          { friday: "7:30 AM–4:30 PM" },
          { saturday: "8 AM–4 AM" },
          { sunday: "Closed" },
          { monday: "7:30 AM–4:30 PM" },
        ],
        images: [
          {
            title: "All",
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipP2-PkYpsb_6hNCtFXxjYiYdN7YN6U1ex_k57Df=w438-h298-k-no",
          },
          {
            title: "Inside",
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipOGbklAszcwNReDHEBbEus2wfnt7sdTjIVbDfUR=w442-h298-k-no",
          },
          {
            title: "Videos",
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipOeHbHTWHxnK-0ssicQ-zsM3Ss6xuC_05iMBTxd=w224-h398-k-no",
          },
          {
            title: "By owner",
            thumbnail:
              "https://lh5.googleusercontent.com/p/AF1QipOQa2R6DbyllIMDByLcX6Cvp2pWlJAJdbeXrVBH=w224-h398-k-no",
          },
        ],
        questions_and_answers: [
          {
            question: {
              text: "Can Yoho mow my lawn on a monthly or bi weekly schedule? I’m in New West.",
              date: "2 years ago",
              language: "en",
            },
            answer: {
              text: "Yes we can!",
              date: "2 years ago",
              language: "en",
            },
            total_answers: 1,
          },
        ],
        user_reviews: {
          most_relevant: [
            {
              username: "Shannon Findlay",
              rating: 5,
              contributor_id: "100411784564747877545",
              description:
                "Evan and Sebastian completely transformed our front garden and pathway at the front of our house. We wanted a natural west coast design with flagstone pavers leading to our front door. The final result exceeded our expectations; we love it and get compliments all the time on their work. I’d highly recommend Yoho landscaping. Evan listened to what we wanted and delivered a beautiful front garden and pathway in a timely and professional manner.",
              link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUR6bTRxa2J3EAE!2m1!1s0x0:0x5b6cc41f78510d20!3m1!1s2@1:CIHM0ogKEICAgIDzm4qkbw%7CCgwIoounswYQ6InPlAM%7C?hl=en-US",
              images: [
                {
                  thumbnail:
                    "https://lh5.googleusercontent.com/p/AF1QipN52_onqkL--FUI7l3zDP3OawFDBFhj5kHZdDzE=w150-h150-k-no-p",
                },
                {
                  thumbnail:
                    "https://lh5.googleusercontent.com/p/AF1QipOnOqsNU-GHb_s7htwBqPusl3W_YQJeY70UY0Xf=w150-h150-k-no-p",
                },
                {
                  thumbnail:
                    "https://lh5.googleusercontent.com/p/AF1QipNECU40Wxvba7R3fhvbvOrVUdsnIMZGZYanVb-L=w150-h150-k-no-p",
                },
                {
                  thumbnail:
                    "https://lh5.googleusercontent.com/p/AF1QipN5JSs3qaHeguPwfkUCws2m8xh9444WqcwL5eIj=w150-h150-k-no-p",
                },
              ],
              date: "3 months ago",
            },
            {
              username: "Christina Nelder",
              rating: 5,
              contributor_id: "114372253390992121045",
              description:
                "More patio. I couldn’t have asked for a better team to redo my yard. Easy to work with, knowledgeable, kind, on time and great workmanship. Best flagstone work around. Thank you",
              link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURqNGVMMVZREAE!2m1!1s0x0:0x5b6cc41f78510d20!3m1!1s2@1:CIHM0ogKEICAgIDj4eL1VQ%7CCgsIiprXsQYQ2NmKWg%7C?hl=en-US",
              images: [
                {
                  thumbnail:
                    "https://lh5.googleusercontent.com/p/AF1QipPOTPSswliZlCRhX8dETB_h-mZ26zZqvu0buS5C=w150-h150-k-no-p",
                },
                {
                  thumbnail:
                    "https://lh5.googleusercontent.com/p/AF1QipNEyTEw2g_TxxrCEWb6RcWedDJcylBmV2vkGoIk=w150-h150-k-no-p",
                },
              ],
              date: "4 months ago",
            },
            {
              username: "Jo Men,t",
              rating: 5,
              contributor_id: "116174872718690805744",
              description:
                "Evan and his team did an amazing job fixing my retaining wall and fence. They were very accomodating to my on the spot requests. The team were polite and worked quietly. Still waiting for spring to come to seed the new lawn. Will absolutely recommend Yoho landscaping for any lawn/backyard work you need.",
              link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNOeUxlSGhnRRAB!2m1!1s0x0:0x5b6cc41f78510d20!3m1!1s2@1:CIHM0ogKEICAgICNyLeHhgE%7CCgsI08eArQYQoNvQMg%7C?hl=en-US",
              images: [
                {
                  thumbnail:
                    "https://lh5.googleusercontent.com/p/AF1QipPOHyWdsKWiDvdWTDksOfgby7BBvaGnXhsMnyLT=w150-h150-k-no-p",
                },
                {
                  thumbnail:
                    "https://lh5.googleusercontent.com/p/AF1QipPeJR8BflPYIF2MiSqQ73Ln_by35FM2XnIZvKFX=w150-h150-k-no-p",
                },
              ],
              date: "8 months ago",
            },
            {
              username: "Wayne Lee",
              rating: 5,
              contributor_id: "117250211558496618410",
              description:
                "Evan is very detail-oriented and did a great job on my property. Highly recommend him if you need work done.",
              link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURGemF6MjJ3RRAB!2m1!1s0x0:0x5b6cc41f78510d20!3m1!1s2@1:CIHM0ogKEICAgIDFzaz22wE%7CCgwI2d2xqgYQkIDRuwI%7C?hl=en-US",
              images: [
                {
                  thumbnail:
                    "https://lh5.googleusercontent.com/p/AF1QipN_wTXtBoNGzf4CMFRG7Mf87BsURM9K54bA5hBJ=w150-h150-k-no-p",
                },
              ],
              date: "10 months ago",
            },
            {
              username: "Karma Tshering",
              rating: 5,
              contributor_id: "107341636111193766222",
              description:
                "Working with Yoho Landscaping was a fantastic experience. Their team was incredibly professional and detail-oriented. They took the time to understand our preferences and delivered a landscape design that perfectly suits our lifestyle. The transformation was quick and efficient, with minimal disruption. We are thrilled with the results and will definitely be using their services again in the future.\nThank you so much✌️✌️✌️",
              link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUR6am82anNRRRAB!2m1!1s0x0:0x5b6cc41f78510d20!3m1!1s2@1:CIHM0ogKEICAgIDzjo6jsQE%7CCgsI8-qZswYQ0IacSw%7C?hl=en-US",
              date: "3 months ago",
            },
            {
              username: "Jordan Smith",
              rating: 5,
              contributor_id: "102618107676748933983",
              description:
                "I highly recommend Yoho Landscaping\nTheir customer service is second to none.\nThe product quality is consistently outstanding, exceeding my expectations every time.\nI was completely impressed with their professionalism and customer service.\nThe ambiance here is always inviting. If you need your yard done, Evan and his team will for sure make it perfect.",
              link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUR6bzZ1cEdREAE!2m1!1s0x0:0x5b6cc41f78510d20!3m1!1s2@1:CIHM0ogKEICAgIDzo6upGQ%7CCgwI6o-kswYQwKeJvwI%7C?hl=en-US",
              date: "3 months ago",
            },
            {
              username: "Derek Murray",
              rating: 5,
              contributor_id: "113855475810407167425",
              description:
                "Had my front area redone and I'm very pleased with the results. Easy to get in touch with and very responsive. Overall a very pleasant experience!",
              link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNIX2RHYS1RRRAB!2m1!1s0x0:0x5b6cc41f78510d20!3m1!1s2@1:CIHM0ogKEICAgICH_dGa-QE%7CCgwI0ar0tgYQkMvt1gE%7C?hl=en-US",
              date: "a week ago",
            },
            {
              username: "Tomas Mohr",
              rating: 5,
              contributor_id: "110664911829935350977",
              description:
                "I hired them for a landscaping on one of my masonry projects and been using their services every since. Great quality work for very reasonable price. Tomas",
              link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNidjVlaEpBEAE!2m1!1s0x0:0x5b6cc41f78510d20!3m1!1s2@1:CIHM0ogKEICAgICbv5ehJA%7CCgwIz8mptQYQ0Pu51QM%7C?hl=en-US",
              date: "a month ago",
            },
          ],
        },
        web_results_link:
          "https://www.google.com/search?q=local+guide+program&ibp=gwp;0,26,OhYKFCIQWW9obyBsYW5kc2NhcGluZygC&pcl=lp",
        serpapi_web_results_link:
          "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&ibp=gwp%3B0%2C26%2COhYKFCIQWW9obyBsYW5kc2NhcGluZygC&q=local+guide+program",
      },
    },
  ];

  getJson(
    {
      engine: "google_maps",
      q: businessName,
      ll: `@${regionCoordinates!.lat},${regionCoordinates!.lng},14z`,
      type: "search",
      api_key: process.env.SERPAPI_API_KEY,
    },
    (json) => {
      console.log("JSON", JSON.stringify(json));
    }
  );

  return;

  var myHeaders = new Headers();
  myHeaders.append("X-API-KEY", process.env.SERPER_API_KEY!);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    q: businessName,
    ll: `@${regionCoordinates!.lat},${regionCoordinates!.lng},14z`,
  });

  var requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://google.serper.dev/maps", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  // return { success: true, message: "Business found!" };
}

export async function createInitialSiteData(
  selectedBusiness: SerpApiResponseItem
) {
  const supabase = createClient();

  // TODO maybe this should really be insert, will the table exist yet?

  // Todo, the sites table should maybe have important business data like phone number, address, etc.
  const { error: homePageError } = await supabase.from("home_pages").upsert({
    site_id: process.env.NEXT_PUBLIC_SITE_ID!,
    contact_phone: selectedBusiness.place_results.phone,
  });

  if (homePageError) console.error(homePageError);

  const reviews: {
    username: string;
    rating: number;
    contributor_id: string;
    description: string;
    link: string;
    images: { thumbnail: string }[];
    date: string;
  }[] = selectedBusiness.place_results.user_reviews.most_relevant;

  // TODO generate insert types better than this
  const reviewsTableDataToInsert: Database["public"]["Tables"]["reviews"]["Insert"][] =
    [];

  reviews.map((review) => {
    reviewsTableDataToInsert.push({
      site_id: process.env.NEXT_PUBLIC_SITE_ID!,
      reviewer_name: review.username,
      stars: review.rating,
      text: review.description,
      link: review.link,
    });
  });

  console.log(reviewsTableDataToInsert);

  // const { error: reviewsError } = await supabase
  //   .from("reviews")
  //   .insert(reviewsTableDataToInsert);

  // if (reviewsError) console.error(reviewsError);
}
