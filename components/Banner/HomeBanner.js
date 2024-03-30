import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                <MotionBTTContainer
                    transition={{ delay: 0.2, duration: 0.5 }}
                ></MotionBTTContainer>
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        Welcome To TeaCorp Hotels
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            Step into a world where comfort meets convenience,
                            where every stay feels like a warm embrace. At
                            TeaCorp Hotels, we redefine hospitality, offering a
                            haven amidst the bustling energy of Bangalore and
                            the serene landscapes of Dibrugarh, Assam.{" "}
                        </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <Button href="#amenities">Amenities</Button>
                            <a
                                role="button"
                                href="https://github.com/ishaan-chadha1"
                                className="btn btn--secondary"
                            >
                                Make Booking
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                        <Image
                            src="/main.jpg"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto overflow-hidden rounded-3xl"
                        />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
