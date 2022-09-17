import StatusBlock from 'components/admin/StatusBlock';
import ChartLine from 'components/admin/ChartLine';
import ChartBar from 'components/admin/ChartBar';
import Layout from '@/components/adminLayout';
import PageVisitsCard from 'components/admin/PageVisitsCard';
import TrafficCard from 'components/admin/TrafficCard';
import Sidebar from '@/components/admin/Sidebar';

export default function AdminPanel() {
    return (
        <>
            <div className="bg-light-blue-500 px-3 md:px-8 h-40" />

            <div className="px-3 md:px-8 -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <ChartLine />
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <ChartBar />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        ss
                    </div>
                </div>
            </div>

        </>
    );
}


AdminPanel.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };