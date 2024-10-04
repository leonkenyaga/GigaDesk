import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, softwareplatforms, itinfrastructure, security, data, bask, women } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '10+', label: 'Partners' },
    { value: '500+', label: 'Completed Projects' },
    { value: '100+', label: 'Customers' },
];

export const products = [
    {
        imgURL: softwareplatforms,
        name: "Software & Platforms ",
        price: "You dream it, we build it. We turn innovation into differentiation by putting custom systems",
    },
    {
        imgURL: itinfrastructure,
        name: "IT Infrastructure Management",
        price: "Unleash your business potential. Outsource IT to experts. Boost efficiency, cut costs, focus on core competencies.",
    },
    {
        imgURL: security,
        name: "Cyber Security",
        price: "Wherever your business goes, whoever it works with, you need cybersecurity that covers it all.",
    },
    {
        imgURL: data,
        name: "Data",
        price: "Data is at the heart of everything an enterprise aspires to do. Make your data more valuable ",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: bask,
        customerName: 'Bask Health',
        rating: 4.5,
        feedback: "Gigadesk was instrumental in building a scalable IT infrastructure that supported our rapid growth."
    },
    {
        imgURL: women,
        customerName: 'Women First Digital',
        rating: 4.5,
        feedback: "Gigadesk's IT solutions empowered us to deliver a seamless digital experience."
    }
];


export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Software Development", link: "/" },
            { name: "IT Department Outsourcing", link: "/" },
            { name: "IT consulting", link: "/" },
            { name: "Cyber Security ", link: "/" },
            { name: "Data Analytics", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "gigadeskpartners@gmail.com", link: "gigadeskpartners@gmail.com" },
            { name: "+254756142241", link: "tel:+254756142241" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];