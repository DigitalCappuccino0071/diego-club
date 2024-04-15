import React from "react";

const Map = () => {
    return (
        <div className="container py-20">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d876.829593736981!2d77.06220036958253!3d28.46995709848465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI4JzExLjkiTiA3N8KwMDMnNDYuMiJF!5e0!3m2!1sen!2sin!4v1713183231655!5m2!1sen!2sin"
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
