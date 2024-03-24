import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "What are the check-in and check-out times at TeaCorp Hotels?",
        isOpen: true,
        content:
            "Check-in time is at 122:00 PM, and check-out time is at 12:00 PM. We understand that travel plans may vary, so feel free to contact us for special arrangements."
    },
    {
        id: uuid(),
        title: "Do you offer airport shuttle services?",
        isOpen: false,
        content:
            "Yes, we provide airport shuttle services for our guests' convenience. Please inform us of your flight details in advance to make necessary arrangements."
    },
    {
        id: uuid(),
        title: "Are pets allowed at TeaCorp Hotels?",
        isOpen: false,
        content:
            "Unfortunately, we do not allow pets on our premises, except for service animals as required by law."
    },
    {
        id: uuid(),
        title: "Is smoking allowed in the rooms?",
        isOpen: false,
        content:
            "For the comfort of all guests, our rooms are designated as non-smoking. However, designated smoking areas are available within the hotel premises."
    },
    {
        id: uuid(),
        title: "Do you have facilities for hosting events or meetings?",
        isOpen: false,
        content:
            "Yes, we offer versatile event spaces. Contact our team for personalized assistance in planning your event."
    },
    {
        id: uuid(),
        title: "What dining options are available at TeaCorp Hotels?",
        isOpen: false,
        content:
            "Our in-house kitchen serves a variety of delicious dishes for breakfast, lunch, and dinner. Additionally, we offer room service for guests who prefer to dine in the comfort of their rooms."
    },
    {
        id: uuid(),
        title: "Is parking available onsite?",
        isOpen: false,
        content:
            "Yes, we provide complimentary onsite parking facilities for our guests."
    },
    {
        id: uuid(),
        title: "Do you offer special packages or discounts for extended stays?",
        isOpen: false,
        content:
            "Yes, we offer special packages and discounts for guests staying with us for an extended period. Contact our reservations team for more information."
    },
    {
        id: uuid(),
        title: "How can I cancel or modify my reservation?",
        isOpen: false,
        content:
            "You can easily manage your reservation online through our website or contact our reservations team for assistance with modifications or cancellations."
    },
    {
        id: uuid(),
        title: "What safety measures are in place at TeaCorp Hotels?",
        isOpen: false,
        content:
            "We prioritize the safety and well-being of our guests and staff. Our properties are equipped with CCTV security systems, and we follow stringent cleanliness and hygiene protocols in line with industry standards."
    },
    {
        id: uuid(),
        title: "Are there any nearby attractions or points of interest?",
        isOpen: false,
        content:
            "Our hotels are strategically located near tech parks, IT offices, and various attractions. Feel free to ask our concierge team for recommendations and assistance with planning your itinerary."
    },
    {
        id: uuid(),
        title: "How can I provide feedback about my stay at TeaCorp Hotels?",
        isOpen: false,
        content:
            "We value your feedback and strive to continuously improve our services. You can share your feedback with our team during your stay, or contact us via email or phone after your departure."
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
