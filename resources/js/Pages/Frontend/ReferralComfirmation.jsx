import { Head } from "@inertiajs/react";


export default function Confirmation({ referral }) {
    return (
        <main className="w-full h-dvh flex items-center justify-center bg-slate-200 p-4">
            <Head title="Confirmation" />

            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-white bg-green-600 py-3 rounded-t-lg">
                    Confirmation
                </h3>

                <div className="p-4">
                    <p className="text-gray-700 text-lg">
                        🎉 You've successfully registered .
                    </p>
                </div>

                <a href={'frontend.index'} className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition">
                    Homepage
                </a>
            </div>
        </main>
    );
}
