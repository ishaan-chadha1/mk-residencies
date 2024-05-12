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

    // Updated propertyContacts without 'tea-county'
    const propertyContacts = {
        "tea-pavilion": {
            contact: "Tea Pavilion: teapavilion@gmail.com, +91 9632658687",
            address:
                "Plot No.139, 5th Cross Road, Koramangala 5th Block ,17th Main Road , Behind Cafe Coffee Day, Bengaluru, Karnataka 560095"
        },
        "tea-harbour": {
            contact: "Tea Harbour: teaharbour23@gmail.com, +91 9741848372",
            address:
                "29-30, AET CIRCLE, Doddakannelli, Bengaluru, Karnataka 560035"
        },
        "tea-square": {
            contact: "Tea Square: teasquare14@gmail.com, +91 9606699214",
            address:
                " 46, Compact Tea Square, near SOBHA MARVELLA APARTMENT, Green Glen Layout, Bellandur, Bengaluru, Karnataka 560103"
        }
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
                {selectedProperty && (
                    <div className="font-medium text-gray-500">
                        <p className="mb-2">
                            {propertyContacts[selectedProperty].contact}
                        </p>
                        <p>{propertyContacts[selectedProperty].address}</p>
                    </div>
                )}
                <div className="font-medium text-gray-500">
                    <p>Management: mehulgoenka7@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
