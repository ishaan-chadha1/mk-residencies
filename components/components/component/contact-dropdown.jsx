import { useState } from "react";
import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent
} from "@components/components/ui/select";

export function ContactDropdown() {
    const [selectedProperty, setSelectedProperty] = useState("");

    const propertyContacts = {
        "ahsan-ahmed": {
            contact: "Ahsan Ahmed: ahsan@mkresidency.in, +91 9611000718"
        },
        admin: {
            contact: "Admin: admin@mkresidency.in"
        }
    };

    return (
        <div
            key="1"
            className="contact-dropdown flex flex-col space-y-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-blue-200"
        >
            <h2 className="text-2xl font-bold mb-1">Contact Us</h2>
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <Select onValueChange={setSelectedProperty}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Contact" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ahsan-ahmed">
                                Ahsan Ahmed
                            </SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                {selectedProperty && (
                    <div className="font-medium text-gray-500">
                        <p>{propertyContacts[selectedProperty].contact}</p>
                    </div>
                )}
            </div>
            <style jsx>{`
                .contact-dropdown {
                    min-width: 400px;
                    max-width: 600px;
                }

                @media (max-width: 600px) {
                    .contact-dropdown {
                        min-width: 100%;
                        padding: 1rem;
                    }
                    .text-2xl {
                        font-size: 1.5rem;
                    }
                    .flex.justify-between {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }
            `}</style>
        </div>
    );
}
