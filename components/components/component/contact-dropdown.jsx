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
        "tea-county":
            "Tea County: +91 7086061222 / 7578010089, hotelteacounty@gmail.com",
        "tea-pavilion": "Tea Pavilion: teapavilion@gmail.com, +91 9632658687",
        "tea-harbour": "Tea Harbour: teaharbour23@gmail.com, +91 9741848372",
        "tea-square": "Tea Square: teasquare14@gmail.com, +91 9606699214"
    };

    return (
        <div
            key="1"
            className="flex flex-col space-y-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800"
            style={{ minWidth: "600px", maxWidth: "800px" }} // Adjust width as needed
        >
            <h2 className="text-2xl font-bold mb-1">Contact Us</h2>
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <Select onValueChange={setSelectedProperty}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Property" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="tea-county">
                                Tea County
                            </SelectItem>
                            <SelectItem value="tea-pavilion">
                                Tea Pavilion
                            </SelectItem>
                            <SelectItem value="tea-harbour">
                                Tea Harbour
                            </SelectItem>
                            <SelectItem value="tea-square">
                                Tea Square
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="font-medium text-gray-500">
                    {selectedProperty && (
                        <p className="mb-2">
                            {propertyContacts[selectedProperty]}
                        </p>
                    )}
                    <p>Management: mehulgoenka7@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
