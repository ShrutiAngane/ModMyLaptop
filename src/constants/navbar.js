import { BsHouseDoorFill,BsPcDisplayHorizontal,BsCoin,BsCpuFill,BsFillTelephoneFill,BsQuestionOctagonFill } from "react-icons/bs";

export const navlinks=[
    {
        id:1,
        text:'Home',
        path:'/',
        icon: BsHouseDoorFill
    },
    {
        id:2,
        text:'About Us',
        path:'/About',
        icon: BsPcDisplayHorizontal
    },
    {
        id:3,
        text:'Services',
        path:[{id:'service'}],
        icon: BsCpuFill
    },
    {
        id:4,
        text:'Pricing',
        path:[{id:'pricing'}],
        icon: BsCoin
    },
    {
        id:5,
        text:'Contact Us',
        path:[{id:'contact'}],
        icon: BsFillTelephoneFill
    },
    {
        id:6,
        text:'What we do?',
        path:'/images',
        icon: BsQuestionOctagonFill
    }
]