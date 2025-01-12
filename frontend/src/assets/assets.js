import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Nathan Carter',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Nathan Carter is a highly skilled general physician with a passion for improving patient well-being through personalized care and preventive health strategies.',
        fees: 50,
        address: {
            line1: '10th Street, Downtown',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Olivia Morgan',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Dr. Olivia Morgan specializes in women’s health, providing expert care in gynecology and obstetrics with a focus on compassionate and thorough treatment.',
        fees: 60,
        address: {
            line1: '24th Avenue, Green Valley',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Alex Taylor',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Alex Taylor offers expertise in dermatology, addressing a wide range of skin conditions with a focus on innovative treatments and patient education.',
        fees: 40,
        address: {
            line1: '33rd Street, Maple Heights',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Henry Scott',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '8 Years',
        about: 'Dr. Henry Scott is dedicated to providing comprehensive healthcare for children, ensuring their growth and development in a nurturing environment.',
        fees: 45,
        address: {
            line1: '45th Lane, Blossom Park',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Isabella Smith',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Isabella Smith is a neurologist with extensive experience in diagnosing and treating neurological disorders with precision and care.',
        fees: 70,
        address: {
            line1: '59th Street, Riverdale',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Liam Johnson',
        image: doc6,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '9 Years',
        about: 'Dr. Liam Johnson is a compassionate pediatrician dedicated to providing expert medical care and ensuring the health and well-being of children.',
        fees: 80,
        address: {
            line1: '12th Street, Elmwood',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Matteo Thompson',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Dr. Ava Thompson is a dedicated general physician who emphasizes holistic patient care and effective communication.',
        fees: 50,
        address: {
            line1: '8th Avenue, Sunrise District',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Ethan Martinez',
        image: doc8,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MS',
        experience: '9 Years',
        about: 'Dr. Ethan Martinez specializes in gastroenterologist , helping patients in digestive system disorders.',
        fees: 90,
        address: {
            line1: '17th Street, Evergreen Estates',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Mia Garcia',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '4 Years',
        about: 'Dr. Mia Garcia focuses on personalized skincare solutions, ensuring patients achieve healthy and radiant skin.',
        fees: 40,
        address: {
            line1: '22nd Avenue, Pine Ridge',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Noah Clark',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: 'Dr. Noah Clark is passionate about providing top-notch healthcare to children, fostering their overall well-being.',
        fees: 50,
        address: {
            line1: '29th Street, Willowbrook',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Sophia Rivera',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, MD',
        experience: '8 Years',
        about: 'Dr. Sophia Rivera is an experienced neurologist, adept at handling complex cases with empathy and expertise.',
        fees: 75,
        address: {
            line1: '10th Street, Horizon Valley',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Alexander Moore',
        image: doc12,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Alexander Moore is a gastroenterologist dedicated to supporting patients in their cancer treatment journey with advanced care.',
        fees: 100,
        address: {
            line1: '35th Avenue, Lakeview',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Harper Wilson',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Harper Wilson prioritizes preventive medicine and early diagnosis to ensure long-term patient health.',
        fees: 50,
        address: {
            line1: '14th Avenue, Midtown',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Elijah Walker',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '5 Years',
        about: 'Dr. Elijah Walker provides comprehensive gynecological care, ensuring the comfort and safety of his patients.',
        fees: 70,
        address: {
            line1: '50th Street, Central District',
            line2: 'Springfield, USA'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Lily Robinson',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '6 Years',
        about: 'Dr. Lily Robinson offers state-of-the-art dermatological treatments tailored to each patient’s needs.',
        fees: 60,
        address: {
            line1: '42nd Avenue, Oakwood',
            line2: 'Springfield, USA'
        }
    },
];
