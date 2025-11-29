import React from "react";

const NotFound = () => {
    return (
        <section className="w-full bg-white py-8">
            <div className="max-w-5xl mx-auto">
                {/* GIF Background */}
                <div
                    className="w-full bg-center bg-no-repeat bg-contain h-[90vh]"
                    style={{
                        backgroundImage:
                            "url('https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif')",
                    }}
                >
                </div>
            </div>
        </section>
    );
};

export default NotFound;
