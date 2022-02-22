import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

export const PostComponent = () => {
    return (
        <div className="p-5">
            <h1 className="text-2xl font=semibold text-blue-700">
                <InertiaLink href={route("singlepost")}>Post Title</InertiaLink>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                vel rem atque debitis molestiae nemo ea vero officiis quaerat
                expedita!
            </p>
        </div>
    );
};
