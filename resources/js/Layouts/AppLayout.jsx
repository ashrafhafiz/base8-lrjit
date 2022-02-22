import AppNav from "@/Layouts/AppNav";
import { usePage } from "@inertiajs/inertia-react";

const AppLayout = (props) => {
    // console.log(props);
    const { user: authUser } = usePage().props;
    return (
        <div>
            {/*<Banner/>*/}
            <div className="min-h-screen bg-gray-100">
                <AppNav {...props} />
                {/*// <!-- Page Heading -->*/}
                {props.header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {props.header}{" "}
                            <span className="text-red-500">
                                {authUser.email}
                            </span>
                        </div>
                    </header>
                )}

                {/*// <!-- Page Content -->*/}
                <main>{props.children}</main>
            </div>
        </div>
    );
};

export default AppLayout;
