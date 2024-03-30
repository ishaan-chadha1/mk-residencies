import React, { useState } from "react"; // Import useState
import { Label } from "@components/components/ui/label";
import { Input } from "@components/components/ui/input";
import { Textarea } from "@components/components/ui/textarea";
import { Button } from "@components/components/ui/button";

export function EnquiryForm() {
    // State for each form field
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [message, setMessage] = useState("");

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // Log the form data
        console.log({
            name,
            email,
            phone,
            checkIn,
            checkOut,
            message
        });
        // Here you can also send this data to a server or external API if needed
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full px-4 py-8 space-y-4 md:px-6 md:space-y-8 bg-aliceblue rounded-lg shadow-lg"
        >
            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-green-800">
                    Enquire for long stays
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Fill in the form and our team will get back to you with the
                    best rates.
                </p>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className="text-green-800" htmlFor="name">
                            Name
                        </Label>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-white text-gray-700 border border-green-300 rounded-md p-2"
                            id="name"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-green-800" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white text-gray-700 border border-green-300 rounded-md p-2"
                            id="email"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-green-800" htmlFor="phone">
                            Phone
                        </Label>
                        <Input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-white text-gray-700 border border-green-300 rounded-md p-2"
                            id="phone"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label
                                    className="text-green-800"
                                    htmlFor="check-in"
                                >
                                    Check-in
                                </Label>
                                <Input
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="bg-white text-gray-700 border border-green-300 rounded-md p-2"
                                    id="check-in"
                                    type="date"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label
                                    className="text-green-800"
                                    htmlFor="check-out"
                                >
                                    Check-out
                                </Label>
                                <Input
                                    value={checkOut}
                                    onChange={(e) =>
                                        setCheckOut(e.target.value)
                                    }
                                    className="bg-white text-gray-700 border border-green-300 rounded-md p-2"
                                    id="check-out"
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label className="text-green-800" htmlFor="message">
                        Message
                    </Label>
                    <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="min-h-[100px] bg-white text-gray-700 border border-green-300 rounded-md p-2"
                        id="message"
                        placeholder="Enter your message"
                    />
                </div>
                <button type="submit" className="bg-transparent text-black">
                    Send enquiry
                </button>
            </div>
        </form>
    );
}
