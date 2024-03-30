import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { PropCarousel } from "@components/components/component/prop-carousel";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import { LandingHero } from "@components/LandingHero/landing-hero";
import SEO from "@components/SEO/SEO";
import { AmenitiesHero } from "@components/AmenitiesHero/amenities-hero";
import { EnquiryForm } from "@components/components/component/enquiry-form";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import { GalleryHero } from "@components/GalleryHero/gallery-hero";
import { FeaturedCollection } from "@components/FeaturedCollection/featured-collection";
import { WhatToExpect } from "@components/WhatToExpect/what-to-expect";
import { AdithTemp } from "@components/components/component/adith-temp";
const propertyData = [
    {
        images: ["/common_2.jpg", "/dinning _hall.jpg", "/ts terrace.jpg"],
        title: "Tea County, Assam",
        description:
            "Nestled amidst lush greenery, the Tranquil Gardens offers a peaceful retreat for the weary soul.",
        location: "Convoy Rd, Chowkidingee, Dibrugarh, Assam 786001"
    },
    {
        images: ["/common_2.jpg", "/dinning _hall.jpg", "/ts terrace.jpg"],
        title: "Tea Harbour Corporate Hotel",
        description:
            "Experience the vibrant pulse of the city from the comfort of the Urban Oasis.",
        location:
            "29-30, AET CIRCLE, Doddakannelli, Bengaluru, Karnataka 560035"
    },
    {
        images: ["/common_2.jpg", "/dinning _hall.jpg", "/ts terrace.jpg"],
        title: "Tea Square",
        description:
            "Experience the vibrant pulse of the city from the comfort of the Urban Oasis.",
        location:
            "46, Compact Tea Square, near SOBHA MARVELLA APARTMENT, Green Glen Layout, Bellandur, Bengaluru, Karnataka 560103"
    },
    {
        images: ["/common_2.jpg", "/dinning _hall.jpg", "/ts terrace.jpg"],
        title: "Tea Pavillion",
        description:
            "Experience the vibrant pulse of the city from the comfort of the Urban Oasis.",
        location:
            "Plot No.139, 5th Cross Road, Koramangala 5th Block,17th Main Road, Behind Cafe Coffee Day, Bengaluru, Karnataka 560095"
    }
    // ... other property data
];

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Tea Corp"
                description="Discover Tea House Corportate Accomodation , the effortless way to plan your trips acorss the country."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <LandingHero />
                <div id="aboutus" className="pt-10">
                    <HomeBanner />
                </div>
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="properties" className="features">
                            {" "}
                            <MotionBTTContainer
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <SectionContainer className="feature-tabs">
                                    <div id="properties">
                                        <PageTitle
                                            className="text-center mx-auto"
                                            type="default"
                                        >
                                            Check out All our Properties!
                                        </PageTitle>
                                    </div>
                                    <div className="container mx-auto px-4 pt-10 sm:px-6 lg:px-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {propertyData.map(
                                                (property, index) => (
                                                    <PropCarousel
                                                        key={`prop-carousel-${index}`}
                                                        property={property}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </SectionContainer>
                            </MotionBTTContainer>
                            <PageTitle
                                className="text-center mx-auto pt-10"
                                type="default"
                            >
                                Simplify Your Corporate Accommodation with
                                TeaHouse
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Hey there! Welcome to Tea House, the
                                    ultimate corporate accommmodation .
                                    We&apos;ve got some awesome features lined
                                    up to make your journey as easy as possible.
                                    Check them out:
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    {/* <WhatToExpect /> */}
                    <div id="amenities">
                        <AmenitiesHero />
                    </div>
                    <FeaturedCollection />
                    {/* <AdithTemp /> */}
                    {/* <GalleryHero /> */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <div id="testimonials">
                                <BadgeGroup alignment="left">
                                    <BadgeMessage>Testimonials</BadgeMessage>
                                    <BadgeIcon icon="twemoji:waving-hand" />
                                </BadgeGroup>
                            </div>
                            <PageTitle className="" type="default">
                                This is what our customers have to say about our
                                properties
                            </PageTitle>

                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some burning questions about Tea House?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                            <div id="longstay" />
                            <EnquiryForm />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
