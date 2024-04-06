import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

const DATA = [
    {
        title: "Properties",
        items: [
            {
                label: "Features",
                href: "#features"
            },
            {
                label: "Testimonials",
                href: "#testimonials"
            },
            {
                label: "FAQ",
                href: "#faq"
            }
        ]
    },
    {
        title: "Company",
        items: [
            {
                label: "About",
                href: "https://github.com/ishaan-chadha1",
                target: "_blank"
            },
            {
                label: "Twitter",
                href: "https://github.com/ishaan-chadha1",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "https://github.com/ishaan-chadha1",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "https://github.com/ishaan-chadha1",
                target: "_blank"
            }
        ]
    },
    {
        title: "Contact Us",
        items: [
            {
                label: "Management: mehulgoenka7@gmail.com",
                href: "mailto:mehulgoenka7@gmail.com"
            },
            {
                label: "Tea County: +91 7086061222 / 7578010089, hotelteacounty@gmail.com",
                href: "mailto:hotelteacounty@gmail.com"
            },
            {
                label: "Tea Pavilion: teapavilion@gmail.com, +91 9632658687",
                href: "mailto:teapavilion@gmail.com"
            },
            {
                label: "Tea Harbour: teaharbour23@gmail.com, +91 9741848372",
                href: "mailto:teaharbour23@gmail.com"
            },
            {
                label: "Tea Square: teasquare14@gmail.com, +91 9606699214",
                href: "mailto:teasquare14@gmail.com"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16">
                    <div className="footer-links mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mb-16">
                        {DATA.map((footerLinks) => (
                            <div
                                key={footerLinks.title}
                                className="footer-menu--container"
                            >
                                <h3 className="font-bold text-base mb-2">
                                    {footerLinks.title}
                                </h3>
                                <ul className="footer-menu--list">
                                    {footerLinks.items.map((footerItem) => (
                                        <li
                                            key={footerItem.label}
                                            className="footer-menu--list-item gap-2"
                                        >
                                            <a
                                                className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                href={footerItem.href}
                                                target={
                                                    footerItem.target
                                                        ? footerItem.target
                                                        : undefined
                                                }
                                            >
                                                {footerItem.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionContainer>
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0">
                        © {year} Tea House. All rights reserved.
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
