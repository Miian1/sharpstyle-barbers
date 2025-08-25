import React from 'react';

export interface Service {
    icon: React.ReactNode;
    name: string;
    description: string;
    price: string;
    accentColor: string;
    accentColorHex: string;
}

export interface Barber {
    photo: string;
    name: string;
    role: string;
    socials: {
        instagram: string;
        facebook: string;
        twitter: string;
    };
}

export interface Testimonial {
    photo: string;
    name:string;
    feedback: string;
    rating: number;
}

export interface PricePlan {
    title: string;
    price: string;
    priceDetails: string;
    features: { text: string; included: boolean }[];
    isPopular: boolean;
    accentColor: string;
    accentColorHex: string;
    buttonGradient: string;
}