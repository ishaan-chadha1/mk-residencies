import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@components/components/ui/dropdown-menu";
import { Button } from "@components/components/ui/button";
import Link from "next/link";

export function BookingButton() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size="lg"
                    className="bg-[#FFA500] text-white transition-all duration-300 hover:bg-transparent hover:text-[#FFA500] hover:border-transparent hover:shadow-none"
                >
                    Make a Booking
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="w-[200px] animate-fade-in-up bg-[#FFA500]"
            >
                <DropdownMenuItem>
                    <Link
                        href="https://bookings.teacorphotels.com/?chainId=9262&propertyId=9261"
                        className="flex items-center justify-between transition-colors duration-300 hover:bg-muted hover:text-muted-foreground"
                        prefetch={false}
                    >
                        <div className="flex items-center gap-2">
                            <div>Tea Pavillion</div>
                        </div>
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link
                        href="https://bookings.teacorphotels.com/?chainId=9262&propertyId=9281"
                        className="flex items-center justify-between transition-colors duration-300 hover:bg-muted hover:text-muted-foreground"
                        prefetch={false}
                    >
                        <div className="flex items-center gap-2">
                            <div>Tea Square</div>
                        </div>
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link
                        href="https://bookings.teacorphotels.com/?chainId=9262&propertyId=9280"
                        className="flex items-center justify-between transition-colors duration-300 hover:bg-muted hover:text-muted-foreground"
                        prefetch={false}
                    >
                        <div className="flex items-center gap-2">
                            <div>Tea Harbour</div>
                        </div>
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function ArrowRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}

function ChevronDownIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}
