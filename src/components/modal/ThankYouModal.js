import { useRouter } from "next/router";

const ThankYouModal = () => {
    const router = useRouter();
    const handleButtonClick = () => {
        router.reload(); // Reload the page
    };
    // Implement your modal component logic here
    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={handleButtonClick}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="flex flex-col items-center space-y-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-green-600 w-28 h-28"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h1 className="text-4xl font-bold">Thank You !</h1>
                            <p className="text-center">
                                for contacting us, we will get in touch with you soon...
                            </p>
                            <button
                                onClick={handleButtonClick}
                                className="bg-primary text-white  px-10 py-2  rounded-md mt-12 font-semibold"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThankYouModal;
