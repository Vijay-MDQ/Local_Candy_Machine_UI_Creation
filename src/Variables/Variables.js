import SliderImage3 from '../Assets/SliderImage/ecommerce-2140603_1280.jpg';
import SliderImage1 from '../Assets/SliderImage/wp10589505-online-marketing-wallpapers.png';
import SliderImage2 from '../Assets/SliderImage/When _You_Support_Small_Business_You_Support_Big_Dreams.png';
import SliderImage4 from '../Assets/SliderImage/pexels-nataliya-vaitkevich-6214476.jpg';
import SliderImage5 from '../Assets/SliderImage/pexels-sora-shimazaki-5926462 (1).jpg';

import tech from '../Assets/Trending/TECH OFFERS.jpg';
import toys from '../Assets/Trending/Toys Offers.PNG';
import voucher from '../Assets/Trending/VOUCHER CODES.jpg';

import step1 from '../Assets/Voucher/VocuherStep1.webp';
import step2 from '../Assets/Voucher/vouchercodes_step2.webp';
import step3 from '../Assets/Voucher/vouchercodes_step3.webp';
import step4 from '../Assets/Voucher/vouchercodes_step4.webp';


import HomePreview1 from '../Assets/HomePage/1stPreview/HomePreview1.webp';
import HomePreview2 from '../Assets/HomePage/1stPreview/HomePreview2.jpeg';
import HomePreview3 from '../Assets/HomePage/1stPreview/HomePreview3.jpeg';
import HomePreview4 from '../Assets/HomePage/1stPreview/HomePreview4.jpg';

import offerImage1 from '../Assets/HomePage/offer/OfferPic11.jpg';
import offerImage2 from '../Assets/HomePage/offer/OfferPic2.png';
import offerImage3 from '../Assets/HomePage/offer/OfferPic3.jpg';
import offerImage4 from '../Assets/HomePage/offer/OfferPic4.jpg';
import offerImage5 from '../Assets/HomePage/offer/OfferPic5.jpg';

import popularImage1 from '../Assets/HomePage/popular/popularImage1.webp';
import popularImage2 from '../Assets/HomePage/popular/popularImage2.webp';
import popularImage3 from '../Assets/HomePage/popular/popularImage3.webp';

import brandImage1 from '../Assets/HomePage/brands/brandImage4.jpg';
import brandImage2 from '../Assets/HomePage/brands/fabric_practica.jpg';
import brandImage3 from '../Assets/HomePage/brands/brandImage3.jpg';



const homepageproductsscroll = [
  {
    id:1,
    img:'https://media.4rgos.it/i/Argos/Home-and-furniture?w=160&h=160&qlt=75&fmt=webp',
    title:'Home & furniture',
  },
  {
     id:2,
    img:'https://media.4rgos.it/i/Argos/Technology_1?w=160&h=160&qlt=75&fmt=webp',
    title:'Technology',
  },
  {
     id:3,
    img:'https://media.4rgos.it/i/Argos/Appliances?w=160&h=160&qlt=75&fmt=webp',
    title:'Appliances',
  },
  {
     id:4,
    img:'https://media.4rgos.it/i/Argos/Sports?w=160&h=160&qlt=75&fmt=webp',
    title:'Sports & Leisure',
  },
  {
     id:5,
    img:'https://media.4rgos.it/i/Argos/Health-and-Beauty?w=160&h=160&qlt=75&fmt=webp',
    title:'Health & Beauty',
  },
  {
     id:6,
    img:'https://media.4rgos.it/i/Argos/Baby-and-nursery?w=160&h=160&qlt=75&fmt=webp',
    title:'Baby & Nursery',
  },
  {
     id:7,
    img:'https://media.4rgos.it/i/Argos/Toys_1?w=160&h=160&qlt=75&fmt=webp',
    title:'Toys',
  },
  {
     id:8,
    img:'https://media.4rgos.it/i/Argos/Jewellery?w=160&h=160&qlt=75&fmt=webp',
    title:'Jewellery & watch'
  },
  {
     id:9,
    img:'https://media.4rgos.it/i/Argos/Clothing?w=160&h=160&qlt=75&fmt=webp',
    title:'Clothing'
  },
]


  const HomePagecardSection = [
    {
      img:HomePreview1,
      title:'Selected homewares',
      content:'Selected lines.',
      category: 'Home and Furniture'
    },
    {
      img:HomePreview2,
      title:'Car accessories & Recreatioal',
      content:'Selected lines.',
      category: 'Automobile'
    },
    {
     img:HomePreview3,
      title:'Technology & Gadgets',
      content:'Selected lines.',
      category: 'Technology'
    },
    {
      img:HomePreview4,
      title:'Healthcare products',
      content:'Selected lines.',
      category: 'Health and Beauty'
    },
  ]

 const homepageoffersection =[
    {
        img:offerImage1,
        title:'Save on selected comfort',
        content:'Selected lines.',
        category:'Automobile'
      },
      {
         img:offerImage2,
        title:'Unleash the power of clean',
        content:'Selected Electronics',
        category: 'Home and Furniture'
      },
      {
        img:offerImage3,
        title:'Wrap your little one in savings',
        content:'Baby Swaddles.',
        category: 'Baby and Nursery'
      },
      {
        img:offerImage4,
        title:'New year, new savings across tech',
        content:'Find our best deals across Technology.',
        category: 'Technology'
      },
      {
        img:offerImage5,
        title:'Feed your furry friend conveniently',
        content:'Discover great deals on our automatic pet feeder!',
        category: 'Sports and Leisure'
      },
    ]

const homepagepopularsection = [
    {
        img:popularImage1,
        title:'Efficient appliances',
        content:'Air fryers, kettles & more.',
      },
      {
       img:popularImage2,
        title:'New year, new me!',
        content:'Everything you need to fulfil your new year.',
      },
      {
       img:popularImage3,
        title:'Keep warm for less',
        content:'Electric blankets & more.',
      },
]

const homepagebrandssection = [
    {
        img:brandImage1,
        title:'Mantra',
        content:'Including Fingerpirnt Scanner, Security & Scanner.',
      },
      {
       img:brandImage2,
        title: 'Pratica',
        content:'On Selected Fabric Items.',
      },
      {
       img:brandImage3,
        title:'Samsung Laptops/Gadgets',
        content:'Stay tuned for the latest in computing excellence.',
      },
]

const ataglancesectioncards = [
    {
    img:`https://media.4rgos.it/i/Argos/4118_fasttrack_clickcollect?maxW=1200&qlt=75&fmt=webp`,
    title:'Click & Collect',
    content:`Simply place and pay for your order online, then select your nearest Argos store, collection point within Sainsbury’s supermarkets or Argos store within Sainsbury’s supermarkets to pick up your order from. We’ll hold it for 7 days.`
    },
    {
    img:'https://media.4rgos.it/i/Argos/4118_fasttrack_fasttracklogo?maxW=1200&qlt=75&fmt=webp',
    title:'Fast Track same day home delivery',
    content:`Buy online before 5pm and we’ll deliver by 10pm same day for £5.95, subject to availability. Other delivery slots are available from £3.95. Your items will be left in a safe and sensible location at your doorstep.`
    },
    {
    img:'https://media.4rgos.it/i/Argos/4118_fasttrack_2mandelivery?maxW=1200&qlt=75&fmt=webp',
    title:'Named day delivery',
    content:`Larger items can be delivered to a room of your choice where it's safe to do so. You'll be able to choose the delivery date and time, and one of our friendly drivers will contact you on the day to discuss delivering your order.`
    },
    {
    img:'https://media.4rgos.it/i/Argos/4118_fasttrack_tu?maxW=1200&qlt=75&fmt=webp',
    title:'Tu clothing',
    content:`Just order by 2pm (Monday-Friday) to get your items next day for £3.95. If you order after 2pm Friday and before 2pm Sunday, your items will be delivered or ready to collect Monday. Excludes bank holidays.Or use our Click & Collect service. `
    },
]

const clickandcollectsectioncards = [
  {
  img:`https://media.4rgos.it/i/Argos/1520-m0014-m007-m050-asym-m008-m022-servicedisruptions-customersathome_448?maxW=1200&qlt=75&fmt=webp`,
  title:'Pay online, get 7 days to collect',
  content:`Finished browsing? Head to your trolley and select the collection point
   or Argos store within Sainsbury's that you want to pick up from. Then pay online -
   we'll send you an order number and collection code that you'll need to take with you.
   It's free,and you’ll get 7 days to pick up your order.`
  },
  {
  img:'https://media.4rgos.it/i/Argos/1520-m0014-m007-m050-asym-m008-m022-servicedisruptions-helpingcustomers-1067?maxW=1200&qlt=75&fmt=webp',
  title:'Need longer to pick up?',
  content:`No problem – you’ll need to sign into “My Account” before you pay for your item(s). Then head to 'Recent Orders' and chose to extend your collection date. Unfortunately, you can’t extend the collection date on a Tu clothing order.`
  },
]

const fasttracksectioncards = [
  {
  img:`https://media.4rgos.it/i/Argos/0220-m0014-m007-m050-asym-m008-m022-deliveryandcollection-inthebasket?maxW=1200&qlt=75&fmt=webp`,
  title:'Shop online and add to basket',
  content:`Once you've finished shopping, go to your trolley and we'll let you know if your items are available with home delivery.Select 'Continue with delivery' to choose your delivery date and time.For more information, visit our FAQs page`
  },
  {
  img:'https://media.4rgos.it/i/Argos/4118_fasttrack_fasttracklogo?maxW=1200&qlt=75&fmt=webp',
  title:'Choose your delivery date and time',
  content:`We deliver 7 days a week with a choice of delivery slots, including same day for £5.95. Buy online before 5pm and we’ll deliver by 10pm, subject to availability. Exceptional demand may restrict Fast Track same day home delivery availability, 90% UK coverage.`
  },
  {
  img:'https://media.4rgos.it/i/Argos/4118_fasttrack_2mandelivery?maxW=1200&qlt=75&fmt=webp',
  title:`We're on our way`,
  content:`Delivery day? We'll give you a 2 hour window within your time slot and then let you know when we're 30 minutes away. For the safety of our customers and colleagues, your order will be left in a safe and sensible location at your doorstep.`
  },
]

const HomeBelowHeaderimages = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:SliderImage2,
  },
  {
    label: 'Bird',
    imgPath:SliderImage1,
  },
    {
    label: 'Bird',
    imgPath:SliderImage3,
  },
      {
    label: 'Bird',
    imgPath:SliderImage4,
  },
        {
    label: 'Bird1',
    imgPath:SliderImage5,
  },
];


const labels = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const backgroundColor = [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)',
  'rgb(54, 162, 235)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
]
const processbackgroundColor = [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)',
  'rgb(54, 162, 235)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  '#800000',
  '#A52A2A',
]
const borderColor = [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)',
  'rgb(201, 203, 207)',
  'rgb(201, 203, 207)',
  'rgb(201, 203, 207)',
  'rgb(201, 203, 207)',
  'rgb(201, 203, 207)'
]
const procesborderColor = [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)',
  'rgb(201, 203, 207)',
  'rgb(201, 203, 207)',
  'rgb(201, 203, 207)',
  'rgb(201, 203, 207)',
  'rgb(201, 203, 207)',
  '#800000',
  '#A52A2A',
]

  const trendingSection = [
        {
      img:'Capture1-1681826146.jpg',
      title:'Camping sofa'
    },
    {
      img: 'Capture2-1681801559.jpg',
      title:'Winter Heater',
    },
    {
      img:'188OR-10184-1681811086.png',
      title:'Cordless Hand Held Vacuum Cleaner'
    },
  ];


const saleSection = [
    {
      img: 'Capture10-1681819875.jpg',
      title:'Multifunction 4in1 charger Hub',
    },
    {
      img:'Capture4-1681826644.jpg',
      title:'Travel Sleep Pillow - Inflatable'
    },
    {
      img:'Capture6-1681799070.jpg',
      title:'Doorbell with Camera Wireless App'
    },
  ];


 const voucherCodesSection = [
    {
      title:'Save 25% on selected Outdoor Toys & Sports',
      title2:'Ends on 28 February 2023',
      code:'PLAY25'
    },
    {
      title:'Save 10% on seleted Gaming PC`s and Desktops',
      title2:'Ends on 21 February 2023',
      code:'GADGETS25'
    },
    {
      title:'Save 25% on selected Tiny Treasures',
      title2:'Ends on 21 February 2023',
      code:'TOYS25'
    },
    {
      title:'Save 25% on selected DesignaFriend',
      title2:'Ends on 21 February 2023',
      code:'HOME25'
    },
  ]; 


const trendingSection2 = [
    {
      img: tech,
      title:'Tech offers',
      content:'Shop our top offers across technology. From laptops to TVs to gaming, and more!'
    },
    {
      img:toys,
      title:'Toy offers',
      content:'Save when they play with our list of offers and promotions on toys, with credit plans available.',
    },
    {
      img:voucher,
      title:'Voucher codes',
      content:'Looking for a cheeky discount? You might just find it here...'
    },
  ];


const voucerSteps = [
  {
    img:step1,
    title:'Step 1',
    content:'Look out for codes across our site, browse the complete list of active codes below or check your email for promotional vouchers.'
  },
    {
    img:step2,
    title:'Step 2',
    content:'Check T&Cs to see how the code works. Browse eligible products, add them to your basket and head to checkout when ready.'
  },
    {
    img:step3,
    title:'Step 3',
    content:'Select home delivery, or find your nearest Argos store or collection point within Sainsbury’s. Enter the code on the payment page, click `Apply` and pay online.'
  },
    {
    img:step4,
    title:'Step 4',
    content:'We`ll deliver to you, or you can collect your order from your chosen Argos store or Sainsbury`s collection point.'
  },
]


// admin Panel

const orderTable = [
  {
   title:'Order Id',
    filter: Boolean(true)
  },
    {
   title:'Product Id',
    filter: Boolean(true)
  },
    {
   title:'Product Name',
  },
    {
   title:'Product Qty',
  },
    {
   title:'Product Price',
  },
    {
   title:'Ordered Qty',
  },
    {
   title:'User Id',
   filter: Boolean(true)
  },
    {
   title:'Delivery Fee',
  },  {
   title:'Delivery Option',
  },
    {
   title:'Delivery Time',
  },
    {
   title:'First PromoOffer',

  },  {
   title:'Order Cost',
  },
    {
   title:'Order Status',
  },
  {
   title:'Order Time',
  },
      {
   title:'Payment Option',
  },
]

const productsTable = [
  {
   title:'Product Id',
    filter: Boolean(true)
  },
  {
   title:'categoryId',
    filter: Boolean(true)
  },
  {
   title:'Product Name',
    filter: Boolean(true)
  },

    {
   title:'Product Price',
  },
    {
   title:'Product Qty',
  },
    {
   title:'Discount Percent',
  },
  {
   title:'productLeadTime',
  },
]









  export {labels,backgroundColor,productsTable,orderTable,voucerSteps,voucherCodesSection ,saleSection,trendingSection,trendingSection2, procesborderColor, processbackgroundColor, borderColor,  HomePagecardSection ,fasttracksectioncards,HomeBelowHeaderimages, clickandcollectsectioncards, ataglancesectioncards, homepageoffersection, homepagepopularsection , homepagebrandssection, homepageproductsscroll };