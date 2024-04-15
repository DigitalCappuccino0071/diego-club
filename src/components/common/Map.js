import React from "react";

const Map = () => {
    return (
        <div className="container py-20">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d876.8293397944959!2d77.0621589695825!3d28.469987698484626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI4JzEyLjAiTiA3N8KwMDMnNDYuMSJF!5e0!3m2!1sen!2sin!4v1713180913320!5m2!1sen!2sin"
                className="w-full"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;
