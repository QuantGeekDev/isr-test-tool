import type { GetStaticProps, NextPage } from 'next';
import { Clock, RefreshCcw } from 'lucide-react';

interface IsrPageProps {
    timestamp: number;
    buildId: string;
}

const IsrPage: NextPage<IsrPageProps> = ({ timestamp, buildId }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                            ISR Demo
                        </h1>
                        <p className="text-slate-400">
                            Impulsum Cloud ISR test
                        </p>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-6 mb-8 border border-slate-700 backdrop-blur-sm">
                        <div className="flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6 text-blue-400 mr-2" />
                            <h2 className="text-xl font-semibold">Last Generated</h2>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-mono text-blue-400">
                                {new Date(timestamp).toLocaleString()}
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                            <h3 className="text-lg font-semibold mb-2">Reeeeevalidation Period</h3>
                            <p className="text-slate-400">
                                This page regenerates every <span className="text-blue-400 font-semibold">10 seconds</span>
                            </p>
                        </div>

                        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                            <h3 className="text-lg font-semibold mb-2">Build ID</h3>
                            <p className="text-slate-400 font-mono">{buildId}</p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            <RefreshCcw className="w-4 h-4 mr-2" />
                            <span>Refresh to see updates</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps<IsrPageProps> = async () => {
    return {
        props: {
            timestamp: Date.now(),
            buildId: Math.random().toString(36).substring(2, 15),
        },
        revalidate: 10,
    };
};

export default IsrPage;