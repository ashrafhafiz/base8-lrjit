import AppLayout from "@/Layouts/AppLayout";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const SinglePost = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Single Post
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="p-5">
                            <h1 className="text-2xl font=semibold text-blue-700">
                                Post Title
                            </h1>
                            <p className="my-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Veniam vel rem atque debitis
                                molestiae nemo ea vero officiis quaerat
                                expedita!
                            </p>
                            <InertiaLink
                                href={route("posts")}
                                className="text-blue-600 hover:underline"
                            >
                                Back to Posts
                            </InertiaLink>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default SinglePost;
