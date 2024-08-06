import { MdOutlineForwardToInbox } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { MdHome } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import { BsClipboardCheck } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsBasket2 } from "react-icons/bs";
import { RiShoppingBag4Line } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { GiHamburger } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { IoIosStarOutline } from "react-icons/io";
import { TiTickOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";


import Avatar from '@mui/material/Avatar';

export const HeaderIcons = [
    {
        id:1,
        icon: <MdOutlineForwardToInbox />
    },
    {
        id:2,
        icon: <CiSettings />
    },
    {
        id:3,
        icon: <GoBell />
    }
];

export const SidebarData = [
    {
        id:1,
        icon: <MdHome />
    },
    {
        id:2,
        icon: <FaRegChartBar />
    },
    {
        id:1,
        icon: <BsClipboardCheck />
    },
    {
        id:1,
        icon: <CiWallet />
    },
    {
        id:1,
        icon: <IoBagCheckOutline />
    },
]

export const dashboardOrderDetails = [
    {
        id:1,
        icon: <BsBasket2 />,
        label:"Total Orders",
        count:75,
        "profit/lossIcon": <MdArrowDropUp />,
        "profit/loss":"3%",
         color: "#445dd7",
         rgba:"rgba(37,62,108,255)",
         subIcon:<IoIosStarOutline style={{backgroundColor:"#445dd7", color:"white"}}/>
    },
    {
        id:1,
        icon:<IoBagCheckOutline />,
        label:"Total Orders",
        count:70,
        "profit/lossIcon": <MdArrowDropDown />,
        "profit/loss":"3%",
        color:"#07c189",
        rgba:"rgba(19,82,71,255)",
        subIcon:<TiTickOutline style={{backgroundColor:"#07c189", color:"white"}}/>
    },
    {
        id:1,
        icon:<RiShoppingBag4Line />,
        label:"Total Orders",
        count:"05",
        "profit/lossIcon": <MdArrowDropUp />,
        "profit/loss":"3%",
        color:"#f35b5b",
        rgba:"rgba(97,50,54,255)",
        subIcon:<RxCross2 style={{backgroundColor:"#f35b5b", color:"white"}}/>
    },
    {
        id:1,
        icon:<GiMoneyStack />,
        label:"Total Orders",
        count:"$12k",
        "profit/lossIcon": <MdArrowDropDown />,
        "profit/loss":"3%",
        color:"#d83d8f",
        rgba:"rgba(90,43,75,255)",
        subIcon:""
    }
]

export const dashboardRecentOrders = [
    {
        id:1,
        profileImg:"",
        Name:"Wade Warren",
        "Order No.":"15478256",
        Amount:"$124.00",
        Status:"Delivered",
        tHeading:"Customer",
        Avator: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    },
    {
        id:1,
        profileImg:"",
        Name:"Wade Warren",
        "Order No.":"15478256",
        Amount:"$124.00",
        Status:"Delivered",
        tHeading:"Order No.",
        Avator: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    },
    {
        id:1,
        profileImg:"",
        Name:"Wade Warren",
        "Order No.":"15478256",
        Amount:"$124.00",
        Status:"Cancelled",
        tHeading:"Amount",
        Avator: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    },
    {
        id:1,
        profileImg:"",
        Name:"Wade Warren",
        "Order No.":"15478256",
        Amount:"$124.00",
        Status:"Pending",
        tHeading:"Status",
        Avator: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    },
    {
        id:1,
        profileImg:"",
        Name:"Wade Warren",
        "Order No.":"15478256",
        Amount:"$124.00",
        Status:"Delivered",
        Avator: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    },
]

export const dashboardFavouritesData = [
    {
        id:1,
        color:"#a34a33",
        backgroundColor:"rgba(94,50,59,255)",
        icon:<GoGoal />,
        label:"Goals",
        ArrowIcon:<MdOutlineKeyboardArrowRight />,
    },
    {
        id:1,
        color:"#6479d3",
        backgroundColor:"rgba(39,51,102,255)",
        icon:<GiHamburger />,
        label:"Popular Dishes",
        ArrowIcon:<MdOutlineKeyboardArrowRight />,
    },
    {
        id:1,
        color:"#3489b1",
        backgroundColor:"rgba(32,74,96,255)",
        icon:<BiDish />,
        label:"Menus",
        ArrowIcon:<MdOutlineKeyboardArrowRight />,
    }
]