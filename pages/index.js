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
import { TermsAndConditions } from "@components/components/component/terms-and-conditions";
import { GalleryHero } from "@components/GalleryHero/gallery-hero";
import { FeaturedCollection } from "@components/FeaturedCollection/featured-collection";
import { WhatToExpect } from "@components/WhatToExpect/what-to-expect";
import { AdithTemp } from "@components/components/component/adith-temp";

const propertyData = [
    {
        images: [
            "/103 Premium 1.JPG",
            "/Suite 5.JPG",
            "/Bar.JPG",
            "/Suite 2.jpg"
        ],
        title: "Tea County",
        description:
            "A tower hotel made to exacting standards of luxurious hospitality. Hotel Tea County (HTC) is a boutique property located in serene surroundings away from the traffic and national highway. The Hotel enjoys an enviable Three Star Status Accorded by The Ministry of Tourism, Government of India.",
        location: "Convoy Road, Chowkidinghee, Dibrugarh, Assam 786011",
        roomTypes: "Corporate, Super Corporate, Premium, Suite",
        specialFeatures: "",
        contactInfo: "hotelteacounty@gmail.com +91 7086061222 / 7578010089"
    },
    {
        images: [
            "/TH dinning area.jpg",
            "/th room 3.jpg",
            "/th room 4 .jpg",
            "/DSC09323-HDR.jpg"
        ],
        title: "Tea Harbour",
        description:
            "Your gateway to serenity amidst Bangalore's tech hub, offering a seamless blend of modern convenience and serene surroundings along the Outer Ring Road.",
        location: "AET CIRCLE, Doddakannelli, Bengaluru",
        roomTypes: "Deluxe rooms only",
        specialFeatures: "Dedicated work stations",
        contactInfo: "teaharbour23@gmail.com, +91 9741848372"
    },
    {
        images: [
            "/ts corporate room.jpg",
            "/ts deluxe room .jpg",
            "/ts reception.jpg",
            "/ts twin deluxe.jpg"
        ],
        title: "Tea Square",
        description:
            "Where tech and tranquility converge! Experience the perfect blend of urban convenience and peaceful surroundings near Bangalore's tech parks on the Outer Ring Road.",
        location: "Green Glen Layout, Bellandur, Bangalore",
        roomTypes: "Deluxe rooms, Standard room, Sharing PG rooms",
        specialFeatures: "All price range rooms available",
        contactInfo: "teasquare14@gmail.com, +91 9606699214"
    },
    {
        images: [
            "/tp deluxe room .jpg",
            "/tp bedroom in suite room .jpg",
            "/tp suite room.jpg",
            "/tp recpetion 2.jpg"
        ],
        title: "Tea Pavilion",
        description:
            "An urban oasis amidst Bangalore's lively dining and nightlife scene.",
        location: "Koramangala, Bangalore",
        roomTypes:
            "Deluxe room, Suite room, Family room (2 deluxe rooms in one)",
        specialFeatures:
            "Located in the Guinness World Book of Records locality for most number of restaurants and pubs in a km radius.",
        contactInfo: "teapavilion@gmail.com, +91 9632658687"
    }
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
                                Our Promise
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    We prioritize spacious, comfortable,
                                    affordable, and warm hospitality. Our
                                    mission is to provide maximum value for
                                    every guest&rsquo;s money, while
                                    prioritizing their experience above all.
                                </p>
                            </Content>
                            <ContentImage />
                            <Content
                                className="text-center "
                                alignment="center"
                            >
                                <p style={{ paddingTop: "100px" }}>
                                    Discover comfort, convenience, and
                                    affordability at TeaCorp Hotels. Welcome
                                    home.
                                </p>
                            </Content>
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
                                Got some questions about Tea House? <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                            <div id="longstay" />
                            <EnquiryForm />
                            <script
                                src="https://static.elfsight.com/platform/platform.js"
                                data-use-service-core
                                defer
                            ></script>
                            <div
                                class="elfsight-app-7f278293-2342-4100-8d8b-f34f67e0ee88"
                                data-elfsight-app-lazy
                            ></div>
                            <TermsAndConditions />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
